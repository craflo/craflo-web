/**
 * @license
 * Copyright Paperbits. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file and at https://paperbits.io/license/mit.
 */

import "@paperbits/core/ko/bindingHandlers/bindingHandlers.component";
import { IInjector, IInjectorModule } from "@paperbits/common/injection";
import { DefaultEventManager } from "@paperbits/common/events";
import { CoreRuntimeModule } from "@paperbits/core/core.runtime.module";
import { DefaultRouter, HistoryRouteHandler, LocationRouteHandler } from "@paperbits/common/routing";
import { VisibilityGuard } from "@paperbits/common/user";
import { XmlHttpRequestClient } from "@paperbits/common/http";
import { KnockoutRegistrationLoaders } from "@paperbits/core/ko/knockout.loaders";
import { StyleRuntimeModule } from "@paperbits/styles/styles.runtime.module";
import { StaticUserService } from "../user/staticUserService";
import { StaticRoleService } from "../user/staticRoleService";
import components from "../pb-components";


export class DemoRuntimeModule implements IInjectorModule {
    public register(injector: IInjector): void {
        injector.bindModule(new KnockoutRegistrationLoaders());
        injector.bindModule(new StyleRuntimeModule());
        injector.bindSingleton("eventManager", DefaultEventManager);
        injector.bindCollection("autostart");
        injector.bindCollection("routeGuards");
        injector.bindSingleton("router", DefaultRouter);
        injector.bind("httpClient", XmlHttpRequestClient);
        injector.bindToCollection("autostart", VisibilityGuard);
        injector.bindSingleton("userService", StaticUserService);
        injector.bindSingleton("roleService", StaticRoleService);
        injector.bindToCollection("autostart", location.href.includes("designtime=true")
            ? HistoryRouteHandler
            : LocationRouteHandler);
        components.forEach((component)=>{
            console.log(component, "pulkit")
            injector.bindModule(new component.ComponentRuntimeModule());
        })
    }
}