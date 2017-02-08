import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { graphql } from 'react-apollo'

import query from './query'

@graphql(query)
class Worksheet extends Component {
  render() {
    return(
      <View>
        <Text> aaaaa </Text>
      </View>
    )
  }
}

export default Worksheet
