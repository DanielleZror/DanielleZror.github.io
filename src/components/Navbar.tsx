"use client"
import { useEffect, useState, useRef } from "react"
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialAction from '@mui/material/SpeedDialAction'


export default function Navbar({ observerRefs }: { observerRefs: { current: HTMLHeadingElement[] | null[] } }) {
    const pages = ['home', 'about', 'skills', 'resume', 'contact']
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
        if (observerRefs.current?.length && observers.current) {
            pages.forEach((_, key: number) => {
                observers.current[key] = new IntersectionObserver((e) =>
                    observerCallback(e, key)
                )
                if (observerRefs.current[key]) {
                    observers.current[key].observe(observerRefs.current[key])
                }
            })
        }
        if (window.location.hash && pages.findIndex(p => `#${p}` === window.location.hash)) {
            // TODO- change the smooth
            document.querySelector(window.location.hash)?.scrollIntoView({ block: "start", behavior: "smooth" })
        }
        return () =>
            observers.current?.forEach((observer: any) => observer?.current?.disconnect())
    }, [observerRefs, observers])

    const drawer = (
        <div className="bg-black-400 min-h-screen">
            <div className="text-white">icon</div>
            <Box className="flex flex-col gap-7 mt-32">
                {pages.map((page, key) => (
                    <a className={`self-center cursor-pointer hover:text-pink ${activeSection === key ? "text-pink font-bold" : "text-white"}`} href={`#${page}`} key={key}>
                        <div className="[writing-mode:vertical-lr] rotate-180 text-lg capitalize">{page}</div>
                    </a>
                ))}
            </Box>
        </div>
    )

    return (
        <>
            <Box sx={{ position: 'relative' }}>
                <SpeedDial ariaLabel="SpeedDial" sx={{ position: 'fixed', top: 24, left: 25, visibility: { xs: 'visible', sm: 'hidden' } }}
                    direction="down" FabProps={{ className: "bg-pink", sx: { bgcolor: '#F64293', '&:hover': { bgcolor: '#D44283' } } }} >
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
                        transition: "all 0.5s ease-in-out", opacity: { sm: 1, xs: 0 }, visibility: { sm: 'visible', xs: 'hidden' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, border: 'none' }
                    }}>
                    {drawer}
                </Drawer>
            </Box>
        </>
    )
}
