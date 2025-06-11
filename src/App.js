import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';
import { CartProvider } from './context/CartContext';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <CartProvider>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </CartProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;