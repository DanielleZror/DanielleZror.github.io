import { useState, useEffect } from "react"

export enum Mode {
    Dark = "dark",
    Light = "light"
}

export default function useDarkMode(): [Mode, Function] {
    const isDarkMode = () => {
        return localStorage.theme !== Mode.Light || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) || !('theme' in localStorage)
    }
    const [theme, setTheme] = useState<Mode>(isDarkMode() ? Mode.Dark : Mode.Light)

    const toggleTheme = () => {
        let mode = Mode.Dark
        if (theme === Mode.Dark) mode = Mode.Light
        setTheme(mode)
        setLocalStorage(mode)
    }

    const setLocalStorage = (mode: Mode) => {
        localStorage.setItem('theme', mode)
        window.dispatchEvent(new Event("storage"));

        if (mode === Mode.Dark) {
            document.documentElement.classList.add(Mode.Dark)
        } else {
            document.documentElement.classList.remove(Mode.Dark)
        }
    }

    useEffect(() => {
        const mode = isDarkMode() ? Mode.Dark : Mode.Light
        setLocalStorage(mode)

        const storageChanged = () => {
            setTheme(isDarkMode() ? Mode.Dark : Mode.Light)
        }

        window.addEventListener('storage', storageChanged)

        return () => window.removeEventListener("storage", storageChanged)
    }, [])


    return [theme, toggleTheme]
}