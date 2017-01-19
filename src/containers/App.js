import React, { Component } from 'react'
import ApolloClient from '../config/ApolloClient'
import { ApolloProvider } from 'react-apollo'
import { View, Text } from 'react-native'

import configureStore from '../config/Store'
import Routes from '../config/Routes'

import styles from './AppStyle'

const store = configureStore()

class App extends Component {
  render() {
    return(
      <ApolloProvider client={ ApolloClient } store={ store }>
        <View style={ styles.root }>
          { Routes }
        </View>
      </ApolloProvider>
    )
  }
}

export default App