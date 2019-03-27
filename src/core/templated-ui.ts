import React, { Reducer, useContext, Context } from "react";

interface IProps<V,M>{
views:V;
model:M;
}
export interface IPredefinedConfig<M, V, TContext> {
    componentType: React.ComponentType<IProps<V,M>>;
    context: Context<TContext>;
    predefinedViews: V;
}
interface IConfig<M, V, TContext> {
    model: M;
    views: V;
    template: IPredefinedConfig<M, V, TContext>;
}

export function templatedUI<M, V, TContext>(config: IConfig<M, V, TContext>) {
    const { model, template } = config;
    const views = { ...template.predefinedViews, ...config.views };
    return React.createElement(template.componentType, { views, model });

}
interface IViews {
    singleViewContent: Function;
}
interface ICrudContext{
    formData:any;
    bindingSource:any;
    serverApi:any;
    model:any;
}
const crudTemplate: IPredefinedConfig<any, IViews,ICrudContext >  = null as unknown as any;

const template = crudTemplate;
templatedUI({
    model: {
        serverApi: null,
        reducer: null,
        routes: {},
        texts: {}
    },
    views: {
        singleViewContent() {
            const { model, serverApi } = useContext(template.context);
            // Return Virtual DOM
        }
    },
    template
})
