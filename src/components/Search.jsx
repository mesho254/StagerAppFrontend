import React, { useState } from 'react';
import {
  Typography,
  Container,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

// Define departure and arrival options for each county
const countyOptions = {
  Nairobi: {
    departures: ['Town', 'Kawangware', 'Ngong Road'],
    arrivals: ['Limuru', 'Karen', 'Ruiru'],
  },
  Mombasa: {
    departures: ['Mombasa Town', 'Nyali', 'Bamburi'],
    arrivals: ['Diani', 'Malindi', 'Kilifi'],
  },
  Kisumu: {
    departures: ['Kisumu City', 'Kondele', 'Mamboleo'],
    arrivals: ['Kakamega', 'Kisii', 'Bungoma'],
  },
  // Add more counties with their departures and arrivals as needed
};

function Search() {
  const [county, setCounty] = useState('');
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');

  const handleCountyChange = (event) => {
    const selectedCounty = event.target.value;
    setCounty(selectedCounty);
    // Clear departure and arrival when changing the county
    setDeparture('');
    setArrival('');
  };

  const handleSearch = () => {
    // Perform the search operation here using the selected county, departure, and arrival inputs
    console.log('County:', county);
    console.log('Departure:', departure);
    console.log('Arrival:', arrival);
  };

  const departureOptions = countyOptions[county] ? countyOptions[county].departures : [];
  const arrivalOptions = countyOptions[county] ? countyOptions[county].arrivals : [];

  return (
    <Container style={{marginTop:"20px" }}>
      <Typography variant="h5">
        Select BUS/Matatu Stages in your County
      </Typography>
      <Typography>
        Using departure destination and arrival location. View Fare Ranges for
        the whole Journey.
      </Typography>
      <div style={{display:"flex", flexDirection:"row", padding:"10px"}} >
        <FormControl fullWidth sx={{ marginBottom: 2}}>
          <InputLabel>Select County</InputLabel>
          <Select value={county} onChange={handleCountyChange}>
            {Object.keys(countyOptions).map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Autocomplete
          options={departureOptions}
          value={departure}
          onChange={(_, newValue) => setDeparture(newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="From:"
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
          )}
        />
        <Autocomplete
          options={arrivalOptions}
          value={arrival}
          onChange={(_, newValue) => setArrival(newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="To:"
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
          )}
        />
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </div>
    </Container>
  );
}

export default Search;
