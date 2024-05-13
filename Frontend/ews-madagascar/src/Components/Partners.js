import React from 'react'
import { Box, Paper, Container, Card, CardContent, Typography, Grid, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import questions from '../Assets/questions.jpg'
import pcimage from '../Assets/pcimage.png'
import backgroundInfo from '../Assets/backgroundinfo.png'
import logo1 from '../Assets/UNDP_logo1.png'
function Partners() {
    return (
        <div>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column', // Stacks children vertically
                justifyContent: 'center', // Centers children vertically in the container
                alignItems: 'center', // Centers children horizontally in the container
                height: '30vh',
                backgroundImage: `url(${questions})`,
                backgroundSize: 'cover',  // Ensures the background covers the entire box area
                backgroundRepeat: 'no-repeat',  // Prevents the image from repeating
                backgroundPosition: 'center',
                color: 'white',
                padding: '20px' // Adds padding to prevent text from touching the edges
            }}>
                <h1>Partners</h1>
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

            <Box sx={{ width: '100%', padding: 4, backgroundColor: '#fff', marginTop: 3 }}>
                <Typography variant="h5" gutterBottom textAlign="center" sx={{
                    fontFamily: 'Jost, Arial, sans-serif', // Choosing a common sans-serif font
                    fontWeight: 700, // Lighter font weight
                    letterSpacing: 2, // Increase letter spacing for a more airy feel
                    color: '#333' // A soft black for text color
                }}>
                    Our Partners
                </Typography>
                <Grid container justifyContent="center" spacing={2} marginTop={3}>
                    {[logo1, logo1, logo1, logo1, logo1].map((logo, index) => (
                        <Grid item xs={12} sm={6} md={2} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Paper elevation={0} sx={{ padding: 2 }}>
                                <img src={logo} alt={`Partner ${index + 1}`} style={{ maxWidth: '30%', height: 'auto' }} />
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    )
}

export default Partners