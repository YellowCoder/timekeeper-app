import React from 'react'
import { Scene, Router } from 'react-native-router-flux'

import styles from '../containers/AppStyle'

import Login from '../containers/login'

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