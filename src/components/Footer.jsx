import { ArrowUp, Mail, MapPin, Linkedin, Facebook } from "lucide-react";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/80 backdrop-blur">
      <div className="container mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <a
              href="#hero"
              className="inline-flex items-center gap-2 font-semibold text-lg hover:text-primary transition-colors"
            >
              <span>Kien Nguyen</span>
            </a>
          </div>

          {/* Contact */}
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <a
                href="mailto:kien3072003@gmail.com"
                className="hover:text-primary transition-colors"
              >
                kien3072003@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Hà Nội, Việt Nam</span>
            </div>
          </div>

          {/* Social */}
          <div className="md:justify-self-end flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/kien-nguyen-971565249/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border bg-background hover:bg-secondary transition"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/KienAlone/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border bg-background hover:bg-secondary transition"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Bottom */}
      <div className="container mx-auto max-w-6xl px-4 py-5">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between text-sm">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Kien Nguyen. All rights reserved.
          </p>
          <a
            href="#hero"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};
