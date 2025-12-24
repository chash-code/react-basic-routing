import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: '#2c3e50',
      padding: '1rem 2rem',
      boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/home" style={{
          color: 'white',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          textDecoration: 'none'
        }}>
          🚀 MyApp
        </Link>
        
        <div style={{ display: 'flex', gap: '2rem' }}>
          <NavLink 
            to="/home"
            style={({ isActive }) => ({
              color: isActive ? '#3498db' : 'white',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: isActive ? 'bold' : 'normal',
              transition: 'all 0.3s'
            })}
          >
            Home
          </NavLink>
          
          <NavLink 
            to="/aboutus"
            style={({ isActive }) => ({
              color: isActive ? '#3498db' : 'white',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: isActive ? 'bold' : 'normal',
              transition: 'all 0.3s'
            })}
          >
            About Us
          </NavLink>
          
          <NavLink 
            to="/todos"
            style={({ isActive }) => ({
              color: isActive ? '#3498db' : 'white',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: isActive ? 'bold' : 'normal',
              transition: 'all 0.3s'
            })}
          >
            Todos
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
