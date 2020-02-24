import React from 'react';
// import logo from '../../logo.svg';
import './App.css';

import NavBar from '../NavBar/NavBar';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import NavTutor from '../NavTutor/NavTutor';
import NavOffer from '../NavOffer/NavOffer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <NavTutor />
      {/* <NavOffer /> */}
      <Footer />
      
    </div>
  );
}

export default App;
