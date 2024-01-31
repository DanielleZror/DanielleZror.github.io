export default function Skill({ skill }: { skill: { icons: string[], title: string, experience: string } }) {
    return (
        <div className="w-1/4 max-md:w-1/3 max-sm:w-1/2 flex flex-col pt-4 pb-4">
            <div className="flex gap-2">
                {skill.icons.map((icon, key) => (
                    <img className="w-8 h-8 mb-1" src={icon} alt={skill.title} key={key} />
                ))}
            </div>
            <h3>{skill.title}</h3>
            <span>{skill.experience}</span>
        </div>
    )
}
