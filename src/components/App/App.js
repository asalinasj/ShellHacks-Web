import React from 'react';

import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import About from '../About/About';
import Schedule from '../Schedule/Schedule';
import Sponsors from '../Sponsors/Sponsors';
import Login from '../../Login/login';
import Profile from '../../ProfilePage/profile';

import './app.css';

export default function App() {
  return (
    <Profile />
  //   <div className='app'>
  //     <Nav />
  //     <Banner />
  //     <About />
  //     <Schedule />
  //     <Sponsors />
  //     <Footer />
  //   </div>
  );
}
