import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo';

import mutation from './mutation'
import Oauth from '../../config/Oauth'
import dispatchMap from './dispatchMap'

import styles from './styles'

@connect(null, dispatchMap)
@graphql(mutation)
class Login extends Component {
  loginWithProvider(provider) {
    Oauth.authorize(provider)
      .then(resp => {
        this.props.mutate({ variables: { ssoProvider: provider, ssoToken: resp.response.credentials.access_token}})
          .then(({data}) => {
            console.log('------------', data)
          })
        //this.props.doLogin(resp.response.credentials.access_token)
      })
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

export const component = graphql(mutation)(Login)

export default Login