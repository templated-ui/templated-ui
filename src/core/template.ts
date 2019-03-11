import React from "react";
export interface Action<T> {
    type: string;
    payload?: T;
}
export interface ITemplateProps<S> {
    dispatcher: React.Dispatch<Action<any>>;
    store: S;
    children: React.ReactNode;
}
export const templateContext = React.createContext<ITemplateProps<any>>(null);
export function Template<S>(p: ITemplateProps<S>): JSX.Element | undefined {
    if (!p.store || !p.store['initialized'])
        p.dispatcher({ type: 'initialize' });
    if (!p.store['use'])
        return React.createElement('div', { className: 'template-not-defined' },
            'please use predefined Reducer in `reducers`');
    return React.createElement(templateContext.Provider,
        { value: p },
        React.createElement(Template.predefines[p.store['use']], p, p.children));
}
export namespace Template {
    export const predefines: any = {};
    export function register<T>(key: string, componentType: React.ComponentType<T>) {

    }
}