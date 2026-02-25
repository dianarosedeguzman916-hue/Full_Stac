import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../CartContext';

const styles = {
  navContainer: {
    backgroundColor: '#2d3748',
    padding: '1rem 3rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
  },
  navList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'space-around', // EVEN SPACING ACROSS NAVBAR
    alignItems: 'center',
    width: '100%', // Ensure list takes full width for even spacing
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: 500,
    padding: '0.5rem 0', // Add vertical padding for better click area
  },
  activeLink: {
    color: '#4299e1',
    borderBottom: '2px solid #4299e1',
  },
  cartLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: 500,
    padding: '0.5rem 0',
    position: 'relative',
    display: 'flex', // Align icon/text/badge neatly
    alignItems: 'center',
    gap: '0.3rem', // Space between icon text and badge
  },
  cartBadge: {
    position: 'absolute',
    top: '-5px',
    right: '-8px',
    background: '#e53e3e',
    color: '#fff',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    fontSize: '0.8rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Optional: Add a simple cart icon using text or emoji
  cartIcon: {
    fontSize: '1.2rem',
  }
};

const Navbar = () => {
  const location = useLocation();
  const { cart } = useCart();
  const cartCount = cart.reduce((total, item) => total + item.qty, 0);

  return (
    <nav style={styles.navContainer}>
      <ul style={styles.navList}>
        {/* Home */}
        <li>
          <Link 
            to="/" 
            style={{
              ...styles.navLink,
              ...(location.pathname === '/' && styles.activeLink)
            }}
          >
            Home
          </Link>
        </li>

        {/* About */}
        <li>
          <Link 
            to="/about" 
            style={{
              ...styles.navLink,
              ...(location.pathname === '/about' && styles.activeLink)
            }}
          >
            About
          </Link>
        </li>

        {/* Contact */}
        <li>
          <Link 
            to="/contact" 
            style={{
              ...styles.navLink,
              ...(location.pathname === '/contact' && styles.activeLink)
            }}
          >
            Contact
          </Link>
        </li>

        {/* Tasks */}
        <li>
          <Link 
            to="/tasks" 
            style={{
              ...styles.navLink,
              ...(location.pathname === '/tasks' && styles.activeLink)
            }}
          >
            Tasks
          </Link>
        </li>

        {/* Cart with Icon & Even Spacing */}
        <li>
          <Link 
            to="/cart" 
            style={{
              ...styles.navLink,
              ...styles.cartLink,
              ...(location.pathname === '/cart' && styles.activeLink)
            }}
          >
            <span style={styles.cartIcon}>🛒</span> {/* Cart emoji/icon */}
            Cart
            {cartCount > 0 && <span style={styles.cartBadge}>{cartCount}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;