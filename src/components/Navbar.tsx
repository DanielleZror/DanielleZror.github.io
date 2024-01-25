"use client"
import { useEffect, useState, useRef, useMemo } from "react"
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialAction from '@mui/material/SpeedDialAction'


export default function Navbar({ observerRefs }: { observerRefs: { current: HTMLHeadingElement[] | null[] } }) {
    const pages = useMemo(() => ['home', 'about', 'skills', 'resume', 'contact'], [])
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
            pages.forEach((_, key: number) => {
                current[key] = new IntersectionObserver((e) =>
                    observerCallback(e, key)
                )
                if (observerRefs.current[key]) {
                    current[key].observe(observerRefs.current[key])
                }
            })
        }
        if (window.location.hash && pages.findIndex(p => `#${p}` === window.location.hash)) {
            document.querySelector(window.location.hash)?.scrollIntoView({ block: "start", behavior: "smooth" })
        }
        return () =>
            current?.forEach((observer: any) => observer?.current?.disconnect())
    }, [observerRefs, observers, pages])


    return (
        <>
            <Box sx={{ position: 'relative' }}>
                <SpeedDial
                    sx={{ position: 'fixed', top: 32, left: 12, visibility: { xs: 'visible', sm: 'hidden' }, opacity: { xs: 1, sm: 0 }, transition: "all 0.5s ease-in-out" }}
                    direction="down" ariaLabel="menu"
                    FabProps={{ className: "bg-pink", sx: { bgcolor: '#F64293', '&:hover': { bgcolor: '#D44283' } } }} >
                    {pages.map((action, key) => (
                        <SpeedDialAction
                            FabProps={{ className: "bg-pink-200", sx: { width: '70px', borderRadius: '20px', bgcolor: '#E6B9CF', '&:hover': { bgcolor: '#E6B9CF' } } }}
                            key={action}
                            icon={<a href={`#${action}`} className={`capitalize hover:text-pink ${activeSection === key ? "text-pink font-bold" : "text-black-200"}`}>{action}</a>} />
                    ))}
                </SpeedDial>
            </Box>
            <Box component="nav" sx={{ width: { sm: drawerWidth } }}>
                <Drawer open variant="persistent"
                    sx={{
                        transition: "all 0.5s ease-in-out", opacity: { xs: 0, sm: 1 }, visibility: { xs: 'hidden', sm: 'visible' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, border: 'none', bgcolor: '#151515' }
                    }}>
                    <div className="text-white">icon</div>
                    <Box className="flex flex-col gap-7 mt-32">
                        {pages.map((page, key) => (
                            <a className={`self-center cursor-pointer hover:text-pink ${activeSection === key ? "text-pink font-bold" : "text-white"}`} href={`#${page}`} key={key}>
                                <div className="[writing-mode:vertical-lr] rotate-180 text-lg capitalize">{page}</div>
                            </a>
                        ))}
                    </Box>
                </Drawer>
            </Box>
        </>
    )
}
