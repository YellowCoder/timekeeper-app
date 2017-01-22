import React from 'react'
import { AppRegistry } from 'react-native'

import App from './src/scenes/root/App'
import OAuthManager from 'react-native-oauth'

const config =  {
  facebook: {
    client_id: '711650962332522',
    client_secret: '24106a73ed7f5fe271b004e2162e3627'
  },
  twitter: {
    consumer_key: 'KXEiFheIqW95TMHj8OzQkoBzW',
    consumer_secret: 'kcLkKtgovHGFaTSKSF5tiMth9OvsY8jKQroGOIPQa9hmHQjZ9O'
  },
  slack: {
    client_id: '119958408993.128993389237',
    client_secret: 'ad8cfad4448a3680e24cf4e5302eefe5'
  },
  google: {
    callback_url: 'com.googleusercontent.apps.238276560020-ovjv8knus1cj2vqq9u1psmtf794d380m:/google',
    client_id: '238276560020-ovjv8knus1cj2vqq9u1psmtf794d380m.apps.googleusercontent.com'
  }
}

// Create the manager
const manager = new OAuthManager('timekeeper')

// configure the manager
manager.configure(config)

// manager.authorize('facebook')
//   .then(resp => console.log(resp, 'SUCESSOO'))
//   .catch(err => console.log(err, 'EROOOOOOO'))

// manager.authorize('twitter')
//   .then(resp => console.log(resp, 'SUCESSOO'))
//   .catch(err => console.log(err, 'EROOOOOOO'))

// manager.authorize('slack', { scopes: 'identity.basic' })
//   .then(resp => console.log(resp, 'SUCESSOO'))
//   .catch(err => console.log(err, 'EROOOOOOO'))

// manager.authorize('google', {scopes: 'email,profile'})
//   .then(resp => console.log(resp, 'SUCESSOO'))
//   .catch(err => console.log(err, 'EROOOOOOO'))

AppRegistry.registerComponent('Timekeeper', () => App)