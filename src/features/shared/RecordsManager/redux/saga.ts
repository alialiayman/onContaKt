import { call, put, takeLatest } from 'redux-saga/effects';
import firebaseService from './firebaseService';

function* recordsmanagerSagaFlow() {
    yield takeLatest('LOADDATA', recordsManagerSaga);

}

function* recordsManagerSaga(action: any) {
    try {
        const result = yield call(firebaseService().getRecords, action.payload.user, action.payload.projectId, action.payload.folder);
        yield put({ type: 'LOADDATA_SUCCESS', payload: {request: action.payload, result} });
    } catch (e) {
        yield put({ type: 'LOADDATA_ERROR', payload: {request: action.payload, message: e.message }});
    }
}

export default recordsmanagerSagaFlow;