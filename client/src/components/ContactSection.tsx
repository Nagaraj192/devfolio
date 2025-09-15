import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
          <p className="text-muted-foreground mt-2">
            I’m open to roles and collaborations. Send me a message and I’ll reply shortly.
          </p>
        </div>

        {/* Direct contact info (always visible) */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <a
            href="mailto:nag.thaduri001@gmail.com"
            className="inline-flex items-center gap-2 underline underline-offset-4"
          >
            <Mail className="w-4 h-4" /> nag.thaduri001@gmail.com
          </a>
          <span className="hidden sm:block opacity-50">•</span>
          <a
            href="tel:+15513281882"
            className="inline-flex items-center gap-2 underline underline-offset-4"
          >
            <Phone className="w-4 h-4" /> +1 (551) 328-1882
          </a>
        </div>

        {/* Formspree form (static-friendly) */}
        {!sent ? (
          <form
            action="https://formspree.io/f/movnzlyl" // <-- replace with your ID, e.g. /f/abcdwxyz
            method="POST"
            onSubmit={() => setSent(true)}
            className="grid gap-4 rounded-xl border p-6"
          >
            {/* Honeypot anti-bot */}
            <input type="text" name="_gotcha" style={{ display: "none" }} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                className="px-4 py-3 rounded border bg-background"
                type="text"
                name="name"
                placeholder="Your name"
                required
              />
              <input
                className="px-4 py-3 rounded border bg-background"
                type="email"
                name="email"
                placeholder="Your email"
                required
              />
            </div>

            <input
              className="px-4 py-3 rounded border bg-background"
              type="text"
              name="subject"
              placeholder="Subject (optional)"
            />

            <textarea
              className="px-4 py-3 rounded border bg-background min-h-[140px]"
              name="message"
              placeholder="Your message"
              required
            />

            {/* optional: subject line in Formspree dashboard */}
            <input type="hidden" name="_subject" value="Portfolio contact from devfolio" />
            {/* optional: redirect after submit */}
            {/* <input type="hidden" name="_next" value="https://nagaraj192.github.io/devfolio/?sent=1" /> */}

            <div className="flex gap-3">
              <Button type="submit">Send message</Button>
              <a href="mailto:nag.thaduri001@gmail.com">
                <Button variant="outline" type="button">Email instead</Button>
              </a>
            </div>
          </form>
        ) : (
          <div className="rounded-xl border p-6 text-center">
            <p className="text-green-600 dark:text-green-400 font-medium">
              Thanks! Your message was sent.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              I’ll get back to you at the email you provided.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
