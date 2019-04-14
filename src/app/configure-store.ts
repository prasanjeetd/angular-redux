import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { rootReducer } from './rootReducer';
import { rootEpic } from './epic';
import { NgRedux } from '@angular-redux/store';
import { IAppState, IRootState } from './store';
import { pingEpic } from './epics/epic';
import { pingReducer } from './epics/reducer';
import { reducer } from './reducer';
import { ping } from './epics/action-creator';

export function configureStore(ngRedux: NgRedux<IAppState>) {

    // const middleware = [
    //     createEpicMiddleware(rootEpic)
    // ];
    // ngRedux.configureStore(rootReducer, {}, middleware);

    // const epicMiddleware = createEpicMiddleware();

    // const store: IRootState = createStore(rootReducer,
    //     applyMiddleware(epicMiddleware)
    // );

    // ngRedux.provideStore(store);

    // epicMiddleware.run(rootEpic);

    // store.dispatch(ping());
}

