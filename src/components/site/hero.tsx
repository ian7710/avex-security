"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, ShieldCheck, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const TERMINAL_LINES = [
  { t: "14:22:31", level: "info", text: "agent_id=a8f2  tool=send_email" },
  { t: "14:22:31", level: "warn", text: "policy matched: external_recipient + attachments" },
  { t: "14:22:31", level: "block", text: "blocked: indirect prompt_injection (0.94)" },
  { t: "14:22:31", level: "info", text: "audit logged: evt_4f9c2b1a  → EU AI Act §52" },
  { t: "14:22:34", level: "info", text: "agent_id=a8f2  tool=sql_query" },
  { t: "14:22:34", level: "info", text: "allowed: SELECT * FROM orders WHERE …" },
  { t: "14:22:37", level: "warn", text: "tool=mcp.github.create_issue" },
  { t: "14:22:37", level: "block", text: "blocked: secret_exfiltration in body (AWS key)" },
  { t: "14:22:41", level: "info", text: "agent_id=b1c9  tool=web_browse" },
  { t: "14:22:41", level: "allow", text: "allowed: domain on allowlist" },
];

const LEVEL_STYLES: Record<string, string> = {
  info: "text-muted-foreground",
  warn: "text-amber-300",
  block: "text-rose-300",
  allow: "text-sky-200",
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-60" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px] glow-accent" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.985 0 0 / 0.5), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Copy column */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-sky-300 opacity-75 animate-soft-pulse" />
                <span className="relative inline-flex size-2 rounded-full bg-sky-300" />
              </span>
              Now in private beta · SOC 2 Type II in progress
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance"
            >
              Runtime armor for{" "}
              <span className="text-gradient-accent">AI agents</span> in production.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-5 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              Avex sits in the execution path of every AI agent — validating
              tool calls, enforcing policy, and blocking{" "}
              <span className="text-foreground">prompt injection</span>,{" "}
              <span className="text-foreground">tool abuse</span>,{" "}
              <span className="text-foreground">MCP poisoning</span> and{" "}
              <span className="text-foreground">data exfiltration</span> before they reach your systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="#cta">
                  Request demo
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#code">
                  <BookOpen className="size-4" />
                  Read the docs
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground"
            >
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="size-3.5 text-sky-300" />
                Deploy in one SDK call
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="size-3.5 text-sky-300" />
                &lt;5ms p99 added latency
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="size-3.5 text-sky-300" />
                Works with any LLM & MCP server
              </span>
            </motion.div>
          </div>

          {/* Visual column */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <HeroTerminal />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroTerminal() {
  return (
    <div className="conic-border relative rounded-2xl bg-card/80 backdrop-blur-sm">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <div className="flex gap-1.5">
          <span className="size-3 rounded-full bg-rose-400/70" />
          <span className="size-3 rounded-full bg-amber-400/70" />
          <span className="size-3 rounded-full bg-sky-400/70" />
        </div>
        <div className="ml-2 flex items-center gap-2 text-xs text-muted-foreground">
          <Terminal className="size-3.5" />
          <span className="font-mono">avex runtime · live</span>
        </div>
        <div className="ml-auto inline-flex items-center gap-1.5 text-xs text-sky-200">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-sky-300 opacity-75 animate-soft-pulse" />
            <span className="relative inline-flex size-1.5 rounded-full bg-sky-300" />
          </span>
          protecting 4 agents
        </div>
      </div>

      {/* Terminal body */}
      <div className="p-4 font-mono text-[12.5px] leading-relaxed scrollbar-thin max-h-[420px] overflow-y-auto">
        {TERMINAL_LINES.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 + i * 0.18 }}
            className="flex gap-3 py-0.5"
          >
            <span className="text-muted-foreground/60 shrink-0">{line.t}</span>
            <span className={LEVEL_STYLES[line.level]}>{line.text}</span>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 + TERMINAL_LINES.length * 0.18 }}
          className="mt-1 flex gap-3 text-muted-foreground"
        >
          <span>14:22:43</span>
          <span className="inline-flex items-center gap-1">
            <span className="inline-block size-2 bg-sky-300 animate-soft-pulse" />
            awaiting next tool call…
          </span>
        </motion.div>
      </div>

      {/* Stats footer */}
      <div className="grid grid-cols-3 border-t border-border text-xs">
        {[
          { k: "Blocked today", v: "1,284" },
          { k: "Avg latency", v: "3.2ms" },
          { k: "Policy evals", v: "412k" },
        ].map((s, i) => (
          <div
            key={s.k}
            className={`px-4 py-3 ${i < 2 ? "border-r border-border" : ""}`}
          >
            <div className="text-foreground font-semibold">{s.v}</div>
            <div className="text-muted-foreground text-[11px]">{s.k}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
