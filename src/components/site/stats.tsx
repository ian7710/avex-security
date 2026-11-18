"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "<5ms", label: "p99 added latency per tool call", sub: "median 1.8ms across design partners" },
  { value: "1.2M+", label: "tool calls protected weekly", sub: "across 30+ AI teams in beta" },
  { value: "94%", label: "prompt-injection recall", sub: "validated on the OWASP Agentic Top 10 test suite" },
  { value: "0", label: "agent rewrites required", sub: "drop-in SDK + sidecar proxy for MCP" },
];

export function Stats() {
  return (
    <section className="relative py-20 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-card/60 p-6 sm:p-8"
            >
              <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-gradient-accent">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-foreground font-medium">
                {s.label}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
