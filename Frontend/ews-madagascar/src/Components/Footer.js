// Footer.js
import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Box sx={{
            backgroundColor: '#f5f5f5',
            color: '#3e2723', // Deep brown color for the text
            padding: '20px',
            marginTop: 'auto',
            fontFamily: "'Roboto', sans-serif", // Ensures the whole box uses Roboto by default
        }}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" sx={{ color: '#0d47a1', fontWeight: 'bold' }}>MADAGASCAR HAZARD WATCH</Typography>
                    <Typography sx={{ color: '#3e2723' }}>IGAD Climate Prediction & Applications Centre (ICPAC)</Typography>
                    <Typography sx={{ color: '#3e2723' }}>P.O. BOX 10304 - 00100</Typography>
                    <Typography sx={{ color: '#3e2723' }}>Nairobi, Kenya</Typography>
                    <Typography sx={{ color: '#3e2723' }}>Email: disaster-risk-management@igad.int</Typography>
                    <Typography sx={{ color: '#3e2723' }}>Twitter: @icpac_igad</Typography>
                </Grid>
                <Grid item xs={6} sm={4}>
                    <Typography variant="h6" sx={{ color: '#0d47a1', fontWeight: 'bold' }}>Useful Links</Typography>
                    <Link to="/" style={{ color: '#5d4037', textDecoration: 'none', display: 'block', margin: '8px 0' }}>Home</Link>
                    <Link to="/mapviewer" style={{ color: '#5d4037', textDecoration: 'none', display: 'block', margin: '8px 0' }}>Mapviewer</Link>
                    <Link to="/drought-indicators" style={{ color: '#5d4037', textDecoration: 'none', display: 'block', margin: '8px 0' }}>Drought Indicators</Link>
                    <Link to="/about" style={{ color: '#5d4037', textDecoration: 'none', display: 'block', margin: '8px 0' }}>About</Link>
                    <Link to="/partners" style={{ color: '#5d4037', textDecoration: 'none', display: 'block', margin: '8px 0' }}>Partners</Link>
                </Grid>
                <Grid item xs={6} sm={4}>
                    <Typography variant="h6" sx={{ color: '#0d47a1', fontWeight: 'bold' }}>Get In Touch</Typography>
                    <Typography sx={{ color: '#3e2723' }}>Questions, comments, or feedback?</Typography>
                    <Button variant="outlined" color="primary" sx={{ marginTop: '8px' }}>Give Us Feedback</Button>
                </Grid>
            </Grid>
            <Typography sx={{ marginTop: '20px', textAlign: 'center', color: '#3e2723' }}>© MURTI 2024</Typography>
        </Box>
    );
}

export default Footer;
