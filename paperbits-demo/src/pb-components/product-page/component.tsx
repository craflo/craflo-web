import * as React from "react";
import { RuntimeComponent } from "@paperbits/react/decorators";
import definition from "./definition";
import ProductPage from "../../pages/product/[slug]";

export interface ComponentState {
    clickCount: number;
}

@RuntimeComponent({
    selector: `${definition.name}`
})
export class Component extends React.Component {
    public state: ComponentState;

    constructor(props) {
        super(props);

        this.state = {
            clickCount: props.initialCount || 0
        };

        this.increaseCount = this.increaseCount.bind(this);
    }

    public increaseCount(): void {
        this.setState({ clickCount: this.state.clickCount + 1 });
    }

    public render(): JSX.Element {
        return (
            <ProductPage />
        );
    }
}














