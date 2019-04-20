
import { IPredefinedConfig } from '../core/exports';
import { useContext, useState, createContext, createElement } from 'react';

interface IModel {
    serverApi: any;
}
interface IPropsForViews {
    context: IContext<any>;
}
interface IViews {
    listViewHeader(): JSX.Element;
    listViewContent(): JSX.Element;
    listViewFooter(): JSX.Element;

    singleViewHeader(p: IPropsForViews): JSX.Element;
    singleViewContent(p: IPropsForViews): JSX.Element;
    singleViewFooter(p: IPropsForViews): JSX.Element;
}
interface IContext<TSchema> {
    model: IModel;
    serverApi: any;
    state: any;
}

const crudTemplate: IPredefinedConfig<IModel, IViews, IContext<any>> = {
    predefinedViews: {
        singleViewHeader() {
            const context = useContext(crudTemplate.context);
            return <></>
        }
    } as any,
    context: createContext<IContext<any>>(null as any),
    componentType(p) {
        const [state, setState] = useState();
        const contextValue: IContext<any> = { state, model: p.model, serverApi: p.model.serverApi }
        const propsForChild = { context: contextValue };
        return <crudTemplate.context.Provider value={contextValue}>
            {createElement(p.views.singleViewHeader, propsForChild)}
            {createElement(p.views.singleViewContent, propsForChild)}
            {createElement(p.views.singleViewFooter, propsForChild)}
        </crudTemplate.context.Provider>
    }
}
export function crudTemplateBySchema<TSchema>(schema: TSchema): IPredefinedConfig<IModel, IViews, IContext<TSchema>> {
    return crudTemplate as any;
}