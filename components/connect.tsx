import { ArrowUpRight } from "lucide-react"

const socials = [
  { label: "GitHub", href: "https://github.com/shamanshetty" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shaman-shetty-657492289/" },
  { label: "Twitter", href: "https://x.com/shaman_shetty_" },
  { label: "Email", href: "mailto:shaman280505@gmail.com" },
]

export function Connect() {
  return (
    <section id="connect" className="py-32 px-6 scroll-mt-20">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-[11px] text-muted-foreground tracking-[0.25em] uppercase">Connect</h2>
          <div className="flex-1 h-px bg-border/50" />
        </div>

        <p className="text-foreground/70 leading-[1.8] text-[15px] mb-10 max-w-md">
          Open to conversations about AI, full-stack development, or collaborating on impactful projects. Let's build something meaningful together.
        </p>

        <a
          href="https://blog-shamanshetty.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-5 py-2.5 border border-primary/40 text-primary text-sm hover:bg-primary/10 transition-all duration-300"
        >
          Read my blog
          <ArrowUpRight
            size={14}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </a>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group py-4 text-center border border-border/30 hover:border-primary/30 hover:bg-card/50 transition-all duration-300 elevation-sm hover-glow"
            >
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {social.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
