import { ArrowUpRight, ExternalLink, Link2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "TokenPulse",
    description:
      "Real-time AI token analytics and cost intelligence platform. Track usage, monitor costs, and optimize deployments across ChatGPT, Claude, and Gemini from a single dashboard.",
    tags: ["Next.js", "TypeScript", "OpenAI API", "PostgreSQL", "Redis"],
    category: "AI / Analytics",
    status: "Live",
    featured: true,
    image: "/images/Full_Website_design.png",
    github: "#",
    demo: "https://token-pulse.in",
  },
  {
    id: 2,
    title: "VectorDB Studio",
    description:
      "A developer-friendly interface for visualizing, querying, and managing Pinecone and Weaviate vector databases with semantic search capabilities.",
    tags: ["React", "TypeScript", "Pinecone", "Weaviate"],
    category: "Developer Tools",
    status: "Open Source",
    featured: false,
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "ContextCraft",
    description:
      "Prompt engineering SaaS with version control, A/B testing, and performance analytics for enterprise LLM deployments.",
    tags: ["Next.js", "Supabase", "OpenAI API", "Stripe"],
    category: "SaaS",
    status: "Beta",
    featured: false,
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "DocuMind",
    description:
      "RAG-powered document intelligence engine that ingests PDFs, Notion pages, and URLs to answer questions with cited sources.",
    tags: ["LlamaIndex", "FastAPI", "PostgreSQL", "S3"],
    category: "AI / RAG",
    status: "Live",
    featured: false,
    github: "#",
    demo: "#",
  },
]

const statusStyles: Record<string, string> = {
  Live: "border-primary/30 text-primary bg-primary/5",
  "Open Source": "border-blue-500/30 text-blue-400 bg-blue-500/5",
  Beta: "border-yellow-500/30 text-yellow-400 bg-yellow-500/5",
  Private: "border-border text-muted-foreground",
}

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12">
          <div className="flex flex-col gap-2">
            <span className="text-xs text-primary font-semibold tracking-widest uppercase">Products</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Solving real problems
              <br />
              with AI and engineering.
            </h2>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="hidden sm:flex text-muted-foreground hover:text-foreground gap-1.5 text-sm"
            asChild
          >
            <a href="#">
              View all products <ArrowUpRight className="size-4" />
            </a>
          </Button>
        </div>

        {/* Featured Project */}
        {projects.filter((p) => p.featured).map((project) => (
          <div
            key={project.id}
            className="mb-6 rounded-2xl border border-border bg-card overflow-hidden grid lg:grid-cols-[1fr_1fr] group hover:border-primary/20 transition-colors"
          >
            <div className="relative overflow-hidden bg-secondary min-h-[260px]">
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/30" />
            </div>
            <div className="p-8 flex flex-col justify-between gap-5">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">{project.category}</span>
                  <span className="text-muted-foreground/40">·</span>
                  <Badge variant="outline" className={statusStyles[project.status]}>
                    {project.status}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/85 gap-1.5 text-xs"
                  asChild
                >
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Live Demo <ExternalLink className="size-3" />
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-muted-foreground hover:text-foreground gap-1.5 text-xs"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <Link2 className="size-3" /> Source
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}

        {/* Grid Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.filter((p) => !p.featured).map((project) => (
            <div
              key={project.id}
              className="rounded-xl border border-border bg-card p-6 flex flex-col gap-4 group hover:border-primary/20 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{project.category}</span>
                <Badge variant="outline" className={statusStyles[project.status]}>
                  {project.status}
                </Badge>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-md bg-secondary text-muted-foreground border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <a
                  href={project.github}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Link2 className="size-3" /> Explore <ArrowUpRight className="size-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
