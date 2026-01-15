import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Connect } from "@/components/connect"
import { Footer } from "@/components/footer"
import { Starfield } from "@/components/starfield"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <Starfield />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Connect />
        </main>
        <Footer />
      </div>
    </div>
  )
}
