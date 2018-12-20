import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../home/home';
import Couches from '../couches/couches';
import './nav.css';

const nav = () => {
  return (
    <div className='lol'>
    
    <Link to='/' component={Home}>
      <div className='lolol'>
          <img src='https://us.123rf.com/450wm/alekseyvanin/alekseyvanin1704/alekseyvanin170400319/75055737-couch-sofa-line-icon-outline-vector-sign-linear-pictogram-isolated-on-white-logo-illustration.jpg?ver=6' />
      </div>
    </Link>
      <Link to='/'><button className=''>Home</button></Link>
      <Link to='/cool-couches'><button>Couches</button></Link>
      <Link to='/profile'><button>Profile</button></Link>
    </div>
  )
}

export default nav;