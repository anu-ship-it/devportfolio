import { ArrowUpRight, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const posts = [
  {
    id: 1,
    title: "Building Production-Grade RAG Systems: Lessons from 2 Years of Failure",
    excerpt:
      "Retrieval-augmented generation sounds simple until you're dealing with real data. Here's what I've learned about chunking strategies, re-ranking, and latency trade-offs.",
    category: "AI Engineering",
    date: "Jan 12, 2025",
    readTime: "12 min read",
    featured: true,
  },
  {
    id: 2,
    title: "The Hidden Costs of LLM API Calls (And How to Minimize Them)",
    excerpt:
      "A deep dive into token optimization, caching strategies, and smart batching that cut my clients' API costs by up to 73%.",
    category: "Cost Optimization",
    date: "Dec 28, 2024",
    readTime: "8 min read",
    featured: false,
  },
  {
    id: 3,
    title: "Multi-Agent Systems in Practice: When to Use Them and When Not To",
    excerpt:
      "Agents are powerful but add complexity. A framework for deciding when multi-agent architecture earns its overhead.",
    category: "Architecture",
    date: "Dec 10, 2024",
    readTime: "10 min read",
    featured: false,
  },
  {
    id: 4,
    title: "Prompt Engineering is Dead. Long Live System Design.",
    excerpt:
      "Why the era of clever prompting is giving way to proper software architecture principles in AI systems.",
    category: "Opinion",
    date: "Nov 22, 2024",
    readTime: "6 min read",
    featured: false,
  },
]

export function Writing() {
  return (
    <section id="writing" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div className="flex flex-col gap-2">
            <span className="text-xs text-primary font-semibold tracking-widest uppercase">Writing</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">Words & Ideas</h2>
            <p className="text-muted-foreground max-w-lg mt-1">
              I write about AI systems design, practical engineering, and lessons from shipping products.
            </p>
          </div>
          <a
            href="#"
            className="hidden sm:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            All posts <ArrowUpRight className="size-4" />
          </a>
        </div>

        {/* Featured Post */}
        {posts.filter((p) => p.featured).map((post) => (
          <a
            key={post.id}
            href="#"
            className="block mb-6 rounded-2xl border border-border bg-card p-8 hover:border-primary/20 transition-colors group"
          >
            <div className="flex flex-col gap-4 max-w-3xl">
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 text-xs">
                  {post.category}
                </Badge>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="size-3" /> {post.readTime}
                </span>
                <span className="text-xs text-muted-foreground">{post.date}</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
              <span className="flex items-center gap-1.5 text-sm text-primary font-medium">
                Read article <ArrowUpRight className="size-4" />
              </span>
            </div>
          </a>
        ))}

        {/* Post List */}
        <div className="flex flex-col divide-y divide-border">
          {posts.filter((p) => !p.featured).map((post) => (
            <a
              key={post.id}
              href="#"
              className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-secondary/20 rounded-lg px-2 transition-colors group"
            >
              <div className="flex flex-col gap-2 flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <Badge variant="outline" className="border-border text-muted-foreground text-xs">
                    {post.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground hidden sm:block">{post.excerpt}</p>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground shrink-0">
                <Clock className="size-3" />
                {post.readTime}
                <ArrowUpRight className="size-4 ml-2 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
