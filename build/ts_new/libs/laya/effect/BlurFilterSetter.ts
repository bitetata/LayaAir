import { FilterSetterBase } from "././FilterSetterBase";
import { BlurFilter } from "../filters/BlurFilter";
/**
 * ...
 * @author ww
 */
export class BlurFilterSetter extends FilterSetterBase {
    private _strength: number = 4;
    constructor() {
        super();
        this._filter = new BlurFilter(this.strength);
    }
    /**
     * @override
     */
    protected buildFilter(): void {
        this._filter = new BlurFilter(this.strength);
        super.buildFilter();
    }

    get strength(): number {
        return this._strength;
    }

    set strength(value: number) {
        this._strength = value;
    }
}


