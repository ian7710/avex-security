"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

const TABS = [
  {
    id: "python",
    label: "Python SDK",
    file: "agent.py",
    code: `from avex import Avex, Policy

# 1. Initialize once per process
avex = Avex(api_key=os.environ["AVEX_KEY"])

# 2. Wrap any agent — LangGraph, CrewAI, OpenAI, custom
protected_agent = avex.wrap(
    my_agent,
    policy=Policy.from_file("policy.yaml"),
    on_violation="block",          # block | redact | review
    audit_tags=["team=billing", "env=prod"],
)

# 3. Run normally. Avex intercepts every tool call.
result = await protected_agent.run("Summarize last week's invoices.")

# 4. Get the full audit trail alongside the result.
print(result.audit_summary)
# evt_4f9c2b1a · 12 calls · 1 blocked · 3 redacted`,
  },
  {
    id: "typescript",
    label: "TypeScript SDK",
    file: "agent.ts",
    code: `import { Avex } from "@avex/runtime";

const avex = new Avex({
  apiKey: process.env.AVEX_KEY!,
});

// Wrap any agent — works with the OpenAI Agents SDK,
// Vercel AI SDK, LangChain.js, or a custom executor.
const protectedAgent = avex.wrap(myAgent, {
  policy: "policy.yaml",
  onViolation: "block",
  auditTags: ["team=billing", "env=prod"],
});

const result = await protectedAgent.run(
  "Summarize last week's invoices."
);

console.log(result.auditSummary);
// evt_4f9c2b1a · 12 calls · 1 blocked · 3 redacted`,
  },
  {
    id: "mcp",
    label: "MCP proxy",
    file: "avex.yaml",
    code: `# Deploy Avex as a sidecar in front of any MCP server.
# Every tool registration, invocation, and response is
# inspected, governed, and audited.

runtime:
  mode: sidecar
  listen: 0.0.0.0:8787
  upstream: mcp://github.internal

policy:
  - tool: "*"
    on_description_change: quarantine
  - tool: "github.create_issue"
    redact: [secrets, pii]
    rate_limit: 60/min
  - tool: "github.read_file"
    allow: true
    deny_paths: ["**/.env", "**/secrets/**"]

audit:
  sink: s3://avex-audit/prod/
  format: ocsf
  retention: 2557d  # 7 years, EU AI Act`,
  },
];

export function CodeExample() {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);

  const tab = TABS[active];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(tab.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard may be blocked — silent no-op */
    }
  };

  return (
    <section id="code" className="relative py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-sky-300 mb-3">
            Developer experience
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
            One SDK.{" "}
            <span className="text-gradient-accent">Every agent.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Avex works with the agent framework you already use — and with
            MCP servers you don&apos;t control. Drop it in, ship in an afternoon.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          {/* Tabs */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {TABS.map((t, i) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActive(i)}
                className={cn(
                  "group flex items-center justify-between rounded-xl border px-4 py-3 text-left transition-all",
                  active === i
                    ? "border-sky-500/40 bg-sky-500/10"
                    : "border-border bg-card/40 hover:border-border/80 hover:bg-card/60"
                )}
              >
                <div>
                  <div className="text-sm font-medium">{t.label}</div>
                  <div className="text-[11px] font-mono text-muted-foreground mt-0.5">
                    {t.file}
                  </div>
                </div>
                <span
                  className={cn(
                    "size-2 rounded-full transition-colors",
                    active === i ? "bg-sky-400" : "bg-muted-foreground/40"
                  )}
                />
              </button>
            ))}
          </div>

          {/* Code block */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:col-span-8"
          >
            <div className="rounded-xl border border-border bg-background/80 overflow-hidden">
              <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
                <div className="flex gap-1.5">
                  <span className="size-2.5 rounded-full bg-rose-400/70" />
                  <span className="size-2.5 rounded-full bg-amber-400/70" />
                  <span className="size-2.5 rounded-full bg-sky-400/70" />
                </div>
                <span className="ml-2 font-mono text-[11px] text-muted-foreground">
                  {tab.file}
                </span>
                <button
                  type="button"
                  onClick={copy}
                  className="ml-auto inline-flex items-center gap-1.5 rounded-md border border-border px-2 py-1 text-[11px] text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="size-3 text-sky-300" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="size-3" />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <pre className="overflow-x-auto p-4 font-mono text-[12.5px] leading-relaxed scrollbar-thin">
                <code className="text-foreground/90">{tab.code}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
