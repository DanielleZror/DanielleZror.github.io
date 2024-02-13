export default function Skill({ skill, index }: { skill: { icons: string[], title: string, experience: string }, index: number }) {
    return (
        <div className={`w-1/4 max-md:w-1/3 max-sm:w-1/2 flex flex-col mb-10 pr-4 pl-4 ${index % 2 ? 'max-sm:pr-0' : 'max-sm:pl-0'}`}>
            <div className="flex gap-4 pb-3">
                {skill.icons.map((icon, key) => (
                    <img className="w-8 h-8" src={icon} alt={skill.title} key={key} />
                ))}
            </div>
            <h4 className="pb-3">{skill.title}</h4>
            <span>{skill.experience}</span>
        </div>
    )
}
