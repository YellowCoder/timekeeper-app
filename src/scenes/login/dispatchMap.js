import * as actions from '../../actions/SessionActions'

const LoginDispatchMap = (dispatch) => ({
  login: (uuid) => {
    return dispatch(actions.doLogin(uuid))
  }
})

export default LoginDispatchMap
