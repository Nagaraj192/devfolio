import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { z } from "zod";

// Simple rate limiting for contact form (in production, use Redis or similar)
const submissionTracker = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const MAX_SUBMISSIONS = 3; // 3 submissions per 15 minutes per IP

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = submissionTracker.get(ip);
  
  if (!record || now - record.lastReset > RATE_LIMIT_WINDOW) {
    // Reset or create new record
    submissionTracker.set(ip, { count: 1, lastReset: now });
    return true;
  }
  
  if (record.count >= MAX_SUBMISSIONS) {
    return false;
  }
  
  record.count++;
  return true;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Rate limiting check
      const clientIP = req.ip || req.connection.remoteAddress || 'unknown';
      if (!checkRateLimit(clientIP)) {
        return res.status(429).json({
          success: false,
          message: "Too many submissions. Please wait 15 minutes before trying again."
        });
      }

      const validatedData = contactFormSchema.parse(req.body);
      
      // For now, we'll log the contact form data
      // In a real application, you would send an email here
      console.log("Contact form submission received:", {
        timestamp: new Date().toISOString(),
        ...validatedData
      });
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 500));
      
      res.json({ 
        success: true, 
        message: "Your message has been received. Thank you for reaching out!" 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Please fill out all fields correctly.",
          errors: error.errors
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Something went wrong. Please try again later."
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
