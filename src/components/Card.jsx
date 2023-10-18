import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button, Grid,} from '@mui/material';
import axios from 'axios';
import TransportMap from './TransportMap';

const TransportCard = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    // Fetch data from your backend API here. Replace 'apiEndpoint' with your actual API URL.
    axios.get('http://localhost:5000/api/transport')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <Grid container spacing={2} style={{overflowY: 'auto'}} >
      {data.map(item => (
        <Grid item xs={10} md={5} key={item.id} style={{ marginLeft:"40px", marginBottom:"100px", marginTop:"20px"}}>
          <Card >
            <CardContent style={{alignItems:'center'}}>
              <div
              >
                <TransportMap county={item.county} from={item.from} />
              </div>
              <Typography variant="h6" component="div">
                County: {item.county}
              </Typography>
              <Typography gutterBottom variant="subtitle2" color="textSecondary">
                From: {item.from} | To: {item.to}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Sacco: {item.sacco}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Fare Range: {item.fareRange}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Posted by: {item.postedBy}
              </Typography>
              <Button variant="outlined" color="primary">
                View More
              </Button>
            </CardContent>
            <Typography variant="caption" color="textSecondary" align="center">
              Date: {item.date}
            </Typography>
          </Card>
        </Grid>
      ))}

    </Grid>
  );
};

export default TransportCard;
