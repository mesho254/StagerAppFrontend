import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, Grid } from '@mui/material';
import axios from 'axios';

const TransportManager = () => {
  const [county, setCounty] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [sacco, setSacco] = useState('');
  const [fareRange, setFareRange] = useState('');
  const [postedBy, setPostedBy] = useState('');

  const [transportListings, setTransportListings] = useState([]);

  useEffect(() => {
    // Fetch all transport listings when the component mounts
    fetchTransportListings();
  }, []);

  const fetchTransportListings = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/transport'); // Replace with your API endpoint
      setTransportListings(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateTransport = async () => {
    try {
      // Send a POST request to create a new transport listing
      const response = await axios.post('http://localhost:5000/api/transport/create', {
        county,
        from,
        to,
        sacco,
        fareRange,
        postedBy,
      });

      // Add the newly created transport listing to the list
      setTransportListings([...transportListings, response.data]);

      // Clear input fields
      setCounty('');
      setFrom('');
      setTo('');
      setSacco('');
      setFareRange('');
      setPostedBy('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <Grid item xs={10} sm={6} md={4}>
        <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            Create Transport Listing
          </Typography>
          <form>
            <TextField
              label="County"
              fullWidth
              value={county}
              onChange={(e) => setCounty(e.target.value)}
              margin="normal"
            />
            <TextField
              label="From"
              fullWidth
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              margin="normal"
            />
            <TextField
              label="To"
              fullWidth
              value={to}
              onChange={(e) => setTo(e.target.value)}
              margin="normal"
            />
            <TextField
              label="Sacco"
              fullWidth
              value={sacco}
              onChange={(e) => setSacco(e.target.value)}
              margin="normal"
            />
            <TextField
              label="Fare Range"
              fullWidth
              value={fareRange}
              onChange={(e) => setFareRange(e.target.value)}
              margin="normal"
            />
            <TextField
              label="Posted By"
              fullWidth
              value={postedBy}
              onChange={(e) => setPostedBy(e.target.value)}
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleCreateTransport}
              style={{ marginTop: '20px' }}
            >
              Create Transport Listing
            </Button>
          </form>
        </Paper>
      </Grid>
      {/* Display the list of transport listings */}
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          Transport Listings
        </Typography>
        <ul>
          {transportListings.map((item) => (
            <li key={item._id}>
              County: {item.county}, From: {item.from}, To: {item.to}, Sacco: {item.sacco}, Fare Range: {item.fareRange}, Posted By: {item.postedBy}
            </li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
};

export default TransportManager;
