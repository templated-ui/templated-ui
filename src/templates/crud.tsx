
import { IPredefinedConfig } from '../core/exports';
import { useContext, useState, createContext } from 'react';

interface IModel {
    serverApi: any;
}
interface IViews {
    listViewHeader(): JSX.Element;
    listViewContent(): JSX.Element;
    listViewFooter(): JSX.Element;

    singleViewHeader(): JSX.Element;
    singleViewContent(): JSX.Element;
    singleViewFooter(): JSX.Element;
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
        const { singleViewContent } = p.views;
        const contextValue: IContext<any> = { state, model: p.model, serverApi: p.model.serverApi }
        return <crudTemplate.context.Provider value={contextValue}>
            {singleViewContent()}
        </crudTemplate.context.Provider>
    }
}
export function crudTemplateBySchema<TSchema>(schema: TSchema): IPredefinedConfig<IModel, IViews, IContext<TSchema>> {
    return crudTemplate as any;
}