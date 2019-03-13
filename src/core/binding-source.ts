import { useContext } from "react";
import { storeContext } from "./store";
import { JSONSchema6 } from 'json-schema';
export type SchemaDefination = {
    [K: string]:
    'number' | 'string' | 'boolean' | JSONSchema6 | SchemaDefination[]
};
interface IOptionsForBindingSource {
    master?: IBindingSource<any>;

}
interface IBindingSource<T> {
    (key: keyof T): any;
    schema: SchemaDefination;
    options: IOptionsForBindingSource;
}
export function openBindingSource
    <T extends SchemaDefination>(schema: T, options?: IOptionsForBindingSource): IBindingSource<T> {
    options = { ...options } as IOptionsForBindingSource;
    return Object.assign(function (key: keyof T) {
        const store = useContext(storeContext);

    }, { options, schema });
}
const a = {
    ss: {
        type: 'string',
        default: true
    }, x: 'xsXX'
} as SchemaDefination;
openBindingSource(a);
