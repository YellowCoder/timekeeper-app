import gql from 'graphql-tag';

const LoginMutation = gql`
  mutation Login($ssoToken: String, $ssoProvider: String) {
    sign_up(input: {sso_token: $ssoToken, sso_provider: $ssoProvider}){
      user {
        name
        email
        jwt_token
      }
    }
  }
`

export default LoginMutation