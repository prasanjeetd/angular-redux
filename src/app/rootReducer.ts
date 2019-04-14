import { combineReducers, Action } from 'redux';

import { reducer } from './reducer';
import { pingReducer } from './epics/reducer';
import { IRootState } from './store';


export const rootReducer: (state: IRootState, action: Action) => IRootState = combineReducers({
    appState: reducer
    // pingReducer
});



