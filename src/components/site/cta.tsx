"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!ok) {
      setError("Please enter a valid work email.");
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  return (
    <section id="cta" className="relative py-24 sm:py-32 border-t border-border overflow-hidden">
      <div className="pointer-events-none absolute inset-0 glow-accent opacity-50" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40" aria-hidden="true" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-sky-300 mb-3">
            Get access
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
            Stop shipping agents
            <br />
            <span className="text-gradient-accent">without guardrails.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Join the private beta. We onboard new teams every week — design
            partners get a 60-minute policy workshop and a dedicated engineer
            for the first 30 days.
          </p>

          {!submitted ? (
            <form
              onSubmit={onSubmit}
              className="mt-8 mx-auto max-w-md flex flex-col sm:flex-row gap-3"
            >
              <div className="flex-1 text-left">
                <Label htmlFor="cta-email" className="sr-only">
                  Work email
                </Label>
                <Input
                  id="cta-email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-11 bg-background/70"
                />
                {error && (
                  <p className="mt-1.5 text-xs text-rose-300">{error}</p>
                )}
              </div>
              <Button
                type="submit"
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Request demo
                <ArrowRight className="size-4" />
              </Button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="mt-8 mx-auto max-w-md rounded-xl border border-sky-500/40 bg-sky-500/[0.06] px-6 py-6"
            >
              <div className="flex items-center justify-center gap-2 text-sky-200">
                <Check className="size-5" />
                <span className="font-medium">You&apos;re on the list</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                We&apos;ll reach out to <span className="text-foreground">{email}</span> within
                one business day with a calendar link and a sandbox account.
              </p>
            </motion.div>
          )}

          <p className="mt-4 text-xs text-muted-foreground">
            No credit card · No agent rewrite · SOC 2 Type II in progress
          </p>
        </motion.div>
      </div>
    </section>
  );
}
