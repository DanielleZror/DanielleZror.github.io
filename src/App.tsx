import Navbar from './components/Navbar'
import { useMemo, useRef } from "react"
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Copyright from './components/Copyright'
import { PaletteMode, ThemeProvider, createTheme } from '@mui/material'
import useDarkMode, { Mode } from './useDarkMode'


const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        primary: {
          main: '#fbf9f5'
        },
        background: {
          default: '#fbf9f5',
          paper: '#eee9df',
        },
        text: {
          primary: '#202020',
          secondary: '#151515',
        },
      }
      : {
        primary: {
          main: '#202020'
        },
        background: {
          default: '#151515',
          paper: '#151515'
        },
        text: {
          primary: '#E0E0E2',
          secondary: '#B2B2B4',
        },
      }),
  },
})
function App() {
  let observerRefs = useRef<HTMLHeadingElement[] | null[]>([])
  const sections = [
    { id: "home", component: Home }, { id: "about", component: About }, { id: "resume", component: Resume },
    { id: "skills", component: Skills }, { id: "contact", component: Contact }]
  const sectionsKeys = sections.map(s => s.id)

  const [mode, setMode] = useDarkMode()

  const handleModeChange = (mode: Mode) => {
    setMode(mode)
  }
  let theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar observerRefs={observerRefs} sections={sectionsKeys} onChangeMode={handleModeChange} />
        <main className="dark:bg-black bg-white-300 ml-28 max-sm:ml-0">
          {sections.map((section, key) => {
            return (
              <div data-section id={section.id.toLowerCase()} className="text-center" key={key}>
                <div ref={(el) => (observerRefs.current[key] = el)}></div>
                <section.component />
              </div>
            )
          })}
          <Copyright />
        </main>
      </ThemeProvider>
    </>
  )
}

export default App;
