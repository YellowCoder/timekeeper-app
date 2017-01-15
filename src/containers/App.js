import React, { Component } from 'react'
import ApolloClient from '../config/ApolloClient'
import { ApolloProvider } from 'react-apollo'
import { View, Text } from 'react-native'

class App extends Component {
  render() {
    return(
      <ApolloProvider client={ ApolloClient }>
        <View>
          <Text>aaaaa</Text>
        </View>
      </ApolloProvider>
    )
  }
}

export default App