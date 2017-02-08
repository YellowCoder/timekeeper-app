import { AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux'

export async function login(uuid) {
  try {
    await AsyncStorage.setItem('uuid', uuid)
  } catch (error) {
  }
}

export async function logout() {
  try {
    return await AsyncStorage.removeItem('uuid')
  } catch (error) {
  }
  Actions.login()
}
