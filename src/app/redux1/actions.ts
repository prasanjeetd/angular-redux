export const INCREEMENT_ACTION = 'INCREEMENT-ACTION';
export const DECREEMENT_ACTION = 'DECREEMENT-ACTION';

export const increementActionCreator: Action = { type: INCREEMENT_ACTION, payload: 1 };
export const decreementActionCreator: Action = { type: DECREEMENT_ACTION, payload: 2 };

export interface Action {
    type: String;
    payload?: any;
}



