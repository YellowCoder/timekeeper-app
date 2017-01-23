import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'

import Oauth from '../../config/Oauth'
import dispatchMap from './dispatchMap'

import styles from './styles'

@connect(null, dispatchMap)
class Login extends Component {
  loginWithProvider(provider) {
    Oauth.authorize(provider)
      .then(resp => this.props.login(resp.response.credentials.access_token))
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
            onPress={ () => { this.loginWithProvider('twitter') }}
            >
            <Text>Login with twitter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={ styles.loginButton }
            onPress={ () => { this.loginWithProvider('facebook') }}
            >
            <Text>Login with facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={ styles.loginButton }
            onPress={ () => { this.loginWithProvider('google') }}
            >
            <Text>Login with google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={ styles.loginButton }
            onPress={ () => { this.loginWithProvider('slack') }}
            >
            <Text>Login with slack</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Login