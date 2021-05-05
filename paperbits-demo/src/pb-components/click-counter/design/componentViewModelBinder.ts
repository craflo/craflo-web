import { Bag } from "@paperbits/common";
import { WidgetBinding } from "@paperbits/common/editing";
import { EventManager } from "@paperbits/common/events";
import { StyleCompiler } from "@paperbits/common/styles";
import { ViewModelBinder } from "@paperbits/common/widgets";
import { ComponentModel } from "./componentModel";
import { ComponentDesign } from "./componentDesign";


export class ComponentViewModelBinder implements ViewModelBinder<ComponentModel, ComponentDesign>  {
    constructor(
        private readonly eventManager: EventManager,
        private readonly styleCompiler: StyleCompiler
    ) { }

    public async createWidgetBinding(model: ComponentModel, bindingContext: Bag<any>): Promise<WidgetBinding<ComponentModel, ComponentDesign>> {
        const binding = new WidgetBinding<ComponentModel, ComponentDesign>();
        binding.framework = "react";
        binding.model = model;
        binding.name = "click-counter";
        binding.editor = "click-counter-editor";
        binding.readonly = false;
        binding.flow = "block";
        binding.draggable = true;
        binding.displayName = "Click counter";
        binding.viewModelClass = ComponentDesign;
        binding.applyChanges = async () => {
            await this.modelToViewModel(model, binding.viewModel, bindingContext);
            this.eventManager.dispatchEvent("onContentUpdate");
        };
        binding.onCreate = async () => {
            await this.modelToViewModel(model, binding.viewModel, bindingContext);
        };
        binding.onDispose = async () => {
            if (model.styles?.instance) {
                bindingContext.styleManager.removeStyleSheet(model.styles.instance.key);
            }
        };

        return binding;
    }

    public async modelToViewModel(model: ComponentModel, viewModel: ComponentDesign, bindingContext?: Bag<any>): Promise<ComponentDesign> {
        let classNames = null;

        if (model.styles) {
            const styleModel = await this.styleCompiler.getStyleModelAsync(model.styles, bindingContext?.styleManager);

            if (styleModel.styleManager) {
                styleModel.styleManager.setStyleSheet(styleModel.styleSheet);
            }

            classNames = styleModel.classNames;
        }

        viewModel.setState(state => ({
            initialCount: model.initialCount,
            classNames: classNames
        }));

        return viewModel;
    }

    public canHandleModel(model: ComponentModel): boolean {
        return model instanceof ComponentModel;
    }
}