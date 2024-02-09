
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
                { role: "Engineering Manager", years: "Apr 2022 - Mar 2023", desc: "Managing a team of 4 developers. Leading discussions and architectural designs for large systems and Data Bases Migrating core components to new schemas without downtime or data loss. Leading projects' roadmap by working closely with product managers and VP R&D. Developing, refactoring, and integrating new features. Leading troubleshooting and root cause analysis on production incidents. Onboarding and mentoring new people." },
                { role: "Full Stack Engineer", years: "Sep 2020 - Apr 2022", desc: "Managing a team of 4 developers. Leading discussions and architectural designs for large systems and Data Bases Migrating core components to new schemas without downtime or data loss. Leading projects' roadmap by working closely with product managers and VP R&D. Developing, refactoring, and integrating new features. Leading troubleshooting and root cause analysis on production incidents. Onboarding and mentoring new people." }
            ]
        }, {
            name: "Elite Technology Unit, Israel Defense Forces",
            positions: [
                { role: "Engineering Manager & Tech Lead", years: "Apr 2022 - Mar 2023", desc: "Managing a team of 4 developers. Leading discussions and architectural designs for large systems and Data Bases Migrating core components to new schemas without downtime or data loss. Leading projects' roadmap by working closely with product managers and VP R&D. Developing, refactoring, and integrating new features. Leading troubleshooting and root cause analysis on production incidents. Onboarding and mentoring new people." },
                { role: "Software Engineer", years: "Sep 2020 - Apr 2022", desc: "Managing a team of 4 developers. Leading discussions and architectural designs for large systems and Data Bases Migrating core components to new schemas without downtime or data loss. Leading projects' roadmap by working closely with product managers and VP R&D. Developing, refactoring, and integrating new features. Leading troubleshooting and root cause analysis on production incidents. Onboarding and mentoring new people." }
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
