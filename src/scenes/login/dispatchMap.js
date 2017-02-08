import * as actions from '../../actions/SessionActions'

const SessionDispatchMap = (dispatch) => ({
  login: (uuid) => {
    return dispatch(actions.doLogin(uuid))
  }
})

export default SessionDispatchMap
