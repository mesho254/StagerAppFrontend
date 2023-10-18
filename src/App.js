import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import TransportManager from './components/Post';
import AdminDashboard from './Admin/adminDashboard';


function App() {
  return (
    
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home/>} />
        <Route path='/post' element={<TransportManager/>}/>
        <Route path="admin-dashboard" element={<AdminDashboard/>}/>
      </Routes>
   
  );
};

export default App;

