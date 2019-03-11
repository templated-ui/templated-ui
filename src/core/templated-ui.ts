import React from "react";
import { IStore, storeContext } from "./store";

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
        React.createElement(predefines[type], p, p.children));
}

export const predefines: any = {};
export function registerTemplate<T>(key: string, componentType: React.ComponentType<T>) {
    Object.assign(predefines, { [key]: componentType })
}
