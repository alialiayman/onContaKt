
const initialState = {
    request: {}, response: {}, isError: false, isInProgress: false, isLoggedin: false
}

function loginReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, request: action.payload, isLoggedIn: false, isInProgress: true, isError: false };
        case 'LOGIN_SUCCESS':
            return { ...state, request: state.request, response: action.payload, isLoggedIn: true, isInProgress: false  };
        case 'LOGIN_ERROR':
            return { ...state, response: action.payload, isLoggedIn: false, isInProgress: false, isError: true  };
        default:
            return state;
    }
}

export default loginReducer;