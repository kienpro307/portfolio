export const WhatICanHelpSection = () => (
  <section id="what-i-can-help" className="py-20 px-4">
    <div className="container mx-auto max-w-5xl text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-3">
        <span className="text-primary">What can I help you with?</span>
      </h2>
      <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
        I turn your product ideas into shipped, performant, and revenue-ready
        apps.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {[
          {
            title: "Ship your MVP in weeks",
            desc: "Cross-platform React Native to validate fast without sacrificing UX or maintainability.",
            icon: "🚀",
          },
          {
            title: "Hit 60 FPS, feel native",
            desc: "Native Kotlin & Swift where it matters—smooth animations, snappy startup, and deep OS integrations.",
            icon: "⚡",
          },
          {
            title: "Publish & monetize confidently",
            desc: "App Store & Google Play setup, IAP, subscriptions, and Ads done right to start earning from day one.",
            icon: "💰",
          },
          {
            title: "Scale without rewrites",
            desc: "Clean APIs and modular architecture so you can grow features and traffic without tech debt blowups.",
            icon: "📈",
          },
          {
            title: "Reduce crashes & churn",
            desc: "Performance profiling, error monitoring, and CI/CD to keep apps stable and users happy.",
            icon: "🛡️",
          },
          {
            title: "Data-driven product decisions",
            desc: "Analytics, A/B testing, and experimentation pipelines to learn faster and build what users love.",
            icon: "📊",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl shadow transition-all text-left border border-border bg-card/80 backdrop-blur-lg
              hover:shadow-2xl hover:-translate-y-2 hover:border-primary/70"
            style={{
              minWidth: 0,
              wordBreak: "break-word",
            }}
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">
              {item.title}
            </h3>
            <p className="text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <a
          href="#contact"
          className="inline-block rounded-xl px-5 py-3 bg-primary text-primary-foreground font-medium shadow hover:opacity-90 hover:shadow-xl transition"
        >
          Let’s build your app →
        </a>
      </div>
    </div>
  </section>
);
