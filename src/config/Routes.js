import React from 'react'
import { Scene, Router } from 'react-native-router-flux'

import styles from '../scenes/root/AppStyle'

import Login from '../scenes/login'
import Worksheet from '../scenes/worksheet'

const routes = (
  <Router>
    <Scene
      component={ Login }
      navigationBarStyle={ styles.navigationBar }
      title='Login'
      key='login'
      type='reset'
    />
    <Scene
      component={ Worksheet }
      initial={ true }
      navigationBarStyle={ styles.navigationBar }
      title='Worksheet'
      key='worksheet'
      type='reset'
    />
  </Router>
)

export default routes
