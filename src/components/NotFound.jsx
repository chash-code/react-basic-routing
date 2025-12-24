const NotFound = () => {
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
        fontSize: '6rem',
        color: '#e74c3c',
        marginBottom: '1rem'
      }}>
        404
      </h1>
      
      <h2 style={{
        fontSize: '2rem',
        color: '#2c3e50',
        marginBottom: '1rem'
      }}>
        Page Not Found
      </h2>
      
      <p style={{
        fontSize: '1.2rem',
        color: '#7f8c8d',
        marginBottom: '2rem'
      }}>
        The page you are looking for does not exist.
      </p>
      
      <Link to="/home" style={{
        backgroundColor: '#3498db',
        color: 'white',
        padding: '12px 30px',
        borderRadius: '5px',
        textDecoration: 'none',
        fontSize: '1.1rem',
        display: 'inline-block'
      }}>
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
