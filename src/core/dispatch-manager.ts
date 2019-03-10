import { ITemplateProps, templateContext } from "./template";
import { useContext } from "react";

export class DispatchManger<S> {
   
  constructor( public templateProps: ITemplateProps<any>) {
   }
  public dispatch(action: string, payload: any) {
    this.templateProps.dispatcher({ action, payload });
  }
  public bindDispatch(action: string, payload?: any) {
    return this.templateProps.dispatcher.bind(this, action, payload);
  }

}
interface DispatchMangerClass<T> {
  new(p: ITemplateProps<any>): T;
}
export function useDispatchManger<T extends DispatchManger<any>>(
  classDispatchManager: DispatchMangerClass<T> ): T {
  const classType = classDispatchManager as any;
   
  const manager = new classDispatchManager(useContext(templateContext));
  const prototype = classType.prototype;
  for (const key in prototype) {
    if (prototype[key] instanceof Function)
      manager[key] = prototype[key].bind(manager);
  }

  return manager;
}
