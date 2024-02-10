import ContactDetails from "./ContactDetails"
import Typewriter from "./Typewriter"

export default function Home() {
    return (
        <section className="min-h-screen max-md:min-h-[80vh] flex flex-col bg-no-repeat bg-right-bottom md:bg-profile-pic dark:md:bg-profile-pic-dark max-md:bg-none">
            <div className="text-left mt-6 pt-20 max-sm:pt-12">
                <h3 className="mb-4">Hello,</h3>
                <Typewriter texts={["Danielle Zror", "a Software Enginee", "a Troubleshooting Pro", "a Dog Mom"]} />
                <h5 className="mt-12 md:w-4/5 w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at sapien vitae nisl aliquam fringilla. Etiam tempus augue vitae eleifend lacinia. Duis at leo dignissim, iaculis risus vitae, finibus tellus. Cras ullamcorper ut justo at tempor. Nulla convallis est et orci faucibus semper. Nam pulvinar hendrerit est, blandit pretium felis.
                </h5>
            </div>
            <ContactDetails />
        </section>
    )
}
