import React, { Component } from 'react'
import ApolloClient from '../config/ApolloClient'
import { ApolloProvider } from 'react-apollo'
import { View, Text } from 'react-native'
import configureStore from '../config/Store'

const store = configureStore()

class App extends Component {
  render() {
    return(
      <ApolloProvider client={ ApolloClient } store={ store }>
        <View>
          <Text>aaaaa</Text>
        </View>
      </ApolloProvider>
    )
  }
}

export default App