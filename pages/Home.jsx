import React, { useState } from 'react';
import { useCart } from '../CartContext'; // Import cart context

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem'
  },
  pageTitle: {
    fontSize: '2.5rem',
    color: '#2d3748',
    marginBottom: '2rem',
    textAlign: 'center'
  },
  filterBar: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '2.5rem',
    justifyContent: 'center'
  },
  filterBtn: {
    padding: '0.5rem 1.2rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: '#e2e8f0',
    transition: 'background-color 0.2s'
  },
  activeFilter: {
    backgroundColor: '#4299e1',
    color: '#fff'
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem'
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '1.5rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    textAlign: 'center'
  },
  productImg: {
    width: '100%',
    height: '200px',
    objectFit: 'contain',
    backgroundColor: '#f7fafc',
    borderRadius: '4px',
    marginBottom: '1rem'
  },
  productName: {
    fontSize: '1.1rem',
    margin: '0 0 0.5rem'
  },
  productPrice: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#2b6cb0',
    margin: '0 0 1rem'
  },
  addToCartBtn: {
    width: '100%',
    padding: '0.75rem',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#3182ce',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '1rem'
  }
};

const Home = () => {
  const { addToCart } = useCart(); // Access cart add function

  // 10 Products Total (with working image URLs)
  const allProducts = [
    { 
      id: 1, 
      name: 'Wireless Headphones', 
      price: '₱2,499', 
      category: 'Audio', 
      img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=280&h=200&fit=crop' 
    },
    { 
      id: 2, 
      name: 'Smart Watch', 
      price: '₱3,999', 
      category: 'Wearables', 
      img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=280&h=200&fit=crop' 
    },
    { 
      id: 3, 
      name: 'Power Bank', 
      price: '₱899', 
      category: 'Accessories', 
      img: 'https://images.unsplash.com/photo-1596443686262-861645319213?w=280&h=200&fit=crop' 
    },
    { 
      id: 4, 
      name: 'Bluetooth Speaker', 
      price: '₱1,599', 
      category: 'Audio', 
      img: 'https://images.unsplash.com/photo-1564424224827-cd24b8915874?w=280&h=200&fit=crop' 
    },
    { 
      id: 5, 
      name: 'Wireless Charger', 
      price: '₱1,299', 
      category: 'Accessories', 
      img: 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=280&h=200&fit=crop' 
    },
    { 
      id: 6, 
      name: 'Gaming Mouse', 
      price: '₱1,899', 
      category: 'Electronics', 
      img: 'https://images.unsplash.com/photo-1542744173-7f3b9091255d?w=280&h=200&fit=crop' 
    },
    { 
      id: 7, 
      name: 'Mechanical Keyboard', 
      price: '₱2,899', 
      category: 'Electronics', 
      img: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=280&h=200&fit=crop' 
    },
    { 
      id: 8, 
      name: 'Smartphone', 
      price: '₱12,999', 
      category: 'Wearables', 
      img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=280&h=200&fit=crop' 
    },
    { 
      id: 9, 
      name: 'Portable Fan', 
      price: '₱599', 
      category: 'Accessories', 
      img: 'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?w=280&h=200&fit=crop' 
    },
    { 
      id: 10, 
      name: 'Bluetooth Earbuds', 
      price: '₱1,999', 
      category: 'Audio', 
      img: 'https://images.unsplash.com/photo-1543955291-3081ddc5f6d0?w=280&h=200&fit=crop' 
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...new Set(allProducts.map(p => p.category))];

  const filteredProducts = selectedCategory === 'All' 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory);

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.pageTitle}>Featured Products</h1>
      
      <div style={styles.filterBar}>
        {categories.map(cat => (
          <button
            key={cat}
            style={{
              ...styles.filterBtn,
              ...(selectedCategory === cat && styles.activeFilter)
            }}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={styles.productGrid}>
        {filteredProducts.map(prod => (
          <div key={prod.id} style={styles.productCard}>
            <img 
              src={prod.img} 
              alt={prod.name} 
              style={styles.productImg} 
            />
            <h3 style={styles.productName}>{prod.name}</h3>
            <p style={styles.productPrice}>{prod.price}</p>
            <button 
              onClick={() => handleAddToCart(prod)} 
              style={styles.addToCartBtn}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;