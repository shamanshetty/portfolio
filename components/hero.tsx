export function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-6 pt-24">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs text-muted-foreground mb-6 tracking-[0.3em] uppercase float-slow">Software Developer | AI & Full-Stack Engineer</p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary leading-[1.1] text-balance float text-glow">
          Building intelligent systems that solve real problems.
        </h1>
        <p
          className="mt-8 text-foreground/70 text-base leading-relaxed max-w-md mx-auto float-slow"
          style={{ animationDelay: "0.5s" }}
        >
          I build end-to-end AI solutions — from data pipelines and deep learning models to scalable web applications.
        </p>

        {/* Notion-like scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 text-muted-foreground/50">
          <span className="text-[10px] tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-muted-foreground/30 to-transparent" />
        </div>
      </div>
    </section>
  )
}
