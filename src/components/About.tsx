export default function About() {
    return (
        <section className="dark:bg-black-400 bg-white-400">
            <h2>About Me</h2>
            <div className="flex">
                <h4 className=" pr-2">Hello! </h4>
                <h4 className="text-pink dark:text-pink selection:bg-pink-200 dark:selection:bg-pink-200">I'm Danielle Zror</h4>
            </div>
            <div className="flex justify-center transition-height duration-500 ease-in-out md:h-0 max-md:h-64">
                <img src="Profile.png" alt="Profile" />
            </div>
            <h5>
                I am a Software engineer with more than 9 years, with a track record of delivering high-quality projects on time. My expertise lies in software development, with proficiency in languages and frameworks such as Python, TavaScript, React.js, Vue.js as well as Databases like MySQL, MongoDB, Oracle, ArnagoDB, and more.
            </h5>
            <h5 className="mt-4">
                My strong problem-solving skills and attention to details have enabled me to identify and resolve complex technical challenges efficiently. I have led multiple software projects from conception to deployment, collaborating closely with cross-functional teams to exceed customer expectations.            </h5>
            {/* Why I'm Different? */}
            <h5 className="mt-4">
                My strengths lie in excellent problem-solving, creative design solutions, and architectural capabilities. I'm highly motivated, technology-driven, and possess a keen aptitude for self-learning. Whether working independently or as part of a team, I thrive on challenges and consistently deliver exceptional results.
            </h5>
            <h5 className="mt-4">
                Now, I'm eagerly seeking my next challenge in the software engineering world, where I can leverage my expertise and drive innovation to new heights.
            </h5>
        </section>
    )
}
