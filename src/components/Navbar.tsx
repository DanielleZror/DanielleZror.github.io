"use client"
import { useEffect, useState, useRef } from "react"
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import DarkSwitch from "./DarkSwitch"


export default function Navbar({ sections, observerRefs, onChangeMode }: { sections: string[], observerRefs: { current: HTMLHeadingElement[] | null[] }, onChangeMode: any }) {
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
                    sx={{ position: 'fixed', top: 32, right: 13, visibility: { xs: 'visible', sm: 'hidden' }, opacity: { xs: 1, sm: 0 }, transition: "all 0.5s ease-in-out" }}
                    direction="down" ariaLabel="menu" icon={<img className="self-center w-10 " src="dz.png" alt="" />}>
                    {sections.map((section, key) => (
                        <SpeedDialAction
                            key={key}
                            FabProps={{ sx: { width: '70px', borderRadius: '20px' } }}
                            icon={
                                <a href={`#${section}`} className={`capitalize hover:text-pink dark:hover:text-pink ${activeSection === key ? "text-pink font-bold" : "text-black-200 dark:text-white"}`}>
                                    {section}
                                </a>
                            } />
                    ))}
                    <SpeedDialAction
                        color="primary"
                        FabProps={{ sx: { width: '70px', borderRadius: '20px' } }}
                        icon={<DarkSwitch onChangeMode={onChangeMode} />} />
                </SpeedDial>
            </Box>
            <Box component="nav" sx={{ width: { sm: drawerWidth } }}>
                <Drawer open variant="persistent"
                    sx={{
                        '& .MuiDrawer-paper': {
                            height: { xs: '0px', sm: '100vh' }, borderBottomRightRadius: { xs: '25%', sm: '0' },
                            borderBottomLeftRadius: { xs: '25%', sm: '0' }, transition: "height 1s ease-in-out",
                            boxSizing: 'border-box', width: drawerWidth, borderRight: 'solid 1px', borderColor: 'primary.main'
                        }
                    }}>
                    <img className="mt-8 self-center w-14" src="dz.png" alt="" />
                    <Box className="flex flex-col gap-7 mt-20">
                        {sections.map((section, key) => (
                            <a key={key} href={`#${section}`} className={`self-center cursor-pointer hover:text-pink ${activeSection === key ? "text-pink font-bold" : "dark:text-gray text-black-200"}`}>
                                <div className="[writing-mode:vertical-lr] rotate-180 text-lg capitalize">{section}</div>
                            </a>
                        ))}
                    </Box>
                    <DarkSwitch onChangeMode={onChangeMode} />
                </Drawer>
            </Box>
        </>
    )
}
