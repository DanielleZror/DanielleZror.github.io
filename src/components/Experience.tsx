
import Timeline from "@mui/lab/Timeline"
import { timelineItemClasses } from "@mui/lab/TimelineItem"
import TimelineContent from "@mui/lab/TimelineContent"
import CustomTimelineItem from "./CustomTimelineItem"
import Position from "./Position"

export default function Experience() {
    const companies = [
        {
            name: "Emedgene, an Illumina company",
            positions: [
                {
                    role: "Senior Software Engineer", years: "Apr 2022 - Mar 2023",
                    highlight: "Researched and improved genetic domain workflows, enhancing system architecture and generating $2M revenue; seamlessly migrated core components with zero downtime, preserving data integrity; increased team productivity by 10% through refined work methodology and collaboration; led and mentored a Full-stack team proficient in Python and Vue.js.",
                    desc: [
                        "Researched customer use cases and genetic domain workflows, enhanced system data-sharing network architecture and robustness, leading to $2M revenue.",
                        "Migrated core components to new schemas with zero downtime while maintaining data integrity using MySQL and Python.",
                        "Boosted team productivity by 10% through refining the team's work methodology, fostering effective collaboration and communication in project execution.",
                        "Led, onboarded, and mentored a Full-stack team of 4 engineers, specializing in Python and Vue.js."]
                },
                {
                    role: "Software Engineer", years: "Sept 2020 - Apr 2022",
                    highlight: "Developed genetics data-sharing application in Python and Vue.js, improving customer efficiency by 75%; created self-service platform reducing customer management time by 99%; integrated frontend testing tool, reducing UI changes by 95% and speeding up development by 40%; collaborated with product managers, achieving 35% improvement in feature delivery punctuality.",
                    desc: [
                        "Crafted a genetics data-sharing Python and Vue.js application, increasing customer efficiency and gain time by 75%, through design, architecture, development, and rollout.",
                        "Reduced the time of customer management tasks by 99% by building a self-service platform that validates and creates resources in AWS and MySQL.",
                        "Incorporated a frontend visual testing and review tool into the CI/CD pipeline in GitHub Actions, reducing unnecessary UI changes by 95% and a 40% faster development lifecycle.",
                        "Collaborated closely with product managers to gain a profound understanding of requirements, leading to a 35% improvement in on-time delivery of features."]
                }
            ]
        }, {
            name: "Elite Technology Unit, Israel Defense Forces",
            positions: [
                {
                    role: "Senior Software Engineer & Tech Lead", years: "May 2016 - Oct 2019",
                    highlight: "Led Backend team in creating multi-branch logistic system, standardizing cataloging processes for efficiency; developed Python algorithms for route optimization, reducing time and costs by 10%; implemented APIs for seamless interoperability and consistent data.",
                    desc: [
                        "Led a Backend team of 5 engineers in developing a multi-branch logistic system, enriching data from various sources, resulting in standardized cataloging processes for streamlined operations.",
                        "Designed and developed Python algorithms to identify the most efficient routes, optimizing the utilization of shared resources, resulting in a 10% reduction in time and costs.",
                        "Strategized and implemented APIs between disparate systems, achieving seamless interoperability, optimal performance, and consistent data across platforms."]
                },
                {
                    role: "Software Engineer", years: "May 2013 - May 2016",
                    highlight: "Developed and optimized backend services for logistics system, enhancing system efficiency and integration; achieved fourfold increase in integration frequency and 75% improvement in processing execution via automated data enrichment process; governed production environment, minimized errors through automation, and maintained continuous uptime.",
                    desc: [
                        "Developed and optimized backend services to support logistic systems, resulting in improved system efficiency and integration.",
                        "Achieved a fourfold increase in integration frequency and improved processing execution by 75%, through the development and optimization of an automated data enrichment process.",
                        "Governed the production environment and troubleshooting, implemented automation to minimize errors, and maintained continuous operational uptime."
                    ]
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
                            <TimelineContent sx={{ pr: 0 }}>
                                <Position position={experience} />
                            </TimelineContent>
                        </CustomTimelineItem>
                    ))}
                </div>
            ))}
        </Timeline>
    )
}
