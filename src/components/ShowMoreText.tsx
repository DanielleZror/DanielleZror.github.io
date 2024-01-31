import { useEffect, useState } from "react"

export default function ShowMoreText({ text }: { text: string }) {
    const [fullSize, setFullSize] = useState(window.innerWidth >= 850)
    const [readMore, setReadMore] = useState(false)
    const [textToShow, setTextToShow] = useState(fullSize ? text : text.slice(0, 200))

    useEffect(() => {
        const updateWindowDimensions = () => {
            const newWidth = window.innerWidth
            setFullSize(newWidth >= 850)
        }

        window.addEventListener("resize", updateWindowDimensions)
        if (readMore || fullSize) {
            setTextToShow(text)
        } else {
            setTextToShow(text.slice(0, 200))
        }

        return () => window.removeEventListener("resize", updateWindowDimensions)

    }, [readMore, text, fullSize])

    return (
        <span>
            {textToShow}
            {!fullSize &&
                <span className="text-pink ml-1 cursor-pointer" onClick={() => setReadMore(!readMore)}>{readMore ? 'read less' : 'read more'}</span>}
        </span>
    )
}
