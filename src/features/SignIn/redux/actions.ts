export const Login = (firebaseInfo: any) => {
    return {
        type: 'LOGIN',
        payload: firebaseInfo
    }
}

