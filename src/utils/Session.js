import { AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux'

export async function login(jwtToken) {
  try {
    await AsyncStorage.setItem('jwtToken', jwtToken)
  } catch (error) {
  }
}

export async function logout() {
  try {
    return await AsyncStorage.removeItem('jwtToken')
  } catch (error) {
  }
  Actions.login()
}