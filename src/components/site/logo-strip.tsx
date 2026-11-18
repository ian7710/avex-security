"use client";

const LOGOS = [
  "Northwind AI",
  "Hyperloop Labs",
  "Cortex Fin",
  "Vector Health",
  "Quanta Robotics",
  "Helios Cloud",
];

export function LogoStrip() {
  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
          Protecting AI agents at fast-moving teams
        </p>
        <div className="relative overflow-hidden mask-fade-x">
          <div className="flex w-max animate-marquee gap-12 pr-12">
            {[...LOGOS, ...LOGOS].map((name, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-muted-foreground/70 hover:text-foreground/80 transition-colors shrink-0"
              >
                <span className="size-2 rounded-sm bg-white/60" />
                <span className="text-sm font-medium tracking-tight whitespace-nowrap">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .mask-fade-x {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 12%,
            black 88%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 12%,
            black 88%,
            transparent
          );
        }
      `}</style>
    </section>
  );
}
