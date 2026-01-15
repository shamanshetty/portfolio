export function About() {
  return (
    <section id="about" className="py-32 px-6 scroll-mt-20">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-[11px] text-muted-foreground tracking-[0.25em] uppercase">About</h2>
          <div className="flex-1 h-px bg-border/50" />
        </div>

        <div className="space-y-8 text-foreground/80 leading-[1.8] text-[15px]">
          <p className="float-slow">
            I'm a Computer Engineering undergraduate with a strong focus on AI systems, computer vision, and full-stack development. I enjoy building end-to-end solutions — from designing data pipelines and training deep learning models to deploying scalable web applications.
          </p>
          <p className="float-slow" style={{ animationDelay: "0.3s" }}>
            My work spans fraud detection, image restoration, crop disease detection, and AI-powered financial tools, with hands-on experience in TensorFlow, PyTorch, Next.js, and cloud-native tooling. I value performance, interpretability, and real-world deployability over purely academic models.
          </p>
          <p className="float-slow" style={{ animationDelay: "0.6s" }}>
            Currently, I'm working as a Research Fellow under the TIH IIT Bombay CHANAKYA Fellowship, developing image-based crop disease detection systems validated through field trials.
          </p>

          {/* Notion-like metadata block */}
          <div className="pt-6 border-t border-border/30 space-y-2">
            <div className="flex gap-8 text-sm">
              <span className="text-muted-foreground w-24">Education</span>
              <span className="text-foreground">B.Tech Computer Engineering, NMIMS</span>
            </div>
            <div className="flex gap-8 text-sm">
              <span className="text-muted-foreground w-24">Currently</span>
              <span className="text-foreground">Research Fellow @ TIH IIT Bombay</span>
            </div>
            <div className="flex gap-8 text-sm">
              <span className="text-muted-foreground w-24">Focus</span>

              <span className="text-foreground">AI/ML, Computer Vision, Full-Stack</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
