import React from 'react'
import { Scene, Router } from 'react-native-router-flux'

import styles from '../scenes/root/AppStyle'

import Login from '../scenes/login'

const routes = (
  <Router>
    <Scene
      component={ Login }
      initial={ true }
      navigationBarStyle={ styles.navigationBar }
      key='login'
    />
  </Router>
)

export default routes