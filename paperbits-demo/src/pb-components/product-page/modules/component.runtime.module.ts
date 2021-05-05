import { IInjector, IInjectorModule } from "@paperbits/common/injection";
import { Component } from "../component";

export class ComponentRuntimeModule implements IInjectorModule {
    public register(injector: IInjector): void {
        injector.bind("component", Component);
    }
}