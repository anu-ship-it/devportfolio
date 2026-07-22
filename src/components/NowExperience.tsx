import { Briefcase, MapPin, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const currentFocus = [
  "Building a next-gen agent framework with persistent memory",
  "Writing a series on LLM system design patterns",
  "Consulting for two AI-native startups",
  "Learning Rust for performance-critical inference pipelines",
]

const experiences = [
  {
    id: 1,
    role: "Senior AI Systems Engineer",
    company: "NeuralLabs (Remote)",
    period: "2022 — Present",
    description:
      "Led design and deployment of multi-agent systems serving 50K+ daily users. Built proprietary RAG infrastructure reducing retrieval latency by 65%.",
    tech: ["LangChain", "GPT-4", "FastAPI", "PostgreSQL", "AWS"],
    current: true,
  },
  {
    id: 2,
    role: "ML Engineer",
    company: "DataForge Inc.",
    period: "2020 — 2022",
    description:
      "Developed NLP pipelines for entity extraction and document classification. Fine-tuned transformer models achieving SOTA on proprietary benchmarks.",
    tech: ["HuggingFace", "PyTorch", "Kubernetes", "MLflow"],
    current: false,
  },
  {
    id: 3,
    role: "Full-Stack Developer",
    company: "Freelance",
    period: "2019 — 2020",
    description:
      "Delivered 15+ projects for clients globally — SaaS dashboards, API integrations, and data visualization tools.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    current: false,
  },
]

export function NowExperience() {
  return (
    <section id="now" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Now Column */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-xs text-primary font-semibold tracking-widest uppercase">Now</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">What I'm Up To</h2>
              <p className="text-muted-foreground mt-1 text-sm">Updated January 2025</p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-foreground">Currently Focused On</span>
              </div>

              <div className="flex flex-col gap-4">
                {currentFocus.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                    <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

              <Separator className="bg-border" />

              <div className="flex items-center gap-3">
                <MapPin className="size-4 text-muted-foreground shrink-0" />
                <span className="text-sm text-muted-foreground">Remote — available worldwide</span>
              </div>
            </div>
          </div>

          {/* Experience Column */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-xs text-primary font-semibold tracking-widest uppercase">Experience</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">Where I've Worked</h2>
            </div>

            <div className="flex flex-col gap-6 relative">
              {/* Timeline Line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

              {experiences.map((exp) => (
                <div key={exp.id} className="flex gap-5">
                  {/* Dot */}
                  <div className="mt-1.5 shrink-0">
                    <div
                      className={`w-4 h-4 rounded-full border-2 ${
                        exp.current
                          ? "border-primary bg-primary/15"
                          : "border-border bg-background"
                      }`}
                    />
                  </div>

                  <div className="flex flex-col gap-2 pb-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold text-foreground">{exp.role}</h3>
                      {exp.current && (
                        <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 text-xs">
                          Current
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="size-3.5" /> {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="size-3.5" /> {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-0.5 rounded-md bg-secondary text-muted-foreground border border-border"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
