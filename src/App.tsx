import Navbar from './components/Navbar'
import { useRef } from "react"
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Contact from './components/Contact'

function App() {
  let observerRefs = useRef<HTMLHeadingElement[] | null[]>([])
  const sections = [
    { id: "home", component: Home }, { id: "about", component: About }, { id: "skills", component: Skills },
    { id: "resume", component: Resume }, { id: "contact", component: Contact }]
  const sectionsKeys = sections.map(s => s.id)

  return (
    <>
      <Navbar observerRefs={observerRefs} sections={sectionsKeys} />
      <main className="bg-black ml-28 max-sm:ml-0 transition-all duration-500">
        {sections.map((section, key) => {
          return (
            <div data-section id={section.id.toLowerCase()} className="h-[800px] text-center pt-8" key={key}>
              <div ref={(el) => (observerRefs.current[key] = el)}></div>
              <section.component />
            </div>
          )
        })}
      </main>
    </>
  )
}

export default App;
