import { useContext } from "react";

type Unpack<A> = A extends Array<infer E> ? E : A
type SchemaValues = 'number' | 'string' | 'boolean' | 'array' | 'object';
type Schema<T extends { [P in TKey]: SchemaValues },
    TKey extends keyof T=keyof T> = { [P in TKey]: SchemaValues };

interface IBindingSource<T> {
    (key: keyof T): any;
    sampleData: T;
    selectedIndex: number;
    getData(): { [P in (keyof T)]: any };
    nested<TDto extends { [P in TKey]: SchemaValues }, TKey extends keyof TDto, arrayKey extends keyof T>(arrayKey: arrayKey, sampleDto: Schema<TDto>): IBindingSource<TDto>
}

export function openBindingSource<T extends Schema<T>>
    (sampleData: T): IBindingSource<T> {
    function Field() {

    }
    return Object.assign(function (key: keyof T) {

    }, { sampleData, Field }) as any;
}



const f = openBindingSource({
    d: 'string',
    dd: 'object',
    dx: 'array'
});
const fx = f.nested('dd', { d: 'number' });
