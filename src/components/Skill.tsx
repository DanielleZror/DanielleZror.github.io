export default function Skill({ skill }: { skill: { icons: string[], title: string, experience: string } }) {
    return (
        <div className="w-1/4 max-md:w-1/3 max-sm:w-1/2 flex flex-col mb-10 pr-4 pl-4">
            <div className="flex gap-4 pb-2">
                {skill.icons.map((icon, key) => (
                    <img className="w-8 h-8 mb-1" src={icon} alt={skill.title} key={key} />
                ))}
            </div>
            <h4 className="pb-2">{skill.title}</h4>
            <span>{skill.experience}</span>
        </div>
    )
}
