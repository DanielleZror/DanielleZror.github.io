import Observer from "../icons/Observer"
import ProblemSolving from "../icons/ProblemSolving"
import CreativeDesign from "../icons/CreativeDesign"
import ProductMindset from "../icons/ProductMindset"
import Collaboration from "../icons/Collaboration"
import Organized from "../icons/Organized"
import IconDescription from "./IconDescription"

export default function About() {
    const uniqueness = [
        {
            icon: <ProblemSolving size={28} color="#E9A5C5" />,
            description: "I thrive in problem-solving and executing comprehensive root-cause analysis."
        },
        {
            icon: <CreativeDesign size={28} color="#E9A5C5" />,
            description: "Crafting creative design solutions while leveraging strong architectural capabilities."
        },
        {
            icon: <Observer size={28} color="#E9A5C5" />,
            description: "Possessing early-stage insight and a forward-thinking vision, I navigate projects strategically."
        },
        {
            icon: <ProductMindset size={28} color="#E9A5C5" />,
            description: "Driven by a strong product mindset and a keen eye for UI/UX perfection."
        },
        {
            icon: <Collaboration size={28} color="#E9A5C5" />,
            description: "I excel in teamwork, uplifting both myself and others, fostering collaboration, and enhancing overall team effectiveness."
        },
        {
            icon: <Organized size={28} color="#E9A5C5" />,
            description: "My organizational skills ensure efficient task and time management, prioritization, and timely project completion."
        }
    ]
    return (
        <section className="dark:bg-black-400 bg-white-400">
            <h2 className="max-md:mb-8">About Me</h2>
            <div className="flex justify-center transition-height duration-500 ease-in-out md:h-0 max-md:h-64 max-md:mb-8">
                <img src="Profile.png" alt="Profile" />
            </div>
            <h5 className="mb-4">
                I am a Software Engineer with more than 9 years, with a track record of delivering high-quality projects on time. My expertise lies in software development, with proficiency in languages and frameworks such as Python, JavaScript, React.js, Vue.js as well as Databases like MySQL, MongoDB, Oracle, ArangoDB, and more.
            </h5>
            <h5 className="mb-4">
                My strong problem-solving skills and attention to detail have enabled me to identify and resolve complex technical challenges efficiently throughout the years. I'm highly motivated, and technology-driven, and possess a keen aptitude for self-learning. I have led multiple software projects from conception to deployment, collaborating closely with cross-functional teams to exceed customer expectations.
            </h5>
            <h5 className="font-semibold mb-8">
                I'm seeking my next challenge in the software engineering world, where I can leverage my expertise and drive innovation to new heights.
            </h5>
            <h4 className="text-pink dark:text-pink selection:bg-pink-200 dark:selection:bg-pink-200">
                What is my uniqueness?
            </h4>
            <div className="grid grid-cols-[repeat(3,1fr)] max-md:grid-cols-[repeat(2,1fr)] pt-6 gap-4 text-center">
                {uniqueness.map((u, key) => {
                    return (
                        <IconDescription key={key} className="flex-col"
                            description={u.description}
                            icon={() => u.icon} />
                    )
                })}
            </div>
        </section>
    )
}
