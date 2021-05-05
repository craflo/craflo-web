import { IInjector, IInjectorModule } from "@paperbits/common/injection";

/* Knockout example component */
// import { ComponentRuntime } from "./ko/runtime";

/* Uncomment to switch to Vue example component */
// import { ComponentRuntime } from "./vue/runtime";

/* Uncomment to switch to React example component */
import { Component } from "../component";

/* Uncomment to switch to Angular example component */
// import { ComponentRuntime } from "./angular/runtime";

export class ComponentRuntimeModule implements IInjectorModule {
    public register(injector: IInjector): void {
        injector.bind("component", Component);
    }
}