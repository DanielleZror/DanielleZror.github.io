import Skill from "./Skill"

export default function Skills() {
    const skills = [
        {
            icons: ["Python.png"], title: "Python",
            experience: "Proficient in Python with specialized expertise in building web applications using both Flask and FastAPI frameworks. Skilled in designing RESTful APIs, implementing authentication, and optimizing performance for scalable applications."
        },
        {
            icons: ["React.png", "Vue.png", "Angular.png"], title: "React, Vue & Angular",
            experience: "Proficient in frontend development frameworks including React, Vue.js, and Angular. Skilled in building dynamic and interactive web applications, utilizing the strengths of each framework to deliver efficient and user-friendly experiences."
        },
        {
            icons: ["MySQL.png", "Oracle.png", "MongoDB.png"], title: "MySQL, Oracle & MongoDB",
            experience: "Proficient in database management systems including MySQL, Oracle, and MongoDB. Skilled in designing schemas, optimizing queries, and ensuring data integrity across different database platforms."
        },
        {
            icons: ["AWS.png"], title: "AWS",
            experience: "Deploying and managing cloud infrastructure on AWS, including EC2 instances, S3 buckets, IAM roles, Route 53, and Elastic Load Balancer (ELB) setup. Experienced in leveraging AWS Lambda and API Gateway for serverless computing. "
        },
        {
            icons: ["JS.png", "TS.png"], title: "Javascript & Typescript",
            experience: "Proficient in both JavaScript and TypeScript, with expertise in developing scalable and maintainable frontend and backend applications, leveraging modern language features and best practices."
        },
        {
            icons: ["Node.png"], title: "Node",
            experience: "Proficient in Node.js development, with expertise in building scalable and efficient server-side applications, RESTful APIs, and real-time web services using the Node.js runtime environment."
        },
        { icons: ["Docker.png"], title: "Docker", experience: "put here your experience" },
        {
            icons: ["Java.png"], title: "Java",
            experience: "Developed a set of microservices, each adhering to core Java principles such as Object-Oriented Programming (OOP), design patterns, and multi-threading."
        },
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
