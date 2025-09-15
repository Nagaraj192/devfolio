import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// --- Local schema (no @shared/schema, no apiRequest) ---
const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email."),
  subject: z.string().optional(),
  message: z.string().min(10, "Please enter at least 10 characters."),
});
type ContactForm = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  // ⭐ Replace with your real Formspree endpoint (e.g., https://formspree.io/f/movnzlyl)
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/movnzlyl";

  const onSubmit = async (data: ContactForm) => {
    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          _subject: "Portfolio contact (devfolio)",
          _gotcha: "", // honeypot
        }),
      });

      if (res.ok) {
        toast({ title: "Message sent!", description: "Thanks—I'll get back to you shortly." });
        form.reset();
      } else {
        toast({
          title: "Could not send message",
          description: "Please try again or email me directly.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Network error",
        description: "Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "nag.thaduri001@gmail.com", href: "mailto:nag.thaduri001@gmail.com" },
    { icon: Phone, label: "Phone", value: "+1 (551) 328-1882", href: "tel:+15513281882" },
    { icon: MapPin, label: "Location", value: "Tampa, FL (Remote)", href: "#" },
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I’m open to roles and collaborations. Send me a message and I’ll reply shortly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" data-testid="input-contact-name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your.email@example.com"
                              data-testid="input-contact-email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject (optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="What's this about?" data-testid="input-contact-subject" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project..."
                            className="min-h-32"
                            data-testid="textarea-contact-message"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full gap-2" disabled={submitting} data-testid="button-send-message">
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-current border-t-transparent animate-spin rounded-full" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <div className="text-center text-sm">
                    or{" "}
                    <a
                      className="underline"
                      href="mailto:nag.thaduri001@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Nagaraju%2C%0A%0A"
                    >
                      Email instead
                    </a>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, idx) => {
                    const Icon = info.icon;
                    return (
                      <div key={idx} className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">{info.label}</div>
                          <a
                            href={info.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                            data-testid={`link-contact-${info.label.toLowerCase()}`}
                            onClick={(e) => {
                              if (info.href === "#") e.preventDefault();
                            }}
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Let's Build Something Great</h3>
                <p className="text-muted-foreground mb-6">
                  Whether you need a new website, web application, or help with an existing project, I can help with
                  modern, scalable solutions.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Available for new projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span>Response within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span>Free initial consultation</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
