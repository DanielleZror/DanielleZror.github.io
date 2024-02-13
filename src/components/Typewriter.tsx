import useTypingEffect from "../hooks/useTypingEffect"

export default function Typewriter({ texts }: { texts: string[] }) {
    const text = useTypingEffect(texts)

    return (
        <div className="flex">
            <h1 className="mr-2 leading-12">I am</h1>
            <div className="w-max">
                <h1 id="typewriter" className="animate-blink overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-2 leading-12">{text}</h1>
            </div>
        </div>
    )
}
