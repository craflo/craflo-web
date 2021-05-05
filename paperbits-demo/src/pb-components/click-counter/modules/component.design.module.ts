import { IInjectorModule, IInjector } from "@paperbits/common/injection";


/* Knockout example component */
// import { Component, ComponentViewModelBinder } from "./ko";

/* Uncomment to switch to Vue example component */
// import { Component, ComponentViewModelBinder } from "./vue";

/* Uncomment to switch to React example component */
import { Component } from "../component";
import { ComponentViewModelBinder } from "../design/componentViewModelBinder"
import { ComponentModelBinder } from "../design/componentModelBinder"
import { ComponentHandlers } from "../design/componentHandlers";


import { ComponentSettings } from "../settings/componentSettings";
import { ComponentDesign } from "../design/componentDesign";
 

/* Uncomment to switch to Angular example component */
// import { Component, ComponentViewModelBinder } from "./angular";


export class ComponentDesignModule implements IInjectorModule {
    public register(injector: IInjector): void {
        injector.bind("componentDesign", ComponentDesign);
        injector.bind("componentSettings", ComponentSettings);
        injector.bindToCollection("widgetHandlers", ComponentHandlers);
        injector.bindToCollection("modelBinders", ComponentModelBinder);
        injector.bindToCollection("viewModelBinders", ComponentViewModelBinder);
    }
}