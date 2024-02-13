import ContactDetails from "./ContactDetails"
import Typewriter from "./Typewriter"

export default function Home() {
    return (
        <section className="min-h-[90vh] max-md:min-h-[80vh] flex flex-col bg-no-repeat bg-right-bottom md:bg-profile-pic dark:md:bg-profile-pic-dark max-md:bg-none">
            <div className="text-left mt-6 pt-20 max-sm:pt-12">
                <h3 className="mb-4">Hello,</h3>
                <Typewriter texts={["Danielle Zror", "a Software Enginee", "a Troubleshooting Pro", "a Dog Mom"]} />
                <h5 className="mt-12 md:w-4/5 w-full">
                    Hey there! I am Danielle, I juggle code and creativity, I brew ideas like a barista crafts coffee, and I turn complex problems into elegant solutions! When I'm not busy turning coffee into code and debugging with my trusty rubber duck, you'll likely find me hitting the gym or enjoying quality time with my furry dog Lola.
                </h5>
                <h5 className="mt-4 md:w-4/5 w-full">
                    I bring a unique blend of energy, creativity, and determination to every team and project.
                </h5>
                <h5 className="mt-4 md:w-4/5 w-full">
                    So, if you're looking for a programming expert to turn your tech dreams into reality, look no further!
                </h5>
            </div>
            <ContactDetails />
        </section>
    )
}
