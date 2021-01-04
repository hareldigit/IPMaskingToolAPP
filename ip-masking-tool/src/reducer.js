export const initialState = {
  error: null,
  indeterminate: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ERROR': {
      return {
        ...state,
        error: action.error,
      }
    }
    case 'SUCCESS': {
      return {
        ...state,
        error: null,
      }
    }
    case 'SET_INDETERMINATE': {
      return {
        ...state,
        data: action.indeterminate,
      }
    }
    default: {
      return state
    }
  }
}

export default reducer
