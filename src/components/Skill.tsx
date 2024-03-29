export default function Skill({ skill, index }: { skill: { icons: string[], title: string, experience: string, largeIcons?: boolean }, index: number }) {
    return (
        <div className={`w-1/4 max-[1000px]:w-1/3 max-[800px]:w-1/2 flex flex-col mb-10 pr-4 pl-4 ${index % 2 ? 'max-sm:pr-0' : 'max-sm:pl-0 max-sm:pr-0'}`}>
            <div className="flex gap-2 pb-3">
                {skill.icons.map((icon, key) => (
                    <img className={`${skill.largeIcons ? 'w-14' : 'w-8'}`} src={icon} alt={skill.title} key={key} />
                ))}
            </div>
            <h4 className="pb-3">{skill.title}</h4>
            <span>{skill.experience}</span>
        </div>
    )
}
