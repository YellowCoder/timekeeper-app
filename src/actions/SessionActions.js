import { createAction } from 'redux-actions'

export const login = createAction(
  'LOGIN',
  (ssoToken) => {
    console.log('SSO TOKEN')
  }
)