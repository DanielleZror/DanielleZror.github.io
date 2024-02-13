import { useEffect, useMemo, useState } from "react"
import Skill from "./Skill"

export default function Skills({ isDarkMode }: { isDarkMode: boolean }) {
    const skillsSet = useMemo(() => [
        {
            icons: ["Python.png"], title: "Python",
            experience: "Proficient in developing backend services serving both RESTful APIs and web applications, with frameworks such as Flask and FastAPI."
        },
        {
            icons: ["React.png", "Vue.png", "Angular.png"], title: "React, Vue & Angular",
            experience: "Crafting dynamic and interactive web applications, utilizing the strengths of each framework to deliver efficient and user-friendly experiences."
        },
        {
            icons: ["MySQL.png", "Oracle.png", "MongoDB.png"], title: "MySQL, Oracle & MongoDB",
            experience: "Experienced in schemas designing, queries optimization, and data integrity across different DataBase platforms."
        },
        {
            icons: [isDarkMode ? "DarkAWS.png" : "AWS.png"], title: "AWS",
            experience: "Architecting distributed systems using services such as EC2, S3, IAM, Route 53, ELB, Lambdas and API Gateway. "
        },
        {
            icons: ["JS.png", "TS.png"], title: "Javascript & Typescript",
            experience: "Expertise in developing scalable and maintainable Frontend and Backend applications, using modern features, best practices and frameworks."
        },
        {
            icons: ["Node.png"], title: "Node",
            experience: "Proficient in developing backend services serving both RESTful APIs and web applications, with frameworks such as Next.js and Express."
        },
        {
            icons: ["Docker.png"], title: "Docker",
            experience: "Leveraging Docker containers in all product lifecycle environments, from development, through staging and production."
        },
        {
            icons: ["Github.png"], title: "Git & Github",
            experience: "Extensive knowledge working with Git, accelerating and optimizing software development lifecycle while leveraging CI/CD workflows in Github Actions."
        }
    ], [isDarkMode])

    const [skills, setSkills] = useState(skillsSet)

    useEffect(() => {
        setSkills(skillsSet)

    }, [isDarkMode, skillsSet])

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
