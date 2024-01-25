import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { useRef } from "react"

function App() {
  let observerRefs = useRef<HTMLHeadingElement[] | null[]>([])
  const divs = ["home", "about", "skills", "resume", "contact"]
  return (
    <>
      <Navbar observerRefs={observerRefs} />
      <main className="bg-black ml-28 max-sm:ml-0 transition-all duration-500">
        {divs.map((div, key) => {
          return (
            <div data-section id={div.toLowerCase()} className="h-[800px]" key={key}>
              <h1 ref={(el) => (observerRefs.current[key] = el)} className="text-pink">{div}</h1>
            </div>
          )
        })}
      </main>
    </>
  )
}

export default App;
