import { CustomStoreManager, Action } from "../core/store";
import { ITemplateProps } from "../core/exports";
interface IState {
    type: string;
}
class StoreManager extends CustomStoreManager<IState>
{

}
function reducer(prevState: IState, action: Action<any>): IState {
    if (action.type == 'INITIALIZE')
        return { type: 'single-view' };
    return prevState;
}
function Template(p: ITemplateProps<IState>) {
    
}