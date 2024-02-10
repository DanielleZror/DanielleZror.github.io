import { useState, Dispatch, useEffect } from "react"

export enum Mode {
    Dark = "dark",
    Light = "light"
}

export default function useDarkMode(): [Mode, Dispatch<Mode>] {
    const isDarkMode = () => {
        return localStorage.theme === Mode.Dark || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    }
    const [theme, setTheme] = useState<Mode>(isDarkMode() ? Mode.Dark : Mode.Light)

    const setLocalStorage = (mode: Mode) => {
        localStorage.theme = mode
        setTheme(mode)
        if (mode === Mode.Dark) {
            document.documentElement.classList.add(Mode.Dark)
        } else {
            document.documentElement.classList.remove(Mode.Dark)
        }
    }

    useEffect(() => {
        if (isDarkMode()) {
            setLocalStorage(Mode.Dark)
        } else {
            setLocalStorage(Mode.Light)
        }
    }, [theme])

    return [theme, setLocalStorage]
}