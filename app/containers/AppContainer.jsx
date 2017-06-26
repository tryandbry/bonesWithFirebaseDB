import React from 'react';
import {connect} from 'react-redux';
import Login from '../components/Login'
import WhoAmI from '../components/WhoAmI'
import Navbar from '../components/Navbar'

const AppContainer = ({ user, children }) => (
  <div>
    <Navbar user={user} />
    {children}
  </div>
)

const mapState = ({ auth }) => ({ user: auth })

export default connect(mapState)(AppContainer);
