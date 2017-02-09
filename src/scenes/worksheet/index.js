import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ScrollView, ListView } from 'react-native'
import { graphql } from 'react-apollo'
import { Actions } from 'react-native-router-flux'

import query from './query'
import styles from './styles'

@graphql(query)
class Worksheet extends Component {
  componentDidMount() {
    Actions.refresh({
      renderLeftButton: this.renderLeftButton
    })
  }

  renderLeftButton = () => {
    return (
      <TouchableOpacity onPress={this.onAddAccount}>
         <Text style={ styles.addButton }>+</Text>
      </TouchableOpacity>
    )
  }

  dataSource() {
    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    return ds.cloneWithRows(this.props.data.worksheets)
  }

  renderItem() {
    <View>
      <Text> aaa </Text>
    </View>
  }

  render() {
    const { worksheets } = this.props.data
    return(
      <ScrollView style={ styles.container }>
        {
          worksheets &&
          <ListView
            dataSource={ this.dataSource() }
            renderRow={(rowData) => <Text>{ rowData.action }</Text>}
          />
        }
      </ScrollView>
    )
  }
}

export default Worksheet
