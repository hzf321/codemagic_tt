
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/dialog/confirmExit_dialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9335d26T05DjJw8MacCCseS', 'confirmExit_dialog');
// script/dialog/confirmExit_dialog.ts

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
var utils_1 = require("../tool/utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var confirmExit_dialog = /** @class */ (function (_super) {
    __extends(confirmExit_dialog, _super);
    function confirmExit_dialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.callback = null;
        return _this;
    }
    confirmExit_dialog.prototype.start = function () {
        gameData_1.gameData.showBanner();
    };
    confirmExit_dialog.prototype.initData = function (data) {
        this.callback = data.callback;
    };
    confirmExit_dialog.prototype.onClick_continue_btn = function () {
        global_1.Global.audioUtils.commonBtnClick();
        this.callback && this.callback();
        this.node.destroy();
        gameData_1.gameData.closeBanner();
    };
    confirmExit_dialog.prototype.onClick_backHall = function () {
        global_1.Global.audioUtils.commonBtnClick();
        this.node.destroy();
        gameData_1.gameData.closeBanner();
        gameData_1.gameData.userData.isHall = true;
        gameData_1.gameData.storageData();
        cc.director.loadScene(utils_1.scene.hall);
    };
    confirmExit_dialog = __decorate([
        ccclass
    ], confirmExit_dialog);
    return confirmExit_dialog;
}(cc.Component));
exports.default = confirmExit_dialog;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZGlhbG9nL2NvbmZpcm1FeGl0X2RpYWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBNEM7QUFDNUMseUNBQXdDO0FBQ3hDLHVDQUFzQztBQUVoQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFnRCxzQ0FBWTtJQUE1RDtRQUFBLHFFQThCQztRQTVCRyxjQUFRLEdBQWEsSUFBSSxDQUFDOztJQTRCOUIsQ0FBQztJQXpCYSxrQ0FBSyxHQUFmO1FBQ0ksbUJBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQscUNBQVEsR0FBUixVQUFTLElBQUk7UUFDVCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDbEMsQ0FBQztJQUdELGlEQUFvQixHQUFwQjtRQUNJLGVBQU0sQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQixtQkFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCw2Q0FBZ0IsR0FBaEI7UUFDSSxlQUFNLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDcEIsbUJBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QixtQkFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLG1CQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdkIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsYUFBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXRDLENBQUM7SUE3QmdCLGtCQUFrQjtRQUR0QyxPQUFPO09BQ2Esa0JBQWtCLENBOEJ0QztJQUFELHlCQUFDO0NBOUJELEFBOEJDLENBOUIrQyxFQUFFLENBQUMsU0FBUyxHQThCM0Q7a0JBOUJvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnYW1lRGF0YSB9IGZyb20gXCIuLi90b29sL2dhbWVEYXRhXCI7XG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi4vdG9vbC9nbG9iYWxcIjtcbmltcG9ydCB7IHNjZW5lIH0gZnJvbSBcIi4uL3Rvb2wvdXRpbHNcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNvbmZpcm1FeGl0X2RpYWxvZyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBjYWxsYmFjazogRnVuY3Rpb24gPSBudWxsO1xuXG5cbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIGdhbWVEYXRhLnNob3dCYW5uZXIoKTtcbiAgICB9XG5cbiAgICBpbml0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBkYXRhLmNhbGxiYWNrO1xuICAgIH1cblxuXG4gICAgb25DbGlja19jb250aW51ZV9idG4oKSB7XG4gICAgICAgIEdsb2JhbC5hdWRpb1V0aWxzLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgJiYgdGhpcy5jYWxsYmFjaygpXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIGdhbWVEYXRhLmNsb3NlQmFubmVyKCk7XG4gICAgfVxuXG4gICAgb25DbGlja19iYWNrSGFsbCgpIHtcbiAgICAgICAgR2xvYmFsLmF1ZGlvVXRpbHMuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgZ2FtZURhdGEuY2xvc2VCYW5uZXIoKTtcbiAgICAgICAgZ2FtZURhdGEudXNlckRhdGEuaXNIYWxsID0gdHJ1ZTtcbiAgICAgICAgZ2FtZURhdGEuc3RvcmFnZURhdGEoKTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHNjZW5lLmhhbGwpO1xuXG4gICAgfVxufVxuIl19