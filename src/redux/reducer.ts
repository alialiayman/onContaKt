
const initialState = {
    auth: { request: {}, response: {}, isError: false, isInProgress: false, isLoggedin: false }
}
function reducer(state = initialState, action: any) {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, auth: { ...state.auth, request: action.payload, isLoggedIn: false, isInProgress: true, isError: false } };
        case 'LOGIN_SUCCESS':
            return { ...state, auth: { ...state.auth, request: state.auth.request, response: action.payload, isLoggedIn: true, isInProgress: false } };
        case 'LOGIN_ERROR':
            return { ...state, auth: { ...state.auth, response: action.payload, isLoggedIn: false, isInProgress: false, isError: true } };
        default:
            return state;
    }
}

export default reducer;