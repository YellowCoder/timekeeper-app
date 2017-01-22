import { combineReducers } from 'redux'

import Apolloclient from '../config/ApolloClient'
import SessionReducer from './SessionReducer'

const rootReducer = combineReducers({
  SessionReducer,
  apollo: Apolloclient.reducer()
})

export default rootReducer
