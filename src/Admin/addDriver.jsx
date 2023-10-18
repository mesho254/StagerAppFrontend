import React, { useState } from 'react';
import axios from 'axios';
import {
  TextField,
  Button,
  Typography,
  Container,
  Grid,
} from '@mui/material';

function RegisterUser() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: '', // You may provide options for the role or make it dynamic
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/user/register', formData);
      setMessage(response.data.message);
      setError('');
    } catch (error) {
      setMessage('');
      setError('Registration failed. Please try again.');
      console.error(error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Register User
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Role"
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
      {message && (
        <Typography variant="body1" color="success" align="center">
          {message}
        </Typography>
      )}
      {error && (
        <Typography variant="body1" color="error" align="center">
          {error}
        </Typography>
      )}
    </Container>
  );
}

export default RegisterUser;
