import { authService } from "./services";

const initialState = {
    auth: {}
}
function reducer(state = initialState, action: any) {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, auth: {...authService, webapiKey: action.webapiKey, projectId: action.projectId, isLoggedIn: false, isInProgress: true, isError: false}};
        case 'LOGIN_SUCCESS':
            return { ...state, auth: {response: action.payload , isLoggedIn: true, isInProgress: false}};
        case 'LOGIN_ERROR':
            return { ...state, auth: {response: action.payload , isLoggedIn: false, isInProgress: false, isError: true}};
        default:
            return state;
    }
}

export default reducer;