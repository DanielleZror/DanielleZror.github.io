import Education from "./Education"
import Expericence from "./Expericence"
import Paper from '@mui/material/Paper'

export default function Resume() {
    return (
        <section>
            <h2 className="mb-10">Resume</h2>
            <h3 className="mb-4">Expericence</h3>
            <Paper square={false} elevation={2} sx={{ bgcolor: '#151515', p: '2rem', pt: '0' }}>
                <Expericence />
            </Paper>
            <h3 className="mb-4 mt-12">Education</h3>
            <Paper square={false} elevation={2} sx={{ bgcolor: '#151515', p: '2rem', pt: '0' }}>
                <Education />
            </Paper>
        </section>
    )
}
