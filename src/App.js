import React, { useEffect } from 'react';
import './App.css';
import Menu from './components/Menu';
import Home from './pages/Home';
import Store from './pages/Store';

function App() {

  useEffect(() => {
    const handleScroll = () => {
      const screenWidth = window.innerWidth;
      const scrollDisabled = screenWidth >= 768; // Set your desired screen width threshold here

      if (scrollDisabled) {
        document.body.classList.add('disable-scroll');
      } else {
        document.body.classList.remove('disable-scroll');
      }
    };

    handleScroll(); // Initial check on component mount

    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className='app'>
      <Menu />
      <Home />
      <Store />
    </div>
  );
}

export default App;
