
const initialState: any = [];
function recordsManagerReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'LOADDATA':
            const dontChange_l: any = state.filter((x: any) => x.folder !== action.payload.folder);
            let change_l: any = state.find((x: any) => x.folder === action.payload.folder);

            if (!change_l) {
                change_l = { folder: action.payload.folder };
            }
            change_l.isInProgress = true;
            change_l.isError = false;
            change_l.request = action.payload;
            return [...dontChange_l, { ...change_l }];
        case 'LOADDATA_SUCCESS':
            const dontChange_s: any = state.filter((x: any) => x.folder !== action.payload.request.folder);
            let change_s: any = state.find((x: any) => x.folder === action.payload.request.folder);
            if (!change_s) {
                change_s = { folder: action.payload.request.folder };
            }
            change_s.isInProgress = false;
            change_s.isError = false;
            const result = action.payload.result;
            if (result && result.data) {
                const objectKeys = Object.keys(result.data);
                let mappedRecords = objectKeys.map(k => { return { ...result.data[k], firebaseId: k } });
                change_s.response = mappedRecords
            }

            return [...dontChange_s, { ...change_s }];
        case 'LOADDATA_ERROR':
            const dontChange_e: any = state.filter((x: any) => x.folder !== action.payload.request.folder);
            let change_e: any = state.find((x: any) => x.folder === action.payload.request.folder);
            if (!change_e) {
                change_e = { folder: action.payload.request.folder };
            }
            change_e.isInProgress = false;
            change_e.isError = true;
            change_e.response = action.payload;
            return [...dontChange_e, {change_e}];

        default:
            return state;

    }
}

export default recordsManagerReducer;