const techStack = [
  {
    category: "AI & ML",
    items: [
      { name: "OpenAI", icon: "🤖" },
      { name: "LangChain", icon: "🔗" },
      { name: "LlamaIndex", icon: "🦙" },
      { name: "Anthropic", icon: "🧠" },
      { name: "HuggingFace", icon: "🤗" },
      { name: "Pinecone", icon: "🌲" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Python", icon: "🐍" },
      { name: "FastAPI", icon: "⚡" },
      { name: "Node.js", icon: "💚" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Redis", icon: "🔴" },
      { name: "Supabase", icon: "⚡" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "TypeScript", icon: "📘" },
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "shadcn/ui", icon: "🎯" },
      { name: "Framer Motion", icon: "🎭" },
    ],
  },
  {
    category: "Infrastructure",
    items: [
      { name: "Docker", icon: "🐳" },
      { name: "AWS", icon: "☁️" },
      { name: "Vercel", icon: "▲" },
      { name: "GitHub Actions", icon: "🔄" },
      { name: "Terraform", icon: "🏗️" },
      { name: "Kubernetes", icon: "⚙️" },
    ],
  },
]

export function TechStack() {
  return (
    <section className="py-24 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-2 mb-12">
          <span className="text-xs text-primary font-semibold tracking-widest uppercase">Stack</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">Technology I Work With</h2>
          <p className="text-muted-foreground max-w-xl mt-1">
            The tools, frameworks, and platforms I use to build intelligent, production-ready systems.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {techStack.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-border bg-card p-6 flex flex-col gap-4"
            >
              <h3 className="text-xs font-semibold text-muted-foreground tracking-widest uppercase">
                {group.category}
              </h3>
              <div className="flex flex-col gap-2.5">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-3 group"
                  >
                    <span className="text-base leading-none">{item.icon}</span>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
