import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "30+", label: "Projects Shipped" },
  { value: "12+", label: "AI Products Built" },
]

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 pb-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-center">
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            {/* Status Badge */}
            <div className="flex items-center gap-2 w-fit">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">Available for new opportunities</span>
            </div>

            {/* Headline */}
            <div className="flex flex-col gap-5">
              <h1 className="text-5xl sm:text-6xl lg:text-[68px] font-bold tracking-tight leading-[1.05]">
                <span className="text-foreground">Building intelligent</span>
                <br />
                <span className="text-foreground">systems that transform</span>
                <br />
                <span className="text-foreground">complex data into</span>
                <br />
                <span className="text-primary">actionable</span>
                <span className="text-foreground"> decisions.</span>
              </h1>
              <p className="text-base text-muted-foreground max-w-lg leading-relaxed">
                AI-powered products across developer tools,
                financial intelligence and intelligent automation.
              </p>
            </div>

            {/* Bullet points */}
            <div className="flex flex-col gap-2.5">
              {[
                "100+ developers actively using my products",
                "4 AI products in development",
                "Shipping improvements every week",
              ].map((point) => (
                <div key={point} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-sm text-muted-foreground">{point}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <Button
                size="default"
                className="bg-primary text-primary-foreground hover:bg-primary/85 gap-2 font-medium"
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Products
                <ArrowUpRight className="size-4" />
              </Button>
              <Button
                size="default"
                variant="outline"
                className="border-border text-foreground hover:bg-secondary gap-2"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Resume <ArrowUpRight className="size-3.5" />
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 pt-6 border-t border-border">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5">
                  <span className="text-3xl font-bold text-foreground">{stat.value}</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — Featured Card */}
          <div className="relative">
            {/* Subtle glow */}
            <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl -z-10" />

            <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-2xl">
              {/* Card Header */}
              <div className="px-5 py-4 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Live</span>
                </div>
                <Badge
                  variant="outline"
                  className="border-primary/30 text-primary bg-primary/5 text-xs"
                >
                  Active
                </Badge>
              </div>

              {/* Project Name */}
              <div className="px-5 py-4 border-b border-border">
                <h3 className="text-xl font-bold text-foreground">TokenPulse</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Real-time AI token analytics and cost intelligence for ChatGPT, Claude and Gemini.
                </p>
              </div>

              {/* Stats row */}
              <div className="px-5 py-4 border-b border-border grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Users</p>
                  <p className="text-2xl font-bold text-foreground">100+</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Products</p>
                  <p className="text-2xl font-bold text-foreground">4</p>
                </div>
              </div>

              {/* Products List */}
              <div className="px-5 py-3 border-b border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Currently Building</p>
                <div className="flex flex-col gap-2.5">
                  {[
                    { name: "TokenPulse", sub: "AI Token Analytics", status: "Live", dot: "bg-primary" },
                    { name: "Velra", sub: "AI Workspace", status: "Development", dot: "bg-yellow-500" },
                    { name: "AI Dev Weekly", sub: "AI Newsletter", status: "Beta", dot: "bg-blue-500" },
                    { name: "AlphaPulse", sub: "AI Research Platform", status: "Private", dot: "bg-muted-foreground" },
                  ].map((item) => (
                    <div key={item.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${item.dot} shrink-0`} />
                        <div>
                          <p className="text-xs font-medium text-foreground leading-none">{item.name}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{item.sub}</p>
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground">{item.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom padding */}
              <div className="px-5 py-3">
                <a
                  href="#projects"
                  onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }) }}
                  className="flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  View all products <ArrowUpRight className="size-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
