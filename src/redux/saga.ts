import { fork } from 'redux-saga/effects';
import loginSagaFlow from '../features/SignIn/redux/saga';
import recordsmanagerSagaFlow from '../features/shared/RecordsManager/redux/saga';

function* sagas() {
    yield fork(loginSagaFlow);
    yield fork(recordsmanagerSagaFlow);

}

export default sagas;