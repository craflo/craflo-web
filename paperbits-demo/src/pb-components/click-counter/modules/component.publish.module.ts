import { IInjectorModule, IInjector } from "@paperbits/common/injection";

/* Knockout example component */
// import { Component, ComponentViewModelBinder } from "./ko";

/* Uncomment to switch to Vue example component */
// import { Component, ComponentViewModelBinder } from "./vue";

/* Uncomment to switch to React example component */
import { ComponentDesign } from "../design/componentDesign";
import { ComponentViewModelBinder } from "../design/componentViewModelBinder"
import { ComponentModelBinder } from "../design/componentModelBinder"

/* Uncomment to switch to Angular example component */
// import { Component, ComponentViewModelBinder } from "./angular";

export class ComponentPublishModule implements IInjectorModule {
    public register(injector: IInjector): void {        
        injector.bind("componentDesign", ComponentDesign);
        injector.bindToCollection("modelBinders", ComponentModelBinder);
        injector.bindToCollection("viewModelBinders", ComponentViewModelBinder);
    }
}