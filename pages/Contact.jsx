import React from 'react';

const styles = {
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '1rem'
  },
  pageTitle: {
    fontSize: '2.2rem',
    color: '#2d3748',
    marginBottom: '2rem',
    textAlign: 'center'
  },
  contactWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2.5rem',
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  },
  infoSection: {
    lineHeight: '1.8',
    color: '#4a5568'
  },
  infoTitle: {
    fontSize: '1.5rem',
    color: '#2d3748',
    marginBottom: '1rem'
  },
  formGroup: {
    marginBottom: '1.2rem'
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    color: '#2d3748'
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #e2e8f0',
    borderRadius: '4px',
    fontSize: '1rem'
  },
  submitBtn: {
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#38a169',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '1.1rem'
  },
  // Responsive adjustment
  '@media (max-width: 768px)': {
    contactWrapper: {
      gridTemplateColumns: '1fr'
    }
  }
};

// Helper function (no "use" prefix to avoid Hook warnings)
const getResponsiveStyles = () => {
  return window.innerWidth <= 768 
    ? { gridTemplateColumns: '1fr' } 
    : { gridTemplateColumns: '1fr 1fr' };
};

const Contact = () => {
  const [wrapperStyle, setWrapperStyle] = React.useState(getResponsiveStyles());

  // Handle resize without calling helper as Hook
  React.useEffect(() => {
    const handleResize = () => setWrapperStyle(getResponsiveStyles());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    e.target.reset();
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.pageTitle}>Contact Us</h1>
      <div style={{ ...styles.contactWrapper, ...wrapperStyle }}>
        <div style={styles.infoSection}>
          <h2 style={styles.infoTitle}>Get In Touch</h2>
          <p>📞 +63 912 345 6789</p>
          <p>📧 support@itpe4shop.com</p>
          <p>📍 123 Tech Ave, Baguio City</p>
          <p>⏰ Mon-Sat 9AM–6PM</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Full Name</label>
            <input type="text" style={styles.input} required />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input type="email" style={styles.input} required />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Subject</label>
            <input type="text" style={styles.input} required />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Message</label>
            <textarea style={styles.input} rows="4" required></textarea>
          </div>
          <button type="submit" style={styles.submitBtn}>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;