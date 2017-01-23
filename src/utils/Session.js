import { AsyncStorage } from 'react-native'

export function login(accessToken) {
  return await AsyncStorage.setItem('accessToken', accessToken)
}

export function logout() {
  return await AsyncStorage.removeItem('accessToken')
}