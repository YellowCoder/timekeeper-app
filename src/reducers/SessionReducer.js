import { handleActions } from 'redux-actions'
import * as actions from '../actions/SessionActions'

const initialState = {
  isLogged: false
}

const SessionReducer = handleActions({
  [actions.doLogin]: () => ({
    isLogged: true
  })
}, initialState)

export default SessionReducer