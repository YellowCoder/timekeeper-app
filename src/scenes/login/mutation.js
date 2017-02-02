import gql from 'graphql-tag';

const LoginMutation = gql`
  mutation Login($name: String, $uuid: String) {
    sign_up(input: {name: $name, uuid: $uuid}){
      user {
        name
        uuid
      }
    }
  }
`

export default LoginMutation
