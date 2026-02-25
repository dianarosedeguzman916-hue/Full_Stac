import React from 'react';

const styles = {
  container: { maxWidth: '1000px', margin: '0 auto', lineHeight: '1.8' },
  pageTitle: { fontSize: '2rem', color: '#2d3748', marginBottom: '1.5rem' },
  sectionTitle: { fontSize: '1.5rem', color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' },
  contentText: { fontSize: '1.1rem', color: '#4a5568', marginBottom: '1rem' },
  teamGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginTop: '1.5rem'
  },
  teamCard: {
    backgroundColor: '#fff',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    textAlign: 'center'
  },
  teamImg: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '1rem',
    border: '3px solid #4299e1'
  },
  teamName: { fontSize: '1.2rem', color: '#2d3748', margin: '0.5rem 0' },
  teamRole: { fontSize: '1rem', color: '#4299e1', margin: '0.25rem 0' }
};

const About = () => {
  const teamMembers = [
    { id: 1, name: 'Eurie De Guzman', role: 'C-23-11319', img: 'https://via.placeholder.com/150x150?text=Maria' },
    { id: 2, name: 'Diana Rose De Guzman', role: 'C-23-11265', img: 'https://via.placeholder.com/150x150?text=Juan' },
    { id: 3, name: 'Stefen Gabriell De Vera', role: 'C-23-11519', img: 'https://via.placeholder.com/150x150?text=Liza' }
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.pageTitle}>About ITPE4 Shop</h1>
      
      <p style={styles.contentText}>
        Founded in 2024, ITPE4 Shop was built with a simple mission: to make high-quality tech essentials accessible to everyone in the Philippines. 
        What started as a small team project has grown into a trusted destination for reliable gadgets and accessories.
      </p>
      
      <p style={styles.contentText}>
        We partner directly with certified manufacturers to ensure every product meets strict quality standards, while keeping prices affordable. 
        Our commitment to customer satisfaction drives everything we do—from fast shipping to responsive support.
      </p>

      <h2 style={styles.sectionTitle}>Our Core Team</h2>
      <div style={styles.teamGrid}>
        {teamMembers.map(member => (
          <div key={member.id} style={styles.teamCard}>
            <img src={member.img} alt={member.name} style={styles.teamImg} />
            <h3 style={styles.teamName}>{member.name}</h3>
            <p style={styles.teamRole}>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;