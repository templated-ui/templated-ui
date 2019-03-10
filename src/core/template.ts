import React from "react";

export interface ITemplateProps<S> {
    dispatcher: React.Dispatch<S>;
    state: S;
    children: React.ReactNode;

}
export const templateContext = React.createContext<ITemplateProps<any>>(null);
export function Template<S>(p: ITemplateProps<S>): JSX.Element | undefined {
    return React.createElement(templateContext.Provider,
        { value: p },
        React.createElement(Template.predefines[p.state['use']] ,  p, p.children));
}
export namespace Template {
    export const predefines: any = {};

}