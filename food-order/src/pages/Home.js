import '../styles/Home.css';

import BannerImage from '../assets/food.jpeg';
import { Link } from 'react-router-dom';
import React from 'react';

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='headerContainer'>
        <h1 style={{ fontWeight: 'bold' }}> Food Corner </h1>
        <p>INDIAN FOOD AT A CLICK</p>
        <Link to='/menu'>
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
