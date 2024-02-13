import { useState, useEffect } from "react"

export default function useTypingEffect(texts: string[]): string {
    const [text, setText] = useState('')
    const [wordIndex, setWordIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const type = () => {
            const fullWord = texts[wordIndex]
            const step = isDeleting ? -1 : 1
            setText(currect => fullWord.substring(0, currect.length + step))
            if (!isDeleting && text === fullWord) {
                setTimeout(() => setIsDeleting(true), 500)
            } else if (isDeleting && text === '') {
                setIsDeleting(false)
                setWordIndex((current) => (current + 1) % texts.length)
            }
        }
        const timer = setTimeout(type, isDeleting ? 100 : 200)

        return () => clearTimeout(timer)

    }, [text, wordIndex, isDeleting, texts])


    return text
}