"use client";

import { motion } from "framer-motion";
import { Code2, SlidersHorizontal, Activity } from "lucide-react";

const STEPS = [
  {
    icon: Code2,
    step: "01",
    title: "Drop the SDK in front of your agent",
    description:
      "Wrap any agent framework — LangGraph, CrewAI, OpenAI Agents SDK, Anthropic, or your own. Avex installs as a one-line middleware or a sidecar proxy for MCP traffic. No model change, no retraining, no agent rewrite.",
    code: `from avex import Avex

avex = Avex(api_key=os.environ["AVEX_KEY"])
agent = avex.wrap(my_agent)

# That's it. Every tool call now
# flows through Avex.`,
  },
  {
    icon: SlidersHorizontal,
    step: "02",
    title: "Define policy once, enforce everywhere",
    description:
      "Write policy in YAML or Python. Policy describes what each agent can do, with what data, against what tools — and what to do on violation. The same policy file governs dev, staging, and prod, across every model and MCP server you run.",
    code: `# policy.yaml
tools:
  send_email:
    allow: false
    redact: [pii, secrets]
    on_violation: block
  sql_query:
    allow: true
    require_human_review: true
    rate_limit: 60/min`,
  },
  {
    icon: Activity,
    step: "03",
    title: "Watch attacks get blocked in real time",
    description:
      "Every tool call is inspected, classified, and decided in under 5ms. Blocked actions, redacted arguments, and human-review escalations stream into the Avex console — and into your SIEM, with the evidence GRC needs pre-attached.",
    code: `[blocked]  prompt_injection (0.94)
[redacted]  3 secrets in tool args
[allowed]  external_email · policy: sales_outreach
[audit]    evt_4f9c2b1a → EU AI Act §52`,
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-sky-300 mb-3">
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
            From zero to{" "}
            <span className="text-gradient-accent">runtime-protected</span>{" "}
            in an afternoon.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            No rip-and-replace. No model fine-tuning. No SIEM reconfiguration
            project. Drop Avex in front of your agents, write policy, and
            ship.
          </p>
        </div>

        <div className="mt-14 space-y-6">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="grid lg:grid-cols-12 gap-6 rounded-2xl border border-border bg-card/40 p-6 sm:p-8"
            >
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-sky-500/10 text-sky-300">
                    <s.icon className="size-5" />
                  </div>
                  <span className="font-mono text-xs text-sky-200">{s.step}</span>
                </div>
                <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.description}
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="rounded-xl border border-border bg-background/80 overflow-hidden">
                  <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
                    <div className="flex gap-1.5">
                      <span className="size-2.5 rounded-full bg-rose-400/70" />
                      <span className="size-2.5 rounded-full bg-amber-400/70" />
                      <span className="size-2.5 rounded-full bg-sky-400/70" />
                    </div>
                    <span className="ml-2 font-mono text-[11px] text-muted-foreground">
                      {i === 0 ? "agent.py" : i === 1 ? "policy.yaml" : "runtime.log"}
                    </span>
                  </div>
                  <pre className="overflow-x-auto p-4 font-mono text-[12.5px] leading-relaxed text-foreground/90 scrollbar-thin">
                    <code>{s.code}</code>
                  </pre>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
