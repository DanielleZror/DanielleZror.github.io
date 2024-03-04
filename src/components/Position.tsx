import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import ListItemText from "@mui/material/ListItemText"
import { useEffect, useState } from "react"
import useDarkMode, { Mode } from "../hooks/useDarkMode";

export default function Position({ position }: { position: { role: string, years: string, highlight: string, desc: string[] } }) {
    const [open, setOpen] = useState(true);
    const [theme] = useDarkMode()

    useEffect(() => {
        setOpen(window.innerWidth > 450 ? true : false)
    }, [])
    return (
        <List>
            <ListItemButton
                alignItems="flex-start"
                onClick={() => setOpen(!open)}
                sx={{
                    p: 2,
                    borderRadius: '8px'
                }}>
                <ListItemText
                    primary={
                        <>
                            <h4>{position.role}</h4>
                            <h6>{position.years}</h6>
                        </>
                    }
                    secondary={position.highlight}
                    secondaryTypographyProps={{
                        fontSize: 14,
                        lineHeight: '16px',
                        height: open ? 0 : "auto",
                        mt: open ? 0 : 2,
                        color: open ? 'rgba(0,0,0,0)' : theme === Mode.Dark ? '#B2B2B4' : '#282727',
                    }}
                    sx={{ my: 0 }}
                />
                <KeyboardArrowDown
                    sx={{
                        transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                        transition: '0.2s',
                    }}
                />
            </ListItemButton>
            {open &&
                position.desc.map((d, i) => {
                    return (
                        <ListItem key={i} sx={{ display: 'list-item' }}>{d}</ListItem>
                    )
                })}
        </List>
    )
}
