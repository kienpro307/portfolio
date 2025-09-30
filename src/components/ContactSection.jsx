import { useState } from "react";
import { Mail, MapPin, Send, Linkedin, Facebook, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const WEB_APP_URL =
    "https://script.google.com/macros/s/AKfycby4BBFqp1mrqRAUZ2MNyaYsS1d4mIS-PK3akwmA1VifI42DtJauawKZAx6hisN8gqTcpw/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const form = e.currentTarget;
      const fd = new FormData();
      fd.append("name", form.name.value);
      fd.append("email", form.email.value);
      fd.append("message", form.message.value);

      const res = await fetch(WEB_APP_URL, { method: "POST", body: fd }); // <-- no headers
      const text = await res.text(); // Apps Script may not set JSON headers consistently
      const data = JSON.parse(text || "{}"); // be tolerant

      if (!data.ok) throw new Error(data.error || "Unknown error");
      toast({
        title: "Message saved!",
        description: "Stored to Google Sheet.",
      });
      form.reset();
    } catch (err) {
      toast({
        title: "Failed to submit",
        description: String(err),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("kien3072003@gmail.com");
      toast({ title: "Copied", description: "Email copied to clipboard." });
    } catch {
      window.location.href = "mailto:kien3072003@gmail.com";
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? I’m happy to chat.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left column: Contact info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Contact Information</h3>

            {/* Clean list style: border outer + divide between rows */}
            <ul className="rounded-2xl border divide-y bg-card/60 backdrop-blur">
              {/* Email row */}
              <li className="flex items-center justify-between gap-4 p-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] uppercase tracking-wide text-muted-foreground">
                      Email
                    </div>
                    <a
                      href="mailto:kien3072003@gmail.com"
                      className="block truncate font-medium hover:text-primary transition-colors"
                      title="kien3072003@gmail.com"
                    >
                      kien3072003@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="shrink-0 inline-flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-md border bg-background hover:bg-secondary transition cursor-pointer"
                  aria-label="Copy email"
                >
                  <Copy size={14} />
                  Copy
                </button>
              </li>

              {/* Location row */}
              <li className="flex items-center justify-between gap-4 p-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] uppercase tracking-wide text-muted-foreground">
                      Location
                    </div>
                    <p
                      className="truncate font-medium"
                      title="Hà Nội, Việt Nam"
                    >
                      Hà Nội, Việt Nam
                    </p>
                  </div>
                </div>

                {/* giữ chỗ để hai hàng cân nhau */}
                <span className="w-[78px] md:w-[78px]" aria-hidden />
              </li>
            </ul>

            {/* Social */}
            <div className="pt-2">
              <h4 className="font-medium mb-3">Connect with me</h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/kien-nguyen-971565249/" // replace
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border bg-card/70 hover:bg-secondary transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href="https://www.facebook.com/KienAlone/" // replace
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border bg-card/70 hover:bg-secondary transition"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                  <span className="text-sm">Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-card p-8 rounded-2xl border">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="I would like to discuss..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full inline-flex items-center justify-center gap-2 rounded-xl",
                  "bg-primary text-white px-5 py-3 font-medium",
                  "hover:opacity-90 transition disabled:opacity-60"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
