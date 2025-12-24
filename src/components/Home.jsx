import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '10px',
      padding: '3rem',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      textAlign: 'center',
      marginTop: '2rem'
    }}>
      <h1 style={{
        fontSize: '3rem',
        color: '#2c3e50',
        marginBottom: '1rem'
      }}>
        Welcome to Home Page
      </h1>
      
      <p style={{
        fontSize: '1.2rem',
        color: '#7f8c8d',
        marginBottom: '2rem',
        lineHeight: '1.6'
      }}>
        This is a React application demonstrating basic routing with React Router DOM.
        Navigate through the pages using the navbar above.
      </p>
      
      <div style={{ marginTop: '2rem' }}>
        <Link to="/aboutus" style={{
          backgroundColor: '#3498db',
          color: 'white',
          padding: '12px 30px',
          borderRadius: '5px',
          textDecoration: 'none',
          fontSize: '1.1rem',
          display: 'inline-block',
          transition: 'all 0.3s'
        }}>
          Learn More About Us →
        </Link>
      </div>
    </div>
  );
};

export default Home;
