"use client"
import { useEffect, useState, useRef } from "react"
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialAction from '@mui/material/SpeedDialAction'

export default function Navbar({ observerRefs }: { observerRefs: { current: HTMLHeadingElement[] | null[] } }) {
    const pages = ['home', 'about', 'skills', 'resume', 'contact']
    const actions = [
        { name: 'Copy' },
        { name: 'Save' },
        { name: 'Print' },
        { name: 'Share' },
    ];
    const [mobileOpen, setMobileOpen] = useState(false)
    const [isClosing, setIsClosing] = useState(false)
    const [activeSection, setActiveSection] = useState(0)
    const drawerWidth = 112
    // const observers = useRef<{ current: IntersectionObserver[] }>({ current: [] })
    const observers = useRef<any>([])

    const observerCallback = async (e: IntersectionObserverEntry[], key: number) => {
        if (e.length && e[0].isIntersecting) {
            setActiveSection(key)
        }
    }

    const onClick = (id: string, key: number) => {
        document.querySelector(`#${id}`)?.scrollIntoView({ block: "start", behavior: "smooth" });
        setActiveSection(key)
    }

    useEffect(() => {
        if (observerRefs.current?.length && observers.current) {
            const sections = document.querySelectorAll('[data-section]')
            sections.forEach((_, key: number) => {
                observers.current[key] = new IntersectionObserver((e) =>
                    observerCallback(e, key)
                )
                if (observerRefs.current[key]) {
                    observers.current[key].observe(observerRefs.current[key])
                }
            })
        }
        return () =>
            observers.current?.forEach((observer: any) => observer?.current?.disconnect())
    }, [observerRefs, observers])


    const drawer = (
        <div className="bg-black-dark min-h-screen">
            <div className="text-white">icon</div>
            <Box className="flex flex-col gap-7 mt-32">
                {pages.map((page, key) => (
                    <a className={`self-center cursor-pointer hover:text-pink ${activeSection === key ? "text-pink font-bold" : "text-white"}`} onClick={() => onClick(page, key)} key={key}>
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
                            FabProps={{ className: "bg-pink-200", sx: { bgcolor: '#E6B9CF', '&:hover': { bgcolor: '#E6B9CF' } } }}
                            key={action}
                            icon={<div className={`hover:text-pink ${activeSection === key ? "text-pink font-bold" : "text-white"}`}>{action}</div>}
                            onClick={() => onClick(action, key)}
                        // icon={action.icon}
                        />
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
