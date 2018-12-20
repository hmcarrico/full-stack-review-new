import React from 'react';
import {Link} from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <div className='homee'>
      <h1>Welcome my friend, I assume you are here to check out some couches?</h1>
      <h3>Press this button to see some lit couches</h3>
      <Link to='/cool-couches'><button>CLICK ME 4 COOL COUCHES</button></Link>
      <br /> <br /> 
      <img src='https://images.furniture.com/living-rooms/sofas/provincetown-sky-sofa-1006344P.jpg?w=680&h=450' />
    </div>
  )
}

export default Home;