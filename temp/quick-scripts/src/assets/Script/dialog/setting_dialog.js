"use strict";
cc._RF.push(module, '373fe8INcZH8KIbG9PDCZWr', 'setting_dialog');
// script/dialog/setting_dialog.ts

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
var setting_dialog = /** @class */ (function (_super) {
    __extends(setting_dialog, _super);
    function setting_dialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.title = null;
        _this.pause_sprite = null;
        _this.setting_sprite = null;
        _this.soundBox = null;
        _this.musicBox = null;
        _this.zhengdongBox = null;
        _this.setting_pausebtn = null;
        _this.setting_ok = null;
        _this.callback = null;
        return _this;
    }
    setting_dialog.prototype.start = function () {
        this.init();
        gameData_1.gameData.showBanner();
    };
    setting_dialog.prototype.initData = function (data) {
        this.callback = data.callback;
        if (data.isGame) {
            this.title.spriteFrame = this.pause_sprite;
            this.setting_ok.active = false;
            this.setting_pausebtn.active = true;
        }
        else {
            this.title.spriteFrame = this.setting_sprite;
            this.setting_ok.active = true;
            this.setting_pausebtn.active = false;
        }
    };
    setting_dialog.prototype.init = function () {
        if (!global_1.Global.audioUtils.musicSwitch) {
            this.musicBox.getChildByName("setting_on").active = false;
            this.musicBox.getChildByName("setting_off").active = true;
        }
        else {
            this.musicBox.getChildByName("setting_on").active = true;
            this.musicBox.getChildByName("setting_off").active = false;
        }
        if (!global_1.Global.audioUtils.effectSwitch) {
            this.soundBox.getChildByName("setting_on").active = false;
            this.soundBox.getChildByName("setting_off").active = true;
        }
        else {
            this.soundBox.getChildByName("setting_on").active = true;
            this.soundBox.getChildByName("setting_off").active = false;
        }
        if (!global_1.Global.audioUtils.shockSwitch) {
            this.zhengdongBox.getChildByName("setting_on").active = false;
            this.zhengdongBox.getChildByName("setting_off").active = true;
        }
        else {
            this.zhengdongBox.getChildByName("setting_on").active = true;
            this.zhengdongBox.getChildByName("setting_off").active = false;
        }
    };
    setting_dialog.prototype.onClick_musicbtn = function () {
        global_1.Global.audioUtils.commonBtnClick();
        global_1.Global.audioUtils.switchMusic();
        if (!global_1.Global.audioUtils.musicSwitch) {
            this.musicBox.getChildByName("setting_on").active = false;
            this.musicBox.getChildByName("setting_off").active = true;
        }
        else {
            this.musicBox.getChildByName("setting_on").active = true;
            this.musicBox.getChildByName("setting_off").active = false;
        }
    };
    setting_dialog.prototype.onClick_soundbtn = function () {
        global_1.Global.audioUtils.commonBtnClick();
        global_1.Global.audioUtils.switchEffect();
        if (!global_1.Global.audioUtils.effectSwitch) {
            this.soundBox.getChildByName("setting_on").active = false;
            this.soundBox.getChildByName("setting_off").active = true;
        }
        else {
            this.soundBox.getChildByName("setting_on").active = true;
            this.soundBox.getChildByName("setting_off").active = false;
        }
    };
    setting_dialog.prototype.onClick_zhengdongbtn = function () {
        global_1.Global.audioUtils.commonBtnClick();
        global_1.Global.audioUtils.switchShock();
        if (!global_1.Global.audioUtils.shockSwitch) {
            this.zhengdongBox.getChildByName("setting_on").active = false;
            this.zhengdongBox.getChildByName("setting_off").active = true;
        }
        else {
            this.zhengdongBox.getChildByName("setting_on").active = true;
            this.zhengdongBox.getChildByName("setting_off").active = false;
        }
    };
    setting_dialog.prototype.onClick_continue_btn = function () {
        global_1.Global.audioUtils.commonBtnClick();
        this.node.destroy();
        gameData_1.gameData.closeBanner();
        this.callback && this.callback();
    };
    setting_dialog.prototype.onClick_ok_btn = function () {
        global_1.Global.audioUtils.commonBtnClick();
        this.callback && this.callback();
        this.node.destroy();
        gameData_1.gameData.closeBanner();
    };
    setting_dialog.prototype.onClick_PrivacyPolicy_btn = function () {
        global_1.Global.audioUtils.commonBtnClick();
        cc.sys.openURL("https://sites.google.com/view/beauty-unveiled-uncover-the-di/%E9%A6%96%E9%A1%B5");
    };
    setting_dialog.prototype.onClick_Termsofservicebtn = function () {
        cc.sys.openURL("https://sites.google.com/view/beautyunveileduncoverthediffer/%E9%A6%96%E9%A1%B5");
        global_1.Global.audioUtils.commonBtnClick();
    };
    __decorate([
        property(cc.Sprite)
    ], setting_dialog.prototype, "title", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], setting_dialog.prototype, "pause_sprite", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], setting_dialog.prototype, "setting_sprite", void 0);
    __decorate([
        property(cc.Node)
    ], setting_dialog.prototype, "soundBox", void 0);
    __decorate([
        property(cc.Node)
    ], setting_dialog.prototype, "musicBox", void 0);
    __decorate([
        property(cc.Node)
    ], setting_dialog.prototype, "zhengdongBox", void 0);
    __decorate([
        property(cc.Node)
    ], setting_dialog.prototype, "setting_pausebtn", void 0);
    __decorate([
        property(cc.Node)
    ], setting_dialog.prototype, "setting_ok", void 0);
    setting_dialog = __decorate([
        ccclass
    ], setting_dialog);
    return setting_dialog;
}(cc.Component));
exports.default = setting_dialog;

cc._RF.pop();