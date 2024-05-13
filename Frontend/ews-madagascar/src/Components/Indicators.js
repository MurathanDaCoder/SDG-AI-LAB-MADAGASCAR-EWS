import React from 'react'
import rain from '../Assets/rain.png'
import { Box, Container, Card, CardContent, Typography, Grid, Button } from '@mui/material';

const indicators = [
    {
        title: "Standardized Precipitation Index (SPI)",
        description: "This indicator measures anomalies of accumulated precipitation during a given period (e.g., 1, 3, 12 months), and is the most commonly used indicator for detecting ..."
    },
    {
        title: "Soil Moisture Anomaly (SMA)",
        description: "This indicator measures anomalies of daily soil moisture (water) content, and is used to measure the start and duration of agricultural drought conditions."
    },
    {
        title: "Anomaly of Vegetation Condition (FAPAR Anomaly)",
        description: "This indicator measures anomalies of satellite-measured FAPAR (Fraction of Absorbed Photosynthetically Active Radiation), and is used to highlight areas of relative vegetation stress due to ..."
    },
    {
        title: "Combined Drought Indicator (CDI)",
        description: "This indicator integrates information on anomalies of precipitation, soil moisture and satellite-measured vegetation condition, into a single index that is used to monitor both the ..."
    }, {
        title: "Standardized Precipitation Index (SPI)",
        description: "This indicator measures anomalies of accumulated precipitation during a given period (e.g., 1, 3, 12 months), and is the most commonly used indicator for detecting ..."
    },
    {
        title: "Soil Moisture Anomaly (SMA)",
        description: "This indicator measures anomalies of daily soil moisture (water) content, and is used to measure the start and duration of agricultural drought conditions."
    },
    {
        title: "Anomaly of Vegetation Condition (FAPAR Anomaly)",
        description: "This indicator measures anomalies of satellite-measured FAPAR (Fraction of Absorbed Photosynthetically Active Radiation), and is used to highlight areas of relative vegetation stress due to ..."
    },
    {
        title: "Combined Drought Indicator (CDI)",
        description: "This indicator integrates information on anomalies of precipitation, soil moisture and satellite-measured vegetation condition, into a single index that is used to monitor both the ..."
    }
];

function Indicators() {
    return (
        <div>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column', // Stacks children vertically
                justifyContent: 'center', // Centers children vertically in the container
                alignItems: 'center', // Centers children horizontally in the container
                height: '30vh',
                backgroundImage: `url(${rain})`,
                backgroundSize: 'cover',  // Ensures the background covers the entire box area
                backgroundRepeat: 'no-repeat',  // Prevents the image from repeating
                backgroundPosition: 'center',
                color: 'white',
                padding: '20px' // Adds padding to prevent text from touching the edges
            }}>
                <h1>Drought Indicators</h1>
                {/* <h2 style={{ color: 'white' }}>Monitor multiple hazard conditions in Madagascar</h2> */}
            </Box>
            <Container sx={{ textAlign: 'center', marginTop: '10vh', marginBottom: '10vh' }}>
                {/* <h2>Indicators</h2> */}
                <p>Drought monitoring is based on the analysis of a series of drought indicators, representing different components of the hydrological cycle (e.g. precipitation, soil moisture, reservoir levels, river flow, groundwater levels) or specific impacts (e.g. vegetation water stress) that are associated with a particular type of drought. The indicators generally represent statistical anomalies of the current situation with respect to the long-term climatology at a given location and period of time, and so they provide a measure of the probabilistic severity of a given event.</p>
            </Container>
            <Box sx={{ flexGrow: 1, padding: 4, textAlign: 'center', marginBottom: '10vh' }}>
                <Typography variant="h4" sx={{ marginBottom: 4 }}>What Drought Indicators are monitored?</Typography>
                <Grid container spacing={2}>
                    {indicators.map((indicator, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Card raised sx={{ minHeight: 260 }}>
                                <CardContent>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{indicator.title}</Typography>
                                    <Typography variant="body2" sx={{ marginTop: 1 }}>{indicator.description}</Typography>
                                    <Button size="small" sx={{ marginTop: 2 }}>Learn more</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    )
}

export default Indicators