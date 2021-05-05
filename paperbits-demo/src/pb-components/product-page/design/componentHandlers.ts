/**
 * @license
 * Copyright Paperbits. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file and at https://paperbits.io/license/mit.
 */

import { IWidgetOrder, IWidgetHandler } from "@paperbits/common/editing";
import { ComponentModel } from "./componentModel";
import definition from "../definition";

export class ComponentHandlers implements IWidgetHandler {
    public async getWidgetOrder(): Promise<IWidgetOrder> {
        const widgetOrder: IWidgetOrder = {
            name: `${definition.name}`,
            displayName: `${definition.displayName}`,
            iconClass: `${definition.iconClass}`,
            requires: ["html", "js"],
            createModel: async () => {
                return new ComponentModel();
            }
        };

        return widgetOrder;
    }
}