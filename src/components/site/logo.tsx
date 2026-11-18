import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  size?: number;
};

/**
 * Avex brand mark — a sharp, faceted letter "A" rendered as angular
 * white shards on a deep-navy square. The lower-left is broken into a
 * separated shard and the crossbar is a tapered speed-streak that
 * tapers to a needle point on both ends. Inspired by knife-cut
 * geometric tech / esports marks.
 */
export function LogoMark({ className, size = 28 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Navy square background */}
      <rect width="32" height="32" rx="6" fill="#0E1B2A" />

      <g fill="#FFFFFF">
        {/* Right leg of A — apex to bottom right, flat baseline terminal */}
        <path d="M16 5 L24.5 27 L20 27 L16 16.5 Z" />

        {/* Upper-left facet — kite shard, disconnected from the lower left */}
        <path d="M16 5 L11 15.5 L13.5 15.5 L16 9.5 Z" />

        {/* Lower-left shard — parallelogram-ish, separated from the upper facet */}
        <path d="M11.5 19.5 L13.5 19.5 L9 27 L7 27 Z" />

        {/* Speed-streak crossbar — needle-sharp on both ends, sweeps slightly */}
        <path d="M5 19 L25.5 19 L23 21.2 L7.5 21.2 Z" />
      </g>
    </svg>
  );
}

export function Logo({ className, showWordmark = true, size = 28 }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark size={size} />
      {showWordmark && (
        <span className="text-[17px] font-semibold tracking-tight text-foreground">
          Avex
        </span>
      )}
    </span>
  );
}
