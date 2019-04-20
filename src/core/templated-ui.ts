import { createElement } from "react";
import { IConfigForTemplatedUI } from 'templated-ui'


export function templatedUI<M, V, TContext>(config: IConfigForTemplatedUI<M, V, TContext>) {
    const { model, template } = config;
    const views = { ...template.predefinedViews, ...config.views };
    return createElement(template.componentType, { views, model });

}
  /**
const crudTemplate: IPredefinedConfig<any, IViews, ICrudContext> = null as unknown as any;

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
*/