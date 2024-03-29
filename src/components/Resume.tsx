import Education from "./Education"
import Experience from "./Experience"
import Paper from '@mui/material/Paper'

export default function Resume() {
    return (
        <section>
            <h2>Resume</h2>
            <h3 className="mb-4">Experience</h3>
            <Paper square={false} elevation={0} sx={{ p: { xs: '0.5rem', sm: '2rem' }, pt: '0', borderRadius: 4 }}>
                <Experience />
            </Paper>
            <h3 className="mb-4 mt-12">Education</h3>
            <Paper square={false} elevation={0} sx={{ p: { xs: '0.5rem', sm: '2rem' }, pt: '0', borderRadius: 4 }}>
                <Education />
            </Paper>
        </section>
    )
}
