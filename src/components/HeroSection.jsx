import { ArrowDown } from "lucide-react";
import myself from "../assets/myself.png";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-transparent"
    >
      <div className="container max-w-7xl mx-auto z-10 flex flex-col md:flex-row items-center justify-between gap-8 px-16 md:px-24  mt-[80px]">
        {/* Bên trái: Nội dung */}
        <div className="flex-1 text-center md:text-left flex flex-col justify-center gap-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent drop-shadow-lg text-glow opacity-0 animate-fade-in-delay-1">
              Hi, I'm Kien Nguyen
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
            <strong className="text-primary font-semibold text-glow">
              An app developer
            </strong>{" "}
            passionate about crafting seamless and high-performance mobile
            applications.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
            I work across both{" "}
            <strong className="text-primary font-semibold text-glow">
              iOS
            </strong>{" "}
            and{" "}
            <strong className="text-primary font-semibold text-glow">
              Android
            </strong>
            , combining cross-platform speed with native performance when
            needed.
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary shadow-xl hover:bg-primary/90 hover:shadow-2xl transition-all duration-200 text-white font-semibold text-lg tracking-wide focus:ring-2 focus:ring-primary/40 focus:outline-none backdrop-blur-md border border-primary/20"
              style={{
                boxShadow: "0 4px 24px 0 rgba(52, 86, 139, 0.15)",
                letterSpacing: "0.03em",
              }}
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-background border-2 border-primary text-primary font-semibold text-lg tracking-wide shadow hover:bg-primary/10 transition-all duration-200 focus:ring-2 focus:ring-primary/40 focus:outline-none"
              style={{
                letterSpacing: "0.03em",
              }}
            >
              {" "}
              View My Work
            </a>
          </div>
        </div>
        <div
          className="flex-1 flex items-end justify-center relative "
          style={{ height: "calc(100vh - 80px)" }}
        >
          <div
            className="absolute inset-0 flex items-end justify-center pointer-events-none z-0"
            style={{
              width: "180%",
              height: "100%",
              left: "-30%",
              bottom: 0,
            }}
          >
            <img
              src={myself}
              alt="Kien Nguyen Portrait"
              className="object-cover object-top w-full h-full select-none"
              style={{
                objectPosition: "top center",
              }}
              draggable="false"
            />
          </div>
        </div>
      </div>

      {/* Hiệu ứng scroll hiện đại */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs md:text-sm text-primary/80 mb-1 tracking-wide uppercase font-semibold letter-spacing-wider">
          Scroll
        </span>
        <div className="relative flex items-center justify-center">
          <span className="absolute w-8 h-8 rounded-full bg-primary/20 blur-md animate-pulse" />
          <ArrowDown className="h-6 w-6 text-primary drop-shadow-lg" />
        </div>
      </div>
    </section>
  );
};
