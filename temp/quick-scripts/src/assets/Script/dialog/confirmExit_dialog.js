"use strict";
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