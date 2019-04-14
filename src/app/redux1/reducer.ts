import {
    Action,
    INCREEMENT_ACTION,
    DECREEMENT_ACTION,
    increementActionCreator,
    decreementActionCreator
} from './actions';


// interface Reducer<T> {

//     (state: T, action: Action): T;
// }


type Reducer<T> = (state: T, action: Action) => T;

const reducer: Reducer<number> = (state: number, action: Action): number => {

    if (action.type === INCREEMENT_ACTION) {
        return state + action.payload;
    }
    if (action.type === DECREEMENT_ACTION) {
        return state - action.payload;
    }

    return state;
};


console.log(reducer(0, increementActionCreator)); // -> 0
console.log(reducer(1, increementActionCreator));

console.log(reducer(100, decreementActionCreator));


