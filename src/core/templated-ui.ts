import React, { Reducer } from "react";
import { IStore, storeContext, Action } from "./store";

export interface ITemplateProps<S> {
    store: IStore<S>;
    children?: React.ReactNode;
}
export function TemplatedUI<S>(p: ITemplateProps<S>): JSX.Element | undefined {
    const state: any = p.store && p.store.getState();
    const { type = '' } = state || {};
    if (!type)
        return React.createElement('div', { className: 'template-not-defined' },
            'please use predefined Reducer in `reducers`');
    return React.createElement(storeContext.Provider,
        { value: p.store },
        React.createElement(predefines[`template:${type}`], p, p.children));
}

export const predefines: any = {};
export function registerTemplate<T>(key: string, componentType: React.ComponentType<T>) {
    Object.assign(predefines, { [`template:${key}`]: componentType })
}
export function registerReducer<S>(key: string, reducer: React.Reducer<S, Action<any>>) {
    Object.assign(predefines, { [`reducer:${key}`]: reducer })
}
export function useCraftedLogic<S>(base: string, ...reducers: Array<Reducer<S, Action<any>>>):
    Reducer<S, Action<any>> {
    const key = `reducer:${base}`;
    const baseReducer = predefines[key];
    const fns = [baseReducer, ...reducers.filter(fn => fn instanceof Function)];
    return function (state, action) {
        return fns.reduce((s,fn)=>fn(s,action),state);
    }
}