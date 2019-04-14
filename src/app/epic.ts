import { combineEpics } from 'redux-observable';

import { pingEpic } from './epics/epic';

export const rootEpic = combineEpics(pingEpic);
