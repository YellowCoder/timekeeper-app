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
    Oauth.authorize(provider, {scopes: 'email'})
      .then(resp => {
        this.getUserInfo(provider, resp)
      })
      .catch(err => console.log(err, 'AUTHORIZATION ERROR'))
  }

  getUserInfo(provider, authorizationResponse) {
    if (provider == 'google') {
      const googleUrl = 'https://www.googleapis.com/plus/v1/people/me';
      Oauth
        .makeRequest('google', googleUrl)
          .then(resp => {
            Oauth.deauthorize('google')
            this.saveUser({
              name: resp.data.displayName,
              uuid: resp.data.id,
              provider
            })
          })
          .catch(err => console.log(err, 'GOOGLE ERROR'))
    }

    if (provider == 'facebook') {
      Oauth
        .makeRequest('facebook', '/me')
          .then(resp => {
            Oauth.deauthorize('facebook')
            this.saveUser({
              name: resp.data.name,
              uuid: resp.data.id,
              provider
            })
          })
          .catch(err => console.log(err, 'FACEBOOK ERROR'))
    }
  }

  saveUser(info) {
    this.props.mutate({ variables: info})
      .then(({data}) => {
        this.props.login(data.sign_up.user.uuid)
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
