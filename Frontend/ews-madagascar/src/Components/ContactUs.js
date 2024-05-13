import React from 'react';
import { Box, Grid, Typography, TextField, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import TwitterIcon from '@mui/icons-material/Twitter';
import drought from '../Assets/drought3.jpg'
const ContactUs = () => {
    return (<div>
        <Box sx={{
            display: 'flex',
            flexDirection: 'column', // Stacks children vertically
            justifyContent: 'center', // Centers children vertically in the container
            alignItems: 'center', // Centers children horizontally in the container
            height: '30vh',
            backgroundImage: `url(${drought})`,
            backgroundSize: 'cover',  // Ensures the background covers the entire box area
            backgroundRepeat: 'no-repeat',  // Prevents the image from repeating
            backgroundPosition: 'center',
            color: 'white',
            padding: '20px' // Adds padding to prevent text from touching the edges
        }}>
            <h1>Contact Us</h1>
            {/* <h2 style={{ color: 'white' }}>Monitor multiple hazard conditions in Madagascar</h2> */}
        </Box>
        <Box sx={{ flexGrow: 1, padding: 4, paddingLeft: "30vh", paddingRight: "30vh" }}>
            <Grid container spacing={10} >
                {/* Contact Form Section */}
                <Grid item xs={12} md={8}>
                    <Typography variant="h6" gutterBottom>Topic</Typography>
                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="General question or feedback"
                    />
                    <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>Email Address</Typography>
                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Type email address here"
                    />
                    <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>Message</Typography>
                    <TextField
                        fullWidth
                        variant="outlined"
                        multiline
                        rows={4}
                        placeholder="Type message here"
                    />
                    <Button variant="contained" sx={{ marginTop: 2 }}>Send</Button>
                </Grid>

                {/* Sidebar Contact Info */}
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>Get in Touch</Typography>
                    <Typography variant="body2" sx={{ marginBottom: 2 }}>
                        Get in touch with us and we will get back to you as soon as we can.
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText primary="IGAD Climate Prediction & Applications Centre (ICPAC)" secondary="P.O. BOX 10304 - 00100, Nairobi, Kenya" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><EmailIcon /></ListItemIcon>
                            <ListItemText primary="Media requests" secondary="disaster-risk-management@igad.int" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><TwitterIcon /></ListItemIcon>
                            <ListItemText primary="Twitter" secondary="@icpac_igad" />
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Box>
    </div>
    );
};

export default ContactUs;
