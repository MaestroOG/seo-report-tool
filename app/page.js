import FeatureCard from "@/components/landingPage/FeatureCard"
import Step from "@/components/landingPage/Step"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, FileText, PieChart, ShieldCheck } from "lucide-react"
import Link from "next/link"

const HomePage = () => {
  return (
    <main className="min-h-screen bg-linear-to-b from-slate-50 to-white">
      {/* HERO */}
      <section className="px-4 pt-20 pb-16 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Generate Professional SEO Reports
            <span className="block text-primary mt-2">
              As Beautiful PDFs
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Enter your SEO data once and instantly download a
            clean, client-ready PDF with charts, metrics, and insights.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/create-report">
              <Button size="lg" className="gap-2">
                Create Report
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-center text-slate-900 mb-12">
            Everything You Need <span className="text-primary">&</span> Nothing You Don’t
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<FileText />}
              title="Client-Ready PDFs"
              desc="Clean, structured, professional reports your clients will love."
            />
            <FeatureCard
              icon={<BarChart3 />}
              title="Smart Charts"
              desc="Automatic graphs & pie charts from your SEO data."
            />
            <FeatureCard
              icon={<PieChart />}
              title="Accurate Metrics"
              desc="Traffic, backlinks, keywords & performance insights."
            />
            <FeatureCard
              icon={<ShieldCheck />}
              title="Secure & Private"
              desc="Your data is processed securely and never shared."
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-4 py-16 bg-slate-50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-12">
            How It Works
          </h2>

          <div className="grid gap-8 sm:grid-cols-3 text-center">
            <Step number="1" title="Enter Data">
              Fill in SEO metrics using a simple form.
            </Step>
            <Step number="2" title="Generate">
              We design charts and format the report automatically.
            </Step>
            <Step number="3" title="Download PDF">
              Instantly download a polished, shareable PDF.
            </Step>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Ready to Create Your First Report?
          </h2>
          <p className="mt-4 text-slate-600">
            Stop wasting time in Word or Google Docs.
            Generate reports that actually look professional.
          </p>

          <Link href="/create-report">
            <Button size="lg" className="mt-8 gap-2">
              Get Started Now
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default HomePage