"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";
import { Logo } from "./logo";

const FOOTER_GROUPS = [
  {
    title: "Product",
    links: [
      { label: "Overview", href: "#product" },
      { label: "Threats", href: "#threats" },
      { label: "How it works", href: "#how" },
      { label: "Pricing", href: "#pricing" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Documentation", href: "#code" },
      { label: "Python SDK", href: "#code" },
      { label: "TypeScript SDK", href: "#code" },
      { label: "MCP proxy", href: "#code" },
      { label: "Status", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Security", href: "#compliance" },
      { label: "Trust center", href: "#compliance" },
      { label: "Contact", href: "#cta" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "DPA", href: "#" },
      { label: "Sub-processors", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Runtime armor for AI agents. We protect every tool call, every
              retrieval, every model invocation — so your agents can ship to
              production without becoming the next breach.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-sky-500/40 transition-colors"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {FOOTER_GROUPS.map((g) => (
              <div key={g.title}>
                <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {g.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {g.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-sm text-foreground/80 hover:text-sky-200 transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Avex Security, Inc. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-sky-400 animate-soft-pulse" />
            All systems operational
          </p>
        </div>
      </div>
    </footer>
  );
}
