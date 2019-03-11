import {   Reducer } from "react";

interface Action {
    type: string;
    payload: any;
}
export function combineReducer(reducerFns: Array<Reducer<any, Action>>) {
    return function (prevState, action) {
        return reducerFns.reduce((s, fn) => fn(s, action), prevState);
    }
}
