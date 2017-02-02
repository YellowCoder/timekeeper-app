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
    Oauth.authorize(provider, {scopes: 'email,profile'})
      .then(resp => {
        this.getUserInfo(provider, resp)
      })
      .catch(err => console.log(err, 'EROOOOOOO'))
  }

  getUserInfo(provider, authorizationResponse) {
    if (provider == 'google') {
      const googleUrl = 'https://www.googleapis.com/plus/v1/people/me';
      Oauth
        .makeRequest('google', googleUrl)
          .then(resp => {
            this.saveUser({
              name: resp.data.displayName,
              uuid: authorizationResponse.response.identifier
            })
          })
    }

    if (provider == 'facebook') {
      Oauth
      .makeRequest('facebook', '/me')
        .then(resp => {
          this.saveUser({
            name: resp.data.name,
            uuid: authorizationResponse.response.identifier
          })
        })
    }
  }

  saveUser(info) {
    this.props.mutate({ variables: info})
      .then(({data}) => {
        console.log('----------------')
        console.log('----------------')
        console.log(data)
        console.log('----------------')
        console.log('----------------')
      })
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
        </View>
      </View>
    )
  }
}

export const component = graphql(mutation)(Login)

export default Login
