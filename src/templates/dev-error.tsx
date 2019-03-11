import { ITemplateProps, register } from "../core/exports";
interface IState {
    message: string;
}
function Template(p: ITemplateProps<IState>) {
    return <section className="dev-error">{p.store.message}</section>
}

register('dev-error', Template);