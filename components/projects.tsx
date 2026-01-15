import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Taal-AI",
    description: "AI financial coaching platform with income rhythm analysis, purchase impact simulation, and LLM-based guidance. Features 100% typed APIs with modular agent architecture and WhatsApp integration for real-time tax reminders.",
    year: "2025",
    tags: ["Next.js", "FastAPI", "Supabase", "Docker", "LLMs"],
    href: "#",
  },
  {
    title: "Credit Card Fraud Detection & Behavior Analysis",
    description: "Multi-model fraud detection pipeline achieving 74.4% accuracy on 10,000+ transactions. Improved AUC-ROC by 15% using feature engineering and optimized processing to under 30 seconds per batch.",
    year: "2025",
    tags: ["Python", "XGBoost", "LightGBM", "Scikit-learn"],
    href: "https://github.com/shamanshetty/Credit-Card-Behaviour-Analysis",
  },
  {
    title: "AI Reflection Remover",
    description: "Deep learning model for image reflection removal using CNNs. Achieved 26.64 dB PSNR and 0.9207 SSIM on validation, with test performance of 27.82 ± 3.33 dB PSNR. Finalist at Qualcomm VisionX Hackathon (IIT Bombay).",
    year: "2024",
    tags: ["TensorFlow", "PyTorch", "OpenCV", "Computer Vision"],
    href: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 scroll-mt-20">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-[11px] text-muted-foreground tracking-[0.25em] uppercase">Featured Projects</h2>
          <div className="flex-1 h-px bg-border/50" />
        </div>

        <div className="space-y-0">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.href}
              className="group block py-8 border-b border-border/30 hover:bg-card/30 -mx-4 px-4 transition-all duration-300 hover-glow elevation-sm"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-serif text-2xl text-primary group-hover:opacity-80 transition-opacity">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      size={18}
                      className="text-primary opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-60 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300"
                    />
                  </div>
                  <p className="text-foreground/60 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex items-center gap-4 pt-1">
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                    <div className="flex gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[10px] text-muted-foreground/70 tracking-wide">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
