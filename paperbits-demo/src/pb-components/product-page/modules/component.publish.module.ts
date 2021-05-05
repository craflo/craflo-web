import { IInjectorModule, IInjector } from "@paperbits/common/injection";
import { ComponentDesign } from "../design/componentDesign";
import { ComponentViewModelBinder } from "../design/componentViewModelBinder"
import { ComponentModelBinder } from "../design/componentModelBinder"

export class ComponentPublishModule implements IInjectorModule {
    public register(injector: IInjector): void {        
        injector.bind("componentDesign", ComponentDesign);
        injector.bindToCollection("modelBinders", ComponentModelBinder);
        injector.bindToCollection("viewModelBinders", ComponentViewModelBinder);
    }
}