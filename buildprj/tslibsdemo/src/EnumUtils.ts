/**
 * Created by jsroads on 2022/6/10 18:28
 * Note:
 */
export class EnumUtils {
    static getNamesAndValues(e: any) {
        return this.getNames(e).map(_name => { return { name: _name, value: e[_name] as number }; });
    }

    static getNames(e: any) {
        return this.getObjectValues(e).filter(v => typeof v === "string") as string[];
    }

    static getValues(e: any) {
        return this.getObjectValues(e).filter(v => typeof v === "number") as number[];
    }

    private static getObjectValues(e: any): (number | string)[] {
        return Object.keys(e).map(k => e[k]);
    }
}