
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/dialog/clause_dialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '288ffaP2ZJMYZaoB90GcwU0', 'clause_dialog');
// script/dialog/clause_dialog.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var gameData_1 = require("../tool/gameData");
var global_1 = require("../tool/global");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var clause_dialog = /** @class */ (function (_super) {
    __extends(clause_dialog, _super);
    function clause_dialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.callback = null;
        return _this;
    }
    clause_dialog.prototype.start = function () {
        gameData_1.gameData.showBanner();
    };
    clause_dialog.prototype.initData = function (data) {
        this.callback = data.callback;
    };
    clause_dialog.prototype.onClick_Agreen = function () {
        global_1.Global.audioUtils.commonBtnClick();
        this.callback && this.callback();
        this.node.destroy();
        gameData_1.gameData.closeBanner();
    };
    clause_dialog.prototype.onClick_PrivacyPolicy_btn = function () {
        global_1.Global.audioUtils.commonBtnClick();
        cc.sys.openURL("https://sites.google.com/view/beauty-unveiled-uncover-the-di/%E9%A6%96%E9%A1%B5");
    };
    clause_dialog.prototype.onClick_Termsofservicebtn = function () {
        global_1.Global.audioUtils.commonBtnClick();
        cc.sys.openURL("https://sites.google.com/view/beautyunveileduncoverthediffer/%E9%A6%96%E9%A1%B5");
    };
    clause_dialog = __decorate([
        ccclass
    ], clause_dialog);
    return clause_dialog;
}(cc.Component));
exports.default = clause_dialog;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZGlhbG9nL2NsYXVzZV9kaWFsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQTRDO0FBQzVDLHlDQUF3QztBQUdsQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQTZCQztRQTNCRyxjQUFRLEdBQWEsSUFBSSxDQUFDOztJQTJCOUIsQ0FBQztJQXpCRyw2QkFBSyxHQUFMO1FBQ0ksbUJBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsZ0NBQVEsR0FBUixVQUFTLElBQUk7UUFDVCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDbEMsQ0FBQztJQUVELHNDQUFjLEdBQWQ7UUFDSSxlQUFNLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDcEIsbUJBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsaURBQXlCLEdBQXpCO1FBQ0ksZUFBTSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxpRkFBaUYsQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUFFRCxpREFBeUIsR0FBekI7UUFDSSxlQUFNLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25DLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGlGQUFpRixDQUFDLENBQUM7SUFDdEcsQ0FBQztJQTNCZ0IsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQTZCakM7SUFBRCxvQkFBQztDQTdCRCxBQTZCQyxDQTdCMEMsRUFBRSxDQUFDLFNBQVMsR0E2QnREO2tCQTdCb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdhbWVEYXRhIH0gZnJvbSBcIi4uL3Rvb2wvZ2FtZURhdGFcIjtcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi90b29sL2dsb2JhbFwiO1xuaW1wb3J0IHsgc2NlbmUgfSBmcm9tIFwiLi4vdG9vbC91dGlsc1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2xhdXNlX2RpYWxvZyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBjYWxsYmFjazogRnVuY3Rpb24gPSBudWxsO1xuXG4gICAgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIGdhbWVEYXRhLnNob3dCYW5uZXIoKTtcbiAgICB9XG5cbiAgICBpbml0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBkYXRhLmNhbGxiYWNrO1xuICAgIH1cblxuICAgIG9uQ2xpY2tfQWdyZWVuKCkge1xuICAgICAgICBHbG9iYWwuYXVkaW9VdGlscy5jb21tb25CdG5DbGljaygpO1xuICAgICAgICB0aGlzLmNhbGxiYWNrICYmIHRoaXMuY2FsbGJhY2soKVxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICBnYW1lRGF0YS5jbG9zZUJhbm5lcigpO1xuICAgIH1cbiBcbiAgICBvbkNsaWNrX1ByaXZhY3lQb2xpY3lfYnRuKCkge1xuICAgICAgICBHbG9iYWwuYXVkaW9VdGlscy5jb21tb25CdG5DbGljaygpO1xuICAgICAgICBjYy5zeXMub3BlblVSTChcImh0dHBzOi8vc2l0ZXMuZ29vZ2xlLmNvbS92aWV3L2JlYXV0eS11bnZlaWxlZC11bmNvdmVyLXRoZS1kaS8lRTklQTYlOTYlRTklQTElQjVcIik7XG4gICAgfVxuXG4gICAgb25DbGlja19UZXJtc29mc2VydmljZWJ0bigpIHtcbiAgICAgICAgR2xvYmFsLmF1ZGlvVXRpbHMuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgY2Muc3lzLm9wZW5VUkwoXCJodHRwczovL3NpdGVzLmdvb2dsZS5jb20vdmlldy9iZWF1dHl1bnZlaWxlZHVuY292ZXJ0aGVkaWZmZXIvJUU5JUE2JTk2JUU5JUExJUI1XCIpO1xuICAgIH1cblxufVxuIl19