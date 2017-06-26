import React from 'react';
import Login from '../components/Login'
import WhoAmI from '../components/WhoAmI'
 
const Navbar = (user) => (
  <div>
    <nav>
      {user ? <WhoAmI/> : <Login/>}
    </nav>
  </div>
)

export default Navbar;
