import { Briefcase, Code, Cpu, Smartphone, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Bio */}
          <div className="space-y-6 min-w-0">
            <h3 className="text-2xl font-semibold text-foreground">
              Mobile App Developer
            </h3>

            <p className="text-muted-foreground break-words">
              I build production-grade mobile apps for <b>Android & iOS</b> with
              <b> React Native</b>, and go native with <b>Kotlin</b> or{" "}
              <b>Swift</b> where performance and deep OS integration matter.
              With <b>2.5 years</b> of hands-on development, I focus on shipping
              fast, keeping apps stable, and designing architectures that scale.
            </p>

            <p className="text-muted-foreground break-words">
              I also bring <b>project management</b> capability (roadmaps, agile
              rituals, delivery tracking)
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="rounded-xl border border-border bg-card/80 backdrop-blur p-4 text-center min-w-0 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/60 hover:bg-primary/5 dark:hover:bg-primary/10">
                <div className="text-2xl font-bold text-foreground break-words mb-2">
                  <span className="font-bold text-primary">2.5+ Years</span>
                </div>
                <div className="text-xs text-muted-foreground">Experience</div>
              </div>
              <div className="rounded-xl border border-border bg-card/80 backdrop-blur p-4 text-center min-w-0 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/60 hover:bg-primary/5 dark:hover:bg-primary/10">
                <div className="text-2xl font-bold text-foreground break-words mb-2">
                  <span className="font-bold text-primary">
                    iOS &amp; Android
                  </span>
                </div>
                <div className="text-xs text-muted-foreground">Platforms</div>
              </div>
              <div className="rounded-xl border border-border bg-card/80 backdrop-blur p-4 text-center min-w-0 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/60 hover:bg-primary/5 dark:hover:bg-primary/10">
                <div className="text-2xl font-bold text-foreground break-words flex-1 flex items-center justify-center mb-2">
                  <span className="font-bold text-primary">20M+</span>
                </div>
                <div className="text-xs text-muted-foreground">Downloads</div>
              </div>
            </div>
          </div>

          {/* Right: Value cards */}
          <div className="grid grid-cols-1 gap-6 min-w-0">
            {[
              {
                icon: <Smartphone className="h-6 w-6 text-primary" />,
                title: "Mobile Development",
                desc: "Build and ship cross-platform apps with React Native; go native (Kotlin/Swift) when performance and integrations demand it.",
              },
              // {
              //   icon: <Cpu className="h-6 w-6 text-primary" />,
              //   title: "AI-Powered Features",
              //   desc: "Integrate AI for OCR/NLP, personalization, and automation—using on-device ML or cloud models for real user value.",
              // },
              {
                icon: <Briefcase className="h-6 w-6 text-primary" />,
                title: "Project Management",
                desc: "Lead end-to-end delivery with clear roadmaps, agile workflows, and pragmatic prioritization to hit deadlines confidently.",
              },
              // {
              //   icon: <Code className="h-6 w-6 text-primary" />,
              //   title: "Quality & Performance",
              //   desc: "Profiling, monitoring, and CI/CD pipelines to keep apps fast, crash-free, and ready to scale.",
              // },
              {
                icon: <User className="h-6 w-6 text-primary" />,
                title: "Builder Mindset",
                desc: "Product-first thinking: measure impact, iterate quickly, and keep UX simple and delightful.",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="gradient-border p-6 card-hover bg-white dark:bg-background border border-border rounded-2xl transition-all
                  hover:shadow-2xl hover:-translate-y-2 hover:border-primary/70 hover:bg-primary/5 dark:hover:bg-primary/10"
                style={{
                  minWidth: 0,
                  wordBreak: "break-word",
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    {card.icon}
                  </div>
                  <div className="text-left min-w-0">
                    <h4 className="font-semibold text-lg text-foreground">
                      {card.title}
                    </h4>
                    <p className="text-muted-foreground break-words">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* End Right */}
        </div>
      </div>
    </section>
  );
};
