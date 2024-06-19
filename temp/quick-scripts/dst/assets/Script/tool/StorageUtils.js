
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/StorageUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9TdG9yYWdlVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7SUFBQTtJQTRDQSxDQUFDO0lBM0NpQiwyQkFBYyxHQUE1QixVQUE2QixHQUFXLEVBQUUsR0FBVztRQUNqRCxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFYSwyQkFBYyxHQUE1QixVQUE2QixHQUFXLEVBQUUsWUFBcUI7UUFDM0QsWUFBWSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDaEQsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztJQUNoRCxDQUFDO0lBRWEseUJBQVksR0FBMUIsVUFBMkIsR0FBVyxFQUFFLFNBQWtCO1FBQ3RELFlBQVksQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVhLHlCQUFZLEdBQTFCLFVBQTJCLEdBQVcsRUFBRSxZQUFzQjtRQUMxRCxZQUFZLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNuRCxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakQsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO0lBQ3hFLENBQUM7SUFFYSw0QkFBZSxHQUE3QixVQUE4QixHQUFXLEVBQUUsWUFBb0I7UUFDM0QsWUFBWSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVhLDRCQUFlLEdBQTdCLFVBQThCLEdBQVcsRUFBRSxZQUFvQjtRQUMzRCxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakQsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO0lBQzFELENBQUM7SUFFYSwyQkFBYyxHQUE1QixVQUE2QixHQUFXO1FBQ3BDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QyxJQUFJLElBQUksWUFBWSxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFBRSxPQUFPLElBQUksQ0FBQztTQUFFO1FBQzlELElBQUksSUFBSSxFQUFFO1lBQUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQUU7UUFDckMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNhLDJCQUFjLEdBQTVCLFVBQTZCLEdBQUcsRUFBRSxJQUFJO1FBQ2xDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFYSx3QkFBVyxHQUF6QixVQUEwQixHQUFXO1FBQ2pDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUwsbUJBQUM7QUFBRCxDQTVDQSxBQTRDQyxJQUFBO0FBNUNZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBjbGFzcyBTdG9yYWdlVXRpbHMge1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXRTdHJpbmdCeUtleShrZXk6IHN0cmluZywgc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBzdHIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0U3RyaW5nQnlLZXkoa2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlID0gZGVmYXVsdFZhbHVlID8gZGVmYXVsdFZhbHVlIDogXCJcIjtcclxuICAgICAgICBsZXQgdGVtcFZhbHVlID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICAgICAgcmV0dXJuIHRlbXBWYWx1ZSA/IHRlbXBWYWx1ZSA6IGRlZmF1bHRWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldEJvb2xCeUtleShrZXk6IHN0cmluZywgYm9vbFZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgU3RvcmFnZVV0aWxzLnNldFN0cmluZ0J5S2V5KGtleSwgKGJvb2xWYWx1ZSA/IFwiMVwiIDogXCIwXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEJvb2xCeUtleShrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogYm9vbGVhbik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGRlZmF1bHRWYWx1ZSA9IGRlZmF1bHRWYWx1ZSA/IGRlZmF1bHRWYWx1ZSA6IGZhbHNlO1xyXG4gICAgICAgIGxldCB0ZW1wVmFsdWUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICAgICAgICByZXR1cm4gdGVtcFZhbHVlID8gKHRlbXBWYWx1ZSA9PSBcIjFcIiA/IHRydWUgOiBmYWxzZSkgOiBkZWZhdWx0VmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRJbnRlZ2VyQnlLZXkoa2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgU3RvcmFnZVV0aWxzLnNldFN0cmluZ0J5S2V5KGtleSwgZGVmYXVsdFZhbHVlLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW50ZWdlckJ5S2V5KGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IHRlbXBWYWx1ZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgICAgIHJldHVybiB0ZW1wVmFsdWUgPyBwYXJzZUludCh0ZW1wVmFsdWUpIDogZGVmYXVsdFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0U3RvcmFnZUpTT04oa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgICAgIGlmIChkYXRhIGluc3RhbmNlb2YgQXJyYXkgJiYgZGF0YS5sZW5ndGggPCAxKSB7IHJldHVybiBudWxsOyB9XHJcbiAgICAgICAgaWYgKGRhdGEpIHsgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSkgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRTdG9yYWdlSlNPTihrZXksIGRhdGEpIHtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZW1vdmVCeUtleShrZXk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=