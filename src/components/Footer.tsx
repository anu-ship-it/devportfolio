import { Link2, Globe, AtSign, ArrowUpRight } from "lucide-react"

const footerLinks = {
  Navigation: [
    { label: "Projects", href: "#projects" },
    { label: "Writing", href: "#writing" },
    { label: "About", href: "#about" },
    { label: "Now", href: "#now" },
    { label: "Contact", href: "#contact" },
  ],
  Connect: [
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "Email", href: "mailto:anoop@example.com" },
  ],
}

const socials = [
  { icon: Link2, href: "#", label: "GitHub" },
  { icon: Globe, href: "#", label: "LinkedIn" },
  { icon: AtSign, href: "#", label: "Twitter" },
]

export function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="border-t border-border bg-card/40 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="font-bold text-foreground tracking-wider">ANOOP</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              AI Systems Engineer building intelligent products that scale. Available for consulting and engineering collaborations.
            </p>
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                >
                  <Icon className="size-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="flex flex-col gap-3">
              <h4 className="text-xs font-semibold text-muted-foreground tracking-widest uppercase">{group}</h4>
              <div className="flex flex-col gap-2">
                {links.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => {
                      if (link.href.startsWith("#") && link.href.length > 1) {
                        scrollTo(link.href)
                      } else if (link.href.startsWith("mailto")) {
                        window.location.href = link.href
                      }
                    }}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Anoop. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with React, TypeScript & shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  )
}
