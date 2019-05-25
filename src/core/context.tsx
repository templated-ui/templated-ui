import { BaseContext as BaseContext0, IBindingPort } from 'templated-ui/core';
import UiManagerWrapper from './ui-manager-wrapper';
import { useState } from 'react';
export class BaseContext extends BaseContext0 {
    _manager: any;
    getState(): any {

    }
    getManager(classType: any) {
        const [stub,setStub]=useState();
        let [manager, setManager] = useState();
        if (!manager) {
            const target = new classType();
            manager = new UiManagerWrapper(target, {
                forceUpdate: setStub.bind(this, stub)
            } as any);
            setManager(manager);
        }

        return manager;

    }

}