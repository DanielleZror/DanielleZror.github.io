
import TimelineItem from "@mui/lab/TimelineItem"
import TimelineSeparator from "@mui/lab/TimelineSeparator"
import TimelineConnector from "@mui/lab/TimelineConnector"
import TimelineDot from "@mui/lab/TimelineDot"
import { ReactNode } from "react"

export default function CustomTimelineItem({ children, className }: { children: ReactNode, className?: string }) {

    return (
        <TimelineItem className={`ml-3 ${className}`}>
            <TimelineSeparator>
                <TimelineDot variant="outlined" sx={{ borderColor: "#F64293" }} />
                <TimelineConnector />
            </TimelineSeparator>
            {children}
        </TimelineItem>
    )
}
