import gql from 'graphql-tag';

const LoginMutation = gql`
  mutation Login($name: String, $uuid: String, $provider: String) {
    sign_up(input: {name: $name, uuid: $uuid, provider: $provider}){
      user {
        name
        uuid
      }
    }
  }
`

export default LoginMutation
