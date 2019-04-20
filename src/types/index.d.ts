import React, { Reducer, useContext, Context } from "react";
// TemplatedUI
export declare interface TemplatedViewProps<V, M> {
    views: V;
    model: M;
}
export declare interface IPredefinedConfig<M, V, TContext> {
    componentType: React.ComponentType<TemplatedViewProps<V, M>>;
    context: Context<TContext>;
    predefinedViews: V;
}
export declare interface IConfigForTemplatedUI<M, V, TContext> {
    model: M;
    views: V;
    template: IPredefinedConfig<M, V, TContext>;
}

export declare function templatedUI<M, V, TContext>
    (config: IConfigForTemplatedUI<M, V, TContext>);