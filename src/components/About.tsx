export default function About() {
    return (
        <section className="bg-black-400">
            <h2 className="mb-10">About Me</h2>
            <h4>Hello, I'm Danielle Zror</h4>
            <div className="flex justify-center transition-height duration-500 ease-in-out md:h-0 max-md:h-64">
                <img src="Profile.png" alt="Profile" />
            </div>
            <h5>
                I'm an experienced software engineer with a strong product mindset, skilled in Python, frontend frameworks, SQL, and OOP principles. Excellent problem-solving, creative design solutions, and architectural capabilities.
                Highly motivated, technology-driven, self-learner, independent, and a team player.
            </h5>
            <h5 className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at sapien vitae nisl aliquam fringilla. Etiam tempus augue vitae eleifend lacinia. Duis at leo dignissim, iaculis risus vitae, finibus tellus. Cras ullamcorper ut justo at tempor. Nulla convallis est et orci faucibus semper. Nam pulvinar hendrerit est, blandit pretium felis.
            </h5>
            {/* Why I'm Different? */}
        </section>
    )
}
