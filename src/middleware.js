import { actionTypes, isPollAction } from './actions';
import * as logic from './logic';

export default store => next => (action) => {
    if (!isPollAction(action)) {
        return next(action);
    }

    switch (action.type) {
        case actionTypes.start: return logic.start(store, action, next);
        case actionTypes.stop: return logic.stop(store, action, next);
        case actionTypes.request: return logic.request(store, action, next);
        case actionTypes.addEntry: return logic.addEntry(store, action, next);
        default: return false;
    }
};
