import React from 'react';

const AboutUs = () => {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '10px',
      padding: '3rem',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      marginTop: '2rem'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        color: '#2c3e50',
        marginBottom: '1.5rem'
      }}>
        This is About Us Page
      </h1>
      
      <p style={{
        fontSize: '1.1rem',
        color: '#555',
        lineHeight: '1.8',
        marginBottom: '1rem'
      }}>
        We are a team passionate about building modern web applications using React and other cutting-edge technologies.
      </p>
      
      <p style={{
        fontSize: '1.1rem',
        color: '#555',
        lineHeight: '1.8',
        marginBottom: '1rem'
      }}>
        This project demonstrates the fundamental concepts of React Router, including:
      </p>
      
      <ul style={{
        fontSize: '1.1rem',
        color: '#555',
        lineHeight: '2',
        marginLeft: '2rem'
      }}>
        <li>Client-side routing with BrowserRouter</li>
        <li>Navigation using Link and NavLink components</li>
        <li>Dynamic routing and URL parameters</li>
        <li>404 error handling for undefined routes</li>
        <li>Fetching and displaying data from external APIs</li>
      </ul>
    </div>
  );
};

export default AboutUs;
