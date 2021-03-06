import { Reducer } from "react";

interface Action {
    type: string;
    payload: any;
}
export function combineReducer(reducerFns: Array<Reducer<any, Action>>) {
    return function (prevState: any, action: any) {
        return reducerFns.reduce((s, fn) => fn(s, action), prevState);
    }
}

export function extractNearestData(data: any, targetKey: string, ...keys: string[]) {
    let result = data[targetKey];
    for (const key of keys) {
        
        result = data[targetKey];
        data = data[key];
    }

    return result;
}
