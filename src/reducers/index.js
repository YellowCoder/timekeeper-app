import { combineReducers } from 'redux'
import Apolloclient from '../config/ApolloClient'

const rootReducer = combineReducers({
  apollo: Apolloclient.reducer()
})

export default rootReducer
