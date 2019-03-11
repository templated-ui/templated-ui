import React from "react";
export interface Action<T> {
    type: string;
    payload?: T;
}
export interface ITemplateProps<S> {
    dispatcher: React.Dispatch<Action<any>>;
    store: S;
    children?: React.ReactNode;
}
export const templateContext = React.createContext<ITemplateProps<any>>({
    dispatcher: () => ({ use: 'dev-error', message: `use <TemplatedUI />` }),
    store: {}


});
export function TemplatedUI<S>(p: ITemplateProps<S>): JSX.Element | undefined {
    const store: any = p.store;
    if (!store || !store['initialized'])
        p.dispatcher({ type: 'initialize' });
    if (!store['use'])
        return React.createElement('div', { className: 'template-not-defined' },
            'please use predefined Reducer in `reducers`');
    return React.createElement(templateContext.Provider,
        { value: p },
        React.createElement(predefines[store['use']], p, p.children));
}

export const predefines: any = {};
export function register<T>(key: string, componentType: React.ComponentType<T>) {
    Object.assign(predefines, { [key]: componentType })
}
