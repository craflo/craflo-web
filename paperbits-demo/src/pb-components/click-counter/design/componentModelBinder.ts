/**
 * @license
 * Copyright Paperbits. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file and at https://paperbits.io/license/mit.
 */

import { IModelBinder } from "@paperbits/common/editing";
import { ComponentModel } from "./componentModel";
import { Contract } from "@paperbits/common";
import { ComponentContract } from "./componentContract";

export class ComponentModelBinder implements IModelBinder<ComponentModel> {
    public canHandleContract(contract: Contract): boolean {
        return contract.type === "click-counter";
    }

    public canHandleModel(model: ComponentModel): boolean {
        return model instanceof ComponentModel;
    }

    public async contractToModel(contract: ComponentContract): Promise<ComponentModel> {
        const model = new ComponentModel();
        model.initialCount = contract.initialCount;
        model.styles = contract.styles;
        return model;
    }

    public modelToContract(model: ComponentModel): Contract {
        const contract: ComponentContract = {
            type: "click-counter",
            initialCount: model.initialCount,
            styles: model.styles
        };

        return contract;
    }
}
