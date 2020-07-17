import { REQUEST_APPS, RECEIVE_APPS } from './actions';

export default function (state = { isFetching: false, apps: [] }, action) {
  switch (action.type) {
    case REQUEST_APPS:
      return {
        ...state,
        isFetching: true
      }

    case RECEIVE_APPS:
      return {
        ...state,
        isFetching: false
      }

    default:
      return state
  }
}