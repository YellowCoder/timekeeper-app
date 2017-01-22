import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

import Oauth from '../../config/Oauth'

import styles from './styles'

class Login extends Component {

  loginWithProvider(provider) {
    Oauth.authorize(provider)
      .then(resp => console.log(resp, 'SUCESSOO'))
      .catch(err => console.log(err, 'EROOOOOOO'))
  }

  render() {
    return(
      <View style={ styles.container }>
        <View style={ styles.titleContainer }>
          <Text style={ styles.title }>Login</Text>
        </View>
        <View style={ styles.buttonContainer }>
          <TouchableOpacity
            style={ styles.loginButton }
            onPress={ this.loginWithProvider }
            >
            <Text>Login with twitter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={ styles.loginButton }
            onPress={ this.loginWithProvider }
            >
            <Text>Login with facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={ styles.loginButton }
            onPress={ this.loginWithProvider }
            >
            <Text>Login with google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={ styles.loginButton }
            onPress={ this.loginWithProvider }
            >
            <Text>Login with slack</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Login