import { useContext } from "react";
import { IBindingPort } from 'templated-ui/core';
type Unpack<A> = A extends Array<infer E> ? E : never;


export function openBindingSource<T>
    (valueGetter: (key:string)=>any,masterKey:string): IBindingPort<T> {
     function spread<T, TK extends keyof T>(node: T, key: TK) {
        return { value: node[key] }
    }
    function binder(key: keyof T) {
        const node = valueGetter(masterKey);
        return spread(node, key);
    }
    return Object.assign(binder, {
        nested<TKey extends keyof T>(detailKey: keyof T) {
            return Object.assign(function (key: keyof T[TKey]) {
                const masterNode = valueGetter(masterKey);
                const node = masterNode[masterKey][detailKey];
                return spread(node, key);
            }, {
                nested() {
                    throw 'nested-to-nested not supported'
                }, arrayNested() {
                    throw 'nested-to-nested not supported'
                }, getData() {
                    const state = valueGetter(masterKey);
                    return state[detailKey] as any;
                }, selectedIndex(index?) {
                    return 0;
                }
            } as Partial<IBindingPort<T[TKey]>>) as IBindingPort<T[TKey]>
        }, getData() {
            return valueGetter(masterKey);
        }
    } as IBindingPort<T>) as any;
}



