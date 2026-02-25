import React from 'react';
import { useCart } from '../CartContext';

const styles = {
  container: { maxWidth: '800px', margin: '0 auto', padding: '1rem' },
  title: { fontSize: '2rem', color: '#2d3748', textAlign: 'center' },
  cartItem: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    padding: '1rem', 
    background: '#fff', 
    margin: '1rem 0', 
    borderRadius: '4px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
  },
  empty: { textAlign: 'center', color: '#4a5568', fontSize: '1.1rem' }
};

const CartPage = () => {
  const { cart, removeFromCart, updateQty } = useCart();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Your Cart</h1>
      {cart.length === 0 ? (
        <p style={styles.empty}>Cart is empty!</p>
      ) : (
        cart.map(item => (
          <div key={item.id} style={styles.cartItem}>
            <span>{item.name} - ₱{item.price}</span>
            <div>
              <button onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
              <span> {item.qty} </span>
              <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
              <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: '1rem', background: '#e53e3e', color: '#fff', border: 'none', padding: '0.3rem 0.7rem' }}>
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;