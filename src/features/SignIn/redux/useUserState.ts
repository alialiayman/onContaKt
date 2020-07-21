import { useDispatch, useSelector } from 'react-redux';
import { Login } from './actions';

const useUserState = (): any => {
    const dispatch = useDispatch();

    const loginToFirebase = (firebaseInfo: any) => {
        dispatch(Login(firebaseInfo));
    };

    return {
        login: loginToFirebase,
        webapiKey: useSelector((state: any) => state.auth && state.auth.request && state.auth.request.webapiKey),
        projectId: useSelector((state: any) => state.auth && state.auth.request && state.auth.request.projectId),
        user: useSelector((state: any) => state.auth && state.auth.response && state.auth.response.data),
        isLoggedIn: useSelector((state: any) => state.auth && state.auth.isLoggedIn),
        isError: useSelector((state: any) => state.auth && state.auth.isError),
        isInProgress: useSelector((state: any) => state.auth && state.auth.isInProgress),
    }
}

export default useUserState;