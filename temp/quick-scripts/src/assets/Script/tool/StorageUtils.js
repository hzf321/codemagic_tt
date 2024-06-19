"use strict";
cc._RF.push(module, 'f021e0ydDZC+qJMjJKjbysY', 'StorageUtils');
// script/tool/StorageUtils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageUtils = void 0;
var StorageUtils = /** @class */ (function () {
    function StorageUtils() {
    }
    StorageUtils.setStringByKey = function (key, str) {
        cc.sys.localStorage.setItem(key, str);
    };
    StorageUtils.getStringByKey = function (key, defaultValue) {
        defaultValue = defaultValue ? defaultValue : "";
        var tempValue = cc.sys.localStorage.getItem(key);
        return tempValue ? tempValue : defaultValue;
    };
    StorageUtils.setBoolByKey = function (key, boolValue) {
        StorageUtils.setStringByKey(key, (boolValue ? "1" : "0"));
    };
    StorageUtils.getBoolByKey = function (key, defaultValue) {
        defaultValue = defaultValue ? defaultValue : false;
        var tempValue = cc.sys.localStorage.getItem(key);
        return tempValue ? (tempValue == "1" ? true : false) : defaultValue;
    };
    StorageUtils.setIntegerByKey = function (key, defaultValue) {
        StorageUtils.setStringByKey(key, defaultValue.toString());
    };
    StorageUtils.getIntegerByKey = function (key, defaultValue) {
        var tempValue = cc.sys.localStorage.getItem(key);
        return tempValue ? parseInt(tempValue) : defaultValue;
    };
    StorageUtils.getStorageJSON = function (key) {
        var data = cc.sys.localStorage.getItem(key);
        if (data instanceof Array && data.length < 1) {
            return null;
        }
        if (data) {
            return JSON.parse(data);
        }
        return null;
    };
    StorageUtils.setStorageJSON = function (key, data) {
        cc.sys.localStorage.setItem(key, JSON.stringify(data));
    };
    StorageUtils.removeByKey = function (key) {
        cc.sys.localStorage.removeItem(key);
    };
    return StorageUtils;
}());
exports.StorageUtils = StorageUtils;

cc._RF.pop();