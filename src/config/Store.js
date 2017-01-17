import { createStore, applyMiddleware, compose } from 'redux'
import ApolloClient from '../config/ApolloClient'
import rootReducer from '../reducers'

export default function configureStore(preloaderState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(rootReducer, preloaderState, composeEnhancers(
    applyMiddleware(ApolloClient.middleware())
  ))
  return store
}