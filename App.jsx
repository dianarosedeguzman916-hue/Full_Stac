import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './CartContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import TasksPage from './pages/TasksPage';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="tasks" element={<TasksPage />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;