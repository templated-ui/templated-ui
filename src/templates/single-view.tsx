import { CustomStoreManager, Action, useEventManager, IStore } from "../core/store";
import { ITemplateProps, registerTemplate, registerReducer } from "../core/templated-ui";
const INITIALIZE = 'INITIALIZE';
interface IState {
    type: string;
}
class StoreManager extends CustomStoreManager<IState>
{

    save() {

    }

}
function reducer(prevState: IState, action: Action<any>): IState {
    if (action.type == INITIALIZE)
        return { type: 'single-view' };
    return prevState;
}
function Template(p: ITemplateProps<IState>) {
    const events = useEventManager(StoreManager);
     
    return <></>
}

registerTemplate('single-view', Template);
registerReducer('single-view', reducer);
