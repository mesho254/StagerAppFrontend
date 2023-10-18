import React from 'react';
import NavBar from '../components/AppBar';
import RegisterUser from './addDriver';

function AdminDashboard() {
  const isAuthenticated = localStorage.getItem('token') !== null; // Check if the user is authenticated
  const userRole = localStorage.getItem('role'); // Get user role from localStorage

  return (
    <div>
      <NavBar />
      {isAuthenticated ? (
        userRole === 'admin' ? (
          // Render the details if a user is logged in with the role of admin
          <RegisterUser />
        ) : (
          // Render a message for users with roles other than admin
          <p style={{ alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
            Access to this page is restricted to admins only.
          </p>
        )
      ) : (
        // Render "Login first" paragraph if no user is logged in
        <p style={{ alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
          Login as an ADMIN first
        </p>
      )}
    </div>
  );
}

export default AdminDashboard;

