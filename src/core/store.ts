
export interface Action<T> {
    type: string;
    payload?: T;
}
import { useContext, createContext, useReducer, Reducer } from "react";
export interface IStore<S> {
    getState(): S;
    dispatch(delta: any): void;
}
export const storeContext = createContext<IStore<any>>({
    dispatch: () => 0,
    getState: () => ({ type: 'dev-error', message: `use <TemplatedUI />` })


});
export class CustomStoreManager<S> {

    constructor(public store: IStore<S>) {
    }
    public dispatch(action: string, payload: any) {
        this.store.dispatch({ action, payload });
    }
    public bindDispatch(action: string, payload?: any) {
        return this.store.dispatch.bind(this, action, payload);
    }

}
interface StoreManagerClass<T> {
    new(p: IStore<any>): CustomStoreManager<T>;
}
export function useStoreManager<T extends CustomStoreManager<any>>(
    aclass: StoreManagerClass<T>): T {
    const classType = aclass as any;
    const manager = new aclass(useContext(storeContext)) as any;
    const prototype = classType.prototype;
    for (const key in prototype) {
        if (prototype[key] instanceof Function)
            manager[key] = prototype[key].bind(manager);
    }

    return manager;
}
export function useStore<S>(reducer: Reducer<S, Action<any>>): IStore<S> {
    const [state, dispatch] = useReducer<any>(reducer, null as any);

    if (state === null) dispatch({ type: 'INITIALIZE' })
    return {
        getState() {
            return state as any;
        },
        dispatch
    }
}