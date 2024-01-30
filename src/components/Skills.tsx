import Skill from "./Skill"

export default function Skills() {
    const skills = [
        { icons: ["Angular.png"], title: "Angular", experience: "put here your experience" },
        { icons: ["AWS.png"], title: "AWS", experience: "put here your experience" },
        { icons: ["JS.png"], title: "Javascript", experience: "put here your experience" },
        { icons: ["Node.png"], title: "Node", experience: "put here your experience" },
        { icons: ["Python.png"], title: "Python", experience: "put here your experience" },
        { icons: ["React.png"], title: "React", experience: "put here your experience" },
        { icons: ["TS.png"], title: "Typescript", experience: "put here your experience" },
        { icons: ["Vue.png"], title: "Vue", experience: "put here your experience" },
        { icons: ["HTML.png", "CSS.png"], title: "HTML, CSS", experience: "put here your experience" }

    ]
    return (
        <section>
            <h2>Skills</h2>
            <div className="flex flex-wrap">
                {skills.map((skill, key) => (
                    <Skill skill={skill} key={key} />
                ))}
            </div>
        </section>
    )
}
