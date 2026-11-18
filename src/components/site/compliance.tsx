"use client";

import { motion } from "framer-motion";
import { Landmark, FileCheck2, Scale, Building2 } from "lucide-react";

const FRAMEWORKS = [
  {
    icon: Scale,
    name: "EU AI Act",
    ref: "Article 52 · transparency obligations",
    description:
      "Per-action audit logs that document who, what, when, and why — for every decision an agent made on a user’s behalf.",
  },
  {
    icon: Landmark,
    name: "NIST AI RMF",
    ref: "Govern · Map · Measure · Manage",
    description:
      "Policy-as-code maps directly to NIST controls. Evidence is queryable, exportable, and version-controlled.",
  },
  {
    icon: FileCheck2,
    name: "ISO/IEC 42001",
    ref: "AI management system standard",
    description:
      "Built-in control mappings and continuous compliance posture for AI management systems.",
  },
  {
    icon: Building2,
    name: "SOC 2 + CIRCIA",
    ref: "Type II in progress",
    description:
      "Tamper-evident logs, role-based access, and incident evidence pipelines for SOC 2 and the upcoming CIRCIA reporting.",
  },
];

export function Compliance() {
  return (
    <section id="compliance" className="relative py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.2em] text-sky-300 mb-3">
              Compliance as a tailwind
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
              Regulation is no longer{" "}
              <span className="text-gradient-accent">a quarter-long project.</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Every Avex decision is logged with the exact evidence a
              regulator asks for — pre-mapped to the major AI regimes. The EU AI
              Act, NIST AI RMF, and ISO 42001 aren’t a parallel workstream. They
              are a query against your runtime.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mt-8 rounded-xl border border-border bg-card/50 p-5"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                One-click evidence export
              </p>
              <div className="space-y-2 font-mono text-xs">
                {[
                  "audit.eu_ai_act.2026-Q4.csv",
                  "audit.nist_ai_rmf.2026-Q4.json",
                  "audit.iso_42001.annex_A.md",
                  "audit.soc2.type2.2026.zip",
                ].map((file) => (
                  <div
                    key={file}
                    className="flex items-center justify-between rounded-md border border-border bg-background/60 px-3 py-2"
                  >
                    <span className="text-foreground/90">{file}</span>
                    <span className="text-sky-300">ready</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {FRAMEWORKS.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-xl border border-border bg-card/50 p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-sky-500/10 text-sky-300">
                    <f.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">{f.name}</h3>
                    <p className="text-[11px] text-muted-foreground">{f.ref}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
