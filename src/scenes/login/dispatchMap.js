import * as actions from '../../actions/SessionActions'

const SessionDispatchMap = (dispatch) => ({
  login: (accessToken) => {
    return dispatch(actions.login(accessToken))
  }
})

export default SessionDispatchMap