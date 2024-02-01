import ContactDetails from "./ContactDetails"
import Typewriter from "./Typewriter"

export default function Home() {
    return (
        <section className="min-h-screen relative">
            <div className="text-left flex mt-6">
                <div className="w-2/3 pt-20">
                    <h3 className="mb-4">Hello,</h3>
                    <Typewriter texts={["Danielle Zror", "a Software Enginee", "a Troubleshooting Pro", "a Dog Mom"]} />
                    <h5 className="mt-12">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at sapien vitae nisl aliquam fringilla. Etiam tempus augue vitae eleifend lacinia. Duis at leo dignissim, iaculis risus vitae, finibus tellus. Cras ullamcorper ut justo at tempor. Nulla convallis est et orci faucibus semper. Nam pulvinar hendrerit est, blandit pretium felis.
                    </h5>
                </div>
                <div className="w-1/3 self-center">
                    <img src="Github.png" alt="Profile" />
                </div>
            </div>
            <ContactDetails className="absolute bottom-0 mb-20" />
        </section>
    )
}
