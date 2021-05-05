import * as React from "react";
import definition from "../definition";

export class ComponentDesign extends React.Component {
    public state: any;

    constructor(props) {
        super(props);

        this.state = {
            initialCount: props.initialCount || 0
        };
    }

    public render(): JSX.Element {
        return (
            <div dangerouslySetInnerHTML={{ __html: `<${definition.name} props='{ "initialCount": ${this.state.initialCount} }'></${definition.name}>` }} />
        );
    }
}