
import TimelineItem from "@mui/lab/TimelineItem"
import TimelineSeparator from "@mui/lab/TimelineSeparator"
import TimelineConnector from "@mui/lab/TimelineConnector"
import TimelineDot from "@mui/lab/TimelineDot"
import { ReactNode } from "react"

export default function CustomTimelineItem(props: { children: ReactNode }) {

    return (
        <TimelineItem className="ml-3">
            <TimelineSeparator>
                <TimelineDot variant="outlined" sx={{ borderColor: "#F64293" }} />
                <TimelineConnector />
            </TimelineSeparator>
            {props.children}
        </TimelineItem>
    )
}
