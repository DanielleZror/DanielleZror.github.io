
import Timeline from "@mui/lab/Timeline"
import { timelineItemClasses } from "@mui/lab/TimelineItem"
import TimelineContent from "@mui/lab/TimelineContent"
import CustomTimelineItem from "./CustomTimelineItem"

export default function Education() {
    const institutions = [
        {
            name: "",
            years: "2023",
            title: "AWS Certified Cloud Practitioner",
            link: "https://www.credly.com/badges/8bb48aab-ecb0-4d49-8324-9ce822b0284e/linked_in_profile"
        }, {
            name: "The College of Management, Israel",
            years: "2014-2018",
            title: "B.Sc. Computer Science"
        },
        {
            name: "Elite Technology Unit, Israel Defense Forces",
            years: "2012-2013",
            title: "Computer Programming Course"
        }
    ]
    return (
        <Timeline sx={{
            [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
            }
        }}>
            {institutions.map((institution, key) => (
                <CustomTimelineItem key={key} className="last:mb-4">
                    <TimelineContent sx={{ px: '32px', py: '30px' }}>
                        {institution.link ? <a href={institution.link} target="_blank" rel="noreferrer"><h4 className="hover:text-pink hover:underline hover:selection:bg-pink-200 ">{institution.title}</h4></a> : <h4>{institution.title}</h4>}
                        {institution.name && <h6 className="mb-3">{institution.name}</h6>}
                        <h6>{institution.years}</h6>
                    </TimelineContent>
                </CustomTimelineItem>
            ))}
        </Timeline>
    )
}
