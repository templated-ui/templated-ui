import { useContext } from "react";
import { storeContext } from "./store";
import { JSONSchema6 } from 'json-schema';

export type SchemaDefination = any;

type Unpack<A> = A extends Array<infer E> ? E : A



interface IOptionsForBindingSource {
    master?: IBindingSource<any>;

}
interface IBindingSource<T> {
    (key: keyof Unpack<T>): any;
    sampleData: T;
    options: IOptionsForBindingSource;
}

export function openBindingSource<T>
    (sampleData: T, options?: IOptionsForBindingSource): IBindingSource<T> {
    options = { ...options } as IOptionsForBindingSource;
    function Field() {

    }
    return Object.assign(function (key: keyof T) {
        const store = useContext(storeContext);

    }, { options, sampleData, Field }) as any;
}
const a = ({
    ss: {
        type: 'string',
        default: true
    }, x: 'string',
    xx: { ff: 'string', f: 2 }
});


