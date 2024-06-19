
export class StorageUtils {
    public static setStringByKey(key: string, str: string) {
        cc.sys.localStorage.setItem(key, str);
    }

    public static getStringByKey(key: string, defaultValue?: string): string {
        defaultValue = defaultValue ? defaultValue : "";
        let tempValue = cc.sys.localStorage.getItem(key);
        return tempValue ? tempValue : defaultValue;
    }

    public static setBoolByKey(key: string, boolValue: boolean) {
        StorageUtils.setStringByKey(key, (boolValue ? "1" : "0"));
    }

    public static getBoolByKey(key: string, defaultValue?: boolean): boolean {
        defaultValue = defaultValue ? defaultValue : false;
        let tempValue = cc.sys.localStorage.getItem(key);
        return tempValue ? (tempValue == "1" ? true : false) : defaultValue;
    }

    public static setIntegerByKey(key: string, defaultValue: number) {
        StorageUtils.setStringByKey(key, defaultValue.toString());
    }

    public static getIntegerByKey(key: string, defaultValue: number): number {
        let tempValue = cc.sys.localStorage.getItem(key);
        return tempValue ? parseInt(tempValue) : defaultValue;
    }

    public static getStorageJSON(key: string) {
        let data = cc.sys.localStorage.getItem(key);
        if (data instanceof Array && data.length < 1) { return null; }
        if (data) { return JSON.parse(data) }
        return null;
    }
    public static setStorageJSON(key, data) {
        cc.sys.localStorage.setItem(key, JSON.stringify(data));
    }

    public static removeByKey(key: string): void {
        cc.sys.localStorage.removeItem(key);
    }

}
