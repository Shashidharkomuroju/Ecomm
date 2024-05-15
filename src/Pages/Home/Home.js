import React from 'react'
import "./HomeStyle.css";
import Navbar from '../../Components/Navbar/Navbar';
import LandingPage from './LandingPage';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <LandingPage/>
        <Footer/>
    </div>
  )
}

export default Home