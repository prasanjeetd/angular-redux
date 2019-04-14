import { ofType, ActionsObservable } from 'redux-observable';
import { mapTo, delay } from 'rxjs/operators';

import { PING, PONG } from './actions';
import { Observable } from 'rxjs';
import { dispatch } from 'rxjs/internal/observable/pairs';

export const pingEpic = (action$: ActionsObservable<any>): Observable<any> => action$.pipe(
    ofType(PING),
    delay(1000),
    mapTo(PONG)
);

