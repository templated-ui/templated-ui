import { useContext } from "react";
import { storeContext } from "./store";
export type SchemaDefination = { [K: string]: 'number' | 'string' | 'boolean' | SchemaDefination | SchemaDefination[] };
interface IOptionsForBindingSource {
    schema: SchemaDefination | SchemaDefination[];
    parent: [string, IBindingSource<any>];

}
interface IBindingSource<T> {
    (key: keyof T): any;
    options: IOptionsForBindingSource;
}
export function openBindingSource<T>(options?: IOptionsForBindingSource): IBindingSource<T> {
    options = { schema: null, ...options } as IOptionsForBindingSource;
    return Object.assign(function (key: keyof T) {
        const store = useContext(storeContext);

    }, { options });
}