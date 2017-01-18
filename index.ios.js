import React from 'react'
import { AppRegistry } from 'react-native'

import App from './src/containers/App'
import OAuthManager from 'react-native-oauth'

const config =  {
  facebook: {
    client_id: '711650962332522',
    client_secret: '24106a73ed7f5fe271b004e2162e3627'
  }
}

// Create the manager
const manager = new OAuthManager('timekeeper')
// configure the manager
manager.configure(config);

manager.authorize('facebook')
  .then(resp => console.log(resp, 'SUCESSOO'))
  .catch(err => console.log(err, 'EROOOOOOO'))

AppRegistry.registerComponent('Timekeeper', () => App)