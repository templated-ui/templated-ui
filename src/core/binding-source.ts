import { useContext } from "react";
import { storeContext } from "./store";
import { JSONSchema6 } from 'json-schema';

export type SchemaDefination<T, KT extends keyof T> = {
    [key in KT]:
    string | JSONSchema6 | SchemaDefination<T[key], keyof T[key]>[]
};
function Schema<T>(schema: T): SchemaDefination<T, keyof T> {
    const _schema = schema as any;
    if (_schema['__schema'])
        return _schema;
    const entries = Object.entries(_schema);
    return Object.assign({ __schema: true },
        ...entries.map(([key, value]) => ([key, typeof value])).map(([key, value]) => ({ [key]: value })))

}

interface IOptionsForBindingSource {
    master?: IBindingSource<any>;

}
interface IBindingSource<T> {
    (key: keyof T): any;
    schema: SchemaDefination<T, keyof T>;
    options: IOptionsForBindingSource;
}
 
export function openBindingSource<T>
    (schema: T, options?: IOptionsForBindingSource): IBindingSource<T> {
    options = { ...options } as IOptionsForBindingSource;
    return Object.assign(function (key: keyof T) {
        const store = useContext(storeContext);

    }, { options, schema });
}
// const a = Schema({
//     ss: {
//         type: 'string',
//         default: true
//     }, x: 'string'
// });

 
