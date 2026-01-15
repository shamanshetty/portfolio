export function Footer() {
  return (
    <footer className="py-16 px-6">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-4 text-center">
        <div className="w-12 h-px bg-border/50 mb-4" />
        <p className="text-xs text-muted-foreground/60 tracking-wide">
          © {new Date().getFullYear()} Shaman Shetty 
        </p>
      </div>
    </footer>
  )
}
