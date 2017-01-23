import { createAction } from 'redux-actions'

export const login = createAction(
  'LOGIN',
  (accessToken) => {
    console.log('SSO TOKEN', accessToken)
  }
)