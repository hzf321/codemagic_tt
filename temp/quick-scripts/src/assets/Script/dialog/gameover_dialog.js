"use strict";
cc._RF.push(module, '5a09auqmsBG27JJ2bvnIpkk', 'gameover_dialog');
// script/dialog/gameover_dialog.ts

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
var gameover_dialog = /** @class */ (function (_super) {
    __extends(gameover_dialog, _super);
    function gameover_dialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.title = null;
        _this.bg = null;
        _this.callback = null;
        return _this;
    }
    gameover_dialog.prototype.initData = function (data) {
        this.callback = data.callback;
    };
    gameover_dialog.prototype.onLoad = function () {
        if (global_1.Global.imgId >= 6) {
            gameData_1.gameData.showInterst();
        }
    };
    gameover_dialog.prototype.start = function () {
        this.title.string = "<color=#e8c30f>CONGRATULATIONS TO YOU!Clear</c><color=#f4f4f5> level " + global_1.Global.imgId + "</color>";
        utils_1.UtilsTool.adapterBg(this.bg);
    };
    gameover_dialog.prototype.onClick_continueBtn = function () {
        global_1.Global.audioUtils.commonBtnClick();
        this.callback && this.callback();
        this.node.destroy();
    };
    gameover_dialog.prototype.onClick_close = function () {
        global_1.Global.audioUtils.commonBtnClick();
        this.node.destroy();
    };
    __decorate([
        property(cc.RichText)
    ], gameover_dialog.prototype, "title", void 0);
    __decorate([
        property(cc.Node)
    ], gameover_dialog.prototype, "bg", void 0);
    gameover_dialog = __decorate([
        ccclass
    ], gameover_dialog);
    return gameover_dialog;
}(cc.Component));
exports.default = gameover_dialog;

cc._RF.pop();