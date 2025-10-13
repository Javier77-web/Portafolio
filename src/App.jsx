import React from 'react';
import NavBar from './components/organisms/Navbar';
import Home from './pages/Home';
import Footer from './components/organisms/Footer';

function App() {
  return (
    <>
        <NavBar />
        <Home />
        <div className="electric-line">
          <span className="ray ray1"></span>
          <span className="ray ray2"></span>
          <span className="ray ray3"></span>
        </div>
        <Footer />
    </>
  );
}

export default App;
