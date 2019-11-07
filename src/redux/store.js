import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { connect } from 'react-redux'

/**
 * Initial State
 */
const initialState = {
  loading: false
}

/**
 * Actions
 */
const TOGGLE_LOADING = 'TOGGLE_LOADING'
export const toggleLoading = () => ({ type: TOGGLE_LOADING })

/**
 * Reducer
 */
function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_LOADING:
      return {
        ...state,
        loading: state.loading
      }
    default:
      return state
  }
}

/**
 * Store
 */
const store = createStore(reducer, initialState, composeWithDevTools())

export { store, connect }
