import ApolloClient, { createNetworkInterface } from 'apollo-client'

const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://localhost:3000/graphql' })
})

export default apolloClient