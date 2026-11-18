"use client";

import { motion } from "framer-motion";
import {
  ShieldAlert,
  Filter,
  Plug,
  Lock,
  Radar,
  ScrollText,
} from "lucide-react";

const FEATURES = [
  {
    icon: ShieldAlert,
    title: "Real-time prompt injection defense",
    description:
      "Catch direct and indirect prompt injections, jailbreaks, and tool-description poisoning at runtime — across multi-step, multi-agent flows.",
    points: ["Content + context-aware", "Multi-turn attack chains", "Red-team validated"],
  },
  {
    icon: Filter,
    title: "Tool-call governance",
    description:
      "Per-tool, per-argument, per-tenant policy. Allow, block, redact, or transform arguments before they ever reach your systems.",
    points: ["Argument-level redaction", "Rate & quota limits", "Human-in-the-loop gates"],
  },
  {
    icon: Plug,
    title: "MCP server protection",
    description:
      "Validate every MCP tool registration, surface malicious tool descriptions, and quarantine compromised servers before they poison the agent graph.",
    points: ["Tool integrity checks", "Server allowlisting", "Drift detection"],
  },
  {
    icon: Lock,
    title: "PII & data exfiltration prevention",
    description:
      "Detect secrets, PII, source code, and regulated data in tool arguments, model responses, and retrieval context — and stop the leak in flight.",
    points: ["150+ secret formats", "GDPR / HIPAA classifiers", "Inline redaction"],
  },
  {
    icon: Radar,
    title: "Shadow AI discovery",
    description:
      "Continuously map every agent, MCP server, model call, and external LLM endpoint your teams are running — across dev, staging, and prod.",
    points: ["Agent inventory", "MCP server catalog", "Model usage map"],
  },
  {
    icon: ScrollText,
    title: "Compliance evidence engine",
    description:
      "Every decision logged with the exact context regulators ask for — pre-mapped to EU AI Act, NIST AI RMF, ISO 42001 and SOC 2 controls.",
    points: ["One-click evidence export", "Tamper-evident logs", "Auditor-ready queries"],
  },
];

export function Features() {
  return (
    <section className="relative py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-sky-300 mb-3">
            Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
            Everything an agent can do,{" "}
            <span className="text-gradient-accent">wrapped in policy.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            One runtime, six core controls — built to be installed today and
            survive the next OWASP Agentic Top 10 release without re-architecting.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
              className="group relative rounded-xl border border-border bg-card/50 p-6 hover:border-sky-500/40 hover:bg-card/70 transition-all"
            >
              <div className="flex size-11 items-center justify-center rounded-lg bg-sky-500/10 text-sky-300 group-hover:bg-sky-500/15 transition-colors">
                <f.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {f.description}
              </p>
              <ul className="mt-4 space-y-1.5">
                {f.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2 text-xs text-foreground/80"
                  >
                    <span className="size-1 rounded-full bg-sky-400" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
