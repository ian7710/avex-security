"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const TIERS = [
  {
    name: "Developer",
    price: "$0",
    period: "forever",
    description: "For individual builders shipping their first agent to prod.",
    cta: "Start free",
    href: "#cta",
    features: [
      "Up to 100k tool calls / month",
      "1 agent · 1 MCP server",
      "Core policy engine",
      "Community support",
      "7-day audit retention",
    ],
    highlight: false,
  },
  {
    name: "Team",
    price: "$1,200",
    period: "/ month",
    description: "For teams running agents in production with real customers.",
    cta: "Start 14-day trial",
    href: "#cta",
    features: [
      "Up to 5M tool calls / month",
      "Unlimited agents & MCP servers",
      "Policy-as-code + git sync",
      "SSO + role-based access",
      "90-day audit retention",
      "EU AI Act + NIST AI RMF exports",
      "Email + Slack support",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For regulated industries and global AI rollouts.",
    cta: "Talk to us",
    href: "#cta",
    features: [
      "Unlimited tool calls",
      "Self-hosted / VPC / on-prem",
      "Custom compliance mappings",
      "SOC 2 Type II evidence pipeline",
      "Indefinite audit retention",
      "Dedicated solutions engineer",
      "24/7 incident response",
      "Bug bounty + red team",
    ],
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-sky-300 mb-3">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
            Pay for tool calls,{" "}
            <span className="text-gradient-accent">not seats.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            One transparent metric: the number of tool calls Avex inspects.
            No per-agent fees, no per-MCP-server fees, no AI tax on your model spend.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={cn(
                "relative rounded-2xl border p-6 sm:p-7 flex flex-col",
                tier.highlight
                  ? "border-sky-500/40 bg-sky-500/[0.04] ring-accent-glow"
                  : "border-border bg-card/50"
              )}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-sky-500/40 bg-background px-3 py-0.5 text-[10px] uppercase tracking-[0.2em] text-sky-200">
                  Most popular
                </div>
              )}
              <div className="text-base font-semibold">{tier.name}</div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-3xl font-semibold tracking-tight">
                  {tier.price}
                </span>
                <span className="text-sm text-muted-foreground">{tier.period}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed min-h-[40px]">
                {tier.description}
              </p>

              <Button
                asChild
                className={cn(
                  "mt-6 w-full",
                  tier.highlight
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : ""
                )}
                variant={tier.highlight ? "default" : "outline"}
              >
                <Link href={tier.href}>{tier.cta}</Link>
              </Button>

              <ul className="mt-6 space-y-2.5">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="size-4 text-sky-400 mt-0.5 shrink-0" />
                    <span className="text-foreground/90">{f}</span>
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
