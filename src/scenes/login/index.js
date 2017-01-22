import React, { Component } from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

class Login extends Component {
  render() {
    return(
      <View style={ styles.container }>
        <View style={ styles.titleContainer }>
          <Text style={ styles.title }>Login</Text>
        </View>
        <View style={ styles.buttonContainer }>
          <View style={ styles.loginButton }>
            <Text>Login with twitter</Text>
          </View>
          <View style={ styles.loginButton }>
            <Text>Login with facebook</Text>
          </View>
          <View style={ styles.loginButton }>
            <Text>Login with google</Text>
          </View>
          <View style={ styles.loginButton }>
            <Text>Login with slack</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default Login