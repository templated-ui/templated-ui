import { createElement, useState } from "react";
import { IPredefineForTemplatedUI } from 'templated-ui/core'
import { BaseContext } from "./context";

export function templatedUI<TPredefine extends IPredefineForTemplatedUI>
  (predefine: TPredefine, input: TPredefine['input']): TPredefine['output'] {
  const props = { ...predefine.defaultInput, ...input };
  let [contextValue, setContextValue] = useState();
  if (!contextValue) {
    contextValue = new BaseContext();
    setContextValue(contextValue);
  }
  const content = createElement(predefine.componentType, props);
  return createElement(predefine.context.Provider, { value: contextValue }, content);
}
Object.assign(window, { TemplatedUiCore: { templatedUI } });
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