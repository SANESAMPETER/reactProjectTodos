// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={navStyle}>
      <Link style={linkStyle} to="/">Home</Link>
      <Link style={linkStyle} to="/shopping">Shopping</Link>
      <Link style={linkStyle} to="/nav3">Nav3</Link>
      <Link style={linkStyle} to="/nav4">Nav4</Link>
      <Link style={linkStyle} to="/about">About</Link>
    </nav>
  );
}

const navStyle = {
  backgroundColor: '#333',
  padding: '10px',
  display: 'flex',
  gap: '20px'
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '18px'
};

export default Navbar;

