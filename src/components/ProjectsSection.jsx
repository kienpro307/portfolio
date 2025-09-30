// ProjectsSection.jsx
import { Apple, Smartphone } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Fast Translate — Translate Everything",
    platform: "Android",
    description:
      "All-in-one translator for documents, text, images, voice, screen overlay, and keyboard.",
    icon: "XAnd.png",
    downloads: "10M",
    features: ["Document", "Text", "Image (OCR)", "Voice", "Screen"],
    storeUrl:
      "https://play.google.com/store/apps/details?id=com.fapp.translate.language.translator.fasttranslation",
  },
  {
    id: 2,
    title: "All Translate — Text · PDF · Voice · Image",
    platform: "Android",
    description:
      "High-accuracy translation with OCR, multi-format document support, and instant overlay.",
    icon: "all.png",
    downloads: "100k",
    features: ["Document", "Text", "Image (OCR)", "Voice", "Screen"],
    storeUrl:
      "https://play.google.com/store/apps/details?id=fc.all.text.pdf.document.voice.image.translate",
  },
  {
    id: 3,
    title: "XTranslate — PDF · Image · Voice",
    platform: "iOS",
    description:
      "iOS translator optimized for PDF/image OCR and voice, designed for smooth UX.",
    icon: "XIOS.png",
    downloads: "100k",
    features: ["Document", "Text", "Image (OCR)", "Voice", "Keyboard"],
    storeUrl:
      "https://apps.apple.com/vn/app/xtranslate-pdf-%E1%BA%A3nh-gi%E1%BB%8Dng-n%C3%B3i/id6478257608?l=vi",
  },
];

const PlatformBadge = ({ platform }) => (
  <span
    className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full ${
      platform === "iOS" ? "bg-black text-white" : "bg-green-600 text-white"
    }`}
    title={platform}
  >
    {platform === "iOS" ? <Apple size={12} /> : <Smartphone size={12} />}
    {platform}
  </span>
);

const ProjectCard = ({ p }) => {
  const open = () => window.open(p.storeUrl, "_blank");

  return (
    <article
      onClick={open}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && open()}
      role="link"
      tabIndex={0}
      aria-label={`Open ${p.title} on store`}
      className="
    group relative cursor-pointer rounded-3xl
    border border-border bg-card/80 backdrop-blur
    transition-all duration-300
    hover:-translate-y-1 hover:shadow-[0_12px_30px_-12px_rgba(0,0,0,0.35)]
    hover:border-primary/25 focus:outline-none
    focus-visible:ring-2 focus-visible:ring-primary/40
  "
    >
      {/* Platform badge (corner) */}
      <div className="absolute top-3 right-3">
        <span
          className={
            p.platform === "iOS"
              ? "px-2 py-1 text-[11px] rounded-full bg-black text-white"
              : "px-2 py-1 text-[11px] rounded-full bg-green-600 text-white"
          }
        >
          {p.platform}
        </span>
      </div>

      {/* Icon */}
      <div className="flex justify-center items-center pt-8 pb-4">
        <img
          src={`/projects/${p.icon}`} // để icon vào /public/projects
          alt={`${p.title} icon`}
          className="
            h-16 w-16 rounded-2xl object-cover bg-white
            shadow-sm ring-1 ring-black/5
            transition-transform duration-300 group-hover:scale-[1.03]
          "
          draggable="false"
          loading="lazy"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
      </div>

      {/* Content */}
      <div className="px-6 pb-6 text-center">
        <h3 className="text-base md:text-lg font-semibold leading-tight">
          {p.title}
        </h3>

        {/* Downloads */}
        {p.downloads && (
          <p className="text-xs font-medium text-primary mt-2">
            {p.downloads}+ downloads
          </p>
        )}

        <p className="text-sm text-muted-foreground mt-3 line-clamp-3">
          {p.description}
        </p>

        {/* Features */}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {p.features.map((f) => (
            <span
              key={f}
              className="
                text-[11px] md:text-xs px-2 py-1 rounded-full
                bg-secondary/70 text-secondary-foreground
                border border-white/10
              "
            >
              {f}
            </span>
          ))}
        </div>
      </div>

      {/* subtle hover glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0
                   group-hover:opacity-100 transition-opacity"
        style={{
          background:
            "radial-gradient(600px circle at 80% -20%, rgba(239,62,54,0.06), transparent 40%)",
        }}
      />
    </article>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Apps</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Real-world mobile apps focused on translation: documents, text,
          images, voice, screen overlay, and keyboard.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
};
