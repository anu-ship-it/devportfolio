import { MapPin, Download, Link2, AtSign, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const skills = [
  "Python", "TypeScript", "React", "Next.js", "FastAPI",
  "LangChain", "LlamaIndex", "OpenAI API", "Anthropic API",
  "PostgreSQL", "Redis", "Docker", "AWS", "Supabase",
  "Pinecone", "Weaviate", "Prompt Engineering",
]

const socials = [
  { icon: Link2, label: "GitHub", href: "#" },
  { icon: Globe, label: "LinkedIn", href: "#" },
  { icon: AtSign, label: "Twitter", href: "#" },
]

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <span className="text-xs text-primary font-semibold tracking-widest uppercase">About</span>

        <div className="mt-6 grid lg:grid-cols-[1fr_360px] gap-16 items-start">
          {/* Left — Text */}
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight leading-tight">
              Building intelligent systems <br className="hidden sm:block" />
              that actually work.
            </h2>

            <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
              <p>
                I'm Anoop, an AI Systems Engineer with 5+ years of experience turning ambitious ideas into production-ready
                intelligent systems. I specialize in the full lifecycle — from designing LLM architectures and autonomous
                agents to shipping polished, scalable products.
              </p>
              <p>
                My work sits at the intersection of applied AI research and software engineering. I've built multi-agent
                pipelines that process millions of tokens daily, RAG systems with sub-second retrieval, and developer
                tools that teams actually love using.
              </p>
              <p>
                Outside of engineering, I write about AI systems design, contribute to open-source projects, and
                occasionally speak at conferences about the practical realities of deploying AI at scale.
              </p>
            </div>

            {/* Skills */}
            <div className="flex flex-col gap-3">
              <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">Core Skills</span>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="border-border text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors font-normal"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/85 gap-2"
                asChild
              >
                <a href="#">
                  Download Resume <Download className="size-4" />
                </a>
              </Button>
              <div className="flex items-center gap-2">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Photo */}
          <div className="flex flex-col gap-6">
            <div className="relative rounded-2xl overflow-hidden bg-secondary aspect-[3/4] lg:aspect-auto lg:h-[440px]">
              <img
                src="/images/for_Portfolio.jpeg"
                alt="Anoop — AI Systems Engineer"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
              {/* Name Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-card/90 backdrop-blur-md rounded-xl p-4 border border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">Anoop</p>
                    <p className="text-sm text-muted-foreground">AI Systems Engineer</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="size-3.5 text-primary" />
                    Remote / Global
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
