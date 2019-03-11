import { useContext } from "react";
import { storeContext } from "./store";

export function openBindingSource<T>() {
    return function (key: keyof T) {
        const store = useContext(storeContext)
    }
}