import { useState } from "react";
import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
  Paper,
  Grid,
} from "@mui/material";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function DataExport() {
  const [indicator, setIndicator] = useState("");
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const handleIndicatorChange = (event) => {
    setIndicator(event.target.value);
  };

  const handleExport = () => {
    console.log(
      "Exporting data for",
      indicator,
      "from",
      state[0].startDate,
      "to",
      state[0].endDate
    );
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Generate Report
      </Typography>
      <FormControl fullWidth margin="normal">
        <InputLabel id="indicator-label">Indicator</InputLabel>
        <Select
          labelId="indicator-label"
          id="indicator-select"
          value={indicator}
          label="Indicator"
          onChange={handleIndicatorChange}
        >
          <MenuItem value="temperature">SPI</MenuItem>
          <MenuItem value="temperature">SMI</MenuItem>
          <MenuItem value="temperature">SPEI</MenuItem>
          <MenuItem value="temperature">Temperature</MenuItem>
          <MenuItem value="humidity">Humidity</MenuItem>
          <MenuItem value="precipitation">Precipitation</MenuItem>
        </Select>
      </FormControl>
      <Paper elevation={3} sx={{ p: 2, mt: 3 }}>
        <Typography variant="h6" gutterBottom>
          Select Date Range
        </Typography>
        <Grid container justifyContent="space-around">
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
            rangeColors={["#3f51b5"]}
          />
        </Grid>
      </Paper>
      <Button
        variant="contained"
        color="primary"
        onClick={handleExport}
        sx={{ mt: 3, width: "100%" }}
      >
        Export Data
      </Button>
    </Container>
  );
}

export default DataExport;
