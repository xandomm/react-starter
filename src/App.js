import logo from './logo.svg';
import './App.css';
import React from 'react';
import Routes from './Components/routes.jsx';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {

  return (
    <div>
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
