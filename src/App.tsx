import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Projects } from "@/components/Projects"
import { About } from "@/components/About"
import { TechStack } from "@/components/TechStack"
import { Writing } from "@/components/Writing"
import { NowExperience } from "@/components/NowExperience"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <About />
          <TechStack />
          <Writing />
          <NowExperience />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
