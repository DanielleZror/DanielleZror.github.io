
import Timeline from "@mui/lab/Timeline"
import { timelineItemClasses } from "@mui/lab/TimelineItem"
import TimelineContent from "@mui/lab/TimelineContent"
import ShowMoreText from "./ShowMoreText"
import CustomTimelineItem from "./CustomTimelineItem"

export default function Experience() {
    const companies = [
        {
            name: "Emedgene, an Illumina company",
            positions: [
                {
                    role: "Engineering Manager", years: "Apr 2022 - Mar 2023",
                    desc: "Leading a Full Stack team of 4 engineers, onboarding and mentoring new engineers. \
                            Facilitating discussions on large- scale distributed system architecture, with a focus on optimization for performance, scalability, and reliability. \
                            Developing, refactoring, and integrating features with a strong focus on functionality, performance, and maintainability. \
                            Successfully executing seamless migrations of core components to new schemas, ensuring zero downtime and data integrity, leveraging SQL and DB expertise. \
                            Leading troubleshooting and root cause analysis on production incidents. \
                            Steering project roadmap in collaboration with product managers and VP of R& D." },
                {
                    role: "Full Stack Engineer", years: "Sep 2020 - Apr 2022",
                    desc: "Leading projects from conception and design through execution to achieve successful deployment in production. \
                    Effectively addressing complex technical challenges and creating data-processing algorithms in medical genetics. \
                    Architecting, integrating, and implementing frontend testing within the CI/CD pipeline to improve the organizational software development lifecycle. \
                    Collaborating closely with product managers to deeply understand clients' requirements and needs, and translating them into effective solutions."
                }
            ]
        }, {
            name: "Elite Technology Unit, Israel Defense Forces",
            positions: [
                {
                    role: "Engineering Manager & Tech Lead", years: "Apr 2022 - Mar 2023",
                    desc: "Leading a Backend Engineering team of large-scale processing systems with 5 engineers. \
                Developing Python algorithms to address mathematical challenges and innovate product solutions. \
                Strategizing, analyzing, and developing complex APIs to optimize business logic and efficiency, all while defining and incorporating new requirements." },
                {
                    role: "Software Engineer", years: "Sep 2020 - Apr 2022",
                    desc: "Developing, optimizing, and maintaining large-scale processing systems. \
                    Production environment ownership including rollouts, maintenance, and troubleshooting, while ensuring operational uptime. \
                    SQL and DB proficiency in all environments including complex queries optimization."
                }
            ]
        }
    ]
    return (
        <Timeline sx={{
            [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
            }
        }}>
            {companies.map((company, key) => (
                <div key={key} className="mb-4">
                    <h3>{company.name}</h3>
                    {company.positions.map((experience, key) => (
                        <CustomTimelineItem key={key}>
                            <TimelineContent sx={{ ml: "16px" }}>
                                <h4>{experience.role}</h4>
                                <h6 className="mb-3">{experience.years}</h6>
                                <ShowMoreText text={experience.desc} />
                            </TimelineContent>
                        </CustomTimelineItem>
                    ))}
                </div>
            ))}
        </Timeline>
    )
}
