import React, { Reducer, useContext, Context } from "react";
// TemplatedUI

export declare interface IBindingPort<T> {
    (key: keyof T): any;
    selectedIndex(index?: number): number;
    getData(): T;
    nested<TKey extends keyof T, TDto = T[TKey]>(key: TKey): IBindingPort<TDto>;
    arrayNested<TKey extends keyof T, TDto = T[TKey]>(arrayKey: TKey): IBindingPort<TDto>;
}

export declare interface IPredefineForTemplatedUI {
    componentType: React.ComponentType<any>;
    input: any;
    defaultInput: any;
    output: any;
    context:React.Context<any>;
}
export   class BaseContext {
    getManager<T>(manager: (new () => T)): IWrappedManager<T>;
}
type SafeBindingPort<T> = (T extends number | Function | string | boolean
    ? unknown : IBindingPort<T>);
type SafeValue<T> = (T extends Function ? unknown : T);
type SafeMethod<T> = T extends Function ? T : unknown;
export interface IWrappedManager<T> {

    method<TK extends keyof T>(key: TK): SafeMethod<T[TK]>;
    val<TK extends keyof T>(key: TK): SafeValue<T[TK]>;
    values<TK extends keyof T, TK2 extends keyof T>(key: TK): [SafeValue<T[TK]>, SafeValue<T[TK2]>];
    values<TK extends keyof T, TK2 extends keyof T, TK3 extends keyof T>(key: TK, key2: TK2, key3: TK3):
        [SafeValue<T[TK]>, SafeValue<T[TK2]>, SafeValue<T[TK3]>];
    values<TK extends keyof T, TK2 extends keyof T, TK3 extends keyof T, TK4 extends keyof T>
        (key: TK, key2: TK2, key3: TK3, key4: TK4):
        [SafeValue<T[TK]>, SafeValue<T[TK2]>, SafeValue<T[TK3]>, SafeValue<T[TK4]>];

    bindingPort<TK extends keyof T>(key: TK): SafeBindingPort<T[TK]>;


}

export interface FieldProps {
    bindTo: any;
    required?: boolean;
}
export const Field: React.SFC<FieldProps>;
export default function templatedUI<TPredefine extends IPredefineForTemplatedUI>
    (config: TPredefine, input:Partial< TPredefine['input']>): TPredefine['output'];

