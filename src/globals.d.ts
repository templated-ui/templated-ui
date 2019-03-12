declare module '@templated-ui/core' {
  
    export interface ITemplateProps<T> {

    }
    export const registerTemplate: Function;
    export const registerReducer:Function;
    export class CustomStoreManager<T>{

    } 
    export interface Action<T>{
type:string;
    }
    export const  useEventManager:Function;
    export interface   IStore{
        
    }
}