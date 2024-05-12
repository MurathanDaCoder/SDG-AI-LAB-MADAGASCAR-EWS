import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import UNDPLogo from "../Assets/UNDP-logo-white.png";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>

          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flex: 1 }}>
            <Typography variant="h6" component="div" sx={{ marginRight: { xs: '10px', sm: '20px', md: '100px' } }}>
              {/* Logo here */}
              <img src={UNDPLogo} alt="" style={{ height: '50px' }} />
            </Typography>
            <Link to="/" style={{ color: "inherit", textDecoration: "none", margin: '0 10px' }}>
              <Button color="inherit" sx={{ fontWeight: "medium" }}>HOME</Button>
            </Link>
            <Link to="/map" style={{ color: "inherit", textDecoration: "none", margin: '0 10px' }}>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  fontWeight: "medium",
                  borderRadius: "50px",
                  border: "2px solid #ffffff",
                  backgroundColor: "brown",
                  color: "#ffffff",
                  padding: "8px 20px",
                  '&:hover': {
                    backgroundColor: "#fff",
                    color: "#145839",
                  }
                }}
              >
                MAPVIEWER
              </Button>
            </Link>
            <Link to="/reports" style={{ color: "inherit", textDecoration: "none", margin: '0 10px' }}>
              <Button color="inherit" sx={{ fontWeight: "medium" }}>REPORTS</Button>
            </Link>
            {/* <Link to="/analysis" style={{ color: "inherit", textDecoration: "none", margin: '0 10px' }}>
              <Button color="inherit" sx={{ fontWeight: "medium" }}>ANALYSIS</Button>
            </Link> */}
            <Link to="/indicators" style={{ color: "inherit", textDecoration: "none", margin: '0 10px' }}>
              <Button color="inherit" sx={{ fontWeight: "medium" }}>DROUGHT INDICATORS</Button>
            </Link>
            <Link to="/about" style={{ color: "inherit", textDecoration: "none", margin: '0 10px' }}>
              <Button color="inherit" sx={{ fontWeight: "medium" }}>ABOUT</Button>
            </Link>
            <Link to="/partners" style={{ color: "inherit", textDecoration: "none", margin: '0 10px' }}>
              <Button color="inherit" sx={{ fontWeight: "medium" }}>PARTNERS</Button>
            </Link>
            <Link to="/contact" style={{ color: "inherit", textDecoration: "none", margin: '0 10px' }}>
              <Button color="inherit" sx={{ fontWeight: "medium" }}>CONTACT US</Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
