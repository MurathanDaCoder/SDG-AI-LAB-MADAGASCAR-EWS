import { Box, Container } from '@mui/material'
import React from 'react'
import drought from '../Assets/drought3.jpg'
import backgroundInfo from '../Assets/backgroundinfo.png'
import pcimage from '../Assets/pcimage.png'
import { MapContainer, TileLayer } from 'react-leaflet'
import { styled } from '@mui/material/styles';

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    width: "100%", marginRight: "4px",
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: 'brown',
    },
}));

function Home() {
    return (
        <div>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column', // Stacks children vertically
                justifyContent: 'center', // Centers children vertically in the container
                alignItems: 'center', // Centers children horizontally in the container
                height: '50vh',
                backgroundImage: `url(${drought})`,
                backgroundSize: 'cover',  // Ensures the background covers the entire box area
                backgroundRepeat: 'no-repeat',  // Prevents the image from repeating
                backgroundPosition: 'center',
                color: 'white',
                padding: '20px' // Adds padding to prevent text from touching the edges
            }}>
                <h1>Madagascar Multi-Hazard Emergency Warning System</h1>
                <h2 style={{ color: 'white' }}>Monitor multiple hazard conditions in Madagascar</h2>
            </Box>

            <Box sx={{
                display: 'flex',
                flexDirection: 'row', // Aligns children horizontally
                justifyContent: 'center', // Distributes space evenly between children
                // alignItems: 'center', // Centers children vertically in the container
                // height: '50vh',
                // padding: '20px', // Adds padding to prevent content from touching the edges
                marginRight: '20vh',
                marginLeft: '20vh',
                marginTop: '50px'
            }}>
                <div style={{ width: '50%', height: '50vh', textAlign: 'center' }}>
                    <h3>Latest Situation of Hazard conditions</h3>
                    <MapContainer center={[-18.766947, 46.869107]} zoom={5} style={{ height: '100%', width: '100%' }}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    </MapContainer>
                </div>
                <div style={{ width: '50%', height: '100%', marginLeft: '100px', }}>
                    <h3
                        style={{ textAlign: 'center' }}
                    >Hazard Stress Level per Province</h3>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{}}>
                            <p>Antananarivo</p>
                            <BorderLinearProgress
                                value={80}
                                variant="determinate"
                            // style={{ marginLeft: '20px' }}

                            />
                            {/* <Progress /> */}
                        </div>
                        <div >
                            <p>Antsiranana</p>
                            <BorderLinearProgress
                                value={70}
                                variant="determinate"
                            // style={{ marginLeft: '20px' }}

                            />
                        </div>
                        <div >
                            <p>Fianarantsoa</p>
                            <BorderLinearProgress
                                value={60}
                                variant="determinate"
                            // style={{ marginLeft: '20px' }}

                            />
                        </div>
                        <div >
                            <p>Mahajanga</p>
                            <BorderLinearProgress
                                value={50}
                                variant="determinate"
                            // style={{ marginLeft: '20px' }}

                            />
                        </div>
                        <div >
                            <p>Toamasina</p>
                            <BorderLinearProgress
                                value={40}
                                variant="determinate"
                            // style={{ marginLeft: '20px' }}

                            />
                        </div>
                        <div >
                            <p>Toliara</p>
                            <BorderLinearProgress
                                value={30}
                                variant="determinate"
                            // style={{ marginLeft: '20px' }}

                            />
                        </div>

                    </div>
                </div>
            </Box>

            <Box sx={{
                marginTop: '200px',
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
                    }} />
                </div>
            </Box>
            <Box sx={{
                height: '10vh',
            }} />

        </div>
    )
}

export default Home