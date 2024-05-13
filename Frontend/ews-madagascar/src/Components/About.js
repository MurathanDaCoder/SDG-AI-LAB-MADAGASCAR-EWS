import React from 'react'
import { Box, Container, Card, CardContent, Typography, Grid, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import aboutbackground from '../Assets/aboutbackground.jpg'
import pcimage from '../Assets/pcimage.png'
import backgroundInfo from '../Assets/backgroundinfo.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import questions from '../Assets/questions.jpg'
function About() {
    return (
        <div>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column', // Stacks children vertically
                justifyContent: 'center', // Centers children vertically in the container
                alignItems: 'center', // Centers children horizontally in the container
                height: '30vh',
                backgroundImage: `url(${aboutbackground})`,
                backgroundSize: 'cover',  // Ensures the background covers the entire box area
                backgroundRepeat: 'no-repeat',  // Prevents the image from repeating
                backgroundPosition: 'center',
                color: 'white',
                padding: '20px' // Adds padding to prevent text from touching the edges
            }}>
                <h1>About Page</h1>
                {/* <h2 style={{ color: 'white' }}>Monitor multiple hazard conditions in Madagascar</h2> */}
            </Box>
            <Box sx={{
                // marginTop: '200px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center', // Added to vertically align items if their heights differ
                backgroundImage: `url(${backgroundInfo})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}>
                <div style={{
                    flex: 1, // Gives the div a flexible width, replacing the static '60%'
                    padding: '0 2vw', // Adds horizontal padding inside the div
                }}>
                    <h2>Madagascar EWS</h2>
                    <p style={{ fontSize: '20px' }}>
                        The East Africa Drought Watch is a near-real time system that uses Earth Observation and Weather information to monitor drought conditions in the East Africa region. It contains drought-relevant information such as maps of indicators derived from different data sources (e.g., precipitation measurements, satellite measurements, modelled soil moisture content). Different tools, like Graphs and Compare Layers, allow for displaying and analysing the information and drought reports give an overview of the situation in case of imminent droughts.
                        <br /><br />
                        The system is a service developed as part of the Intra-ACP Climate Services Project in collaboration with the Drought group of the Natural Disaster Risk Unit at the Joint Research Centre of the European Commission. The system is an adaptation of the European Drought Observatory (EDO) to the conditions in the East Africa region.
                    </p>
                </div>
                <div style={{
                    flex: 0.67, // Corresponds to approximately 40% of the space, adjusting to the parent flex rule
                    display: 'flex',
                    justifyContent: 'center', // Centers the image within the div
                }}>
                    <img src={pcimage} alt="" style={{
                        maxWidth: '100%', // Makes the image responsive within the container
                        height: 'auto',
                        borderRadius: '20px',
                        marginTop: '20px',
                        marginBottom: '20px'
                    }} />
                </div>
            </Box>
            <Box sx={{ width: '100%', maxWidth: 800, margin: 'auto', padding: 4 }}>
                <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
                    What is Drought?
                </Typography>
                <Typography variant="body1" paragraph>
                    Drought is a recurrent feature of the climate that results from a <b>shortfall in precipitation</b> over an period of
                    time, its inadequate timing compared to the needs of the vegetation cover, or a <b>negative water balance</b> due to
                    an increased potential evapo-transpiration caused by high temperatures.
                </Typography>
                <Typography variant="body1" paragraph>
                    These conditions may be <b>exacerbated by strong winds, atmospheric blocking patterns and antecedent
                        conditions</b> in soil moisture, reservoirs and aquifers, for example. If this situation leads to an unusual and
                    temporary deficit in water availability, it is termed a drought. Droughts are to be distinguished from <b>aridity</b>, a
                    permanent climatic feature, and from <b>water scarcity</b>, a situation where the climatologically available water
                    resources are insufficient to satisfy long-term average water requirements.
                </Typography>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="subtitle1">Meterological Drought</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Information about meteorological drought and its impact.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="subtitle1">Agricultural Drought</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Details on how agricultural drought affects crop yield and soil conditions.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="subtitle1">Hydrological Drought</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Discussion on the implications of hydrological drought on water resources.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="subtitle1">Socioeconomic Drought</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Analysis of socioeconomic drought and its effects on society and economies.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // height: '100vh',
                // marginBottom: '20px',
                marginTop: '20px',
                backgroundColor: '#f5f5f5',
                padding: '20px',
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundImage: `url(${questions})`, // Using imported image
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '60%',
                    height: 300,
                    borderRadius: '20px',
                    // boxShadow: theme.shadows[3],
                    color: 'white',
                    position: 'relative',
                    overflow: 'hidden',
                }}>
                    <Box sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    }} />
                    <Box sx={{
                        position: 'relative',
                        p: 3,
                        zIndex: 2,
                        textAlign: 'center',
                    }}>
                        <Typography variant="h5" gutterBottom>
                            Questions, comments, or feedback?
                        </Typography>
                        <Button variant="contained" onClick={() => console.log("Contact Us Clicked")}>
                            Contact Us
                        </Button>
                    </Box>
                </Box>
            </div>
        </div>
    )
}

export default About