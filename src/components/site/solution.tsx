"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Shield,
  Wrench,
  Database,
  Globe,
  GitBranch,
  Mail,
  ArrowDown,
} from "lucide-react";

export function Solution() {
  return (
    <section id="product" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-[600px] glow-accent opacity-40" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-sky-300 mb-3">
            The runtime layer
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
            One layer between your agents
            <br />
            <span className="text-gradient-accent">and the world they touch.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Avex proxies every tool call, every retrieval, every model
            request — inspecting content, enforcing policy, and producing audit
            evidence. It&apos;s not a dashboard. It&apos;s the guardrail your agent
            cannot bypass.
          </p>
        </div>

        {/* Architecture diagram */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6 sm:p-10"
        >
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {/* Agent column */}
            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Your AI stack
              </p>
              {[
                { icon: Bot, label: "LLM agents" },
                { icon: GitBranch, label: "Agent frameworks" },
                { icon: Database, label: "RAG / vector stores" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-lg border border-border bg-background/60 px-4 py-3"
                >
                  <item.icon className="size-4 text-muted-foreground" />
                  <span className="text-sm">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Avex core */}
            <div className="relative flex flex-col items-center justify-center rounded-xl border border-sky-500/30 bg-sky-500/5 p-6 ring-accent-glow">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-sky-500/40 bg-background px-3 py-0.5 text-[10px] uppercase tracking-[0.2em] text-sky-200">
                Avex runtime
              </div>
              <div className="flex size-16 items-center justify-center rounded-2xl bg-sky-500/10 border border-sky-500/30">
                <Shield className="size-8 text-sky-200" />
              </div>
              <p className="mt-4 text-center text-sm text-foreground font-medium">
                Inspect · Enforce · Audit
              </p>
              <p className="mt-1 text-center text-xs text-muted-foreground">
                Every tool call, retrieval, and model invocation passes through
                here.
              </p>
              <div className="mt-5 grid grid-cols-3 gap-2 w-full text-[10px] text-center">
                {[
                  { k: "Inspect", v: "content + intent" },
                  { k: "Enforce", v: "policy per-action" },
                  { k: "Audit", v: "evidence ready" },
                ].map((s) => (
                  <div key={s.k} className="rounded-md border border-border bg-background/50 px-2 py-2">
                    <div className="font-semibold text-sky-200">{s.k}</div>
                    <div className="text-muted-foreground">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools column */}
            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                The world they touch
              </p>
              {[
                { icon: Wrench, label: "Tool calls / functions" },
                { icon: GitBranch, label: "MCP servers" },
                { icon: Mail, label: "Email · Slack · APIs" },
                { icon: Globe, label: "Web browsing" },
                { icon: Database, label: "Production databases" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-lg border border-border bg-background/60 px-4 py-3"
                >
                  <item.icon className="size-4 text-muted-foreground" />
                  <span className="text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile flow indicator */}
          <div className="lg:hidden mt-6 flex items-center justify-center gap-2 text-sky-200 text-xs">
            <ArrowDown className="size-4" />
            Every call flows through Avex
            <ArrowDown className="size-4" />
          </div>
        </motion.div>

        {/* Three pillars */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Inspect",
              description:
                "Classify intent and content in real time. Detect prompt injection, jailbreaks, secret leaks, PII, and toxic combinations of context + action.",
            },
            {
              title: "Enforce",
              description:
                "Apply per-tool, per-agent, per-tenant policy: who can call what, with what arguments, against what data. Allow, redact, transform, or block — at the call site.",
            },
            {
              title: "Audit",
              description:
                "Every decision is logged with full context — mapped to EU AI Act §52, NIST AI RMF, ISO 42001 and SOC 2 — so a request from your auditor is a query, not a project.",
            },
          ].map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl border border-border bg-card/50 p-6"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-sky-200">0{i + 1}</span>
                <h3 className="text-lg font-semibold">{p.title}</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
