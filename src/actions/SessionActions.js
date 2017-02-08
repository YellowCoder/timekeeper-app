import { createAction } from 'redux-actions'
import { login } from '../utils/Session'

export const doLogin = createAction(
  'LOGIN',
  (uuid) => {
    login(uuid)
  }
)
