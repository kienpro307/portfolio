import { useState } from "react";
import {
  Smartphone,
  Cpu,
  GaugeCircle,
  Wrench,
  Layers,
  Database,
  ShieldCheck,
  LineChart,
  Cloud,
  Box,
  Rocket,
  Bug,
  Bell,
  Workflow,
  Blocks,
} from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { key: "all", label: "All" },
  { key: "mobile", label: "Mobile" },
  { key: "native", label: "Native" },
  { key: "backend", label: "Backend" },
  { key: "ai", label: "AI" },
  { key: "infra", label: "Infra / CI" },
  { key: "product", label: "Monetization / Analytics" },
];

const skills = [
  // Mobile (RN)
  {
    name: "React Native",
    category: "mobile",
    icon: <Smartphone className="h-5 w-5" />,
    badge: "⚛️",
    note: "fast MVP, cross-platform",
  },
  {
    name: "TypeScript",
    category: "mobile",
    icon: <Blocks className="h-5 w-5" />,
    badge: "TS",
    note: "Type-safe app code",
  },
  {
    name: "Jest / Detox",
    category: "mobile",
    icon: <Bug className="h-5 w-5" />,
    badge: "🧪",
    note: "Unit & E2E testing",
  },

  // Native
  {
    name: "Kotlin / Jetpack",
    category: "native",
    icon: <Cpu className="h-5 w-5" />,
    badge: "🤖",
    note: "Android native & Compose",
  },
  {
    name: "Swift / SwiftUI",
    category: "native",
    icon: <Cpu className="h-5 w-5" />,
    badge: "🍎",
    note: "iOS native & UI",
  },
  {
    name: "Gradle / Xcode",
    category: "native",
    icon: <Wrench className="h-5 w-5" />,
    badge: "🛠️",
    note: "Build tooling",
  },
  {
    name: "Push Notification",
    category: "native",
    icon: <Bell className="h-5 w-5" />,
    badge: "🔔",
    note: "Notifications",
  },

  // Backend
  {
    name: "PostgreSQL",
    category: "backend",
    icon: <Database className="h-5 w-5" />,
    badge: "🐘",
    note: "Relational DB",
  },
  {
    name: "WebSockets",
    category: "backend",
    icon: <Workflow className="h-5 w-5" />,
    badge: "↔️",
    note: "Realtime features",
  },

  // AI
  {
    name: "ML Kit / Vision",
    category: "ai",
    icon: <Cpu className="h-5 w-5" />,
    badge: "📷",
    note: "OCR, on-device ML",
  },
  {
    name: "Core ML",
    category: "ai",
    icon: <Cpu className="h-5 w-5" />,
    badge: "🧠",
    note: "On-device inference iOS",
  },
  {
    name: "OpenAI / LLM APIs",
    category: "ai",
    icon: <Cpu className="h-5 w-5" />,
    badge: "🤖",
    note: "NLP, summarize, chat",
  },

  // Infra / CI
  {
    name: "Firebase (Auth/DB/Crash)",
    category: "infra",
    icon: <ShieldCheck className="h-5 w-5" />,
    badge: "🔥",
    note: "BAAS & observability",
  },

  // Product / Monetization / Analytics
  {
    name: "App Store Connect / Play Console",
    category: "product",
    icon: <Rocket className="h-5 w-5" />,
    badge: "⤴️",
    note: "Publishing",
  },
  {
    name: "IAP / Subscriptions",
    category: "product",
    icon: <LineChart className="h-5 w-5" />,
    badge: "💳",
    note: "Monetization",
  },
  {
    name: "AdMob / AppsFlyer",
    category: "product",
    icon: <LineChart className="h-5 w-5" />,
    badge: "📈",
    note: "Ads & attribution",
  },
  {
    name: "Firebase Analytics / A/B",
    category: "product",
    icon: <LineChart className="h-5 w-5" />,
    badge: "📊",
    note: "Product insights",
  },
];

export const SkillsSection = () => {
  const [active, setActive] = useState("all");

  const filtered = skills.filter(
    (s) => active === "all" || s.category === active
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
          A practical stack for shipping, scaling, and monetizing mobile apps on
          iOS & Android.
        </p>

        {/* Filter chips */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={cn(
                "px-4 py-2 rounded-full text-sm transition-all",
                active === c.key
                  ? "bg-primary text-primary-foreground shadow"
                  : "bg-secondary/70 hover:bg-primary/5 dark:hover:bg-primary/10"
              )}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((s, i) => (
            <div
              key={`${s.name}-${i}`}
              className="group relative rounded-2xl border bg-card/80 backdrop-blur p-5 transition-all hover:-translate-y-0.5 hover:shadow-md hover:ring-1 hover:ring-primary/20 hover:bg-primary/5 dark:hover:bg-primary/10"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {s.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{s.name}</h3>
                    {s.badge ? (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-secondary/60">
                        {s.badge}
                      </span>
                    ) : null}
                  </div>
                  {s.note ? (
                    <p className="text-xs text-muted-foreground mt-1">
                      {s.note}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background:
                    "radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(239,62,54,0.06), transparent 40%)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
