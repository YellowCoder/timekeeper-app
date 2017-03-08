import React, { Component } from 'react'
import ApolloClient from '../../config/ApolloClient'
import { ApolloProvider } from 'react-apollo'
import { View, Text } from 'react-native'

import configureStore from '../../config/Store'
import Routes from '../../config/Routes'
import Sidebar from '../../components/sidebar'

import styles from './AppStyle'

const store = configureStore()

class App extends Component {
  render() {
    return(
      <Sidebar>
        <ApolloProvider client={ ApolloClient } store={ store }>
          <View style={ styles.root }>
            { Routes }
          </View>
        </ApolloProvider>
      </Sidebar>
    )
  }
}

export default App
