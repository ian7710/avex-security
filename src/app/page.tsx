import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { LogoStrip } from "@/components/site/logo-strip";
import { Problem } from "@/components/site/problem";
import { Solution } from "@/components/site/solution";
import { Features } from "@/components/site/features";
import { HowItWorks } from "@/components/site/how-it-works";
import { Compliance } from "@/components/site/compliance";
import { CodeExample } from "@/components/site/code-example";
import { Stats } from "@/components/site/stats";
import { Pricing } from "@/components/site/pricing";
import { CTA } from "@/components/site/cta";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <LogoStrip />
        <Problem />
        <Solution />
        <Features />
        <HowItWorks />
        <CodeExample />
        <Stats />
        <Compliance />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
