import { useState } from "react"
import { Mail, Send, Link2, AtSign, Globe, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const socials = [
  { icon: Link2, label: "GitHub", handle: "@anoop", href: "#" },
  { icon: Globe, label: "LinkedIn", handle: "in/anoop", href: "#" },
  { icon: AtSign, label: "Twitter", handle: "@anoop_ai", href: "#" },
  { icon: Mail, label: "Email", handle: "anoop@example.com", href: "mailto:anoop@example.com" },
]

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-2 mb-12">
          <span className="text-xs text-primary font-semibold tracking-widest uppercase">Contact</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">Let's Build Something</h2>
          <p className="text-muted-foreground max-w-xl mt-1">
            Have a project in mind? Want to collaborate or just chat about AI? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-12">
          {/* Form */}
          <div className="rounded-2xl border border-border bg-card p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <Send className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Message sent!</h3>
                <p className="text-muted-foreground max-w-xs">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <Button
                  variant="outline"
                  className="mt-2 border-border text-foreground hover:bg-secondary"
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }) }}
                >
                  Send another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-foreground">Name</label>
                    <Input
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      className="bg-secondary border-border focus-visible:ring-primary"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      className="bg-secondary border-border focus-visible:ring-primary"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea
                    placeholder="Tell me about your project or just say hello..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-secondary border-border focus-visible:ring-primary resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-primary text-primary-foreground hover:bg-primary/85 gap-2 w-fit"
                >
                  Send Message <Send className="size-4" />
                </Button>
              </form>
            )}
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-5">
            <div className="rounded-xl border border-border bg-card p-6 flex flex-col gap-4">
              <h3 className="font-semibold text-foreground">Connect Directly</h3>
              <div className="flex flex-col gap-2.5">
                {socials.map(({ icon: Icon, label, handle, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary/30 hover:bg-secondary transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center border border-border group-hover:border-primary/30 transition-colors">
                        <Icon className="size-4 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{label}</p>
                        <p className="text-xs text-muted-foreground">{handle}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-foreground">Available for Work</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Currently open to consulting engagements, contract AI engineering, and co-founder opportunities.
              </p>
              <p className="text-xs text-muted-foreground">Response time: within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
