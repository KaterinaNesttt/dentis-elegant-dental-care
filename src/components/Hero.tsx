import { Phone } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background video with overlay */}
      <div className="absolute inset-0">
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          ref={(el) => { if (el) el.playbackRate = 0.7; }}
        />
        <div className="absolute inset-0 gradient-hero opacity-80" />
      </div>

      {/* Gold accent line top */}
      <div className="absolute top-0 left-0 right-0 h-1 gradient-gold" />

      <div className="container mx-auto px-4 relative z-10 pt-28 pb-20">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p className="text-sm tracking-[0.3em] uppercase mb-5 animate-fade-up font-sans font-normal text-accent">
            Преміальна стоматологія · Кропивницький
          </p>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl leading-tight mb-6 animate-fade-up delay-100 font-sans font-extralight lg:text-6xl text-secondary">
            Посмішка, що
            <br />
            <em className="not-italic text-accent">надихає</em>
          </h1>

          {/* Subline */}
          <p className="text-lg leading-relaxed max-w-lg mb-10 animate-fade-up delay-200 font-sans font-extralight text-secondary">
            Сучасна стоматологія з індивідуальним підходом до кожного пацієнта.
            Комфорт, безпека та бездоганний результат — наш стандарт.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
            <a
              href="tel:+380504800825"
              className="flex items-center justify-center gap-3 gradient-gold text-accent-foreground px-8 py-4 rounded-full font-body font-semibold text-base shadow-gold-custom hover:opacity-90 transition-opacity duration-200">

              <Phone size={18} />
              Записатися на консультацію
            </a>
            <button
              onClick={() => handleScroll("#services")}
              className="flex items-center justify-center gap-2 border border-primary-foreground/30 text-primary-foreground/90 hover:border-gold hover:text-gold px-8 py-4 rounded-full font-body font-medium text-base transition-all duration-200">

              Наші послуги
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-14 animate-fade-up delay-400">
            {[
            { num: "15+", label: "Років досвіду" },
            { num: "5000+", label: "Пацієнтів" },
            { num: "98%", label: "Задоволені клієнти" }].
            map((stat) =>
            <div key={stat.label}>
                <div className="font-display text-2xl font-bold text-accent">{stat.num}</div>
                <div className="font-body text-xs text-primary-foreground/60 tracking-wide mt-0.5">{stat.label}</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>);

}