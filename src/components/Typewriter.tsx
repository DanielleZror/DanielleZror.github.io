import { useEffect, useState } from "react"

export default function Typewriter({ texts }: { texts: string[] }) {
    const [currentText, setCurrentText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)
    useEffect(() => {
        if (currentIndex < texts.length) {
            setCurrentText(texts[currentIndex])
            const timeout = setTimeout(() => {
                setCurrentIndex(prevIndex => prevIndex + 1)
                setCurrentText(texts[currentIndex])
            }, 4000)

            return () => clearTimeout(timeout)
        } else {
            setCurrentIndex(0)
        }
    }, [texts, currentIndex])
    return (
        <div className="flex">
            <h1 className="mr-2 leading-12">I am</h1>
            <div className="w-max">
                <h1 id="typewriter" className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-2 leading-12">{currentText}</h1>
            </div>
        </div>
    )
}
