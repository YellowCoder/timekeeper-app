import React, { Component } from 'react'
import { View } from 'react-native'
import { SideMenu, List, ListItem } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'


import { logout } from '../../utils/Session'

class Sidebar extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false
    }
    this.toggleSideMenu = this.toggleSideMenu.bind(this)
  }

  toggleSideMenu() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  onPress(type) {
    switch(type) {
      case 'worksheet': {
        Actions.worksheet()
      }
      case 'profile': {

      }
      case 'logout': {
        logout()
        Actions.login()
      }
    }
  }

  render () {
    const MenuComponent = (
      <View style={{flex: 1, backgroundColor: '#ededed', paddingTop: 50}}>
        <List containerStyle={{marginBottom: 20}}>
          <ListItem
            key={ 0 }
            title={ 'Worksheet' }
            leftIcon={{ name: 'schedule' }}
            onPress={ () => this.onPress('worksheet') }
          />
          <ListItem
            key={ 1 }
            title={ 'Profile' }
            leftIcon={{ name: 'face' }}
            onPress={ () => this.onPress('profile') }
          />
          <ListItem
            key={2}
            title={ 'Logout' }
            leftIcon={{ name: 'power-settings-new' }}
            onPress={ () => this.onPress('logout') }
          />
        </List>
      </View>
    )

    return (
      <SideMenu
        isOpen={this.state.isOpen}
        menu={MenuComponent}>
        {this.props.children}
      </SideMenu>
    )
  }
}

export default Sidebar