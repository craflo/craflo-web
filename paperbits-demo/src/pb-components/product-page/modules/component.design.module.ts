import { IInjectorModule, IInjector } from "@paperbits/common/injection";

import { ComponentViewModelBinder } from "../design/componentViewModelBinder"
import { ComponentModelBinder } from "../design/componentModelBinder"
import { ComponentHandlers } from "../design/componentHandlers";
import { ComponentSettings } from "../settings/componentSettings";
import { ComponentDesign } from "../design/componentDesign";


export class ComponentDesignModule implements IInjectorModule {
    public register(injector: IInjector): void {
        injector.bind("componentDesign", ComponentDesign);
        injector.bind("componentSettings", ComponentSettings);
        injector.bindToCollection("widgetHandlers", ComponentHandlers);
        injector.bindToCollection("modelBinders", ComponentModelBinder);
        injector.bindToCollection("viewModelBinders", ComponentViewModelBinder);
    }
}