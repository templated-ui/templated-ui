import { IWrappedManager, IBindingPort } from "templated-ui/core";
import { any } from "prop-types";
import { openBindingSource } from "./binding-port";

export default class UiManagerWrapper<T> implements IWrappedManager<T>{
    values(...keys: string[]) {
        return keys.map(this.val.bind(this) as any) as any;
    }
  
    /**
     *
     */
    constructor(public target: T, public componentInstance: React.Component<any>) {


    }
    method<TK extends keyof T>(key: TK): T[TK] extends Function ? T[TK] : never {
        const func = this.target[key];
        if (!(func instanceof Function)) throw `method ${key} found `;
        const wrappedFunc = (...args: any[]) => {
            const result = func.apply(this.target, args);
            this.componentInstance.forceUpdate();
            return result;
        };
        return wrappedFunc as any;
    }
    val<TK extends keyof T>(key: TK): any {
        return this.target[key];
    }
    bindingPort<TK extends keyof T>(masterKey: TK): any {
        return openBindingSource(this.val.bind(this) as any, masterKey as any) as any;
    }


}