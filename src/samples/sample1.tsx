import templatedUI, { Field, BaseContext } from "templated-ui/core";
import ReportTemplate from 'templated-ui/report-template';
import DataLookup from 'templated-ui/data-lookup';
import { useContext } from "react";
import UiManagerForSample1 from "./sample1-logic";
import React from "react";

export default templatedUI(ReportTemplate, {
    title:'XX6',
    renderFilterFields() {
        const context = useContext(ReportTemplate.context);
        const manager = context.getManager(UiManagerForSample1);
        const bindingPort = manager.bindingPort('formData');
        return <>
            <Field bindTo={bindingPort('name')} required>
                <DataLookup source={null} />
            </Field>
            <button onClick={manager.method('saveChanges')}>Apply</button>
        </>
    }
})