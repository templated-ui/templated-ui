import { ITemplateProps, registerTemplate } from "./templated-ui";
interface IState {
    message: string;
}
function Template(p: ITemplateProps<IState>) {
    const state = p.store.getState();
    return <section className="dev-error">{state.message}</section>
}

registerTemplate('dev-error', Template);