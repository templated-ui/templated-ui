import { useReducer } from "react";

interface Action {
    type: string;
    payload: any;
}

export function setupTemplateLogic(use: string, reducerFns: Array<React.Reducer<any, Action>>, initialData?: any) {
    const reducer = (s, a) => reducerFns.reduce((s, fn) => fn(s, a), s)
    const [state, dispatch] = useReducer(reducer, {initialData,use});
    return [state, dispatch];
}