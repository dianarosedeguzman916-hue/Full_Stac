import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

// Global layout styles
const styles = {
  layoutWrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', // Ensures footer stays at bottom
  },
  mainContent: {
    flexGrow: 1,
    backgroundColor: '#f7fafc',
    padding: '2rem 3rem',
    // Responsive padding for mobile
    '@media (max-width: 768px)': {
      padding: '1.5rem 1rem',
    },
  },
  footer: {
    backgroundColor: '#2d3748',
    color: '#ffffff',
    padding: '1.5rem 3rem',
    textAlign: 'center',
    boxShadow: '0 -2px 8px rgba(0,0,0,0.15)',
  },
  footerText: {
    margin: 0,
    fontSize: '1rem',
    opacity: 0.8,
  },
  footerLink: {
    color: '#4299e1',
    textDecoration: 'none',
    marginLeft: '0.5rem',
  },
};

const Layout = () => {
  return (
    <div style={styles.layoutWrapper}>
      {/* Shared Navbar */}
      <Navbar />

      {/* Dynamic Page Content (renders active page: Home/About/etc.) */}
      <main style={styles.mainContent}>
        <Outlet />
      </main>

      {/* Shared Footer */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>
          © 2024 ITPE4 Full-Stack Shop | All Rights Reserved
          <a href="/contact" style={styles.footerLink}>Contact Us</a>
        </p>
      </footer>
    </div>
  );
};

export default Layout;