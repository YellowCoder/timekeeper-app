import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { AsyncStorage } from 'react-native'

import { logout } from '../utils/Session'

const graphqlUrl = 'http://localhost:3000/graphql'
const networkInterface = createNetworkInterface(graphqlUrl)

networkInterface.use([ {
  applyMiddleware(req, next) {
    if (!req.options.headers) req.options.headers = {}

    AsyncStorage.getItem('jwtToken').then((data) => {
      req.options.headers.authorization = data || null
      req.options.headers.accept = 'version=1'
      next()
    })
  }
} ])

networkInterface.useAfter([ {
  applyAfterware({ response }, next) {
    if (response.status === 401) logout()
    next()
  }
} ])

const apolloClient = new ApolloClient({
  networkInterface
})


export default apolloClient