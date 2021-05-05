import { Contract } from "@paperbits/common";
import { LocalStyles } from "@paperbits/common/styles";

export interface ComponentContract extends Contract {
    /**
     * Initial count.
     */
    initialCount: number;

    /**
     * Widget local styles.
     */
    styles?: LocalStyles;
}