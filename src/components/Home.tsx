import Typewriter from "./Typewriter"

export default function Home() {
    return (
        <section className="text-left flex">
            <div className="w-2/3 pt-20 ">
                <h3 className="mb-4">Hello,</h3>
                <Typewriter texts={["Danielle Zror", "a Software Enginee", "a Troubleshooting Pro", "a Dog Mom"]} />
            </div>
            <div className="w-1/3">
                <img className="" src="Github.png" alt="Profile" />
            </div>
        </section>
    )
}
