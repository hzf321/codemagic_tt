
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/dialog/setting_dialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZGlhbG9nL3NldHRpbmdfZGlhbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUE0QztBQUM1Qyx5Q0FBd0M7QUFFbEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUF1SUM7UUFuSUcsV0FBSyxHQUFjLElBQUksQ0FBQztRQUd4QixrQkFBWSxHQUFtQixJQUFJLENBQUM7UUFHcEMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBR3RDLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc3QixzQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFHakMsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsY0FBUSxHQUFhLElBQUksQ0FBQzs7SUE0RzlCLENBQUM7SUExR0csOEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLG1CQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELGlDQUFRLEdBQVIsVUFBUyxJQUFJO1FBQ1QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzlCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQy9CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3ZDO2FBQU07WUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJ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cUJBQUM7Q0F2SUQsQUF1SUMsQ0F2STJDLEVBQUUsQ0FBQyxTQUFTLEdBdUl2RDtrQkF2SW9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnYW1lRGF0YSB9IGZyb20gXCIuLi90b29sL2dhbWVEYXRhXCI7XG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi4vdG9vbC9nbG9iYWxcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNldHRpbmdfZGlhbG9nIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICB0aXRsZTogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBwYXVzZV9zcHJpdGU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBzZXR0aW5nX3Nwcml0ZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc291bmRCb3g6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbXVzaWNCb3g6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgemhlbmdkb25nQm94OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHNldHRpbmdfcGF1c2VidG46IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc2V0dGluZ19vazogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBjYWxsYmFjazogRnVuY3Rpb24gPSBudWxsO1xuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICBnYW1lRGF0YS5zaG93QmFubmVyKCk7XG4gICAgfVxuXG4gICAgaW5pdERhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gZGF0YS5jYWxsYmFjaztcbiAgICAgICAgaWYgKGRhdGEuaXNHYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnRpdGxlLnNwcml0ZUZyYW1lID0gdGhpcy5wYXVzZV9zcHJpdGU7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdfb2suYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdfcGF1c2VidG4uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGl0bGUuc3ByaXRlRnJhbWUgPSB0aGlzLnNldHRpbmdfc3ByaXRlO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5nX29rLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdfcGF1c2VidG4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGluaXQoKSB7XG5cbiAgICAgICAgaWYgKCFHbG9iYWwuYXVkaW9VdGlscy5tdXNpY1N3aXRjaCkge1xuICAgICAgICAgICAgdGhpcy5tdXNpY0JveC5nZXRDaGlsZEJ5TmFtZShcInNldHRpbmdfb25cIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm11c2ljQm94LmdldENoaWxkQnlOYW1lKFwic2V0dGluZ19vZmZcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubXVzaWNCb3guZ2V0Q2hpbGRCeU5hbWUoXCJzZXR0aW5nX29uXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm11c2ljQm94LmdldENoaWxkQnlOYW1lKFwic2V0dGluZ19vZmZcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIUdsb2JhbC5hdWRpb1V0aWxzLmVmZmVjdFN3aXRjaCkge1xuICAgICAgICAgICAgdGhpcy5zb3VuZEJveC5nZXRDaGlsZEJ5TmFtZShcInNldHRpbmdfb25cIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNvdW5kQm94LmdldENoaWxkQnlOYW1lKFwic2V0dGluZ19vZmZcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc291bmRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJzZXR0aW5nX29uXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNvdW5kQm94LmdldENoaWxkQnlOYW1lKFwic2V0dGluZ19vZmZcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIUdsb2JhbC5hdWRpb1V0aWxzLnNob2NrU3dpdGNoKSB7XG4gICAgICAgICAgICB0aGlzLnpoZW5nZG9uZ0JveC5nZXRDaGlsZEJ5TmFtZShcInNldHRpbmdfb25cIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnpoZW5nZG9uZ0JveC5nZXRDaGlsZEJ5TmFtZShcInNldHRpbmdfb2ZmXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnpoZW5nZG9uZ0JveC5nZXRDaGlsZEJ5TmFtZShcInNldHRpbmdfb25cIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuemhlbmdkb25nQm94LmdldENoaWxkQnlOYW1lKFwic2V0dGluZ19vZmZcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIG9uQ2xpY2tfbXVzaWNidG4oKSB7XG4gICAgICAgIEdsb2JhbC5hdWRpb1V0aWxzLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIEdsb2JhbC5hdWRpb1V0aWxzLnN3aXRjaE11c2ljKCk7XG4gICAgICAgIGlmICghR2xvYmFsLmF1ZGlvVXRpbHMubXVzaWNTd2l0Y2gpIHtcbiAgICAgICAgICAgIHRoaXMubXVzaWNCb3guZ2V0Q2hpbGRCeU5hbWUoXCJzZXR0aW5nX29uXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5tdXNpY0JveC5nZXRDaGlsZEJ5TmFtZShcInNldHRpbmdfb2ZmXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm11c2ljQm94LmdldENoaWxkQnlOYW1lKFwic2V0dGluZ19vblwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5tdXNpY0JveC5nZXRDaGlsZEJ5TmFtZShcInNldHRpbmdfb2ZmXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DbGlja19zb3VuZGJ0bigpIHtcbiAgICAgICAgR2xvYmFsLmF1ZGlvVXRpbHMuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgR2xvYmFsLmF1ZGlvVXRpbHMuc3dpdGNoRWZmZWN0KCk7XG4gICAgICAgIGlmICghR2xvYmFsLmF1ZGlvVXRpbHMuZWZmZWN0U3dpdGNoKSB7XG4gICAgICAgICAgICB0aGlzLnNvdW5kQm94LmdldENoaWxkQnlOYW1lKFwic2V0dGluZ19vblwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc291bmRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJzZXR0aW5nX29mZlwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zb3VuZEJveC5nZXRDaGlsZEJ5TmFtZShcInNldHRpbmdfb25cIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc291bmRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJzZXR0aW5nX29mZlwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkNsaWNrX3poZW5nZG9uZ2J0bigpIHtcbiAgICAgICAgR2xvYmFsLmF1ZGlvVXRpbHMuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgR2xvYmFsLmF1ZGlvVXRpbHMuc3dpdGNoU2hvY2soKTtcbiAgICAgICAgaWYgKCFHbG9iYWwuYXVkaW9VdGlscy5zaG9ja1N3aXRjaCkge1xuICAgICAgICAgICAgdGhpcy56aGVuZ2RvbmdCb3guZ2V0Q2hpbGRCeU5hbWUoXCJzZXR0aW5nX29uXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy56aGVuZ2RvbmdCb3guZ2V0Q2hpbGRCeU5hbWUoXCJzZXR0aW5nX29mZlwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy56aGVuZ2RvbmdCb3guZ2V0Q2hpbGRCeU5hbWUoXCJzZXR0aW5nX29uXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnpoZW5nZG9uZ0JveC5nZXRDaGlsZEJ5TmFtZShcInNldHRpbmdfb2ZmXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DbGlja19jb250aW51ZV9idG4oKSB7XG4gICAgICAgIEdsb2JhbC5hdWRpb1V0aWxzLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIGdhbWVEYXRhLmNsb3NlQmFubmVyKCk7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgJiYgdGhpcy5jYWxsYmFjaygpO1xuICAgIH1cblxuXG4gICAgb25DbGlja19va19idG4oKSB7XG4gICAgICAgIEdsb2JhbC5hdWRpb1V0aWxzLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgJiYgdGhpcy5jYWxsYmFjaygpO1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICBnYW1lRGF0YS5jbG9zZUJhbm5lcigpO1xuICAgIH1cblxuICAgIG9uQ2xpY2tfUHJpdmFjeVBvbGljeV9idG4oKSB7XG4gICAgICAgIEdsb2JhbC5hdWRpb1V0aWxzLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIGNjLnN5cy5vcGVuVVJMKFwiaHR0cHM6Ly9zaXRlcy5nb29nbGUuY29tL3ZpZXcvYmVhdXR5LXVudmVpbGVkLXVuY292ZXItdGhlLWRpLyVFOSVBNiU5NiVFOSVBMSVCNVwiKTtcbiAgICB9XG5cbiAgICBvbkNsaWNrX1Rlcm1zb2ZzZXJ2aWNlYnRuKCkge1xuICAgICAgICBjYy5zeXMub3BlblVSTChcImh0dHBzOi8vc2l0ZXMuZ29vZ2xlLmNvbS92aWV3L2JlYXV0eXVudmVpbGVkdW5jb3ZlcnRoZWRpZmZlci8lRTklQTYlOTYlRTklQTElQjVcIik7XG4gICAgICAgIEdsb2JhbC5hdWRpb1V0aWxzLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgfVxufVxuIl19