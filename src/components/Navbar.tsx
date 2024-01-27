"use client"
import { useEffect, useState, useRef } from "react"
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialAction from '@mui/material/SpeedDialAction'


export default function Navbar({ sections, observerRefs }: { sections: string[], observerRefs: { current: HTMLHeadingElement[] | null[] } }) {
    const [activeSection, setActiveSection] = useState(0)
    const drawerWidth = 112
    // const observers = useRef<{ current: IntersectionObserver[] }>({ current: [] })
    const observers = useRef<any>([])

    const observerCallback = async (e: IntersectionObserverEntry[], key: number) => {
        if (e.length && e[0].isIntersecting) {
            setActiveSection(key)
        }
    }

    useEffect(() => {
        let current = observers.current
        if (observerRefs.current?.length && current) {
            sections.forEach((_, key: number) => {
                current[key] = new IntersectionObserver((e) =>
                    observerCallback(e, key)
                )
                if (observerRefs.current[key]) {
                    current[key].observe(observerRefs.current[key])
                }
            })
        }
        if (window.location.hash && sections.findIndex(p => `#${p}` === window.location.hash)) {
            document.querySelector(window.location.hash)?.scrollIntoView({ block: "start", behavior: "smooth" })
        }
        return () =>
            current?.forEach((observer: any) => observer?.current?.disconnect())
    }, [observerRefs, observers, sections])


    return (
        <>
            <Box sx={{ position: 'relative' }}>
                <SpeedDial
                    sx={{ position: 'fixed', top: 32, left: 13, visibility: { xs: 'visible', sm: 'hidden' }, opacity: { xs: 1, sm: 0 }, transition: "all 0.5s ease-in-out" }}
                    direction="down" ariaLabel="menu" icon={<img className="rounded-full self-center w-14" src="dz.png" alt="" />}>
                    {sections.map((section, key) => (
                        <SpeedDialAction
                            key={key}
                            FabProps={{ className: "bg-gray", sx: { width: '70px', borderRadius: '20px', bgcolor: '#E0E0E2', '&:hover': { bgcolor: '#E0E0E2' } } }}
                            icon={
                                <a href={`#${section}`} className={`capitalize hover:text-pink ${activeSection === key ? "text-pink font-bold" : "text-black-200"}`}>
                                    {section}
                                </a>
                            } />
                    ))}
                </SpeedDial>
            </Box>
            <Box component="nav" sx={{ width: { sm: drawerWidth } }}>
                <Drawer open variant="persistent"
                    sx={{
                        '& .MuiDrawer-paper': {
                            height: { xs: '0px', sm: '100vh' }, borderBottomRightRadius: { xs: '25%', sm: '0' },
                            borderBottomLeftRadius: { xs: '25%', sm: '0' }, transition: "height 1s ease-in-out",
                            boxSizing: 'border-box', width: drawerWidth, border: 'none', bgcolor: '#151515'
                        }
                    }}>
                    <img className="rounded-full mt-8 self-center w-14" src="dz.png" alt="" />
                    <Box className="flex flex-col gap-7 mt-20">
                        {sections.map((section, key) => (
                            <a key={key} href={`#${section}`} className={`self-center cursor-pointer hover:text-pink ${activeSection === key ? "text-pink font-bold" : "text-gray"}`}>
                                <div className="[writing-mode:vertical-lr] rotate-180 text-lg capitalize">{section}</div>
                            </a>
                        ))}
                    </Box>
                </Drawer>
            </Box>
        </>
    )
}
