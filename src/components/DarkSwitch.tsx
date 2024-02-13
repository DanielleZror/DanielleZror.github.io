import Switch from "@mui/material/Switch"
import { useEffect, useState } from "react"
import useDarkMode, { Mode } from "../hooks/useDarkMode"

export default function DarkSwitch({ onChangeMode }: { onChangeMode: Function }) {
    const [theme, setTheme] = useDarkMode()
    const [checked, setChecked] = useState(theme === Mode.Dark ? true : false)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currentMode = event.target.checked ? Mode.Dark : Mode.Light
        setTheme(currentMode)
        setChecked(event.target.checked)
        onChangeMode(currentMode)
    }

    useEffect(() => {
        const updateChecked = () => {
            setChecked(localStorage.theme === Mode.Dark ? true : false)
        }

        window.addEventListener("resize", updateChecked)

        return () => window.removeEventListener("resize", updateChecked)
    }, [])

    return (
        <Switch checked={checked} onChange={handleChange} className="m-auto"
            sx={{
                width: 62,
                height: 32,
                padding: 0,
                borderColor: 'white',
                borderWidth: '1px',
                borderRadius: 20 / 2,
                '& .MuiSwitch-switchBase': {
                    padding: 0,
                    margin: 0,
                    transform: 'translateX(2px)',
                    '&.Mui-checked': {
                        transform: 'translateX(32px)',
                        '& .MuiSwitch-thumb:before': {
                            backgroundImage: "url(Moon.png)",
                        },
                        '& + .MuiSwitch-track': {
                            border: 0,
                            opacity: 1,
                            backgroundImage: checked ? 'url(StarsBackground.png)' : 'url(CloudBackground.png)'
                        }
                    }
                },
                '& .MuiSwitch-thumb': {
                    width: 24,
                    height: 24,
                    marginTop: '3px',
                    '&::before': {
                        content: "''",
                        position: 'absolute',
                        width: '24px',
                        height: '24px',
                        left: 0,
                        top: '3px',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundImage: "url(Sun.png)",
                        borderRadius: 20 / 2
                    }
                },
                '& .MuiSwitch-track': {
                    opacity: 1,
                    backgroundImage: checked ? 'url(StarsBackground.png)' : 'url(CloudBackground.png)',
                    borderRadius: 20 / 2,
                    '&::before, &::after': {
                        content: '""',
                        position: 'absolute',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: 16,
                        height: 16,
                    }
                }
            }} />
    )
}
