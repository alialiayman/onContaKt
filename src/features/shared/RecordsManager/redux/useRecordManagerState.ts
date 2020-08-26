import { useDispatch, useSelector } from 'react-redux';
import { Load } from './actions';

const useRecordManagerState = (model: any) => {
    const dispatch = useDispatch();

    const loadData = () => {
        dispatch(Load(model));
    };
    const data: any = useSelector((state: any) => {
        const folderState = state.recordsManager.find((x: any) => x.folder === model.folder);
        if (folderState) {
            return folderState.response;
        } else {
            return [];
        }
    });
    const isError: any = useSelector((state: any) => {
        const folderState = state.recordsManager.find((x: any) => x.folder === model.folder);
        if (folderState) {
            return folderState.isError;
        } else {
            return false;
        }
    });

    const isInProgress: any = useSelector((state: any) => {
        const folderState = state.recordsManager.find((x: any) => x.folder === model.folder);
        if (folderState) {
            return folderState.isInProgress;
        } else {
            return false;
        }
    });
    return {
        load: loadData,
        data,
        isError,
        isInProgress,
    }
}

export default useRecordManagerState;