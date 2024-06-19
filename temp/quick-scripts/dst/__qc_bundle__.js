
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/dialog/clause_dialog');
require('./assets/script/dialog/comment_dialog');
require('./assets/script/dialog/confirmExit_dialog');
require('./assets/script/dialog/gameover_dialog');
require('./assets/script/dialog/setting_dialog');
require('./assets/script/dialog/timeOut_dialog');
require('./assets/script/game');
require('./assets/script/hall');
require('./assets/script/loading');
require('./assets/script/prefeb/imgItem');
require('./assets/script/prefeb/newhand');
require('./assets/script/tool/AssetUtils');
require('./assets/script/tool/AudioUtils');
require('./assets/script/tool/BxAutoAsset');
require('./assets/script/tool/StorageUtils');
require('./assets/script/tool/gameData');
require('./assets/script/tool/global');
require('./assets/script/tool/scrollview_util');
require('./assets/script/tool/utils');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/loading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3f30aa1wRVDbLr8Lgi0ltz2', 'loading');
// script/loading.ts

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
var gameData_1 = require("./tool/gameData");
var global_1 = require("./tool/global");
var StorageUtils_1 = require("./tool/StorageUtils");
var utils_1 = require("./tool/utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var loading = /** @class */ (function (_super) {
    __extends(loading, _super);
    function loading() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loading_bg = null;
        _this.loaging_bar_yellow = null;
        _this.loadingBox = null;
        _this.gotoHallBox = null;
        _this.loading_play = null;
        _this.resNum = 6;
        _this.nowNum = 0;
        return _this;
    }
    loading.prototype.start = function () {
        var _this = this;
        if (cc.sys.platform === cc.sys.IPAD) {
            this.getComponent(cc.Canvas).fitHeight = true;
            this.getComponent(cc.Canvas).fitWidth = false;
        }
        utils_1.UtilsTool.adapterBg(this.loading_bg);
        global_1.Global.audioUtils.initBtnClickEffect();
        global_1.Global.audioUtils.initbgmMusic();
        var gamedataStorage = StorageUtils_1.StorageUtils.getStorageJSON(gameData_1.storage.gamedata);
        if (gamedataStorage) {
            gameData_1.gameData.userData = gamedataStorage;
        }
        global_1.Global.setsceneNode(this.node);
        if (!gameData_1.gameData.userData.isClause) {
            this.gotoHallBox.active = false;
            this.loadingBox.active = false;
            global_1.Global.assetUtils.showDialog(utils_1.dialog.clause_dialog, {
                callback: function () {
                    gameData_1.gameData.userData.isClause = true;
                    _this.gotoHallBox.active = true;
                    _this.loadingBox.active = false;
                    gameData_1.gameData.storageData();
                    cc.tween(_this.loading_play).to(0.5, { scale: 1.1 }).to(0.5, { scale: 1 }).union().repeatForever().start();
                }
            });
        }
        else {
            this.gotoHallBox.active = true;
            this.loadingBox.active = false;
            cc.tween(this.loading_play).to(0.5, { scale: 1.1 }).to(0.5, { scale: 1 }).union().repeatForever().start();
        }
        gameData_1.gameData.setVideoFailCb(function () {
            cc.resources.load("prefeb/toast", cc.Prefab, function (err, prefab) {
                if (err) {
                    return;
                }
                var toast = cc.instantiate(prefab);
                global_1.Global.assetUtils.bindAutoReleaseAsset(toast, prefab);
                var parentNode = global_1.Global.getsceneNode();
                if (toast && parentNode) {
                    toast.active = true;
                    parentNode.addChild(toast);
                    var toastLabel = toast.getChildByName("label");
                    toastLabel.getComponent(cc.Label).string = "No ads at the moment";
                    cc.Tween.stopAllByTarget(toast);
                    toast.opacity = 255;
                    cc.tween(toast).to(0.15, { scale: 1.2 }).to(0.15, { scale: 1 }).delay(0.5).to(0.5, { opacity: 0 }).call(function () {
                        toast.destroy();
                    }).start();
                }
            });
        });
    };
    loading.prototype.onClick_gotoPlay = function () {
        var _this = this;
        this.gotoHallBox.active = false;
        this.loadingBox.active = true;
        global_1.Global.audioUtils.commonBtnClick();
        this.loaging_bar_yellow.fillRange = 0;
        cc.Tween.stopAllByTarget(this.loaging_bar_yellow);
        cc.loader.loadResDir("prefeb", function (err, assets) {
            if (err) {
                cc.error(err);
                return;
            }
            console.log('prefeb assets in  have been loaded.');
            _this.progressBarEvent();
        });
        cc.loader.loadResDir("finishImg", function (err, assets) {
            if (err) {
                cc.error(err);
                return;
            }
            console.log('finishImg assets in  have been loaded.');
            _this.progressBarEvent();
        });
        cc.loader.loadResDir("originalImg", function (err, assets) {
            if (err) {
                cc.error(err);
                return;
            }
            console.log('originalImg assets in  have been loaded.');
            _this.progressBarEvent();
        });
        cc.loader.loadResDir("imgJson", function (err, assets) {
            if (err) {
                cc.error(err);
                return;
            }
            gameData_1.gameData.levelAll = assets.length;
            console.log('imgJson assets in  have been loaded.');
            _this.progressBarEvent();
        });
        cc.director.preloadScene(utils_1.scene.game, function (err, assets) {
            cc.log("game scene preloaded");
            _this.progressBarEvent();
        });
        cc.director.preloadScene(utils_1.scene.hall, function (err, assets) {
            cc.log("hall scene preloaded");
            _this.progressBarEvent();
        });
    };
    loading.prototype.progressBarEvent = function () {
        var _this = this;
        var fill = 1 / 6;
        this.nowNum++;
        cc.Tween.stopAllByTarget(this.loaging_bar_yellow);
        cc.tween(this.loaging_bar_yellow).to(0.5, { fillRange: fill * this.nowNum })
            .call(function () {
            if (_this.nowNum == _this.resNum) {
                _this.scheduleOnce(function () {
                    if (gameData_1.gameData.userData.isHall) {
                        cc.director.loadScene(utils_1.scene.hall);
                    }
                    else {
                        global_1.Global.imgId = gameData_1.gameData.userData.level;
                        cc.director.loadScene(utils_1.scene.game);
                    }
                }, 0.05);
            }
        }).start();
    };
    loading.prototype.showShiPing = function () {
        console.log("android---------------showShiPing------------------");
        gameData_1.gameData.showVideo(function () {
            console.log("zzzzzzzzzzzzzzzzzzzzwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
        });
    };
    loading.prototype.showbanner = function () {
        console.log("android---------------showbanner------------------");
        jsb.reflection.callStaticMethod("UnityMgr", "showbanner");
    };
    loading.prototype.hidebanner = function () {
        console.log("android---------------hidebanner------------------");
        jsb.reflection.callStaticMethod("UnityMgr", "hidebanner");
    };
    loading.prototype.showChaping = function () {
        console.log("android---------------showChaping------------------");
        jsb.reflection.callStaticMethod("UnityMgr", "loadInterstitial");
    };
    loading.prototype.testBtn = function () {
        console.log("android---------------testBtn------------------");
        //jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "openPingFen", "()V");
        jsb.reflection.callStaticMethod("UnityMgr", "testlog"); //全屏视频
    };
    __decorate([
        property(cc.Node)
    ], loading.prototype, "loading_bg", void 0);
    __decorate([
        property(cc.Sprite)
    ], loading.prototype, "loaging_bar_yellow", void 0);
    __decorate([
        property(cc.Node)
    ], loading.prototype, "loadingBox", void 0);
    __decorate([
        property(cc.Node)
    ], loading.prototype, "gotoHallBox", void 0);
    __decorate([
        property(cc.Node)
    ], loading.prototype, "loading_play", void 0);
    loading = __decorate([
        ccclass
    ], loading);
    return loading;
}(cc.Component));
exports.default = loading;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbG9hZGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBb0Q7QUFDcEQsd0NBQXVDO0FBQ3ZDLG9EQUFtRDtBQUNuRCxzQ0FBd0Q7QUFFbEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBcUMsMkJBQVk7SUFBakQ7UUFBQSxxRUE0TEM7UUF6TEcsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0Isd0JBQWtCLEdBQWMsSUFBSSxDQUFDO1FBR3JDLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRXJCLFlBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxZQUFNLEdBQUcsQ0FBQyxDQUFDOztJQTBLdkIsQ0FBQztJQXhLRyx1QkFBSyxHQUFMO1FBQUEsaUJBZ0VDO1FBOURHLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUU7WUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUM5QyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ2pEO1FBR0QsaUJBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLGVBQU0sQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUN2QyxlQUFNLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRWpDLElBQUksZUFBZSxHQUFHLDJCQUFZLENBQUMsY0FBYyxDQUFDLGtCQUFPLENB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M0I7SUFBRCxjQUFDO0NBNUxELEFBNExDLENBNUxvQyxFQUFFLENBQUMsU0FBUyxHQTRMaEQ7a0JBNUxvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2FtZURhdGEsIHN0b3JhZ2UgfSBmcm9tIFwiLi90b29sL2dhbWVEYXRhXCI7XG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi90b29sL2dsb2JhbFwiO1xuaW1wb3J0IHsgU3RvcmFnZVV0aWxzIH0gZnJvbSBcIi4vdG9vbC9TdG9yYWdlVXRpbHNcIjtcbmltcG9ydCB7IGRpYWxvZywgc2NlbmUsIFV0aWxzVG9vbCB9IGZyb20gXCIuL3Rvb2wvdXRpbHNcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGxvYWRpbmcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbG9hZGluZ19iZzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIGxvYWdpbmdfYmFyX3llbGxvdzogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxvYWRpbmdCb3g6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZ290b0hhbGxCb3g6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbG9hZGluZ19wbGF5OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgcmVzTnVtID0gNjtcbiAgICBwcml2YXRlIG5vd051bSA9IDA7XG5cbiAgICBzdGFydCgpIHtcblxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuSVBBRCkge1xuICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuQ2FudmFzKS5maXRIZWlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuQ2FudmFzKS5maXRXaWR0aCA9IGZhbHNlO1xuICAgICAgICB9XG5cblxuICAgICAgICBVdGlsc1Rvb2wuYWRhcHRlckJnKHRoaXMubG9hZGluZ19iZyk7XG4gICAgICAgIEdsb2JhbC5hdWRpb1V0aWxzLmluaXRCdG5DbGlja0VmZmVjdCgpO1xuICAgICAgICBHbG9iYWwuYXVkaW9VdGlscy5pbml0YmdtTXVzaWMoKTtcblxuICAgICAgICBsZXQgZ2FtZWRhdGFTdG9yYWdlID0gU3RvcmFnZVV0aWxzLmdldFN0b3JhZ2VKU09OKHN0b3JhZ2UuZ2FtZWRhdGEpO1xuICAgICAgICBpZiAoZ2FtZWRhdGFTdG9yYWdlKSB7XG4gICAgICAgICAgICBnYW1lRGF0YS51c2VyRGF0YSA9IGdhbWVkYXRhU3RvcmFnZTtcbiAgICAgICAgfVxuXG4gICAgICAgIEdsb2JhbC5zZXRzY2VuZU5vZGUodGhpcy5ub2RlKTtcblxuXG4gICAgICAgIGlmICghZ2FtZURhdGEudXNlckRhdGEuaXNDbGF1c2UpIHtcbiAgICAgICAgICAgIHRoaXMuZ290b0hhbGxCb3guYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdCb3guYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBHbG9iYWwuYXNzZXRVdGlscy5zaG93RGlhbG9nKGRpYWxvZy5jbGF1c2VfZGlhbG9nLCB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZURhdGEudXNlckRhdGEuaXNDbGF1c2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdvdG9IYWxsQm94LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0JveC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZURhdGEuc3RvcmFnZURhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5sb2FkaW5nX3BsYXkpLnRvKDAuNSwgeyBzY2FsZTogMS4xIH0pLnRvKDAuNSwgeyBzY2FsZTogMSB9KS51bmlvbigpLnJlcGVhdEZvcmV2ZXIoKS5zdGFydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nb3RvSGFsbEJveC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nQm94LmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmxvYWRpbmdfcGxheSkudG8oMC41LCB7IHNjYWxlOiAxLjEgfSkudG8oMC41LCB7IHNjYWxlOiAxIH0pLnVuaW9uKCkucmVwZWF0Rm9yZXZlcigpLnN0YXJ0KCk7XG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgZ2FtZURhdGEuc2V0VmlkZW9GYWlsQ2IoKCk9PntcbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwicHJlZmViL3RvYXN0XCIsIGNjLlByZWZhYiwgKGVyciwgcHJlZmFiKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCB0b2FzdCA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgICAgICAgICAgR2xvYmFsLmFzc2V0VXRpbHMuYmluZEF1dG9SZWxlYXNlQXNzZXQodG9hc3QsIHByZWZhYik7XG4gICAgICAgICAgICAgICAgbGV0IHBhcmVudE5vZGUgPSBHbG9iYWwuZ2V0c2NlbmVOb2RlKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRvYXN0ICYmIHBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5hZGRDaGlsZCh0b2FzdCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0b2FzdExhYmVsID0gdG9hc3QuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJlbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RMYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiTm8gYWRzIGF0IHRoZSBtb21lbnRcIjtcbiAgICAgICAgICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRvYXN0KTtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3Qub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odG9hc3QpLnRvKDAuMTUsIHsgc2NhbGU6IDEuMiB9KS50bygwLjE1LCB7IHNjYWxlOiAxIH0pLmRlbGF5KDAuNSkudG8oMC41LCB7IG9wYWNpdHk6IDAgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gXG5cbiAgICB9XG5cbiAgICBvbkNsaWNrX2dvdG9QbGF5KCkge1xuICAgICAgICB0aGlzLmdvdG9IYWxsQm94LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxvYWRpbmdCb3guYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgR2xvYmFsLmF1ZGlvVXRpbHMuY29tbW9uQnRuQ2xpY2soKTtcblxuICAgICAgICB0aGlzLmxvYWdpbmdfYmFyX3llbGxvdy5maWxsUmFuZ2UgPSAwO1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5sb2FnaW5nX2Jhcl95ZWxsb3cpXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzRGlyKFwicHJlZmViXCIsIChlcnIsIGFzc2V0cykgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3ByZWZlYiBhc3NldHMgaW4gIGhhdmUgYmVlbiBsb2FkZWQuJyk7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyRXZlbnQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzRGlyKFwiZmluaXNoSW1nXCIsIChlcnIsIGFzc2V0cykgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZpbmlzaEltZyBhc3NldHMgaW4gIGhhdmUgYmVlbiBsb2FkZWQuJyk7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyRXZlbnQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzRGlyKFwib3JpZ2luYWxJbWdcIiwgKGVyciwgYXNzZXRzKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnb3JpZ2luYWxJbWcgYXNzZXRzIGluICBoYXZlIGJlZW4gbG9hZGVkLicpO1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0JhckV2ZW50KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjYy5sb2FkZXIubG9hZFJlc0RpcihcImltZ0pzb25cIiwgKGVyciwgYXNzZXRzKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnYW1lRGF0YS5sZXZlbEFsbCA9IGFzc2V0cy5sZW5ndGg7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaW1nSnNvbiBhc3NldHMgaW4gIGhhdmUgYmVlbiBsb2FkZWQuJyk7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyRXZlbnQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKHNjZW5lLmdhbWUsIChlcnIsIGFzc2V0cykgPT4ge1xuICAgICAgICAgICAgY2MubG9nKFwiZ2FtZSBzY2VuZSBwcmVsb2FkZWRcIik7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyRXZlbnQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShzY2VuZS5oYWxsLCAoZXJyLCBhc3NldHMpID0+IHtcbiAgICAgICAgICAgIGNjLmxvZyhcImhhbGwgc2NlbmUgcHJlbG9hZGVkXCIpO1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0JhckV2ZW50KCk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHJvZ3Jlc3NCYXJFdmVudCgpIHtcbiAgICAgICAgbGV0IGZpbGwgPSAxIC8gNjtcbiAgICAgICAgdGhpcy5ub3dOdW0rKztcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMubG9hZ2luZ19iYXJfeWVsbG93KVxuICAgICAgICBjYy50d2Vlbih0aGlzLmxvYWdpbmdfYmFyX3llbGxvdykudG8oMC41LCB7IGZpbGxSYW5nZTogZmlsbCAqIHRoaXMubm93TnVtIH0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubm93TnVtID09IHRoaXMucmVzTnVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lRGF0YS51c2VyRGF0YS5pc0hhbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoc2NlbmUuaGFsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdsb2JhbC5pbWdJZCA9IGdhbWVEYXRhLnVzZXJEYXRhLmxldmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShzY2VuZS5nYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgMC4wNSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgIH1cblxuXG4gICAgc2hvd1NoaVBpbmcoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYW5kcm9pZC0tLS0tLS0tLS0tLS0tLXNob3dTaGlQaW5nLS0tLS0tLS0tLS0tLS0tLS0tXCIpXG4gICAgICAgIGdhbWVEYXRhLnNob3dWaWRlbygoKT0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ6enp6enp6enp6enp6enp6enp6end3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3XCIpO1xuICAgICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBzaG93YmFubmVyKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImFuZHJvaWQtLS0tLS0tLS0tLS0tLS1zaG93YmFubmVyLS0tLS0tLS0tLS0tLS0tLS0tXCIpXG4gICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJVbml0eU1nclwiLCBcInNob3diYW5uZXJcIik7XG4gICAgfVxuXG5cbiAgICBoaWRlYmFubmVyKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImFuZHJvaWQtLS0tLS0tLS0tLS0tLS1oaWRlYmFubmVyLS0tLS0tLS0tLS0tLS0tLS0tXCIpXG4gICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJVbml0eU1nclwiLCBcImhpZGViYW5uZXJcIik7XG4gICAgfVxuIFxuICAgIHNob3dDaGFwaW5nKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImFuZHJvaWQtLS0tLS0tLS0tLS0tLS1zaG93Q2hhcGluZy0tLS0tLS0tLS0tLS0tLS0tLVwiKVxuICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwiVW5pdHlNZ3JcIiwgXCJsb2FkSW50ZXJzdGl0aWFsXCIpO1xuICAgIH1cbiAgIFxuICAgIHRlc3RCdG4oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYW5kcm9pZC0tLS0tLS0tLS0tLS0tLXRlc3RCdG4tLS0tLS0tLS0tLS0tLS0tLS1cIilcbiAgICAgICAgLy9qc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJvcGVuUGluZ0ZlblwiLCBcIigpVlwiKTtcbiAgICBcbiAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIlVuaXR5TWdyXCIsIFwidGVzdGxvZ1wiKTsvL+WFqOWxj+inhumikVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/prefeb/newhand.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9a1e0lTY71PmJruz9bjJlQK', 'newhand');
// script/prefeb/newhand.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var newhand = /** @class */ (function (_super) {
    __extends(newhand, _super);
    function newhand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dong1_top = null;
        _this.dongdong1_bottom = null;
        _this.hand1 = null;
        _this.dong2_top = null;
        _this.dongdong2_bottom = null;
        _this.hand2 = null;
        return _this;
    }
    newhand.prototype.start = function () {
    };
    newhand.prototype.showdong1 = function () {
        var _this = this;
        this.dong1_top.active = true;
        this.dongdong1_bottom.active = true;
        this.hand1.active = false;
        this.dong1_top.width = 500;
        this.dong1_top.height = 500;
        this.dongdong1_bottom.width = 500;
        this.dongdong1_bottom.height = 500;
        cc.Tween.stopAllByTarget(this.dong1_top);
        cc.Tween.stopAllByTarget(this.dongdong1_bottom);
        cc.tween(this.dong1_top).to(0.5, { width: 80, height: 80 }).start();
        cc.tween(this.dongdong1_bottom).to(0.5, { width: 80, height: 80 }).delay(0.1).call(function () {
            _this.hand1.active = true;
        }).start();
    };
    newhand.prototype.hidedong1 = function () {
        this.dong1_top.active = false;
        this.dongdong1_bottom.active = false;
        this.hand1.active = false;
    };
    newhand.prototype.showdong2 = function () {
        var _this = this;
        this.dong2_top.active = true;
        this.dongdong2_bottom.active = true;
        this.hand2.active = false;
        this.dong2_top.width = 500;
        this.dong2_top.height = 500;
        this.dongdong2_bottom.width = 500;
        this.dongdong2_bottom.height = 500;
        cc.Tween.stopAllByTarget(this.dong2_top);
        cc.Tween.stopAllByTarget(this.dongdong2_bottom);
        cc.tween(this.dong2_top).to(0.5, { width: 80, height: 80 }).start();
        cc.tween(this.dongdong2_bottom).to(0.5, { width: 80, height: 80 }).delay(0.1).call(function () {
            _this.hand2.active = true;
        }).start();
    };
    __decorate([
        property(cc.Node)
    ], newhand.prototype, "dong1_top", void 0);
    __decorate([
        property(cc.Node)
    ], newhand.prototype, "dongdong1_bottom", void 0);
    __decorate([
        property(cc.Node)
    ], newhand.prototype, "hand1", void 0);
    __decorate([
        property(cc.Node)
    ], newhand.prototype, "dong2_top", void 0);
    __decorate([
        property(cc.Node)
    ], newhand.prototype, "dongdong2_bottom", void 0);
    __decorate([
        property(cc.Node)
    ], newhand.prototype, "hand2", void 0);
    newhand = __decorate([
        ccclass
    ], newhand);
    return newhand;
}(cc.Component));
exports.default = newhand;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcHJlZmViL25ld2hhbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBcUMsMkJBQVk7SUFBakQ7UUFBQSxxRUE0RUM7UUF6RUcsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixzQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFHakMsV0FBSyxHQUFZLElBQUksQ0FBQztRQUl0QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLHNCQUFnQixHQUFZLElBQUksQ0FBQztRQUdqQyxXQUFLLEdBQVksSUFBSSxDQUFDOztJQXlEMUIsQ0FBQztJQXZERyx1QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELDJCQUFTLEdBQVQ7UUFBQSxpQkFtQkM7UUFsQkcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRXBDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUUxQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBRTVCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ25DLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6QyxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FB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U0FBUyxHQTRFaEQ7a0JBNUVvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG5ld2hhbmQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZG9uZzFfdG9wOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGRvbmdkb25nMV9ib3R0b206IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaGFuZDE6IGNjLk5vZGUgPSBudWxsO1xuXG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBkb25nMl90b3A6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZG9uZ2RvbmcyX2JvdHRvbTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBoYW5kMjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBzdGFydCgpIHtcblxuICAgIH1cblxuICAgIHNob3dkb25nMSgpIHtcbiAgICAgICAgdGhpcy5kb25nMV90b3AuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kb25nZG9uZzFfYm90dG9tLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5oYW5kMS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmRvbmcxX3RvcC53aWR0aCA9IDUwMDtcbiAgICAgICAgdGhpcy5kb25nMV90b3AuaGVpZ2h0ID0gNTAwO1xuXG4gICAgICAgIHRoaXMuZG9uZ2RvbmcxX2JvdHRvbS53aWR0aCA9IDUwMDtcbiAgICAgICAgdGhpcy5kb25nZG9uZzFfYm90dG9tLmhlaWdodCA9IDUwMDtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuZG9uZzFfdG9wKTtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuZG9uZ2RvbmcxX2JvdHRvbSk7XG5cblxuICAgICAgICBjYy50d2Vlbih0aGlzLmRvbmcxX3RvcCkudG8oMC41LCB7IHdpZHRoOiA4MCwgaGVpZ2h0OiA4MH0pLnN0YXJ0KCk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZG9uZ2RvbmcxX2JvdHRvbSkudG8oMC41LCB7IHdpZHRoOiA4MCwgaGVpZ2h0OiA4MH0pLmRlbGF5KDAuMSkuY2FsbCgoKT0+e1xuICAgICAgICAgICAgdGhpcy5oYW5kMS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9KS5zdGFydCgpO1xuICAgIH1cblxuXG4gICAgaGlkZWRvbmcxKCkge1xuICAgICAgICB0aGlzLmRvbmcxX3RvcC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kb25nZG9uZzFfYm90dG9tLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhhbmQxLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuXG4gICAgc2hvd2RvbmcyKCkge1xuICAgICAgICB0aGlzLmRvbmcyX3RvcC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmRvbmdkb25nMl9ib3R0b20uYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmhhbmQyLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuZG9uZzJfdG9wLndpZHRoID0gNTAwO1xuICAgICAgICB0aGlzLmRvbmcyX3RvcC5oZWlnaHQgPSA1MDA7XG5cbiAgICAgICAgdGhpcy5kb25nZG9uZzJfYm90dG9tLndpZHRoID0gNTAwO1xuICAgICAgICB0aGlzLmRvbmdkb25nMl9ib3R0b20uaGVpZ2h0ID0gNTAwO1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5kb25nMl90b3ApO1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5kb25nZG9uZzJfYm90dG9tKTtcblxuXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZG9uZzJfdG9wKS50bygwLjUsIHsgd2lkdGg6IDgwLCBoZWlnaHQ6IDgwfSkuc3RhcnQoKTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5kb25nZG9uZzJfYm90dG9tKS50bygwLjUsIHsgd2lkdGg6IDgwLCBoZWlnaHQ6IDgwfSkuZGVsYXkoMC4xKS5jYWxsKCgpPT57XG4gICAgICAgICAgICB0aGlzLmhhbmQyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuXG5cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/AudioUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '090fcgAZWxOM6pwykHoyPvy', 'AudioUtils');
// script/tool/AudioUtils.ts

"use strict";
//音频工具类
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioUtils = void 0;
var StorageUtils_1 = require("./StorageUtils");
var commonBtnPath = "sound/click";
var commonBgmPath = "sound/bgm";
var AudioUtils = /** @class */ (function () {
    function AudioUtils() {
        this.btnClickEffect = null;
        this.bgmMusic = null;
        this.currMusic = null;
        this.musicSwitch = StorageUtils_1.StorageUtils.getBoolByKey("kk_setup_music", true);
        this.effectSwitch = StorageUtils_1.StorageUtils.getBoolByKey("kk_setup_effect", true);
        this.shockSwitch = StorageUtils_1.StorageUtils.getBoolByKey("kk_setup_shock", true);
    }
    AudioUtils.prototype.initBtnClickEffect = function () {
        var _this = this;
        if (this.btnClickEffect)
            return;
        cc.resources.load(commonBtnPath, cc.AudioClip, function (err, clip) {
            if (err || !cc.isValid(_this)) {
                return;
            }
            _this.btnClickEffect = clip;
            clip.addRef();
        });
    };
    AudioUtils.prototype.initbgmMusic = function () {
        var _this = this;
        if (this.bgmMusic)
            return;
        cc.resources.load(commonBgmPath, cc.AudioClip, function (err, clip) {
            if (err || !cc.isValid(_this)) {
                return;
            }
            _this.bgmMusic = clip;
            _this.commonbgmMusic();
            clip.addRef();
        });
    };
    AudioUtils.prototype.switchMusic = function () {
        this.musicSwitch = !this.musicSwitch;
        StorageUtils_1.StorageUtils.setBoolByKey("kk_setup_music", this.musicSwitch);
        if (this.musicSwitch) {
            if (this.currMusic) {
                this.playMusic(this.currMusic);
            }
        }
        else {
            this.stopMusic();
        }
    };
    AudioUtils.prototype.switchEffect = function () {
        this.effectSwitch = !this.effectSwitch;
        StorageUtils_1.StorageUtils.setBoolByKey("kk_setup_effect", this.effectSwitch);
        if (this.effectSwitch) {
        }
        else {
            cc.audioEngine.stopAllEffects();
        }
    };
    AudioUtils.prototype.switchShock = function () {
        this.shockSwitch = !this.shockSwitch;
        StorageUtils_1.StorageUtils.setBoolByKey("kk_setup_shock", this.shockSwitch);
    };
    AudioUtils.prototype.playMusic = function (audio, isLoop) {
        if (isLoop === void 0) { isLoop = true; }
        if (!audio)
            return;
        this.currMusic = audio; //保存当前背景音乐
        if (this.musicSwitch) {
            // this.stopMusic();
            var audioID = cc.audioEngine.playMusic(audio, isLoop);
        }
    };
    AudioUtils.prototype.playEffect = function (audio, isLoop, callback) {
        if (isLoop === void 0) { isLoop = false; }
        if (callback === void 0) { callback = null; }
        if (!audio)
            return;
        if (this.effectSwitch) {
            var audioID = cc.audioEngine.play(audio, isLoop, 1);
            if (callback)
                cc.audioEngine.setFinishCallback(audioID, callback);
            return audioID;
        }
        return null;
    };
    AudioUtils.prototype.playEffectWithPath = function (path, isLoop) {
        if (isLoop === void 0) { isLoop = false; }
        if (!path || !this.effectSwitch)
            return;
        cc.resources.load(path, cc.AudioClip, function (err, clip) {
            if (err) {
                cc.log("加载音效资源失败" + path);
                return;
            }
            var audioID = cc.audioEngine.play(clip, isLoop, 1);
        });
    };
    AudioUtils.prototype.stopMusic = function () {
        cc.audioEngine.stopMusic();
    };
    AudioUtils.prototype.stopAll = function () {
        cc.audioEngine.stopAll();
    };
    AudioUtils.prototype.pauseAll = function () {
        if (this.musicSwitch) {
            cc.audioEngine.pauseAll();
        }
    };
    AudioUtils.prototype.resumeAll = function () {
        if (this.musicSwitch) {
            cc.audioEngine.resumeAll();
        }
    };
    AudioUtils.prototype.stopEffect = function (audioID) {
        cc.audioEngine.stopEffect(audioID);
    };
    AudioUtils.prototype.pause = function (audioID) {
        cc.audioEngine.pause(audioID);
    };
    AudioUtils.prototype.resume = function (audioID) {
        if (this.musicSwitch) {
            cc.audioEngine.resume(audioID);
        }
    };
    AudioUtils.prototype.commonBtnClick = function () {
        this.playEffect(this.btnClickEffect, false);
    };
    AudioUtils.prototype.commonbgmMusic = function () {
        this.playMusic(this.bgmMusic);
    };
    return AudioUtils;
}());
exports.AudioUtils = AudioUtils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9BdWRpb1V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPOzs7QUFFUCwrQ0FBNkM7QUFFN0MsSUFBTSxhQUFhLEdBQUcsYUFBYSxDQUFDO0FBQ3BDLElBQU0sYUFBYSxHQUFHLFdBQVcsQ0FBQztBQUVsQztJQW9DSTtRQTlCUSxtQkFBYyxHQUFpQixJQUFJLENBQUM7UUFDcEMsYUFBUSxHQUFpQixJQUFJLENBQUM7UUFFOUIsY0FBUyxHQUFpQixJQUFJLENBQUM7UUE0Qm5DLElBQUksQ0FBQyxXQUFXLEdBQUcsMkJBQVksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLFlBQVksR0FBRywyQkFBWSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsV0FBVyxHQUFHLDJCQUFZLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUE3Qk0sdUNBQWtCLEdBQXpCO1FBQUEsaUJBVUM7UUFURyxJQUFJLElBQUksQ0FBQyxjQUFjO1lBQUUsT0FBTztRQUVoQyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLEdBQVUsRUFBRSxJQUFrQjtZQUMxRSxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLEVBQUU7Z0JBQzFCLE9BQU87YUFDVjtZQUNELEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBQzNCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxpQ0FBWSxHQUFuQjtRQUFBLGlCQVdDO1FBVkcsSUFBSSxJQUFJLENBQUMsUUFBUTtZQUFFLE9B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ckI7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVNLG1DQUFjLEdBQXJCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUdMLGlCQUFDO0FBQUQsQ0FySkEsQUFxSkMsSUFBQTtBQXJKWSxnQ0FBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8v6Z+z6aKR5bel5YW357G7XHJcblxyXG5pbXBvcnQgeyBTdG9yYWdlVXRpbHMgfSBmcm9tIFwiLi9TdG9yYWdlVXRpbHNcIlxyXG5cclxuY29uc3QgY29tbW9uQnRuUGF0aCA9IFwic291bmQvY2xpY2tcIjtcclxuY29uc3QgY29tbW9uQmdtUGF0aCA9IFwic291bmQvYmdtXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXVkaW9VdGlscyB7XHJcblxyXG4gICAgbXVzaWNTd2l0Y2g6IGJvb2xlYW47ICAgIC8v6IOM5pmv6Z+z5LmQ5byA5YWzXHJcbiAgICBlZmZlY3RTd2l0Y2g6IGJvb2xlYW47ICAgLy/pn7PmlYjlvIDlhbNcclxuICAgIHNob2NrU3dpdGNoOiBib29sZWFuOyAgICAvLyDpnIfliqjlvIDlhbNcclxuXHJcbiAgICBwcml2YXRlIGJ0bkNsaWNrRWZmZWN0OiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBiZ21NdXNpYzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGN1cnJNdXNpYzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgaW5pdEJ0bkNsaWNrRWZmZWN0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmJ0bkNsaWNrRWZmZWN0KSByZXR1cm47XHJcblxyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKGNvbW1vbkJ0blBhdGgsIGNjLkF1ZGlvQ2xpcCwgKGVycjogRXJyb3IsIGNsaXA6IGNjLkF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyIHx8ICFjYy5pc1ZhbGlkKHRoaXMpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5idG5DbGlja0VmZmVjdCA9IGNsaXA7XHJcbiAgICAgICAgICAgIGNsaXAuYWRkUmVmKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXRiZ21NdXNpYygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5iZ21NdXNpYykgcmV0dXJuO1xyXG5cclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChjb21tb25CZ21QYXRoLCBjYy5BdWRpb0NsaXAsIChlcnI6IEVycm9yLCBjbGlwOiBjYy5BdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgaWYgKGVyciB8fCAhY2MuaXNWYWxpZCh0aGlzKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYmdtTXVzaWMgPSBjbGlwO1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1vbmJnbU11c2ljKCk7XHJcbiAgICAgICAgICAgIGNsaXAuYWRkUmVmKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5tdXNpY1N3aXRjaCA9IFN0b3JhZ2VVdGlscy5nZXRCb29sQnlLZXkoXCJra19zZXR1cF9tdXNpY1wiLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmVmZmVjdFN3aXRjaCA9IFN0b3JhZ2VVdGlscy5nZXRCb29sQnlLZXkoXCJra19zZXR1cF9lZmZlY3RcIiwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5zaG9ja1N3aXRjaCA9IFN0b3JhZ2VVdGlscy5nZXRCb29sQnlLZXkoXCJra19zZXR1cF9zaG9ja1wiLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3dpdGNoTXVzaWMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tdXNpY1N3aXRjaCA9ICF0aGlzLm11c2ljU3dpdGNoO1xyXG4gICAgICAgIFN0b3JhZ2VVdGlscy5zZXRCb29sQnlLZXkoXCJra19zZXR1cF9tdXNpY1wiLCB0aGlzLm11c2ljU3dpdGNoKTtcclxuICAgICAgICBpZiAodGhpcy5tdXNpY1N3aXRjaCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyTXVzaWMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheU11c2ljKHRoaXMuY3Vyck11c2ljKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcE11c2ljKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzd2l0Y2hFZmZlY3QoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RTd2l0Y2ggPSAhdGhpcy5lZmZlY3RTd2l0Y2g7XHJcbiAgICAgICAgU3RvcmFnZVV0aWxzLnNldEJvb2xCeUtleShcImtrX3NldHVwX2VmZmVjdFwiLCB0aGlzLmVmZmVjdFN3aXRjaCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZWZmZWN0U3dpdGNoKSB7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzd2l0Y2hTaG9jaygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNob2NrU3dpdGNoID0gIXRoaXMuc2hvY2tTd2l0Y2g7XHJcbiAgICAgICAgU3RvcmFnZVV0aWxzLnNldEJvb2xCeUtleShcImtrX3NldHVwX3Nob2NrXCIsIHRoaXMuc2hvY2tTd2l0Y2gpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgcGxheU11c2ljKGF1ZGlvOiBjYy5BdWRpb0NsaXAsIGlzTG9vcDogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIWF1ZGlvKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5jdXJyTXVzaWMgPSBhdWRpbzsvL+S/neWtmOW9k+WJjeiDjOaZr+mfs+S5kFxyXG4gICAgICAgIGlmICh0aGlzLm11c2ljU3dpdGNoKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc3RvcE11c2ljKCk7XHJcbiAgICAgICAgICAgIHZhciBhdWRpb0lEID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKGF1ZGlvLCBpc0xvb3ApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGxheUVmZmVjdChhdWRpbzogY2MuQXVkaW9DbGlwLCBpc0xvb3A6IGJvb2xlYW4gPSBmYWxzZSwgY2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbCk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKCFhdWRpbykgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLmVmZmVjdFN3aXRjaCkge1xyXG4gICAgICAgICAgICB2YXIgYXVkaW9JRCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkoYXVkaW8sIGlzTG9vcCwgMSk7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2MuYXVkaW9FbmdpbmUuc2V0RmluaXNoQ2FsbGJhY2soYXVkaW9JRCwgY2FsbGJhY2spO1xyXG4gICAgICAgICAgICByZXR1cm4gYXVkaW9JRDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBsYXlFZmZlY3RXaXRoUGF0aChwYXRoOiBzdHJpbmcsIGlzTG9vcDogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFwYXRoIHx8ICF0aGlzLmVmZmVjdFN3aXRjaCkgcmV0dXJuO1xyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHBhdGgsIGNjLkF1ZGlvQ2xpcCwgKGVycjogRXJyb3IsIGNsaXA6IGNjLkF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCLliqDovb3pn7PmlYjotYTmupDlpLHotKVcIiArIHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBhdWRpb0lEID0gY2MuYXVkaW9FbmdpbmUucGxheShjbGlwLCBpc0xvb3AsIDEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RvcE11c2ljKCk6IHZvaWQge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BNdXNpYygpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RvcEFsbCgpOiB2b2lkIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBhdXNlQWxsKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLm11c2ljU3dpdGNoKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlQWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgcmVzdW1lQWxsKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLm11c2ljU3dpdGNoKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZUFsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0b3BFZmZlY3QoYXVkaW9JRDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEVmZmVjdChhdWRpb0lEKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHBhdXNlKGF1ZGlvSUQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlKGF1ZGlvSUQpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgcmVzdW1lKGF1ZGlvSUQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLm11c2ljU3dpdGNoKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZShhdWRpb0lEKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbW1vbkJ0bkNsaWNrKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGxheUVmZmVjdCh0aGlzLmJ0bkNsaWNrRWZmZWN0LCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbW1vbmJnbU11c2ljKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGxheU11c2ljKHRoaXMuYmdtTXVzaWMpO1xyXG4gICAgfVxyXG4gICAgIFxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '73ed6/QdxxO+pIbRjS+FY/O', 'game');
// script/game.ts

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
var newhand_1 = require("./prefeb/newhand");
var gameData_1 = require("./tool/gameData");
var global_1 = require("./tool/global");
var utils_1 = require("./tool/utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameState;
(function (GameState) {
    GameState[GameState["find"] = 0] = "find";
    GameState[GameState["err"] = 1] = "err";
    GameState[GameState["finish"] = 2] = "finish";
})(GameState || (GameState = {}));
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bg = null;
        _this.originalImg = null;
        _this.finishImg = null;
        _this.tishi_qipao = null;
        _this.gameFindPrefab = null;
        _this.gameErrPrefab = null;
        _this.gameTishiPrefab = null;
        _this.game_tuowei = null;
        _this.imgSignBox = null;
        _this.yeziBox = null;
        _this.level = null;
        _this.timeAll = null;
        _this.reduceTime = null;
        _this.mask = null;
        _this.imgData = [];
        _this.setImgY = 257;
        _this.originalScale = 0.5;
        _this.yeziAllNum = 10;
        _this.yeziNowNum = 0;
        _this.residueTime = 0;
        _this.isTiShi = false;
        _this.timer = null;
        _this.isPause = false;
        _this.firstErr = false;
        _this.audioClips = [];
        _this.newhandNode = null;
        return _this;
    }
    NewClass.prototype.start = function () {
        var _this = this;
        if (cc.sys.platform === cc.sys.IPAD) {
            this.getComponent(cc.Canvas).fitHeight = true;
            this.getComponent(cc.Canvas).fitWidth = false;
        }
        this.resetAll();
        global_1.Global.setsceneNode(this.node);
        utils_1.UtilsTool.adapterBg(this.bg);
        this.onEvent();
        this.init();
        this.startDownTime();
        this.loadRes();
        this.checkNewHand();
        cc.resources.loadDir("sound", cc.AudioClip, function (err, clips) {
            if (err || !cc.isValid(_this))
                return;
            _this.audioClips = clips;
            _this.addAutoReleaseAssets(clips);
        });
    };
    NewClass.prototype.onEvent = function () {
        this.originalImg.on(cc.Node.EventType.TOUCH_END, this.imgEvent, this);
        this.finishImg.on(cc.Node.EventType.TOUCH_END, this.imgEvent, this);
    };
    NewClass.prototype.resetAll = function (clearData) {
        if (!clearData) {
            this.imgData = [];
        }
        this.imgSignBox.getChildByName("origBox").destroyAllChildren();
        this.imgSignBox.getChildByName("finishBox").destroyAllChildren();
        this.imgSignBox.getChildByName("errBox").destroyAllChildren();
        this.imgSignBox.getChildByName("tishiBox").destroyAllChildren();
        this.imgSignBox.getChildByName("lizi").destroyAllChildren();
        this.mask.active = false;
        this.firstErr = false;
        this.isPause = false;
        this.timer = null;
        this.isTiShi = false;
        this.yeziNowNum = 0;
        this.init();
    };
    NewClass.prototype.checkNewHand = function () {
        var _this = this;
        if (gameData_1.gameData.userData.isGudie) {
            return;
        }
        cc.resources.load("prefeb/newhand", cc.Prefab, function (err, prefab) {
            if (err) {
                return;
            }
            var node = cc.instantiate(prefab);
            global_1.Global.assetUtils.bindAutoReleaseAsset(node, prefab);
            _this.node.addChild(node);
            _this.newhandNode = node.getComponent(newhand_1.default);
            _this.newhandNode.showdong1();
        });
    };
    NewClass.prototype.init = function () {
        this.level.string = "Lv" + global_1.Global.imgId;
        for (var i = 0; i < this.yeziBox.children.length; i++) {
            var anim = this.yeziBox.children[i].getComponent(sp.Skeleton);
            utils_1.UtilsTool.playSp(anim, "1_an_stop");
        }
        this.residueTime = this.getDownTime();
        this.changeQiPaoNum();
        this.mask.active = false;
        var time = utils_1.UtilsTool.timeChange(this.residueTime);
        this.timeAll.getComponent(cc.Label).string = time;
        this.reduceTime.active = false;
    };
    //开启倒计时
    NewClass.prototype.startDownTime = function () {
        if (this.residueTime > 0) {
            var time = utils_1.UtilsTool.timeChange(this.residueTime);
            this.timeAll.getComponent(cc.Label).string = time;
            this.timer = this.schedule(this.downTimeEvent, 1);
        }
    };
    NewClass.prototype.downTimeEvent = function () {
        if (this.isPause) {
            return;
        }
        this.residueTime--;
        var time = utils_1.UtilsTool.timeChange(this.residueTime);
        this.timeAll.getComponent(cc.Label).string = time;
        if (this.residueTime <= 0) {
            this.unschedule(this.downTimeEvent);
            this.timeOutEvent();
            this.playCommonSound(gameData_1.sound.fail);
            cc.log("时间到了");
        }
    };
    NewClass.prototype.errReduceTime = function () {
        var _this = this;
        if (!this.firstErr)
            return;
        var posY = this.timeAll.y;
        var reduceTime = 30;
        this.reduceTime.y = posY;
        this.reduceTime.active = true;
        this.reduceTime.getComponent(cc.Label).string = "-" + reduceTime;
        cc.Tween.stopAllByTarget(this.reduceTime);
        cc.tween(this.reduceTime).to(0.15, { scale: 1.2 }).to(0.15, { scale: 1 }).to(1, { opacity: 255, y: posY - 25 }).call(function () {
            _this.reduceTime.active = false;
        }).start();
        this.residueTime -= reduceTime;
        if (this.residueTime <= 0) {
            this.timeAll.getComponent(cc.Label).string = "00:00";
            this.playCommonSound(gameData_1.sound.fail);
            cc.log("时间到了");
            this.unschedule(this.downTimeEvent);
            this.timeOutEvent();
        }
        else {
            var time = utils_1.UtilsTool.timeChange(this.residueTime);
            this.timeAll.getComponent(cc.Label).string = time;
        }
    };
    NewClass.prototype.changeQiPaoNum = function () {
        if (gameData_1.gameData.userData.tishiNum > 0) {
            this.tishi_qipao.getChildByName("ad_label").active = false;
            this.tishi_qipao.getChildByName("num_label").active = true;
            this.tishi_qipao.getChildByName("num_label").getComponent(cc.Label).string = gameData_1.gameData.userData.tishiNum.toString();
        }
        else {
            this.tishi_qipao.getChildByName("ad_label").active = true;
            this.tishi_qipao.getChildByName("num_label").active = false;
        }
    };
    NewClass.prototype.loadRes = function () {
        var _this = this;
        global_1.Global.assetUtils.loadSprite("originalImg/" + global_1.Global.imgId + "-o", this.originalImg.getComponent(cc.Sprite));
        global_1.Global.assetUtils.loadSprite("finishImg/" + global_1.Global.imgId + "-f", this.finishImg.getComponent(cc.Sprite));
        cc.resources.load("imgJson/level" + global_1.Global.imgId, cc.JsonAsset, function (err, res) {
            if (err) {
                cc.log(err);
                return;
            }
            // 获取到 Json 数据
            global_1.Global.assetUtils.bindAutoReleaseAsset(_this.node, res);
            var jsonData = res.json;
            if (jsonData && jsonData.path) {
                _this.imgData = jsonData.path;
                for (var i = 0; i < _this.imgData.length; i++) {
                    _this.imgData[i].isFind = false;
                }
                cc.log(_this.imgData, "this.imgData ");
                // for (let i = 0; i < this.imgData.length; i++) {
                //     let data = this.imgData[i];
                //     this.findSignSucc(cc.v3(data.centerPos.x, data.centerPos.y))
                // }
                // for (let i = 0; i < this.imgData.length; i++) {
                //     let data = this.imgData[i];
                //     this.findSignSucc(cc.v3(data.centerPos.x, data.centerPos.y))
                // }
            }
        });
    };
    NewClass.prototype.yeziLight = function (pos) {
        var _this = this;
        var anim = this.yeziBox.children[this.yeziNowNum - 1].getComponent(sp.Skeleton);
        var tuowei = cc.instantiate(this.game_tuowei);
        this.imgSignBox.getChildByName("lizi").addChild(tuowei);
        tuowei.setPosition(pos);
        var changePos = utils_1.UtilsTool.changePos(anim.node, tuowei);
        var time = 0.5;
        if (pos.y < 0) {
            time = 1;
        }
        cc.Tween.stopAllByTarget(tuowei);
        cc.tween(tuowei).to(time, { position: changePos }).call(function () {
            _this.scheduleOnce(function () {
                tuowei.destroy();
            }, 0.3);
            utils_1.UtilsTool.playSp(anim, "2_bianliang");
            utils_1.UtilsTool.addSequenceSp(anim, "3_liang_stop");
        }).start();
    };
    NewClass.prototype.findSignSucc = function (targetPos, findData) {
        for (var i = 0; i < 2; i++) {
            var gameFind = cc.instantiate(this.gameFindPrefab);
            var imgY = 0;
            if (i == 0) {
                imgY = targetPos.y * this.originalScale + this.setImgY;
                this.imgSignBox.getChildByName("origBox").addChild(gameFind);
            }
            else {
                this.imgSignBox.getChildByName("finishBox").addChild(gameFind);
                imgY = targetPos.y * this.originalScale - this.setImgY;
            }
            var centerPos = cc.v3(targetPos.x * this.originalScale, imgY);
            gameFind.setPosition(centerPos);
            cc.Tween.stopAllByTarget(gameFind);
            gameFind.scale = 0;
            cc.tween(gameFind).to(0.3, { scale: 1.5 }).to(0.1, { scale: 1.3 }).start();
        }
    };
    NewClass.prototype.findSignErr = function (targetPos) {
        var clickPos = targetPos;
        var gameErr = cc.instantiate(this.gameErrPrefab);
        this.imgSignBox.getChildByName("errBox").addChild(gameErr);
        gameErr.setPosition(clickPos);
        this.errSignAnim(gameErr);
        var otherErrSign = null;
        if (clickPos.y > 0) {
            otherErrSign = cc.instantiate(this.gameErrPrefab);
            this.imgSignBox.getChildByName("errBox").addChild(otherErrSign);
            otherErrSign.setPosition(cc.v3(clickPos.x, clickPos.y - (this.setImgY * 2)));
        }
        else {
            otherErrSign = cc.instantiate(this.gameErrPrefab);
            this.imgSignBox.getChildByName("errBox").addChild(otherErrSign);
            otherErrSign.setPosition(cc.v3(clickPos.x, clickPos.y + (this.setImgY * 2)));
        }
        if (otherErrSign) {
            this.errSignAnim(otherErrSign);
        }
    };
    NewClass.prototype.imgEvent = function (event) {
        var pos = event.getLocation();
        var clickPos = this.imgSignBox.convertToNodeSpaceAR(cc.v3(pos.x, pos.y));
        // this.findSignErr(clickPos);
        var data = this.checkImgSign(clickPos);
        if (data.type == GameState.find) {
            if (this.isTiShi) {
                this.isTiShi = false;
                this.imgSignBox.getChildByName("tishiBox").destroyAllChildren();
            }
            this.yeziNowNum = this.yeziNowNum + 1;
            this.findSignSucc(cc.v3(data.findData.centerPos.x, data.findData.centerPos.y), data.findData);
            this.yeziLight(clickPos);
            if (this.newhandNode && this.yeziNowNum == 1) {
                if (this.newhandNode) {
                    this.newhandNode.hidedong1();
                    this.newhandNode.showdong2();
                }
            }
            else if (this.newhandNode && this.yeziNowNum == 2) {
                if (this.newhandNode) {
                    this.newhandNode.node.destroy();
                    this.newhandNode = null;
                }
                gameData_1.gameData.userData.isGudie = true;
                gameData_1.gameData.storageData();
            }
            this.playCommonSound(gameData_1.sound.correct);
            if (this.yeziNowNum >= this.yeziAllNum) { //胜利 游戏结束
                this.gameEnd();
            }
        }
        else if (data.type == GameState.err) {
            this.playCommonSound(gameData_1.sound.err);
            this.errReduceTime();
            this.findSignErr(clickPos);
            this.firstErr = true;
        }
        else {
            this.playCommonSound(gameData_1.sound.err);
            this.errReduceTime();
            this.findSignErr(clickPos);
            this.firstErr = true;
        }
    };
    NewClass.prototype.checkImgSign = function (targetPos) {
        var type = null;
        var findData = null;
        for (var i = 0; i < this.imgData.length; i++) {
            var data = this.imgData[i];
            var x = data.centerPos.x * this.originalScale;
            var y = 0;
            if (targetPos.y > 0) {
                y = data.centerPos.y * this.originalScale + this.setImgY;
            }
            else {
                y = data.centerPos.y * this.originalScale - this.setImgY;
            }
            var wid = data.blockSize.wid * this.originalScale;
            var hei = data.blockSize.hei * this.originalScale;
            // let testitem = cc.instantiate(this.testitemPrefab);
            // this.imgSignBox.addChild(testitem);
            // testitem.setPosition(cc.v3(x, y));
            // testitem.width = wid;
            // testitem.height = hei;
            if (!data.isFind && targetPos.x <= x + wid / 2 && targetPos.x >= x - wid / 2
                && targetPos.y <= y + hei / 2 && targetPos.y >= y - hei / 2) {
                if (!data.isFind) {
                    cc.log("找到了");
                    type = GameState.find;
                    findData = data;
                    data.isFind = true;
                }
                else {
                    type = GameState.finish;
                    cc.log("找到重复的了");
                }
                return { type: type, findData: findData };
            }
            else {
                type = GameState.err;
                cc.log("没找到");
            }
        }
        return { type: type, findData: findData };
    };
    NewClass.prototype.errSignAnim = function (node) {
        cc.Tween.stopAllByTarget(node);
        cc.tween(node)
            .to(0.05, { angle: 15 }).to(0.05, { angle: 0 }).to(0.05, { angle: -15 })
            .to(0.07, { angle: 10 }).to(0.07, { angle: 0 }).to(0.07, { angle: -10 })
            .to(0.1, { angle: 7 }).to(0.1, { angle: 0 }).to(0.1, { angle: -7 })
            .to(0.1, { angle: 3 }).to(0.1, { angle: 0 })
            .call(function () {
            node.destroy();
        }).start();
    };
    NewClass.prototype.gameEnd = function () {
        var _this = this;
        cc.log("游戏结束");
        this.mask.active = true;
        this.scheduleOnce(function () {
            var _loop_1 = function (i) {
                var anim = _this.yeziBox.children[i].getComponent(sp.Skeleton);
                _this.scheduleOnce(function () {
                    utils_1.UtilsTool.playSp(anim, "4_man", false, function () {
                        _this.scheduleOnce(function () {
                            if (i == _this.yeziBox.children.length - 1) {
                                _this.playCommonSound(gameData_1.sound.win);
                                if (gameData_1.gameData.userData.level + 1 <= gameData_1.gameData.levelAll) {
                                    gameData_1.gameData.userData.level = gameData_1.gameData.userData.level + 1;
                                    gameData_1.gameData.storageData();
                                }
                                global_1.Global.assetUtils.showDialog(utils_1.dialog.gameover_dialog, {
                                    callback: function () {
                                        if (global_1.Global.imgId + 1 <= gameData_1.gameData.levelAll) {
                                            global_1.Global.imgId = global_1.Global.imgId + 1;
                                            _this.resetAll();
                                            _this.init();
                                            _this.startDownTime();
                                            _this.loadRes();
                                        }
                                        else {
                                            gameData_1.gameData.userData.isHall = true;
                                            gameData_1.gameData.storageData();
                                            cc.director.loadScene(utils_1.scene.hall);
                                        }
                                    }
                                });
                            }
                        });
                    });
                }, 0.1 * i);
            };
            for (var i = 0; i < _this.yeziBox.children.length; i++) {
                _loop_1(i);
            }
        }, 0.5);
    };
    //获取当前关卡的倒计时
    NewClass.prototype.getDownTime = function () {
        var level = global_1.Global.imgId;
        var time = 0;
        if (level >= 1 && level <= 5) {
            time = 5 * 60;
        }
        else if (level >= 6 && level <= 10) {
            time = 3 * 60;
        }
        else if (level >= 11 && level <= 15) {
            time = 2 * 60 + 30;
        }
        else if (level >= 16 && level <= 20) {
            time = 2 * 60;
        }
        else if (level >= 21 && level <= 25) {
            time = 1 * 60 + 30;
        }
        else {
            time = 1 * 60;
        }
        return time;
    };
    //时间到
    NewClass.prototype.timeOutEvent = function () {
        var _this = this;
        global_1.Global.assetUtils.showDialog(utils_1.dialog.timeOut_dialog, {
            ADcallback: function () {
                _this.residueTime = 60;
                gameData_1.gameData.userData.tishiNum++;
                gameData_1.gameData.storageData();
                _this.changeQiPaoNum();
                _this.startDownTime();
            },
            restartCallBack: function () {
                _this.resetAll(true);
                _this.init();
                _this.startDownTime();
                cc.log(_this.imgData, "this.imgData");
                for (var i = 0; i < _this.imgData.length; i++) {
                    _this.imgData[i].isFind = false;
                }
            }
        });
    };
    NewClass.prototype.onClick_back = function () {
        var _this = this;
        global_1.Global.audioUtils.commonBtnClick();
        this.isPause = true;
        global_1.Global.assetUtils.showDialog(utils_1.dialog.confirmExit_dialog, { callback: function () { _this.isPause = false; } });
    };
    NewClass.prototype.onClick_pause = function () {
        var _this = this;
        global_1.Global.audioUtils.commonBtnClick();
        this.isPause = true;
        global_1.Global.assetUtils.showDialog(utils_1.dialog.setting_dialog, { isGame: true, callback: function () { _this.isPause = false; } });
    };
    NewClass.prototype.onClick_tishi = function () {
        var _this = this;
        global_1.Global.audioUtils.commonBtnClick();
        if (this.isTiShi) {
            return;
        }
        var findData = null;
        for (var i = 0; i < this.imgData.length; i++) {
            if (!this.imgData[i].isFind) {
                findData = this.imgData[i];
                break;
            }
        }
        if (!findData) {
            return;
        }
        if (gameData_1.gameData.userData.tishiNum <= 0) {
            cc.log("看广告");
            gameData_1.gameData.showVideo(function () {
                _this.showTiShi(findData);
            });
            return;
        }
        gameData_1.gameData.userData.tishiNum = gameData_1.gameData.userData.tishiNum - 1;
        gameData_1.gameData.storageData();
        this.changeQiPaoNum();
        this.showTiShi(findData);
    };
    NewClass.prototype.showTiShi = function (findData) {
        if (findData) {
            this.isTiShi = true;
            for (var i = 0; i < 2; i++) {
                var tishi = cc.instantiate(this.gameTishiPrefab);
                this.imgSignBox.getChildByName("tishiBox").addChild(tishi);
                var x = findData.centerPos.x * this.originalScale;
                var y = 0;
                if (i == 0) {
                    y = findData.centerPos.y * this.originalScale + this.setImgY;
                }
                else {
                    y = findData.centerPos.y * this.originalScale - this.setImgY;
                }
                tishi.setPosition(x, y);
                cc.Tween.stopAllByTarget(tishi);
                cc.tween(tishi).to(0.5, { scale: 0.7 }).to(0.5, { scale: 1 }).union().repeatForever().start();
            }
        }
    };
    //播放音效
    NewClass.prototype.playCommonSound = function (audioName, loop) {
        if (loop === void 0) { loop = false; }
        for (var i = 0; i < this.audioClips.length; i++) {
            if (this.audioClips[i].name == audioName) {
                var audioID = global_1.Global.audioUtils.playEffect(this.audioClips[i], loop);
                return audioID;
            }
        }
        return null;
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "bg", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "originalImg", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "finishImg", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "tishi_qipao", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "gameFindPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "gameErrPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "gameTishiPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "game_tuowei", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "imgSignBox", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "yeziBox", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "level", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "timeAll", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "reduceTime", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "mask", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBdUM7QUFDdkMsNENBQWtEO0FBQ2xELHdDQUFtRDtBQUNuRCxzQ0FBd0Q7QUFHbEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBSyxTQUlKO0FBSkQsV0FBSyxTQUFTO0lBQ1YseUNBQUksQ0FBQTtJQUNKLHVDQUFHLENBQUE7SUFDSCw2Q0FBTSxDQUFBO0FBQ1YsQ0FBQyxFQUpJLFNBQVMsS0FBVCxTQUFTLFFBSWI7QUFHRDtJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQStqQkM7UUE1akJHLFFBQUUsR0FBWSxJQUFJLENBQUM7UUFHbkIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixvQkFBYyxHQUFjLElBQUksQ0FBQztRQUdqQyxtQkFBYSxHQUFjLElBQUksQ0FBQztRQUdoQyxxQkFBZSxHQUFjLElBQUksQ0FBQztRQUdsQyxpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGFBQU8sR0FBaUIsRUFBRSxDQUFDO1FBQzNCLGFBQU8sR0FBVyxHQUFHLENBQUM7UUFDdEIsbUJBQWEsR0FBVyxHQUFHLENBQUM7UUFFNUIsZ0JBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsaUJBQVcsR0FB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QmpEO2tCQS9qQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbmV3aGFuZCBmcm9tIFwiLi9wcmVmZWIvbmV3aGFuZFwiO1xuaW1wb3J0IHsgZ2FtZURhdGEsIHNvdW5kIH0gZnJvbSBcIi4vdG9vbC9nYW1lRGF0YVwiO1xuaW1wb3J0IHsgYmVhdXR5RGF0YSwgR2xvYmFsIH0gZnJvbSBcIi4vdG9vbC9nbG9iYWxcIjtcbmltcG9ydCB7IGRpYWxvZywgc2NlbmUsIFV0aWxzVG9vbCB9IGZyb20gXCIuL3Rvb2wvdXRpbHNcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5lbnVtIEdhbWVTdGF0ZSB7XG4gICAgZmluZCwgICAgICAgLy/mib7liLBcbiAgICBlcnIsICAgICAgICAvL+ayoeaJvuWIsCAgICBcbiAgICBmaW5pc2gsICAgICAvL+aJvuWIsOmHjeWkjeeahCAgXG59XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBiZzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBvcmlnaW5hbEltZzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBmaW5pc2hJbWc6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGlzaGlfcWlwYW86IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBnYW1lRmluZFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZ2FtZUVyclByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZ2FtZVRpc2hpUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBnYW1lX3R1b3dlaTogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGltZ1NpZ25Cb3g6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgeWV6aUJveDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGV2ZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRpbWVBbGw6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcmVkdWNlVGltZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBtYXNrOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIGltZ0RhdGE6IGJlYXV0eURhdGFbXSA9IFtdO1xuICAgIHNldEltZ1k6IG51bWJlciA9IDI1NztcbiAgICBvcmlnaW5hbFNjYWxlOiBudW1iZXIgPSAwLjU7XG5cbiAgICB5ZXppQWxsTnVtOiBudW1iZXIgPSAxMDtcbiAgICB5ZXppTm93TnVtOiBudW1iZXIgPSAwO1xuICAgIHJlc2lkdWVUaW1lOiBudW1iZXIgPSAwO1xuXG4gICAgaXNUaVNoaTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgdGltZXIgPSBudWxsO1xuICAgIGlzUGF1c2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBmaXJzdEVycjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBhdWRpb0NsaXBzOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuXG4gICAgbmV3aGFuZE5vZGU6IG5ld2hhbmQgPSBudWxsO1xuXG5cbiAgICBzdGFydCgpIHtcbiAgICBcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLklQQUQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcykuZml0SGVpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcykuZml0V2lkdGggPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVzZXRBbGwoKTtcbiAgICAgICAgR2xvYmFsLnNldHNjZW5lTm9kZSh0aGlzLm5vZGUpO1xuICAgICAgICBVdGlsc1Rvb2wuYWRhcHRlckJnKHRoaXMuYmcpO1xuXG4gICAgICAgIHRoaXMub25FdmVudCgpO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgdGhpcy5zdGFydERvd25UaW1lKCk7XG4gICAgICAgIHRoaXMubG9hZFJlcygpO1xuICAgICAgICB0aGlzLmNoZWNrTmV3SGFuZCgpO1xuXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkRGlyKFwic291bmRcIiwgY2MuQXVkaW9DbGlwLCAoZXJyOiBFcnJvciwgY2xpcHM6IGNjLkF1ZGlvQ2xpcFtdKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyIHx8ICFjYy5pc1ZhbGlkKHRoaXMpKSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLmF1ZGlvQ2xpcHMgPSBjbGlwcztcbiAgICAgICAgICAgIHRoaXMuYWRkQXV0b1JlbGVhc2VBc3NldHMoY2xpcHMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkV2ZW50KCkge1xuICAgICAgICB0aGlzLm9yaWdpbmFsSW1nLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5pbWdFdmVudCwgdGhpcyk7XG4gICAgICAgIHRoaXMuZmluaXNoSW1nLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5pbWdFdmVudCwgdGhpcyk7XG4gICAgfVxuXG4gICAgcmVzZXRBbGwoY2xlYXJEYXRhPykge1xuICAgICAgICBpZiAoIWNsZWFyRGF0YSkge1xuICAgICAgICAgICAgdGhpcy5pbWdEYXRhID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbWdTaWduQm94LmdldENoaWxkQnlOYW1lKFwib3JpZ0JveFwiKS5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgdGhpcy5pbWdTaWduQm94LmdldENoaWxkQnlOYW1lKFwiZmluaXNoQm94XCIpLmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xuICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJlcnJCb3hcIikuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcInRpc2hpQm94XCIpLmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xuICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJsaXppXCIpLmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xuXG4gICAgICAgIHRoaXMubWFzay5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5maXJzdEVyciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzUGF1c2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgICAgIHRoaXMuaXNUaVNoaSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnllemlOb3dOdW0gPSAwO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBjaGVja05ld0hhbmQoKSB7XG4gICAgICAgIGlmIChnYW1lRGF0YS51c2VyRGF0YS5pc0d1ZGllKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwcmVmZWIvbmV3aGFuZFwiLCBjYy5QcmVmYWIsIChlcnIsIHByZWZhYikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgR2xvYmFsLmFzc2V0VXRpbHMuYmluZEF1dG9SZWxlYXNlQXNzZXQobm9kZSwgcHJlZmFiKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChub2RlKTtcbiAgICAgICAgICAgIHRoaXMubmV3aGFuZE5vZGUgPSBub2RlLmdldENvbXBvbmVudChuZXdoYW5kKTtcbiAgICAgICAgICAgIHRoaXMubmV3aGFuZE5vZGUuc2hvd2RvbmcxKCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmxldmVsLnN0cmluZyA9IFwiTHZcIiArIEdsb2JhbC5pbWdJZDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnllemlCb3guY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhbmltID0gdGhpcy55ZXppQm94LmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICBVdGlsc1Rvb2wucGxheVNwKGFuaW0sIFwiMV9hbl9zdG9wXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZXNpZHVlVGltZSA9IHRoaXMuZ2V0RG93blRpbWUoKTtcblxuICAgICAgICB0aGlzLmNoYW5nZVFpUGFvTnVtKCk7XG5cbiAgICAgICAgdGhpcy5tYXNrLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIGxldCB0aW1lID0gVXRpbHNUb29sLnRpbWVDaGFuZ2UodGhpcy5yZXNpZHVlVGltZSk7XG4gICAgICAgIHRoaXMudGltZUFsbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRpbWU7XG4gICAgICAgIHRoaXMucmVkdWNlVGltZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cblxuICAgIC8v5byA5ZCv5YCS6K6h5pe2XG4gICAgc3RhcnREb3duVGltZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzaWR1ZVRpbWUgPiAwKSB7XG4gICAgICAgICAgICBsZXQgdGltZSA9IFV0aWxzVG9vbC50aW1lQ2hhbmdlKHRoaXMucmVzaWR1ZVRpbWUpO1xuICAgICAgICAgICAgdGhpcy50aW1lQWxsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGltZTtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSB0aGlzLnNjaGVkdWxlKHRoaXMuZG93blRpbWVFdmVudCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkb3duVGltZUV2ZW50KCkge1xuICAgICAgICBpZiAodGhpcy5pc1BhdXNlKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc2lkdWVUaW1lLS07XG4gICAgICAgIGxldCB0aW1lID0gVXRpbHNUb29sLnRpbWVDaGFuZ2UodGhpcy5yZXNpZHVlVGltZSk7XG4gICAgICAgIHRoaXMudGltZUFsbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRpbWU7XG4gICAgICAgIGlmICh0aGlzLnJlc2lkdWVUaW1lIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmRvd25UaW1lRXZlbnQpO1xuICAgICAgICAgICAgdGhpcy50aW1lT3V0RXZlbnQoKTtcbiAgICAgICAgICAgIHRoaXMucGxheUNvbW1vblNvdW5kKHNvdW5kLmZhaWwpO1xuICAgICAgICAgICAgY2MubG9nKFwi5pe26Ze05Yiw5LqGXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXJyUmVkdWNlVGltZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZpcnN0RXJyKSByZXR1cm5cbiAgICAgICAgbGV0IHBvc1kgPSB0aGlzLnRpbWVBbGwueTtcbiAgICAgICAgbGV0IHJlZHVjZVRpbWUgPSAzMDtcbiAgICAgICAgdGhpcy5yZWR1Y2VUaW1lLnkgPSBwb3NZO1xuICAgICAgICB0aGlzLnJlZHVjZVRpbWUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZWR1Y2VUaW1lLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCItXCIgKyByZWR1Y2VUaW1lO1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5yZWR1Y2VUaW1lKTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5yZWR1Y2VUaW1lKS50bygwLjE1LCB7IHNjYWxlOiAxLjIgfSkudG8oMC4xNSwgeyBzY2FsZTogMSB9KS50bygxLCB7IG9wYWNpdHk6IDI1NSwgeTogcG9zWSAtIDI1IH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZWR1Y2VUaW1lLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9KS5zdGFydCgpO1xuXG4gICAgICAgIHRoaXMucmVzaWR1ZVRpbWUgLT0gcmVkdWNlVGltZTtcbiAgICAgICAgaWYgKHRoaXMucmVzaWR1ZVRpbWUgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy50aW1lQWxsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIwMDowMFwiO1xuICAgICAgICAgICAgdGhpcy5wbGF5Q29tbW9uU291bmQoc291bmQuZmFpbCk7XG4gICAgICAgICAgICBjYy5sb2coXCLml7bpl7TliLDkuoZcIik7XG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5kb3duVGltZUV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMudGltZU91dEV2ZW50KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgdGltZSA9IFV0aWxzVG9vbC50aW1lQ2hhbmdlKHRoaXMucmVzaWR1ZVRpbWUpO1xuICAgICAgICAgICAgdGhpcy50aW1lQWxsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGltZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZVFpUGFvTnVtKCkge1xuICAgICAgICBpZiAoZ2FtZURhdGEudXNlckRhdGEudGlzaGlOdW0gPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnRpc2hpX3FpcGFvLmdldENoaWxkQnlOYW1lKFwiYWRfbGFiZWxcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnRpc2hpX3FpcGFvLmdldENoaWxkQnlOYW1lKFwibnVtX2xhYmVsXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnRpc2hpX3FpcGFvLmdldENoaWxkQnlOYW1lKFwibnVtX2xhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZ2FtZURhdGEudXNlckRhdGEudGlzaGlOdW0udG9TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGlzaGlfcWlwYW8uZ2V0Q2hpbGRCeU5hbWUoXCJhZF9sYWJlbFwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy50aXNoaV9xaXBhby5nZXRDaGlsZEJ5TmFtZShcIm51bV9sYWJlbFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvYWRSZXMoKSB7XG4gICAgICAgIEdsb2JhbC5hc3NldFV0aWxzLmxvYWRTcHJpdGUoXCJvcmlnaW5hbEltZy9cIiArIEdsb2JhbC5pbWdJZCArIFwiLW9cIiwgdGhpcy5vcmlnaW5hbEltZy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSk7XG5cbiAgICAgICAgR2xvYmFsLmFzc2V0VXRpbHMubG9hZFNwcml0ZShcImZpbmlzaEltZy9cIiArIEdsb2JhbC5pbWdJZCArIFwiLWZcIiwgdGhpcy5maW5pc2hJbWcuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpO1xuXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwiaW1nSnNvbi9sZXZlbFwiICsgR2xvYmFsLmltZ0lkLCBjYy5Kc29uQXNzZXQsIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNjLmxvZyhlcnIpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g6I635Y+W5YiwIEpzb24g5pWw5o2uXG4gICAgICAgICAgICBHbG9iYWwuYXNzZXRVdGlscy5iaW5kQXV0b1JlbGVhc2VBc3NldCh0aGlzLm5vZGUsIHJlcyk7XG4gICAgICAgICAgICBjb25zdCBqc29uRGF0YSA9IHJlcy5qc29uO1xuICAgICAgICAgICAgaWYgKGpzb25EYXRhICYmIGpzb25EYXRhLnBhdGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmltZ0RhdGEgPSBqc29uRGF0YS5wYXRoO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pbWdEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1nRGF0YVtpXS5pc0ZpbmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2MubG9nKHRoaXMuaW1nRGF0YSwgXCJ0aGlzLmltZ0RhdGEgXCIpO1xuICAgICAgICAgICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pbWdEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGxldCBkYXRhID0gdGhpcy5pbWdEYXRhW2ldO1xuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmZpbmRTaWduU3VjYyhjYy52MyhkYXRhLmNlbnRlclBvcy54LCBkYXRhLmNlbnRlclBvcy55KSlcbiAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW1nRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vICAgICBsZXQgZGF0YSA9IHRoaXMuaW1nRGF0YVtpXTtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5maW5kU2lnblN1Y2MoY2MudjMoZGF0YS5jZW50ZXJQb3MueCwgZGF0YS5jZW50ZXJQb3MueSkpXG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgeWV6aUxpZ2h0KHBvczogY2MuVmVjMykge1xuICAgICAgICBsZXQgYW5pbSA9IHRoaXMueWV6aUJveC5jaGlsZHJlblt0aGlzLnllemlOb3dOdW0gLSAxXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuXG4gICAgICAgIGxldCB0dW93ZWkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdhbWVfdHVvd2VpKTtcbiAgICAgICAgdGhpcy5pbWdTaWduQm94LmdldENoaWxkQnlOYW1lKFwibGl6aVwiKS5hZGRDaGlsZCh0dW93ZWkpO1xuICAgICAgICB0dW93ZWkuc2V0UG9zaXRpb24ocG9zKTtcblxuICAgICAgICBsZXQgY2hhbmdlUG9zID0gVXRpbHNUb29sLmNoYW5nZVBvcyhhbmltLm5vZGUsIHR1b3dlaSk7XG5cbiAgICAgICAgbGV0IHRpbWUgPSAwLjU7XG4gICAgICAgIGlmIChwb3MueSA8IDApIHtcbiAgICAgICAgICAgIHRpbWUgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0dW93ZWkpO1xuICAgICAgICBjYy50d2Vlbih0dW93ZWkpLnRvKHRpbWUsIHsgcG9zaXRpb246IGNoYW5nZVBvcyB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0dW93ZWkuZGVzdHJveSgpO1xuICAgICAgICAgICAgfSwgMC4zKTtcbiAgICAgICAgICAgIFV0aWxzVG9vbC5wbGF5U3AoYW5pbSwgXCIyX2JpYW5saWFuZ1wiKTtcbiAgICAgICAgICAgIFV0aWxzVG9vbC5hZGRTZXF1ZW5jZVNwKGFuaW0sIFwiM19saWFuZ19zdG9wXCIpO1xuICAgICAgICB9KS5zdGFydCgpO1xuICAgIH1cblxuICAgIGZpbmRTaWduU3VjYyh0YXJnZXRQb3M6IGNjLlZlYzMsIGZpbmREYXRhOmJlYXV0eURhdGEpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBnYW1lRmluZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ2FtZUZpbmRQcmVmYWIpO1xuICAgICAgICAgICAgbGV0IGltZ1kgPSAwO1xuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgIGltZ1kgPSB0YXJnZXRQb3MueSAqIHRoaXMub3JpZ2luYWxTY2FsZSArIHRoaXMuc2V0SW1nWTtcbiAgICAgICAgICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJvcmlnQm94XCIpLmFkZENoaWxkKGdhbWVGaW5kKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJmaW5pc2hCb3hcIikuYWRkQ2hpbGQoZ2FtZUZpbmQpXG4gICAgICAgICAgICAgICAgaW1nWSA9IHRhcmdldFBvcy55ICogdGhpcy5vcmlnaW5hbFNjYWxlIC0gdGhpcy5zZXRJbWdZO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGNlbnRlclBvcyA9IGNjLnYzKHRhcmdldFBvcy54ICogdGhpcy5vcmlnaW5hbFNjYWxlLCBpbWdZKTtcblxuICAgICAgICAgICAgZ2FtZUZpbmQuc2V0UG9zaXRpb24oY2VudGVyUG9zKTtcblxuICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KGdhbWVGaW5kKTtcbiAgICAgICAgICAgIGdhbWVGaW5kLnNjYWxlID0gMDtcblxuXG4gICAgICAgICAgICBjYy50d2VlbihnYW1lRmluZCkudG8oMC4zLCB7IHNjYWxlOiAxLjUgfSkudG8oMC4xLCB7IHNjYWxlOiAxLjMgfSkuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbmRTaWduRXJyKHRhcmdldFBvczogY2MuVmVjMykge1xuICAgICAgICBsZXQgY2xpY2tQb3MgPSB0YXJnZXRQb3M7XG4gICAgICAgIGxldCBnYW1lRXJyID0gY2MuaW5zdGFudGlhdGUodGhpcy5nYW1lRXJyUHJlZmFiKTtcbiAgICAgICAgdGhpcy5pbWdTaWduQm94LmdldENoaWxkQnlOYW1lKFwiZXJyQm94XCIpLmFkZENoaWxkKGdhbWVFcnIpO1xuICAgICAgICBnYW1lRXJyLnNldFBvc2l0aW9uKGNsaWNrUG9zKTtcbiAgICAgICAgdGhpcy5lcnJTaWduQW5pbShnYW1lRXJyKTtcblxuICAgICAgICBsZXQgb3RoZXJFcnJTaWduOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAgICAgaWYgKGNsaWNrUG9zLnkgPiAwKSB7XG4gICAgICAgICAgICBvdGhlckVyclNpZ24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdhbWVFcnJQcmVmYWIpO1xuICAgICAgICAgICAgdGhpcy5pbWdTaWduQm94LmdldENoaWxkQnlOYW1lKFwiZXJyQm94XCIpLmFkZENoaWxkKG90aGVyRXJyU2lnbik7XG4gICAgICAgICAgICBvdGhlckVyclNpZ24uc2V0UG9zaXRpb24oY2MudjMoY2xpY2tQb3MueCwgY2xpY2tQb3MueSAtICh0aGlzLnNldEltZ1kgKiAyKSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3RoZXJFcnJTaWduID0gY2MuaW5zdGFudGlhdGUodGhpcy5nYW1lRXJyUHJlZmFiKTtcbiAgICAgICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcImVyckJveFwiKS5hZGRDaGlsZChvdGhlckVyclNpZ24pO1xuICAgICAgICAgICAgb3RoZXJFcnJTaWduLnNldFBvc2l0aW9uKGNjLnYzKGNsaWNrUG9zLngsIGNsaWNrUG9zLnkgKyAodGhpcy5zZXRJbWdZICogMikpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3RoZXJFcnJTaWduKSB7XG4gICAgICAgICAgICB0aGlzLmVyclNpZ25BbmltKG90aGVyRXJyU2lnbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbWdFdmVudChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xuICAgICAgICBsZXQgcG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgbGV0IGNsaWNrUG9zID0gdGhpcy5pbWdTaWduQm94LmNvbnZlcnRUb05vZGVTcGFjZUFSKGNjLnYzKHBvcy54LCBwb3MueSkpO1xuICAgICAgICAvLyB0aGlzLmZpbmRTaWduRXJyKGNsaWNrUG9zKTtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNoZWNrSW1nU2lnbihjbGlja1Bvcyk7XG4gICAgICAgIGlmIChkYXRhLnR5cGUgPT0gR2FtZVN0YXRlLmZpbmQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVGlTaGkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzVGlTaGkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJ0aXNoaUJveFwiKS5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMueWV6aU5vd051bSA9IHRoaXMueWV6aU5vd051bSArIDE7XG4gICAgICAgICAgICB0aGlzLmZpbmRTaWduU3VjYyhjYy52MyhkYXRhLmZpbmREYXRhLmNlbnRlclBvcy54LCBkYXRhLmZpbmREYXRhLmNlbnRlclBvcy55KSwgZGF0YS5maW5kRGF0YSk7XG4gICAgICAgICAgICB0aGlzLnllemlMaWdodChjbGlja1Bvcyk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm5ld2hhbmROb2RlICYmIHRoaXMueWV6aU5vd051bSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgaWYoIHRoaXMubmV3aGFuZE5vZGUpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld2hhbmROb2RlLmhpZGVkb25nMSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld2hhbmROb2RlLnNob3dkb25nMigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm5ld2hhbmROb2RlICYmIHRoaXMueWV6aU5vd051bSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgaWYoIHRoaXMubmV3aGFuZE5vZGUpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld2hhbmROb2RlLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld2hhbmROb2RlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZ2FtZURhdGEudXNlckRhdGEuaXNHdWRpZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZ2FtZURhdGEuc3RvcmFnZURhdGEoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucGxheUNvbW1vblNvdW5kKHNvdW5kLmNvcnJlY3QpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy55ZXppTm93TnVtID49IHRoaXMueWV6aUFsbE51bSkgeyAgICAgICAvL+iDnOWIqSDmuLjmiI/nu5PmnZ9cbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVFbmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLnR5cGUgPT0gR2FtZVN0YXRlLmVycikge1xuICAgICAgICAgICAgdGhpcy5wbGF5Q29tbW9uU291bmQoc291bmQuZXJyKTtcbiAgICAgICAgICAgIHRoaXMuZXJyUmVkdWNlVGltZSgpO1xuICAgICAgICAgICAgdGhpcy5maW5kU2lnbkVycihjbGlja1Bvcyk7XG4gICAgICAgICAgICB0aGlzLmZpcnN0RXJyID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGxheUNvbW1vblNvdW5kKHNvdW5kLmVycik7XG4gICAgICAgICAgICB0aGlzLmVyclJlZHVjZVRpbWUoKTtcbiAgICAgICAgICAgIHRoaXMuZmluZFNpZ25FcnIoY2xpY2tQb3MpO1xuICAgICAgICAgICAgdGhpcy5maXJzdEVyciA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0ltZ1NpZ24odGFyZ2V0UG9zOiBjYy5WZWMzKSB7XG4gICAgICAgIGxldCB0eXBlOiBHYW1lU3RhdGUgPSBudWxsO1xuICAgICAgICBsZXQgZmluZERhdGEgPSBudWxsO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW1nRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmltZ0RhdGFbaV07XG4gICAgICAgICAgICBsZXQgeCA9IGRhdGEuY2VudGVyUG9zLnggKiB0aGlzLm9yaWdpbmFsU2NhbGU7XG4gICAgICAgICAgICBsZXQgeSA9IDA7XG4gICAgICAgICAgICBpZiAodGFyZ2V0UG9zLnkgPiAwKSB7XG4gICAgICAgICAgICAgICAgeSA9IGRhdGEuY2VudGVyUG9zLnkgKiB0aGlzLm9yaWdpbmFsU2NhbGUgKyB0aGlzLnNldEltZ1k7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHkgPSBkYXRhLmNlbnRlclBvcy55ICogdGhpcy5vcmlnaW5hbFNjYWxlIC0gdGhpcy5zZXRJbWdZO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgd2lkID0gZGF0YS5ibG9ja1NpemUud2lkICogdGhpcy5vcmlnaW5hbFNjYWxlO1xuICAgICAgICAgICAgbGV0IGhlaSA9IGRhdGEuYmxvY2tTaXplLmhlaSAqIHRoaXMub3JpZ2luYWxTY2FsZTtcblxuICAgICAgICAgICAgLy8gbGV0IHRlc3RpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy50ZXN0aXRlbVByZWZhYik7XG4gICAgICAgICAgICAvLyB0aGlzLmltZ1NpZ25Cb3guYWRkQ2hpbGQodGVzdGl0ZW0pO1xuICAgICAgICAgICAgLy8gdGVzdGl0ZW0uc2V0UG9zaXRpb24oY2MudjMoeCwgeSkpO1xuICAgICAgICAgICAgLy8gdGVzdGl0ZW0ud2lkdGggPSB3aWQ7XG4gICAgICAgICAgICAvLyB0ZXN0aXRlbS5oZWlnaHQgPSBoZWk7XG5cbiAgICAgICAgICAgIGlmICghZGF0YS5pc0ZpbmQgJiYgdGFyZ2V0UG9zLnggPD0geCArIHdpZCAvIDIgJiYgdGFyZ2V0UG9zLnggPj0geCAtIHdpZCAvIDJcbiAgICAgICAgICAgICAgICAmJiB0YXJnZXRQb3MueSA8PSB5ICsgaGVpIC8gMiAmJiB0YXJnZXRQb3MueSA+PSB5IC0gaGVpIC8gMikge1xuICAgICAgICAgICAgICAgIGlmICghZGF0YS5pc0ZpbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwi5om+5Yiw5LqGXCIpO1xuICAgICAgICAgICAgICAgICAgICB0eXBlID0gR2FtZVN0YXRlLmZpbmQ7XG4gICAgICAgICAgICAgICAgICAgIGZpbmREYXRhID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5pc0ZpbmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBHYW1lU3RhdGUuZmluaXNoO1xuICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCLmib7liLDph43lpI3nmoTkuoZcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7IHR5cGUsIGZpbmREYXRhIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdHlwZSA9IEdhbWVTdGF0ZS5lcnI7XG4gICAgICAgICAgICAgICAgY2MubG9nKFwi5rKh5om+5YiwXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgdHlwZSwgZmluZERhdGEgfVxuICAgIH1cblxuXG4gICAgZXJyU2lnbkFuaW0obm9kZTogY2MuTm9kZSkge1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQobm9kZSk7XG4gICAgICAgIGNjLnR3ZWVuKG5vZGUpXG4gICAgICAgICAgICAudG8oMC4wNSwgeyBhbmdsZTogMTUgfSkudG8oMC4wNSwgeyBhbmdsZTogMCB9KS50bygwLjA1LCB7IGFuZ2xlOiAtMTUgfSlcbiAgICAgICAgICAgIC50bygwLjA3LCB7IGFuZ2xlOiAxMCB9KS50bygwLjA3LCB7IGFuZ2xlOiAwIH0pLnRvKDAuMDcsIHsgYW5nbGU6IC0xMCB9KVxuICAgICAgICAgICAgLnRvKDAuMSwgeyBhbmdsZTogNyB9KS50bygwLjEsIHsgYW5nbGU6IDAgfSkudG8oMC4xLCB7IGFuZ2xlOiAtNyB9KVxuICAgICAgICAgICAgLnRvKDAuMSwgeyBhbmdsZTogMyB9KS50bygwLjEsIHsgYW5nbGU6IDAgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuXG5cbiAgICBnYW1lRW5kKCkge1xuICAgICAgICBjYy5sb2coXCLmuLjmiI/nu5PmnZ9cIik7XG4gICAgICAgIHRoaXMubWFzay5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMueWV6aUJveC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBhbmltID0gdGhpcy55ZXppQm94LmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBVdGlsc1Rvb2wucGxheVNwKGFuaW0sIFwiNF9tYW5cIiwgZmFsc2UsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSB0aGlzLnllemlCb3guY2hpbGRyZW4ubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlDb21tb25Tb3VuZChzb3VuZC53aW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZURhdGEudXNlckRhdGEubGV2ZWwgKyAxIDw9IGdhbWVEYXRhLmxldmVsQWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lRGF0YS51c2VyRGF0YS5sZXZlbCA9IGdhbWVEYXRhLnVzZXJEYXRhLmxldmVsICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVEYXRhLnN0b3JhZ2VEYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2xvYmFsLmFzc2V0VXRpbHMuc2hvd0RpYWxvZyhkaWFsb2cuZ2FtZW92ZXJfZGlhbG9nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChHbG9iYWwuaW1nSWQgKyAxIDw9IGdhbWVEYXRhLmxldmVsQWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdsb2JhbC5pbWdJZCA9IEdsb2JhbC5pbWdJZCArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRBbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREb3duVGltZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRSZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lRGF0YS51c2VyRGF0YS5pc0hhbGwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoc2NlbmUuaGFsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LCAwLjEgKiBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMC41KTtcbiAgICB9XG5cblxuICAgIC8v6I635Y+W5b2T5YmN5YWz5Y2h55qE5YCS6K6h5pe2XG4gICAgZ2V0RG93blRpbWUoKSB7XG4gICAgICAgIGxldCBsZXZlbCA9IEdsb2JhbC5pbWdJZDtcbiAgICAgICAgbGV0IHRpbWUgPSAwO1xuICAgICAgICBpZiAobGV2ZWwgPj0gMSAmJiBsZXZlbCA8PSA1KSB7XG4gICAgICAgICAgICB0aW1lID0gNSAqIDYwO1xuICAgICAgICB9IGVsc2UgaWYgKGxldmVsID49IDYgJiYgbGV2ZWwgPD0gMTApIHtcbiAgICAgICAgICAgIHRpbWUgPSAzICogNjA7XG4gICAgICAgIH0gZWxzZSBpZiAobGV2ZWwgPj0gMTEgJiYgbGV2ZWwgPD0gMTUpIHtcbiAgICAgICAgICAgIHRpbWUgPSAyICogNjAgKyAzMDtcbiAgICAgICAgfSBlbHNlIGlmIChsZXZlbCA+PSAxNiAmJiBsZXZlbCA8PSAyMCkge1xuICAgICAgICAgICAgdGltZSA9IDIgKiA2MDtcbiAgICAgICAgfSBlbHNlIGlmIChsZXZlbCA+PSAyMSAmJiBsZXZlbCA8PSAyNSkge1xuICAgICAgICAgICAgdGltZSA9IDEgKiA2MCArIDMwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGltZSA9IDEgKiA2MDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGltZTtcbiAgICB9XG5cblxuICAgIC8v5pe26Ze05YiwXG4gICAgdGltZU91dEV2ZW50KCkge1xuICAgICAgICBHbG9iYWwuYXNzZXRVdGlscy5zaG93RGlhbG9nKGRpYWxvZy50aW1lT3V0X2RpYWxvZywge1xuICAgICAgICAgICAgQURjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzaWR1ZVRpbWUgPSA2MDtcbiAgICAgICAgICAgICAgICBnYW1lRGF0YS51c2VyRGF0YS50aXNoaU51bSsrO1xuICAgICAgICAgICAgICAgIGdhbWVEYXRhLnN0b3JhZ2VEYXRhKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VRaVBhb051bSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREb3duVGltZSgpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgcmVzdGFydENhbGxCYWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldEFsbCh0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RG93blRpbWUoKTtcbiAgICAgICAgICAgICAgICBjYy5sb2codGhpcy5pbWdEYXRhLCBcInRoaXMuaW1nRGF0YVwiKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW1nRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmltZ0RhdGFbaV0uaXNGaW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNsaWNrX2JhY2soKSB7XG4gICAgICAgIEdsb2JhbC5hdWRpb1V0aWxzLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIHRoaXMuaXNQYXVzZSA9IHRydWU7XG4gICAgICAgIEdsb2JhbC5hc3NldFV0aWxzLnNob3dEaWFsb2coZGlhbG9nLmNvbmZpcm1FeGl0X2RpYWxvZywgeyBjYWxsYmFjazogKCkgPT4geyB0aGlzLmlzUGF1c2UgPSBmYWxzZSB9IH0pO1xuICAgIH1cblxuXG4gICAgb25DbGlja19wYXVzZSgpIHtcbiAgICAgICAgR2xvYmFsLmF1ZGlvVXRpbHMuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgdGhpcy5pc1BhdXNlID0gdHJ1ZTtcbiAgICAgICAgR2xvYmFsLmFzc2V0VXRpbHMuc2hvd0RpYWxvZyhkaWFsb2cuc2V0dGluZ19kaWFsb2csIHsgaXNHYW1lOiB0cnVlLCBjYWxsYmFjazogKCkgPT4geyB0aGlzLmlzUGF1c2UgPSBmYWxzZSB9IH0pO1xuICAgICAgICAgXG4gICAgfVxuXG4gICAgb25DbGlja190aXNoaSgpIHtcblxuICAgICAgICBHbG9iYWwuYXVkaW9VdGlscy5jb21tb25CdG5DbGljaygpO1xuICAgICAgICBpZiAodGhpcy5pc1RpU2hpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZpbmREYXRhOiBiZWF1dHlEYXRhID0gbnVsbDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmltZ0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pbWdEYXRhW2ldLmlzRmluZCkge1xuICAgICAgICAgICAgICAgIGZpbmREYXRhID0gdGhpcy5pbWdEYXRhW2ldO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFmaW5kRGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdhbWVEYXRhLnVzZXJEYXRhLnRpc2hpTnVtIDw9IDApIHtcbiAgICAgICAgICAgIGNjLmxvZyhcIueci+W5v+WRilwiKVxuXG4gICAgICAgICAgICBnYW1lRGF0YS5zaG93VmlkZW8oKCk9PntcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dUaVNoaShmaW5kRGF0YSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGdhbWVEYXRhLnVzZXJEYXRhLnRpc2hpTnVtID0gZ2FtZURhdGEudXNlckRhdGEudGlzaGlOdW0gLSAxO1xuICAgICAgICBnYW1lRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICB0aGlzLmNoYW5nZVFpUGFvTnVtKCk7XG4gICAgICAgIHRoaXMuc2hvd1RpU2hpKGZpbmREYXRhKTtcbiAgICB9XG5cbiAgICBzaG93VGlTaGkoZmluZERhdGE6IGJlYXV0eURhdGEpIHtcblxuICAgICAgICBpZiAoZmluZERhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuaXNUaVNoaSA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCB0aXNoaSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ2FtZVRpc2hpUHJlZmFiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJ0aXNoaUJveFwiKS5hZGRDaGlsZCh0aXNoaSk7XG5cbiAgICAgICAgICAgICAgICBsZXQgeCA9IGZpbmREYXRhLmNlbnRlclBvcy54ICogdGhpcy5vcmlnaW5hbFNjYWxlO1xuICAgICAgICAgICAgICAgIGxldCB5ID0gMFxuICAgICAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgeSA9IGZpbmREYXRhLmNlbnRlclBvcy55ICogdGhpcy5vcmlnaW5hbFNjYWxlICsgdGhpcy5zZXRJbWdZO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHkgPSBmaW5kRGF0YS5jZW50ZXJQb3MueSAqIHRoaXMub3JpZ2luYWxTY2FsZSAtIHRoaXMuc2V0SW1nWTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGlzaGkuc2V0UG9zaXRpb24oeCwgeSk7XG4gICAgICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRpc2hpKTtcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aXNoaSkudG8oMC41LCB7IHNjYWxlOiAwLjcgfSkudG8oMC41LCB7IHNjYWxlOiAxIH0pLnVuaW9uKCkucmVwZWF0Rm9yZXZlcigpLnN0YXJ0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy/mkq3mlL7pn7PmlYhcbiAgICBwbGF5Q29tbW9uU291bmQoYXVkaW9OYW1lOiBzdHJpbmcsIGxvb3A6IGJvb2xlYW4gPSBmYWxzZSk6IG51bWJlciB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hdWRpb0NsaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hdWRpb0NsaXBzW2ldLm5hbWUgPT0gYXVkaW9OYW1lKSB7XG4gICAgICAgICAgICAgICAgbGV0IGF1ZGlvSUQgPSBHbG9iYWwuYXVkaW9VdGlscy5wbGF5RWZmZWN0KHRoaXMuYXVkaW9DbGlwc1tpXSwgbG9vcCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF1ZGlvSUQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/dialog/timeOut_dialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '98460XFFs1JCI9f0VmFuXBW', 'timeOut_dialog');
// script/dialog/timeOut_dialog.ts

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
var timeOut_dialog = /** @class */ (function (_super) {
    __extends(timeOut_dialog, _super);
    function timeOut_dialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ADcallback = null;
        _this.restartCallBack = null;
        return _this;
    }
    timeOut_dialog.prototype.start = function () {
        gameData_1.gameData.showBanner();
    };
    timeOut_dialog.prototype.initData = function (data) {
        this.ADcallback = data.ADcallback;
        this.restartCallBack = data.restartCallBack;
    };
    timeOut_dialog.prototype.onClick_AD_btn = function () {
        var _this = this;
        global_1.Global.audioUtils.commonBtnClick();
        gameData_1.gameData.showVideo(function () {
            _this.scheduleOnce(function () {
                _this.ADcallback && _this.ADcallback();
                _this.node.destroy();
                gameData_1.gameData.closeBanner();
            });
        });
    };
    timeOut_dialog.prototype.onClick_restart = function () {
        global_1.Global.audioUtils.commonBtnClick();
        this.restartCallBack && this.restartCallBack();
        this.node.destroy();
        gameData_1.gameData.closeBanner();
    };
    timeOut_dialog = __decorate([
        ccclass
    ], timeOut_dialog);
    return timeOut_dialog;
}(cc.Component));
exports.default = timeOut_dialog;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZGlhbG9nL3RpbWVPdXRfZGlhbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUE0QztBQUM1Qyx5Q0FBd0M7QUFFbEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUFpQ0M7UUEvQkcsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFDNUIscUJBQWUsR0FBYSxJQUFJLENBQUM7O0lBOEJyQyxDQUFDO0lBNUJHLDhCQUFLLEdBQUw7UUFDSSxtQkFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxpQ0FBUSxHQUFSLFVBQVMsSUFBSTtRQUVULElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNsQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDaEQsQ0FBQztJQUdELHVDQUFjLEdBQWQ7UUFBQSxpQkFTQztRQVJHLGVBQU0sQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkMsbUJBQVEsQ0FBQyxTQUFTLENBQUM7WUFDZixLQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLEtBQUksQ0FBQyxVQUFVLElBQUksS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO2dCQUNwQyxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNwQixtQkFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsd0NBQWUsR0FBZjtRQUNJLGVBQU0sQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQixtQkFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFoQ2dCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FpQ2xDO0lBQUQscUJBQUM7Q0FqQ0QsQUFpQ0MsQ0FqQzJDLEVBQUUsQ0FBQyxTQUFTLEdBaUN2RDtrQkFqQ29CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnYW1lRGF0YSB9IGZyb20gXCIuLi90b29sL2dhbWVEYXRhXCI7XG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi4vdG9vbC9nbG9iYWxcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHRpbWVPdXRfZGlhbG9nIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEFEY2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbDtcbiAgICByZXN0YXJ0Q2FsbEJhY2s6IEZ1bmN0aW9uID0gbnVsbDtcblxuICAgIHN0YXJ0KCk6IHZvaWQge1xuICAgICAgICBnYW1lRGF0YS5zaG93QmFubmVyKCk7XG4gICAgfVxuXG4gICAgaW5pdERhdGEoZGF0YSkge1xuXG4gICAgICAgIHRoaXMuQURjYWxsYmFjayA9IGRhdGEuQURjYWxsYmFjaztcbiAgICAgICAgdGhpcy5yZXN0YXJ0Q2FsbEJhY2sgPSBkYXRhLnJlc3RhcnRDYWxsQmFjaztcbiAgICB9XG5cblxuICAgIG9uQ2xpY2tfQURfYnRuKCkge1xuICAgICAgICBHbG9iYWwuYXVkaW9VdGlscy5jb21tb25CdG5DbGljaygpO1xuICAgICAgICBnYW1lRGF0YS5zaG93VmlkZW8oKCk9PntcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5BRGNhbGxiYWNrICYmIHRoaXMuQURjYWxsYmFjaygpXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICBnYW1lRGF0YS5jbG9zZUJhbm5lcigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2xpY2tfcmVzdGFydCgpIHtcbiAgICAgICAgR2xvYmFsLmF1ZGlvVXRpbHMuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgdGhpcy5yZXN0YXJ0Q2FsbEJhY2sgJiYgdGhpcy5yZXN0YXJ0Q2FsbEJhY2soKVxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICBnYW1lRGF0YS5jbG9zZUJhbm5lcigpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/BxAutoAsset.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b835cS/qxNLbakyyg5HTNea', 'BxAutoAsset');
// script/tool/BxAutoAsset.ts

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
cc.Component.prototype.addAutoReleaseAsset = function (_asset) {
    var tempAuto = this.node.getComponent(AutoReleaseAssets);
    if (!cc.isValid(tempAuto)) {
        tempAuto = this.node.addComponent(AutoReleaseAssets);
    }
    tempAuto.addAutoReleaseAsset(_asset);
};
cc.Component.prototype.addAutoReleaseAssets = function (_assets) {
    var tempAuto = this.node.getComponent(AutoReleaseAssets);
    if (!cc.isValid(tempAuto)) {
        tempAuto = this.node.addComponent(AutoReleaseAssets);
    }
    for (var _i = 0, _assets_1 = _assets; _i < _assets_1.length; _i++) {
        var _assetOne = _assets_1[_i];
        tempAuto.addAutoReleaseAsset(_assetOne);
    }
};
//-----------------------------------------------------------------------------------------------------AutoReleaseAssets
var ccclass = cc._decorator.ccclass;
var AutoReleaseAssets = /** @class */ (function (_super) {
    __extends(AutoReleaseAssets, _super);
    function AutoReleaseAssets() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dynamicsAssets = [];
        return _this;
    }
    AutoReleaseAssets.prototype.addAutoReleaseAsset = function (_asset) {
        if (cc.isValid(_asset)) {
            _asset.addRef();
            this.dynamicsAssets.push(_asset);
            // console.log("当前动态资源长度=="+this.dynamicsAssets.length);
        }
    };
    AutoReleaseAssets.prototype.onDestroy = function () {
        // console.log("继承cc.Component 拥有生命周期 如果Node销毁就会顺带销毁这里");
        for (var index = 0; index < this.dynamicsAssets.length; index++) {
            if (cc.isValid(this.dynamicsAssets[index])) {
                this.dynamicsAssets[index].decRef();
            }
        }
        this.dynamicsAssets = [];
    };
    AutoReleaseAssets = __decorate([
        ccclass
    ], AutoReleaseAssets);
    return AutoReleaseAssets;
}(cc.Component));
exports.default = AutoReleaseAssets;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9CeEF1dG9Bc3NldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxFQUFFLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsR0FBRyxVQUFTLE1BQWU7SUFDakUsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN6RCxJQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBQztRQUNyQixRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FBQztLQUN4RDtJQUNELFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN6QyxDQUFDLENBQUE7QUFFRCxFQUFFLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsR0FBRyxVQUFTLE9BQWtCO0lBQ3JFLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDekQsSUFBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUM7UUFDckIsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUM7S0FDeEQ7SUFDRCxLQUF5QixVQUFPLEVBQVAsbUJBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU8sRUFBRTtRQUE3QixJQUFNLFNBQVMsZ0JBQUE7UUFDaEIsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQzNDO0FBQ0wsQ0FBQyxDQUFBO0FBRUQsd0hBQXdIO0FBRWpILElBQUEsT0FBTyxHQUFJLEVBQUUsQ0FBQyxVQUFVLFFBQWpCLENBQWtCO0FBR2hDO0lBQStDLHFDQUFZO0lBQTNEO1FBQUEscUVBdUJDO1FBckJXLG9CQUFjLEdBQWUsRUFBRSxDQUFDOztJQXFCNUMsQ0FBQztJQWxCVSwrQ0FBbUIsR0FBMUIsVUFBMkIsTUFBZTtRQUN0QyxJQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUM7WUFDbEIsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLHdEQUF3RDtTQUMzRDtJQUNMLENBQUM7SUFFRCxxQ0FBUyxHQUFUO1FBQ0kseURBQXlEO1FBQ3pELEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUM3RCxJQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDO2dCQUN0QyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ3ZDO1NBQ0o7UUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBckJnQixpQkFBaUI7UUFEckMsT0FBTztPQUNhLGlCQUFpQixDQXVCckM7SUFBRCx3QkFBQztDQXZCRCxBQXVCQyxDQXZCOEMsRUFBRSxDQUFDLFNBQVMsR0F1QjFEO2tCQXZCb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ29tcG9uZW50LnByb3RvdHlwZS5hZGRBdXRvUmVsZWFzZUFzc2V0ID0gZnVuY3Rpb24oX2Fzc2V0OmNjLkFzc2V0KSB7XHJcbiAgICBsZXQgdGVtcEF1dG8gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEF1dG9SZWxlYXNlQXNzZXRzKTtcclxuICAgIGlmKCFjYy5pc1ZhbGlkKHRlbXBBdXRvKSl7XHJcbiAgICAgICAgdGVtcEF1dG8gPSB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KEF1dG9SZWxlYXNlQXNzZXRzKTtcclxuICAgIH1cclxuICAgIHRlbXBBdXRvLmFkZEF1dG9SZWxlYXNlQXNzZXQoX2Fzc2V0KTtcclxufVxyXG5cclxuY2MuQ29tcG9uZW50LnByb3RvdHlwZS5hZGRBdXRvUmVsZWFzZUFzc2V0cyA9IGZ1bmN0aW9uKF9hc3NldHM6Y2MuQXNzZXRbXSkge1xyXG4gICAgbGV0IHRlbXBBdXRvID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChBdXRvUmVsZWFzZUFzc2V0cyk7XHJcbiAgICBpZighY2MuaXNWYWxpZCh0ZW1wQXV0bykpe1xyXG4gICAgICAgIHRlbXBBdXRvID0gdGhpcy5ub2RlLmFkZENvbXBvbmVudChBdXRvUmVsZWFzZUFzc2V0cyk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IF9hc3NldE9uZSAgb2YgX2Fzc2V0cykge1xyXG4gICAgICAgIHRlbXBBdXRvLmFkZEF1dG9SZWxlYXNlQXNzZXQoX2Fzc2V0T25lKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUF1dG9SZWxlYXNlQXNzZXRzXHJcblxyXG5jb25zdCB7Y2NjbGFzc30gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b1JlbGVhc2VBc3NldHMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHByaXZhdGUgZHluYW1pY3NBc3NldHM6IGNjLkFzc2V0W10gPSBbXTtcclxuXHJcblxyXG4gICAgcHVibGljIGFkZEF1dG9SZWxlYXNlQXNzZXQoX2Fzc2V0OmNjLkFzc2V0KXtcclxuICAgICAgICBpZihjYy5pc1ZhbGlkKF9hc3NldCkpe1xyXG4gICAgICAgICAgICBfYXNzZXQuYWRkUmVmKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZHluYW1pY3NBc3NldHMucHVzaChfYXNzZXQpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuW9k+WJjeWKqOaAgei1hOa6kOmVv+W6pj09XCIrdGhpcy5keW5hbWljc0Fzc2V0cy5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLnu6fmib9jYy5Db21wb25lbnQg5oul5pyJ55Sf5ZG95ZGo5pyfIOWmguaenE5vZGXplIDmr4HlsLHkvJrpobrluKbplIDmr4Hov5nph4xcIik7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuZHluYW1pY3NBc3NldHMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGlmKGNjLmlzVmFsaWQodGhpcy5keW5hbWljc0Fzc2V0c1tpbmRleF0pKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHluYW1pY3NBc3NldHNbaW5kZXhdLmRlY1JlZigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZHluYW1pY3NBc3NldHMgPSBbXTtcclxuICAgIH1cclxuICAgICBcclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e75de39iqJBE4u//arB87VO', 'utils');
// script/tool/utils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dialog = exports.scene = exports.UtilsTool = void 0;
exports.UtilsTool = {
    /**
     * 时间转换，秒->分秒, mm:ss
     */
    timeChange: function (value) {
        value = +value;
        var minute = Math.floor(value / 60);
        var second = Math.floor(value % 60);
        var minStr = "";
        if (minute < 10) { //分钟
            minStr = "0" + minute;
        }
        else {
            minStr = minute.toString();
        }
        var secStr = "";
        if (second < 10) { //秒数
            secStr = "0" + second;
        }
        else {
            secStr = second.toString();
        }
        return minStr + ":" + secStr;
    },
    //返回范围的随机数
    getRandomInt: function (min, max) {
        return Math.floor(Math.random() * (max - min + 0.999999999)) + min;
    },
    // 全屏窗口背景图适配
    adapterBg: function (bgNode) {
        //背景大图适配 等比缩放 不留黑边
        var _bgWidthScale = cc.winSize.width / bgNode.width;
        var _bgHeightScale = cc.winSize.height / bgNode.height;
        bgNode.scale = Math.max(_bgWidthScale, _bgHeightScale);
    },
    //转成节点坐标
    changePos: function (toNode, fromNode) {
        if (!cc.isValid(toNode) || !cc.isValid(fromNode))
            return cc.v3(0, 0);
        var _pos = toNode.parent.convertToWorldSpaceAR(toNode.position);
        var _npos = fromNode.parent.convertToNodeSpaceAR(_pos);
        return _npos;
    },
    //数组打乱
    shuffleArray: function (array) {
        var _a;
        // 遍历数组
        for (var i = array.length - 1; i > 0; i--) {
            // 随机生成一个 0 到 i（包含）之间的整数
            var j = Math.floor(Math.random() * (i + 1));
            // 交换当前元素和随机选择的元素
            _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
        }
        return array;
    },
    //在数组中随机抽几个出来
    getRandomThree: function (array, num) {
        var roundomArr = this.shuffleArray(array);
        return roundomArr.slice(0, num);
    },
    //------------------------------------------anim---------------------------------------------------------------
    delayCallBack: function (time, _callback, nodeDelay) {
        var CanvasNode = cc.director.getScene().getChildByName('Canvas');
        if (cc.isValid(nodeDelay)) {
            CanvasNode = nodeDelay;
        }
        // cc.Tween.stopAllByTarget(CanvasNode);//这里不能停止CanvasNode的所有动作
        cc.tween(CanvasNode)
            .delay(time)
            .call(function () { if (_callback)
            _callback(); })
            .start();
    },
    playSp: function (spSkel, name, isLoop, endCallback) {
        var _this = this;
        if (isLoop === void 0) { isLoop = false; }
        if (endCallback === void 0) { endCallback = null; }
        spSkel.setCompleteListener(function () {
            if (endCallback) {
                _this.delayCallBack(0.02, function () {
                    endCallback();
                }, spSkel.node);
            }
            spSkel.setCompleteListener(null);
            // spSkel.setDisposeListener(endCallback);
        });
        spSkel.setAnimation(0, name, isLoop);
    },
    stopSp: function (spSkel) {
        spSkel.setCompleteListener(null);
        // spSkel.clearTracks();
    },
    // 序列动画(添加一个动画到尾巴 还可以延迟几秒)
    addSequenceSp: function (spSkel, name, isLoop, delayTime) {
        if (isLoop === void 0) { isLoop = false; }
        if (delayTime) {
            spSkel.addAnimation(0, name, isLoop, delayTime);
        }
        else {
            spSkel.addAnimation(0, name, isLoop);
        }
    },
    // name 动画师加的事件名
    setFraListenSp: function (spSkel, name, func) {
        spSkel.setEventListener(function (tracIndex, event) {
            if (event.data.name == name) {
                if (func) {
                    func();
                }
            }
        });
    },
    // 多事件名监听
    setFraListenSpEx: function (spSkel, func) {
        spSkel.setEventListener(function (tracIndex, event) {
            if (func) {
                func(event.data.name);
            }
        });
    }
};
exports.scene = {
    game: "game",
    hall: "hall",
    loading: "loading",
};
exports.dialog = {
    setting_dialog: "setting_dialog",
    clause_dialog: "clause_dialog",
    confirmExit_dialog: "confirmExit_dialog",
    timeOut_dialog: "timeOut_dialog",
    comment_dialog: "comment_dialog",
    gameover_dialog: "gameover_dialog",
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDYSxRQUFBLFNBQVMsR0FBRztJQUVyQjs7T0FFRztJQUNILFVBQVUsRUFBVixVQUFXLEtBQUs7UUFDWixLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDZixJQUFJLE1BQU0sR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQztRQUM1QyxJQUFJLE1BQU0sR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQztRQUM1QyxJQUFJLE1BQU0sR0FBVyxFQUFFLENBQUE7UUFDdkIsSUFBSSxNQUFNLEdBQUcsRUFBRSxFQUFFLEVBQVMsSUFBSTtZQUMxQixNQUFNLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQTtTQUN4QjthQUFNO1lBQ0gsTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUM5QjtRQUNELElBQUksTUFBTSxHQUFXLEVBQUUsQ0FBQTtRQUN2QixJQUFJLE1BQU0sR0FBRyxFQUFFLEVBQUUsRUFBUyxJQUFJO1lBQzFCLE1BQU0sR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFBO1NBQ3hCO2FBQU07WUFDSCxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzlCO1FBQ0QsT0FBVSxNQUFNLFNBQUksTUFBUSxDQUFDO0lBQ2pDLENBQUM7SUFHRCxVQUFVO0lBQ1YsWUFBWSxFQUFaLFVBQWEsR0FBVyxFQUFFLEdBQVc7UUFDakMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsV0FBVyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDdkUsQ0FBQztJQUVELFlBQVk7SUFDWixTQUFTLEVBQVQsVUFBVSxNQUFlO1FBQ3JCLGtCQUFrQjtR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QUksSUFBSSxFQUFFO2dCQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3pCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0osQ0FBQTtBQUdZLFFBQUEsS0FBSyxHQUFHO0lBQ2pCLElBQUksRUFBRSxNQUFNO0lBQ1osSUFBSSxFQUFFLE1BQU07SUFDWixPQUFPLEVBQUUsU0FBUztDQUNyQixDQUFBO0FBRVksUUFBQSxNQUFNLEdBQUc7SUFDbEIsY0FBYyxFQUFFLGdCQUFnQjtJQUNoQyxhQUFhLEVBQUUsZUFBZTtJQUM5QixrQkFBa0IsRUFBRSxvQkFBb0I7SUFDeEMsY0FBYyxFQUFFLGdCQUFnQjtJQUNoQyxjQUFjLEVBQUUsZ0JBQWdCO0lBQ2hDLGVBQWUsRUFBRSxpQkFBaUI7Q0FFckMsQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgY29uc3QgVXRpbHNUb29sID0ge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pe26Ze06L2s5o2i77yM56eSLT7liIbnp5IsIG1tOnNzXHJcbiAgICAgKi9cclxuICAgIHRpbWVDaGFuZ2UodmFsdWUpIHtcclxuICAgICAgICB2YWx1ZSA9ICt2YWx1ZTtcclxuICAgICAgICBsZXQgbWludXRlOiBudW1iZXIgPSBNYXRoLmZsb29yKHZhbHVlIC8gNjApO1xyXG4gICAgICAgIGxldCBzZWNvbmQ6IG51bWJlciA9IE1hdGguZmxvb3IodmFsdWUgJSA2MCk7XHJcbiAgICAgICAgbGV0IG1pblN0cjogc3RyaW5nID0gXCJcIlxyXG4gICAgICAgIGlmIChtaW51dGUgPCAxMCkgeyAgICAgICAgLy/liIbpkp9cclxuICAgICAgICAgICAgbWluU3RyID0gXCIwXCIgKyBtaW51dGVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtaW5TdHIgPSBtaW51dGUudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHNlY1N0cjogc3RyaW5nID0gXCJcIlxyXG4gICAgICAgIGlmIChzZWNvbmQgPCAxMCkgeyAgICAgICAgLy/np5LmlbBcclxuICAgICAgICAgICAgc2VjU3RyID0gXCIwXCIgKyBzZWNvbmRcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWNTdHIgPSBzZWNvbmQudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGAke21pblN0cn06JHtzZWNTdHJ9YDtcclxuICAgIH0sXHJcblxyXG5cclxuICAgIC8v6L+U5Zue6IyD5Zu055qE6ZqP5py65pWwXHJcbiAgICBnZXRSYW5kb21JbnQobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDAuOTk5OTk5OTk5KSkgKyBtaW47XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIOWFqOWxj+eql+WPo+iDjOaZr+WbvumAgumFjVxyXG4gICAgYWRhcHRlckJnKGJnTm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIC8v6IOM5pmv5aSn5Zu+6YCC6YWNIOetieavlOe8qeaUviDkuI3nlZnpu5HovrlcclxuICAgICAgICBsZXQgX2JnV2lkdGhTY2FsZSA9IGNjLndpblNpemUud2lkdGggLyBiZ05vZGUud2lkdGg7XHJcbiAgICAgICAgbGV0IF9iZ0hlaWdodFNjYWxlID0gY2Mud2luU2l6ZS5oZWlnaHQgLyBiZ05vZGUuaGVpZ2h0O1xyXG4gICAgICAgIGJnTm9kZS5zY2FsZSA9IE1hdGgubWF4KF9iZ1dpZHRoU2NhbGUsIF9iZ0hlaWdodFNjYWxlKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy/ovazmiJDoioLngrnlnZDmoIdcclxuICAgIGNoYW5nZVBvcyh0b05vZGU6IGNjLk5vZGUsIGZyb21Ob2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgaWYgKCFjYy5pc1ZhbGlkKHRvTm9kZSkgfHwgIWNjLmlzVmFsaWQoZnJvbU5vZGUpKSByZXR1cm4gY2MudjMoMCwgMCk7XHJcbiAgICAgICAgbGV0IF9wb3MgPSB0b05vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0b05vZGUucG9zaXRpb24pO1xyXG4gICAgICAgIGxldCBfbnBvcyA9IGZyb21Ob2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihfcG9zKTtcclxuICAgICAgICByZXR1cm4gX25wb3M7XHJcbiAgICB9LFxyXG5cclxuICAgIC8v5pWw57uE5omT5LmxXHJcbiAgICBzaHVmZmxlQXJyYXkoYXJyYXkpIHtcclxuICAgICAgICAvLyDpgY3ljobmlbDnu4RcclxuICAgICAgICBmb3IgKGxldCBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgICAgICAgICAvLyDpmo/mnLrnlJ/miJDkuIDkuKogMCDliLAgae+8iOWMheWQq++8ieS5i+mXtOeahOaVtOaVsFxyXG4gICAgICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XHJcbiAgICAgICAgICAgIC8vIOS6pOaNouW9k+WJjeWFg+e0oOWSjOmaj+acuumAieaLqeeahOWFg+e0oFxyXG4gICAgICAgICAgICBbYXJyYXlbaV0sIGFycmF5W2pdXSA9IFthcnJheVtqXSwgYXJyYXlbaV1dO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8v5Zyo5pWw57uE5Lit6ZqP5py65oq95Yeg5Liq5Ye65p2lXHJcbiAgICBnZXRSYW5kb21UaHJlZShhcnJheSwgbnVtKSB7XHJcbiAgICAgICAgbGV0IHJvdW5kb21BcnIgPSB0aGlzLnNodWZmbGVBcnJheShhcnJheSk7XHJcbiAgICAgICAgcmV0dXJuIHJvdW5kb21BcnIuc2xpY2UoMCwgbnVtKTtcclxuICAgIH0sXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1hbmltLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBkZWxheUNhbGxCYWNrKHRpbWU6IG51bWJlciwgX2NhbGxiYWNrOiBhbnksIG5vZGVEZWxheT86IGNjLk5vZGUpOiB2b2lkIHtcclxuICAgICAgICBsZXQgQ2FudmFzTm9kZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuZ2V0Q2hpbGRCeU5hbWUoJ0NhbnZhcycpO1xyXG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGVEZWxheSkpIHtcclxuICAgICAgICAgICAgQ2FudmFzTm9kZSA9IG5vZGVEZWxheTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KENhbnZhc05vZGUpOy8v6L+Z6YeM5LiN6IO95YGc5q2iQ2FudmFzTm9kZeeahOaJgOacieWKqOS9nFxyXG4gICAgICAgIGNjLnR3ZWVuKENhbnZhc05vZGUpXHJcbiAgICAgICAgICAgIC5kZWxheSh0aW1lKVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7IGlmIChfY2FsbGJhY2spIF9jYWxsYmFjaygpOyB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH0sXHJcblxyXG4gICAgcGxheVNwKHNwU2tlbDogc3AuU2tlbGV0b24sIG5hbWU6IHN0cmluZywgaXNMb29wOiBib29sZWFuID0gZmFsc2UsIGVuZENhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGwpOiB2b2lkIHtcclxuICAgICAgICBzcFNrZWwuc2V0Q29tcGxldGVMaXN0ZW5lcigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbmRDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxheUNhbGxCYWNrKDAuMDIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmRDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfSwgc3BTa2VsLm5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwU2tlbC5zZXRDb21wbGV0ZUxpc3RlbmVyKG51bGwpO1xyXG4gICAgICAgICAgICAvLyBzcFNrZWwuc2V0RGlzcG9zZUxpc3RlbmVyKGVuZENhbGxiYWNrKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzcFNrZWwuc2V0QW5pbWF0aW9uKDAsIG5hbWUsIGlzTG9vcCk7XHJcbiAgICB9LFxyXG4gICAgc3RvcFNwKHNwU2tlbDogc3AuU2tlbGV0b24pOiB2b2lkIHtcclxuICAgICAgICBzcFNrZWwuc2V0Q29tcGxldGVMaXN0ZW5lcihudWxsKTtcclxuICAgICAgICAvLyBzcFNrZWwuY2xlYXJUcmFja3MoKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8g5bqP5YiX5Yqo55S7KOa3u+WKoOS4gOS4quWKqOeUu+WIsOWwvuW3tCDov5jlj6/ku6Xlu7bov5/lh6Dnp5IpXHJcbiAgICBhZGRTZXF1ZW5jZVNwKHNwU2tlbDogc3AuU2tlbGV0b24sIG5hbWU6IHN0cmluZywgaXNMb29wOiBib29sZWFuID0gZmFsc2UsIGRlbGF5VGltZT86IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmIChkZWxheVRpbWUpIHtcclxuICAgICAgICAgICAgc3BTa2VsLmFkZEFuaW1hdGlvbigwLCBuYW1lLCBpc0xvb3AsIGRlbGF5VGltZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3BTa2VsLmFkZEFuaW1hdGlvbigwLCBuYW1lLCBpc0xvb3ApO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG5cclxuICAgIC8vIG5hbWUg5Yqo55S75biI5Yqg55qE5LqL5Lu25ZCNXHJcbiAgICBzZXRGcmFMaXN0ZW5TcChzcFNrZWw6IHNwLlNrZWxldG9uLCBuYW1lOiBzdHJpbmcsIGZ1bmM6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgc3BTa2VsLnNldEV2ZW50TGlzdGVuZXIoKHRyYWNJbmRleCwgZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEubmFtZSA9PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZnVuYykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyDlpJrkuovku7blkI3nm5HlkKxcclxuICAgIHNldEZyYUxpc3RlblNwRXgoc3BTa2VsOiBzcC5Ta2VsZXRvbiwgZnVuYzogKG5hbWU6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIHNwU2tlbC5zZXRFdmVudExpc3RlbmVyKCh0cmFjSW5kZXgsIGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChmdW5jKSB7XHJcbiAgICAgICAgICAgICAgICBmdW5jKGV2ZW50LmRhdGEubmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBzY2VuZSA9IHtcclxuICAgIGdhbWU6IFwiZ2FtZVwiLFxyXG4gICAgaGFsbDogXCJoYWxsXCIsXHJcbiAgICBsb2FkaW5nOiBcImxvYWRpbmdcIixcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRpYWxvZyA9IHtcclxuICAgIHNldHRpbmdfZGlhbG9nOiBcInNldHRpbmdfZGlhbG9nXCIsXHJcbiAgICBjbGF1c2VfZGlhbG9nOiBcImNsYXVzZV9kaWFsb2dcIixcclxuICAgIGNvbmZpcm1FeGl0X2RpYWxvZzogXCJjb25maXJtRXhpdF9kaWFsb2dcIixcclxuICAgIHRpbWVPdXRfZGlhbG9nOiBcInRpbWVPdXRfZGlhbG9nXCIsXHJcbiAgICBjb21tZW50X2RpYWxvZzogXCJjb21tZW50X2RpYWxvZ1wiLFxyXG4gICAgZ2FtZW92ZXJfZGlhbG9nOiBcImdhbWVvdmVyX2RpYWxvZ1wiLFxyXG4gICBcclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/scrollview_util.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6742eFjCRhCdpnyZSMeH66r', 'scrollview_util');
// script/tool/scrollview_util.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**列表draw call优化组件 */
var list_optimize = /** @class */ (function (_super) {
    __extends(list_optimize, _super);
    function list_optimize() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* --------------------------------segmentation-------------------------------- */
    list_optimize.prototype.onLoad = function () {
        if (!this.node.getComponent(cc.ScrollView)) {
            cc.error("不存在ScrollView组件！");
            return;
        }
        // ------------------事件监听
        this.node.on("scrolling", this._event_update_opacity, this);
        this.node.getComponent(cc.ScrollView).content.on(cc.Node.EventType.CHILD_REMOVED, this._event_update_opacity, this);
        this.node.getComponent(cc.ScrollView).content.on(cc.Node.EventType.CHILD_REORDER, this._event_update_opacity, this);
    };
    /* ***************功能函数*************** */
    /**获取在世界坐标系下的节点包围盒(不包含自身激活的子节点范围) */
    list_optimize.prototype._get_bounding_box_to_world = function (node_o_) {
        var w_n = node_o_._contentSize.width;
        var h_n = node_o_._contentSize.height;
        var rect_o = cc.rect(-node_o_._anchorPoint.x * w_n, -node_o_._anchorPoint.y * h_n, w_n, h_n);
        node_o_._calculWorldMatrix();
        rect_o.transformMat4(rect_o, node_o_._worldMatrix);
        return rect_o;
    };
    /**检测碰撞 */
    list_optimize.prototype._check_collision = function (node_o_) {
        var rect1_o = this._get_bounding_box_to_world(this.node.getComponent(cc.ScrollView).content.parent);
        var rect2_o = this._get_bounding_box_to_world(node_o_);
        // ------------------保险范围
        rect1_o.width += rect1_o.width * 0.5;
        rect1_o.height += rect1_o.height * 0.5;
        rect1_o.x -= rect1_o.width * 0.25;
        rect1_o.y -= rect1_o.height * 0.25;
        return rect1_o.intersects(rect2_o);
    };
    /* ***************自定义事件*************** */
    list_optimize.prototype._event_update_opacity = function () {
        var _this = this;
        this.node.getComponent(cc.ScrollView).content.children.forEach(function (v1_o) {
            var rect1_o = _this._get_bounding_box_to_world(_this.node.getComponent(cc.ScrollView).content.parent);
            rect1_o.width += rect1_o.width * 0.5;
            rect1_o.height += rect1_o.height * 0.5;
            rect1_o.x -= rect1_o.width * 0.25;
            rect1_o.y -= rect1_o.height * 0.25;
            v1_o.opacity = _this._check_collision(v1_o) ? 255 : 0;
        });
    };
    list_optimize = __decorate([
        ccclass
    ], list_optimize);
    return list_optimize;
}(cc.Component));
exports.default = list_optimize;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9zY3JvbGx2aWV3X3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUMscUJBQXFCO0FBRXJCO0lBQTJDLGlDQUFZO0lBQXZEOztJQWtEQSxDQUFDO0lBakRHLGtGQUFrRjtJQUNsRiw4QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN4QyxFQUFFLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDN0IsT0FBTztTQUNWO1FBQ0QseUJBQXlCO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwSCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hILENBQUM7SUFDRCx3Q0FBd0M7SUFDeEMsb0NBQW9DO0lBQzVCLGtEQUEwQixHQUFsQyxVQUFtQyxPQUFZO1FBQzNDLElBQUksR0FBRyxHQUFXLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQzdDLElBQUksR0FBRyxHQUFXLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO1FBQzlDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQ2hCLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUM3QixDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFDN0IsR0FBRyxFQUNILEdBQUcsQ0FDTixDQUFDO1FBQ0YsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDN0IsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ25ELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFDRCxVQUFVO0lBQ0Ysd0NBQWdCLEdBQXhCLFVBQXlCLE9BQWdCO1FBQ3JDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BHLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2RCx5QkFBeUI7UUFDekIsT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNyQyxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEMsT0FBTyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQyxPQUFPLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNELHlDQUF5QztJQUNqQyw2Q0FBcUIsR0FBN0I7UUFBQSxpQkFVQztRQVRHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7WUFDL0QsSUFBSSxPQUFPLEdBQUcsS0FBSSxDQUFDLDBCQUEwQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEcsT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUNyQyxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEMsT0FBTyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUVuQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBakRnQixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBa0RqQztJQUFELG9CQUFDO0NBbERELEFBa0RDLENBbEQwQyxFQUFFLENBQUMsU0FBUyxHQWtEdEQ7a0JBbERvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbi8qKuWIl+ihqGRyYXcgY2FsbOS8mOWMlue7hOS7tiAqL1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGxpc3Rfb3B0aW1pemUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tc2VnbWVudGF0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KSkge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCLkuI3lrZjlnKhTY3JvbGxWaWV357uE5Lu277yBXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLeS6i+S7tuebkeWQrFxuICAgICAgICB0aGlzLm5vZGUub24oXCJzY3JvbGxpbmdcIiwgdGhpcy5fZXZlbnRfdXBkYXRlX29wYWNpdHksIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpLmNvbnRlbnQub24oY2MuTm9kZS5FdmVudFR5cGUuQ0hJTERfUkVNT1ZFRCwgdGhpcy5fZXZlbnRfdXBkYXRlX29wYWNpdHksIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpLmNvbnRlbnQub24oY2MuTm9kZS5FdmVudFR5cGUuQ0hJTERfUkVPUkRFUiwgdGhpcy5fZXZlbnRfdXBkYXRlX29wYWNpdHksIHRoaXMpO1xuICAgIH1cbiAgICAvKiAqKioqKioqKioqKioqKirlip/og73lh73mlbAqKioqKioqKioqKioqKiogKi9cbiAgICAvKirojrflj5blnKjkuJbnlYzlnZDmoIfns7vkuIvnmoToioLngrnljIXlm7Tnm5Io5LiN5YyF5ZCr6Ieq6Lqr5r+A5rS755qE5a2Q6IqC54K56IyD5Zu0KSAqL1xuICAgIHByaXZhdGUgX2dldF9ib3VuZGluZ19ib3hfdG9fd29ybGQobm9kZV9vXzogYW55KTogY2MuUmVjdCB7XG4gICAgICAgIGxldCB3X246IG51bWJlciA9IG5vZGVfb18uX2NvbnRlbnRTaXplLndpZHRoO1xuICAgICAgICBsZXQgaF9uOiBudW1iZXIgPSBub2RlX29fLl9jb250ZW50U2l6ZS5oZWlnaHQ7XG4gICAgICAgIGxldCByZWN0X28gPSBjYy5yZWN0KFxuICAgICAgICAgICAgLW5vZGVfb18uX2FuY2hvclBvaW50LnggKiB3X24sIFxuICAgICAgICAgICAgLW5vZGVfb18uX2FuY2hvclBvaW50LnkgKiBoX24sIFxuICAgICAgICAgICAgd19uLCBcbiAgICAgICAgICAgIGhfblxuICAgICAgICApO1xuICAgICAgICBub2RlX29fLl9jYWxjdWxXb3JsZE1hdHJpeCgpO1xuICAgICAgICByZWN0X28udHJhbnNmb3JtTWF0NChyZWN0X28sIG5vZGVfb18uX3dvcmxkTWF0cml4KTtcbiAgICAgICAgcmV0dXJuIHJlY3RfbztcbiAgICB9XG4gICAgLyoq5qOA5rWL56Kw5pKeICovXG4gICAgcHJpdmF0ZSBfY2hlY2tfY29sbGlzaW9uKG5vZGVfb186IGNjLk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IHJlY3QxX28gPSB0aGlzLl9nZXRfYm91bmRpbmdfYm94X3RvX3dvcmxkKHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldykuY29udGVudC5wYXJlbnQpO1xuICAgICAgICBsZXQgcmVjdDJfbyA9IHRoaXMuX2dldF9ib3VuZGluZ19ib3hfdG9fd29ybGQobm9kZV9vXyk7XG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLeS/nemZqeiMg+WbtFxuICAgICAgICByZWN0MV9vLndpZHRoICs9IHJlY3QxX28ud2lkdGggKiAwLjU7XG4gICAgICAgIHJlY3QxX28uaGVpZ2h0ICs9IHJlY3QxX28uaGVpZ2h0ICogMC41O1xuICAgICAgICByZWN0MV9vLnggLT0gcmVjdDFfby53aWR0aCAqIDAuMjU7XG4gICAgICAgIHJlY3QxX28ueSAtPSByZWN0MV9vLmhlaWdodCAqIDAuMjU7XG4gICAgICAgIHJldHVybiByZWN0MV9vLmludGVyc2VjdHMocmVjdDJfbyk7XG4gICAgfVxuICAgIC8qICoqKioqKioqKioqKioqKuiHquWumuS5ieS6i+S7tioqKioqKioqKioqKioqKiAqL1xuICAgIHByaXZhdGUgX2V2ZW50X3VwZGF0ZV9vcGFjaXR5KCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpLmNvbnRlbnQuY2hpbGRyZW4uZm9yRWFjaCh2MV9vPT4ge1xuICAgICAgICAgICAgbGV0IHJlY3QxX28gPSB0aGlzLl9nZXRfYm91bmRpbmdfYm94X3RvX3dvcmxkKHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldykuY29udGVudC5wYXJlbnQpO1xuICAgICAgICAgICAgcmVjdDFfby53aWR0aCArPSByZWN0MV9vLndpZHRoICogMC41O1xuICAgICAgICAgICAgcmVjdDFfby5oZWlnaHQgKz0gcmVjdDFfby5oZWlnaHQgKiAwLjU7XG4gICAgICAgICAgICByZWN0MV9vLnggLT0gcmVjdDFfby53aWR0aCAqIDAuMjU7XG4gICAgICAgICAgICByZWN0MV9vLnkgLT0gcmVjdDFfby5oZWlnaHQgKiAwLjI1O1xuXG4gICAgICAgICAgICB2MV9vLm9wYWNpdHkgPSB0aGlzLl9jaGVja19jb2xsaXNpb24odjFfbykgPyAyNTUgOiAwO1xuICAgICAgICB9KTtcbiAgICB9XG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/global.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7fe7eKmHWtOBpfO6ERHigxH', 'global');
// script/tool/global.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Global = void 0;
var AssetUtils_1 = require("./AssetUtils");
var AudioUtils_1 = require("./AudioUtils");
var GlobalClass = /** @class */ (function () {
    function GlobalClass() {
        this.sceneNode = null;
        this.imgId = 0;
        this.audioUtils = new AudioUtils_1.AudioUtils();
        this.eventTarget = new cc.EventTarget();
        this.assetUtils = AssetUtils_1.AssetUtils;
    }
    GlobalClass.getInstance = function () {
        if (this._instance == null) {
            this._instance = new GlobalClass();
        }
        return this._instance;
    };
    GlobalClass.prototype.setsceneNode = function (node) {
        this.sceneNode = node;
    };
    GlobalClass.prototype.getsceneNode = function () {
        return this.sceneNode;
    };
    GlobalClass._instance = null;
    return GlobalClass;
}());
exports.Global = GlobalClass.getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9nbG9iYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTBDO0FBQzFDLDJDQUEwQztBQVkxQztJQUFBO1FBV1csY0FBUyxHQUFZLElBQUksQ0FBQTtRQUN6QixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBR2xCLGVBQVUsR0FBZSxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQUMxQyxnQkFBVyxHQUFtQixJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuRCxlQUFVLEdBQUcsdUJBQVUsQ0FBQztJQVFuQyxDQUFDO0lBckJpQix1QkFBVyxHQUF6QjtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1NBQ3RDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFTRCxrQ0FBWSxHQUFaLFVBQWEsSUFBYTtRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRUQsa0NBQVksR0FBWjtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBdEJjLHFCQUFTLEdBQWdCLElBQUksQ0FBQztJQXVCakQsa0JBQUM7Q0F6QkQsQUF5QkMsSUFBQTtBQUVVLFFBQUEsTUFBTSxHQUFHLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFzc2V0VXRpbHMgfSBmcm9tIFwiLi9Bc3NldFV0aWxzXCI7XHJcbmltcG9ydCB7IEF1ZGlvVXRpbHMgfSBmcm9tIFwiLi9BdWRpb1V0aWxzXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBiZWF1dHlEYXRhIHtcclxuICAgIGNlbnRlclBvczogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9LCAgICAgICAgICAgICAgICAvLyDkuK3lv4PngrnlnZDmoIcgXHJcbiAgICBzdGFydFBvczogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9LCAgICAgICAgICAgICAgICAvLyDotbflp4vngrnlnZDmoIdcclxuICAgIGVuZFBvczogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9LCAgICAgICAgICAgICAgICAvLyDnu5PmnZ/ngrnlnZDmoIdcclxuICAgIGJsb2NrU2l6ZTogeyB3aWQ6IG51bWJlciwgaGVpOiBudW1iZXIgfSwgICAgICAgICAgICAgICAgLy8g5pa55Z2X5aSn5bCPXHJcbiAgICBpc0ZpbmQ6IGJvb2xlYW4sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmmK/lkKbmib7liLBcclxufVxyXG5cclxuXHJcbmNsYXNzIEdsb2JhbENsYXNzIHtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IEdsb2JhbENsYXNzID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IEdsb2JhbENsYXNzIHtcclxuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBHbG9iYWxDbGFzcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNjZW5lTm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIHB1YmxpYyBpbWdJZDogbnVtYmVyID0gMDtcclxuXHJcblxyXG4gICAgcHVibGljIGF1ZGlvVXRpbHM6IEF1ZGlvVXRpbHMgPSBuZXcgQXVkaW9VdGlscygpO1xyXG4gICAgcHVibGljIGV2ZW50VGFyZ2V0OiBjYy5FdmVudFRhcmdldCA9IG5ldyBjYy5FdmVudFRhcmdldCgpO1xyXG4gICAgcHVibGljIGFzc2V0VXRpbHMgPSBBc3NldFV0aWxzO1xyXG4gICAgc2V0c2NlbmVOb2RlKG5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICB0aGlzLnNjZW5lTm9kZSA9IG5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0c2NlbmVOb2RlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjZW5lTm9kZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGxldCBHbG9iYWwgPSBHbG9iYWxDbGFzcy5nZXRJbnN0YW5jZSgpOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/hall.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '014741UGutBway3J/ZL6r3K', 'hall');
// script/hall.ts

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
var imgItem_1 = require("./prefeb/imgItem");
var gameData_1 = require("./tool/gameData");
var global_1 = require("./tool/global");
var utils_1 = require("./tool/utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var hall = /** @class */ (function (_super) {
    __extends(hall, _super);
    function hall() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bg = null;
        _this.imgItem = null;
        _this.scroll_contect = null;
        _this.scrollView = null;
        _this.toastNode = null;
        return _this;
    }
    hall.prototype.start = function () {
        var _this = this;
        if (cc.sys.platform === cc.sys.IPAD) {
            this.getComponent(cc.Canvas).fitHeight = true;
            this.getComponent(cc.Canvas).fitWidth = false;
        }
        global_1.Global.setsceneNode(this.node);
        utils_1.UtilsTool.adapterBg(this.bg);
        this.scheduleOnce(function () {
            _this.init();
        });
        this.scheduleOnce(function () {
            if (gameData_1.gameData.userData.level > 4 && gameData_1.gameData.userData.level < gameData_1.gameData.levelAll) {
                var hei = 260;
                var y = 0;
                if (gameData_1.gameData.userData.level % 2 == 0) {
                    var index = gameData_1.gameData.userData.level / 2;
                    y = ((gameData_1.gameData.userData.level - 1) - index) * hei;
                }
                else {
                    var index = (gameData_1.gameData.userData.level + 1) / 2;
                    y = (gameData_1.gameData.userData.level - index) * hei;
                }
                _this.scrollView.scrollToOffset(cc.v2(0, y), 1);
            }
        }, 0.1);
    };
    hall.prototype.init = function () {
        this.scroll_contect.destroyAllChildren();
        for (var i = 0; i < 30; i++) {
            var item = cc.instantiate(this.imgItem);
            this.scroll_contect.addChild(item);
            item.getComponent(imgItem_1.default).init(i, this);
        }
    };
    hall.prototype.onClick_setting = function () {
        global_1.Global.audioUtils.commonBtnClick();
        global_1.Global.assetUtils.showDialog(utils_1.dialog.setting_dialog, { isGame: false });
        // Global.assetUtils.showDialog(dialog.comment_dialog);
    };
    hall.prototype.showToast = function (text) {
        var _this = this;
        this.toastNode.active = true;
        var toastLabel = this.toastNode.getChildByName("label");
        toastLabel.getComponent(cc.Label).string = text;
        cc.Tween.stopAllByTarget(this.toastNode);
        this.toastNode.opacity = 255;
        cc.tween(this.toastNode).to(0.15, { scale: 1.2 }).to(0.15, { scale: 1 }).delay(0.5).to(0.5, { opacity: 0 }).call(function () {
            _this.toastNode.active = false;
        }).start();
    };
    __decorate([
        property(cc.Node)
    ], hall.prototype, "bg", void 0);
    __decorate([
        property(cc.Prefab)
    ], hall.prototype, "imgItem", void 0);
    __decorate([
        property(cc.Node)
    ], hall.prototype, "scroll_contect", void 0);
    __decorate([
        property(cc.ScrollView)
    ], hall.prototype, "scrollView", void 0);
    __decorate([
        property(cc.Node)
    ], hall.prototype, "toastNode", void 0);
    hall = __decorate([
        ccclass
    ], hall);
    return hall;
}(cc.Component));
exports.default = hall;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQTFFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29DQUNDO0lBR25CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eUNBQ007SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDYTtJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDOzRDQUNTO0lBR2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ1E7SUFmVCxJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBOEV4QjtJQUFELFdBQUM7Q0E5RUQsQUE4RUMsQ0E5RWlDLEVBQUUsQ0FBQyxTQUFTLEdBOEU3QztrQkE5RW9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW1nSXRlbSBmcm9tIFwiLi9wcmVmZWIvaW1nSXRlbVwiO1xuaW1wb3J0IHsgZ2FtZURhdGEgfSBmcm9tIFwiLi90b29sL2dhbWVEYXRhXCI7XG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi90b29sL2dsb2JhbFwiO1xuaW1wb3J0IHsgZGlhbG9nLCBVdGlsc1Rvb2wgfSBmcm9tIFwiLi90b29sL3V0aWxzXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGhhbGwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYmc6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBpbWdJdGVtOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc2Nyb2xsX2NvbnRlY3Q6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNjcm9sbFZpZXcpXG4gICAgc2Nyb2xsVmlldzogY2MuU2Nyb2xsVmlldyA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0b2FzdE5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG5cbiAgICBzdGFydCgpIHtcbiAgXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5JUEFEKSB7XG4gICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5DYW52YXMpLmZpdEhlaWdodCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5DYW52YXMpLmZpdFdpZHRoID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICAgICAgR2xvYmFsLnNldHNjZW5lTm9kZSh0aGlzLm5vZGUpO1xuICAgICAgICBVdGlsc1Rvb2wuYWRhcHRlckJnKHRoaXMuYmcpO1xuXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChnYW1lRGF0YS51c2VyRGF0YS5sZXZlbCA+IDQgJiYgZ2FtZURhdGEudXNlckRhdGEubGV2ZWwgPCBnYW1lRGF0YS5sZXZlbEFsbCkge1xuICAgICAgICAgICAgICAgIGxldCBoZWkgPSAyNjA7XG4gICAgICAgICAgICAgICAgbGV0IHkgPSAwO1xuICAgICAgICAgICAgICAgIGlmIChnYW1lRGF0YS51c2VyRGF0YS5sZXZlbCAlIDIgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBnYW1lRGF0YS51c2VyRGF0YS5sZXZlbCAvIDIgO1xuXG4gICAgICAgICAgICAgICAgICAgIHkgPSAoKGdhbWVEYXRhLnVzZXJEYXRhLmxldmVsIC0xKSAtIGluZGV4KSAqIGhlaTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSAoZ2FtZURhdGEudXNlckRhdGEubGV2ZWwgKyAxKSAvIDJcbiAgICAgICAgICAgICAgICAgICAgeSA9IChnYW1lRGF0YS51c2VyRGF0YS5sZXZlbCAtIGluZGV4KSAqIGhlaTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9PZmZzZXQoY2MudjIoMCwgeSksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAwLjEpXG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxfY29udGVjdC5kZXN0cm95QWxsQ2hpbGRyZW4oKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMwOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pbWdJdGVtKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsX2NvbnRlY3QuYWRkQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICBpdGVtLmdldENvbXBvbmVudChpbWdJdGVtKS5pbml0KGksIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DbGlja19zZXR0aW5nKCkge1xuICAgICAgICBHbG9iYWwuYXVkaW9VdGlscy5jb21tb25CdG5DbGljaygpO1xuICAgICAgICBHbG9iYWwuYXNzZXRVdGlscy5zaG93RGlhbG9nKGRpYWxvZy5zZXR0aW5nX2RpYWxvZywgeyBpc0dhbWU6IGZhbHNlIH0pO1xuICAgICAgICAvLyBHbG9iYWwuYXNzZXRVdGlscy5zaG93RGlhbG9nKGRpYWxvZy5jb21tZW50X2RpYWxvZyk7XG4gICAgfVxuXG5cblxuICAgIHNob3dUb2FzdCh0ZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy50b2FzdE5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgbGV0IHRvYXN0TGFiZWwgPSB0aGlzLnRvYXN0Tm9kZS5nZXRDaGlsZEJ5TmFtZShcImxhYmVsXCIpO1xuICAgICAgICB0b2FzdExhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGV4dDtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMudG9hc3ROb2RlKTtcbiAgICAgICAgdGhpcy50b2FzdE5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgY2MudHdlZW4odGhpcy50b2FzdE5vZGUpLnRvKDAuMTUsIHsgc2NhbGU6IDEuMiB9KS50bygwLjE1LCB7IHNjYWxlOiAxIH0pLmRlbGF5KDAuNSkudG8oMC41LCB7IG9wYWNpdHk6IDAgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRvYXN0Tm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/dialog/gameover_dialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZGlhbG9nL2dhbWVvdmVyX2RpYWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBNEM7QUFDNUMseUNBQXdDO0FBQ3hDLHVDQUFrRDtBQUU1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQXlDQztRQXJDRyxXQUFLLEdBQWdCLElBQUksQ0FBQztRQUcxQixRQUFFLEdBQVksSUFBSSxDQUFDO1FBR25CLGNBQVEsR0FBYSxJQUFJLENBQUM7O0lBK0I5QixDQUFDO0lBN0JHLGtDQUFRLEdBQVIsVUFBUyxJQUFJO1FBQ1QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ2xDLENBQUM7SUFHRCxnQ0FBTSxHQUFOO1FBQ0ksSUFBSSxlQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBRTtZQUNuQixtQkFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzFCO0lBR0wsQ0FBQztJQUdELCtCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyx1RUFBdUUsR0FBRyxlQUFNLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztRQUN4SCxpQkFBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELDZDQUFtQixHQUFuQjtRQUNJLGVBQU0sQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsdUNBQWEsR0FBYjtRQUNJLGVBQU0sQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBcENEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7a0RBQ0k7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDQztJQVBGLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0F5Q25DO0lBQUQsc0JBQUM7Q0F6Q0QsQUF5Q0MsQ0F6QzRDLEVBQUUsQ0FBQyxTQUFTLEdBeUN4RDtrQkF6Q29CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnYW1lRGF0YSB9IGZyb20gXCIuLi90b29sL2dhbWVEYXRhXCI7XG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi4vdG9vbC9nbG9iYWxcIjtcbmltcG9ydCB7IGRpYWxvZywgVXRpbHNUb29sIH0gZnJvbSBcIi4uL3Rvb2wvdXRpbHNcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGdhbWVvdmVyX2RpYWxvZyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblxuICAgIEBwcm9wZXJ0eShjYy5SaWNoVGV4dClcbiAgICB0aXRsZTogY2MuUmljaFRleHQgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYmc6IGNjLk5vZGUgPSBudWxsO1xuXG5cbiAgICBjYWxsYmFjazogRnVuY3Rpb24gPSBudWxsO1xuXG4gICAgaW5pdERhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gZGF0YS5jYWxsYmFjaztcbiAgICB9XG5cblxuICAgIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKEdsb2JhbC5pbWdJZCA+PSA2KSB7XG4gICAgICAgICAgICBnYW1lRGF0YS5zaG93SW50ZXJzdCgpO1xuICAgICAgICB9XG5cbiAgICAgIFxuICAgIH1cblxuXG4gICAgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGl0bGUuc3RyaW5nID0gXCI8Y29sb3I9I2U4YzMwZj5DT05HUkFUVUxBVElPTlMgVE8gWU9VIUNsZWFyPC9jPjxjb2xvcj0jZjRmNGY1PiBsZXZlbCBcIiArIEdsb2JhbC5pbWdJZCArIFwiPC9jb2xvcj5cIjtcbiAgICAgICAgVXRpbHNUb29sLmFkYXB0ZXJCZyh0aGlzLmJnKTtcbiAgICB9XG5cbiAgICBvbkNsaWNrX2NvbnRpbnVlQnRuKCkge1xuICAgICAgICBHbG9iYWwuYXVkaW9VdGlscy5jb21tb25CdG5DbGljaygpO1xuICAgICAgICB0aGlzLmNhbGxiYWNrICYmIHRoaXMuY2FsbGJhY2soKTtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBvbkNsaWNrX2Nsb3NlKCkge1xuICAgICAgICBHbG9iYWwuYXVkaW9VdGlscy5jb21tb25CdG5DbGljaygpO1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/prefeb/imgItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b349d0IddZO5bDF9FOpApzL', 'imgItem');
// script/prefeb/imgItem.ts

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
var imgItem = /** @class */ (function (_super) {
    __extends(imgItem, _super);
    function imgItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hall_mask = null;
        _this.img = null;
        _this.index = 0;
        _this.isLock = false;
        _this.hall = null;
        return _this;
    }
    imgItem.prototype.start = function () {
    };
    imgItem.prototype.init = function (index, hall) {
        this.index = index;
        this.hall = hall;
        if (this.index < gameData_1.gameData.userData.level) {
            this.hall_mask.active = false;
            this.isLock = true;
        }
        else {
            this.hall_mask.active = true;
            this.isLock = false;
        }
        global_1.Global.assetUtils.loadSprite("originalImg/" + (this.index + 1) + "-o", this.img);
    };
    imgItem.prototype.onclick_item = function () {
        global_1.Global.audioUtils.commonBtnClick();
        if (this.isLock) {
            global_1.Global.imgId = this.index + 1;
            gameData_1.gameData.userData.isHall = false;
            gameData_1.gameData.storageData();
            cc.director.loadScene(utils_1.scene.game);
        }
        else {
            this.hall.showToast("The level has not been unlocked yet");
        }
    };
    __decorate([
        property(cc.Node)
    ], imgItem.prototype, "hall_mask", void 0);
    __decorate([
        property(cc.Sprite)
    ], imgItem.prototype, "img", void 0);
    imgItem = __decorate([
        ccclass
    ], imgItem);
    return imgItem;
}(cc.Component));
exports.default = imgItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcHJlZmViL2ltZ0l0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNkNBQTRDO0FBQzVDLHlDQUF3QztBQUN4Qyx1Q0FBc0M7QUFFaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBcUMsMkJBQVk7SUFBakQ7UUFBQSxxRUEwQ0M7UUF2Q0csZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixTQUFHLEdBQWMsSUFBSSxDQUFDO1FBRWQsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVsQixZQUFNLEdBQVksS0FBSyxDQUFDO1FBRWhDLFVBQUksR0FBUyxJQUFJLENBQUM7O0lBOEJ0QixDQUFDO0lBN0JHLHVCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsc0JBQUksR0FBSixVQUFLLEtBQWEsRUFBRSxJQUFVO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO2FBQU07WUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDdkI7UUFDRCxlQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckYsQ0FBQztJQUVELDhCQUFZLEdBQVo7UUFDSSxlQUFNLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25DLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLGVBQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDOUIsbUJBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNqQyxtQkFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3ZCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGFBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNyQzthQUFNO1lBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMscUNBQXFDLENBQUMsQ0FBQztTQUM5RDtJQUNMLENBQUM7SUFyQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDUTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dDQUNFO0lBTkwsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQTBDM0I7SUFBRCxjQUFDO0NBMUNELEFBMENDLENBMUNvQyxFQUFFLENBQUMsU0FBUyxHQTBDaEQ7a0JBMUNvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGhhbGwgZnJvbSBcIi4uL2hhbGxcIjtcbmltcG9ydCB7IGdhbWVEYXRhIH0gZnJvbSBcIi4uL3Rvb2wvZ2FtZURhdGFcIjtcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi90b29sL2dsb2JhbFwiO1xuaW1wb3J0IHsgc2NlbmUgfSBmcm9tIFwiLi4vdG9vbC91dGlsc1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgaW1nSXRlbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBoYWxsX21hc2s6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBpbWc6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIGluZGV4OiBudW1iZXIgPSAwO1xuXG4gICAgcHJpdmF0ZSBpc0xvY2s6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGhhbGw6IGhhbGwgPSBudWxsO1xuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuXG4gICAgaW5pdChpbmRleDogbnVtYmVyLCBoYWxsOiBoYWxsKSB7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5oYWxsID0gaGFsbDtcbiAgICAgICAgaWYgKHRoaXMuaW5kZXggPCBnYW1lRGF0YS51c2VyRGF0YS5sZXZlbCkge1xuICAgICAgICAgICAgdGhpcy5oYWxsX21hc2suYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlzTG9jayA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhhbGxfbWFzay5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pc0xvY2sgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBHbG9iYWwuYXNzZXRVdGlscy5sb2FkU3ByaXRlKFwib3JpZ2luYWxJbWcvXCIgKyAodGhpcy5pbmRleCArIDEpICsgXCItb1wiLCB0aGlzLmltZyk7XG4gICAgfVxuXG4gICAgb25jbGlja19pdGVtKCkge1xuICAgICAgICBHbG9iYWwuYXVkaW9VdGlscy5jb21tb25CdG5DbGljaygpO1xuICAgICAgICBpZiAodGhpcy5pc0xvY2spIHtcbiAgICAgICAgICAgIEdsb2JhbC5pbWdJZCA9IHRoaXMuaW5kZXggKyAxO1xuICAgICAgICAgICAgZ2FtZURhdGEudXNlckRhdGEuaXNIYWxsID0gZmFsc2U7XG4gICAgICAgICAgICBnYW1lRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHNjZW5lLmdhbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oYWxsLnNob3dUb2FzdChcIlRoZSBsZXZlbCBoYXMgbm90IGJlZW4gdW5sb2NrZWQgeWV0XCIpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/gameData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7487f4XLFFFn6UYutYNkRUg', 'gameData');
// script/tool/gameData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sound = exports.storage = exports.gameData = void 0;
var StorageUtils_1 = require("./StorageUtils");
var onCloseFinishCb = null;
var onClosefailCb = null;
var GameDataClass = /** @class */ (function () {
    function GameDataClass() {
        this.levelAll = 30;
        this.userData = {
            isClause: false,
            tishiNum: 1,
            level: 1,
            isHall: false,
            isGudie: false,
            finishLevel5: false,
        };
        cc.game.on(cc.game.EVENT_HIDE, function () {
            this.storageData();
        }, this);
    }
    GameDataClass.getInstance = function () {
        if (this._instance == null) {
            this._instance = new GameDataClass();
        }
        return this._instance;
    };
    GameDataClass.prototype.storageData = function () {
        StorageUtils_1.StorageUtils.setStorageJSON(storage.gamedata, this.userData);
    };
    GameDataClass.prototype.setVideoFailCb = function (cb) {
        window['onClosefailCb'] = null;
        window['onClosefailCb'] = cb;
    };
    //看广告
    GameDataClass.prototype.showVideo = function (finishCb) {
        console.log("android------------看广告");
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showShiPing", "()V");
            onCloseFinishCb = null;
            onCloseFinishCb = finishCb;
        }
        else if (cc.sys.isNative && cc.sys.OS_IOS == cc.sys.os) {
            jsb.reflection.callStaticMethod("UnityMgr", "loadReward"); //全屏视频;
            window['onCloseFinishCb'] = null;
            window['onCloseFinishCb'] = finishCb;
        }
        else {
            finishCb();
        }
    };
    //打开banner
    GameDataClass.prototype.showBanner = function () {
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showbanner", "()V");
        }
        else if (cc.sys.isNative && cc.sys.OS_IOS == cc.sys.os) {
        }
    };
    //关闭banner
    GameDataClass.prototype.closeBanner = function () {
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hidebanner", "()V");
        }
        else if (cc.sys.isNative && cc.sys.OS_IOS == cc.sys.os) {
        }
    };
    //打开插屏
    GameDataClass.prototype.showInterst = function () {
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showChaping", "()V");
        }
        else if (cc.sys.isNative && cc.sys.OS_IOS == cc.sys.os) {
        }
    };
    //打开评分
    GameDataClass.prototype.showPingFen = function () {
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "openPingFen", "()V");
        }
        else if (cc.sys.isNative && cc.sys.OS_IOS == cc.sys.os) {
        }
    };
    GameDataClass._instance = null;
    return GameDataClass;
}());
exports.gameData = GameDataClass.getInstance();
var storage;
(function (storage) {
    storage["gamedata"] = "gamedata";
})(storage = exports.storage || (exports.storage = {}));
var sound;
(function (sound) {
    sound["bgm"] = "bgm";
    sound["click"] = "click";
    sound["correct"] = "correct";
    sound["err"] = "err";
    sound["fail"] = "fail";
    sound["win"] = "win";
})(sound = exports.sound || (exports.sound = {}));
window['onCloseFinishCb'] = function () {
};
/**sdk调用js里面window公众的函数 */
window['onCloseVdieoFinishCb'] = function () {
    // if (isPlayMusic) {
    //     AudioCtr.bg();
    // }
    console.log("onCloseVdieo----------------------------");
    window['onCloseFinishCb']();
};
/**sdk调用js里面window公众的函数 */
window['onCloseVdieofailCb'] = function () {
    // if (isPlayMusic) {
    //     AudioCtr.bg();
    // }
    console.log("onCloseVdieofailCbonCloseVdieofailCbonCloseVdieofailCb");
    window['onClosefailCb']();
};
window['onClosefailCb'] = function () {
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9nYW1lRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrQ0FBOEM7QUFFOUMsSUFBSSxlQUFlLEdBQWUsSUFBSSxDQUFDO0FBQ3ZDLElBQUksYUFBYSxHQUFlLElBQUksQ0FBQztBQUNyQztJQVlJO1FBTUEsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixhQUFRLEdBQVE7WUFDWixRQUFRLEVBQUUsS0FBSztZQUNmLFFBQVEsRUFBRSxDQUFDO1lBQ1gsS0FBSyxFQUFFLENBQUM7WUFDUixNQUFNLEVBQUUsS0FBSztZQUNiLE9BQU8sRUFBRSxLQUFLO1lBQ2QsWUFBWSxFQUFFLEtBQUs7U0FDdEIsQ0FBQztRQWJFLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQzNCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBWmEseUJBQVcsR0FBekI7UUFDSSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztTQUN4QztRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBbUJELG1DQUFXLEdBQVg7UUFDSSwyQkFBWSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBR0Qsc0NBQWMsR0FBZCxVQUFlLEVBQWM7UUFDekIsTUFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUMvQixNQUFNLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFHRCxLQUFLO0lBQ0wsaUNBQVMsR0FBVCxVQUFVLFFBQW9CO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtRQUNyQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFO1lBQ25ELEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMscUNBQXFDLEVBQUUsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzdGLGVBQWUsR0FBRyxJQUFJLENBQUM7WUFDdkIsZUFBZSxHQUFHLFFBQVEsQ0FBQztTQUM5QjthQUFNLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUU7WUFFdEQsR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQSxPQUFPO1lBQ2pFLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNqQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRSxRQUFRLENBQUM7U0FFdkM7YUFBTTtZQUNILFFBQVEsRUFBRSxDQUFDO1NBQ2Q7SUFFTCxDQUFDO0lBRUQsVUFBVTtJQUNWLGtDQUFVLEdBQVY7UUFDSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFO1lBQ25ELEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMscUNBQXFDLEVBQUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQy9GO2FBQUssSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRTtTQUV4RDtJQUNMLENBQUM7SUFFRCxVQUFVO0lBQ1YsbUNBQVcsR0FBWDtRQUNJLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUU7WUFDbkQsR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxxQ0FBcUMsRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDL0Y7YUFBSyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFO1NBRXhEO0lBQ0wsQ0FBQztJQUVELE1BQU07SUFDTixtQ0FBVyxHQUFYO1FBQ0ksSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRTtZQUNuRCxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLHFDQUFxQyxFQUFFLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNoRzthQUFLLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUU7U0FFeEQ7SUFDTCxDQUFDO0lBRUQsTUFBTTtJQUNOLG1DQUFXLEdBQVg7UUFDSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFO1lBQ25ELEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMscUNBQXFDLEVBQUUsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2hHO2FBQUssSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRTtTQUV4RDtJQUNMLENBQUM7SUExRmMsdUJBQVMsR0FBa0IsSUFBSSxDQUFDO0lBNkZuRCxvQkFBQztDQS9GRCxBQStGQyxJQUFBO0FBRVUsUUFBQSxRQUFRLEdBQUcsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBRWxELElBQVksT0FFWDtBQUZELFdBQVksT0FBTztJQUNmLGdDQUFxQixDQUFBO0FBQ3pCLENBQUMsRUFGVyxPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUFFbEI7QUFFRCxJQUFZLEtBT1g7QUFQRCxXQUFZLEtBQUs7SUFDYixvQkFBVyxDQUFBO0lBQ1gsd0JBQWUsQ0FBQTtJQUNmLDRCQUFtQixDQUFBO0lBQ25CLG9CQUFXLENBQUE7SUFDWCxzQkFBYSxDQUFBO0lBQ2Isb0JBQVcsQ0FBQTtBQUNmLENBQUMsRUFQVyxLQUFLLEdBQUwsYUFBSyxLQUFMLGFBQUssUUFPaEI7QUFDRCxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRztBQUU1QixDQUFDLENBQUE7QUFFRCwwQkFBMEI7QUFDMUIsTUFBTSxDQUFDLHNCQUFzQixDQUFDLEdBQUc7SUFDN0IscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixJQUFJO0lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFBO0lBQ3ZELE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUE7QUFDL0IsQ0FBQyxDQUFBO0FBR0QsMEJBQTBCO0FBQzFCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHO0lBQzNCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsSUFBSTtJQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0RBQXdELENBQUMsQ0FBQTtJQUNyRSxNQUFNLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQTtBQUM3QixDQUFDLENBQUE7QUFHRCxNQUFNLENBQUMsZUFBZSxDQUFDLEdBQUc7QUFFMUIsQ0FBQyxDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4vZ2xvYmFsXCI7XG5pbXBvcnQgeyBTdG9yYWdlVXRpbHMgfSBmcm9tIFwiLi9TdG9yYWdlVXRpbHNcIjtcblxubGV0IG9uQ2xvc2VGaW5pc2hDYjogKCkgPT4gdm9pZCA9IG51bGw7XG5sZXQgb25DbG9zZWZhaWxDYjogKCkgPT4gdm9pZCA9IG51bGw7XG5jbGFzcyBHYW1lRGF0YUNsYXNzIHtcblxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogR2FtZURhdGFDbGFzcyA9IG51bGw7XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IEdhbWVEYXRhQ2xhc3Mge1xuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgR2FtZURhdGFDbGFzcygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjYy5nYW1lLm9uKGNjLmdhbWUuRVZFTlRfSElERSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlRGF0YSgpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICB9XG5cbiAgICBsZXZlbEFsbDogbnVtYmVyID0gMzA7XG4gICAgdXNlckRhdGE6IGFueSA9IHtcbiAgICAgICAgaXNDbGF1c2U6IGZhbHNlLCAgICAvL+aYr+WQpuaJk+W8gOi/h+makOengeWNj+iuriAgICBcbiAgICAgICAgdGlzaGlOdW06IDEsICAgICAgICAvL+aPkOekuuasoeaVsFxuICAgICAgICBsZXZlbDogMSwgICAgICAgICAgIC8v5b2T5YmN5YWz5Y2hXG4gICAgICAgIGlzSGFsbDogZmFsc2UsICAgICAgLy/mmK/lkKbov5Tlm57ov4flpKfljoVcbiAgICAgICAgaXNHdWRpZTogZmFsc2UsICAgICAgLy/mmK/lkKbmiZPlvIDov4fmlrDmiYvlvJXlr7xcbiAgICAgICAgZmluaXNoTGV2ZWw1OiBmYWxzZSwgIC8v5piv5ZCm5a6M5oiQ6L+H56ysNeWFs1xuICAgIH07XG5cbiAgICBzdG9yYWdlRGF0YSgpIHtcbiAgICAgICAgU3RvcmFnZVV0aWxzLnNldFN0b3JhZ2VKU09OKHN0b3JhZ2UuZ2FtZWRhdGEsIHRoaXMudXNlckRhdGEpO1xuICAgIH1cblxuXG4gICAgc2V0VmlkZW9GYWlsQ2IoY2I6ICgpID0+IHZvaWQpIHtcbiAgICAgICAgd2luZG93WydvbkNsb3NlZmFpbENiJ10gPSBudWxsO1xuICAgICAgICB3aW5kb3dbJ29uQ2xvc2VmYWlsQ2InXSA9IGNiO1xuICAgIH1cblxuIFxuICAgIC8v55yL5bm/5ZGKXG4gICAgc2hvd1ZpZGVvKGZpbmlzaENiOiAoKSA9PiB2b2lkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYW5kcm9pZC0tLS0tLS0tLS0tLeeci+W5v+WRilwiKVxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlICYmIGNjLnN5cy5PU19BTkRST0lEID09IGNjLnN5cy5vcykge1xuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwic2hvd1NoaVBpbmdcIiwgXCIoKVZcIik7XG4gICAgICAgICAgICBvbkNsb3NlRmluaXNoQ2IgPSBudWxsO1xuICAgICAgICAgICAgb25DbG9zZUZpbmlzaENiID0gZmluaXNoQ2I7XG4gICAgICAgIH0gZWxzZSBpZiAoY2Muc3lzLmlzTmF0aXZlICYmIGNjLnN5cy5PU19JT1MgPT0gY2Muc3lzLm9zKSB7XG5cbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJVbml0eU1nclwiLCBcImxvYWRSZXdhcmRcIik7Ly/lhajlsY/op4bpopE7XG4gICAgICAgICAgICB3aW5kb3dbJ29uQ2xvc2VGaW5pc2hDYiddID0gbnVsbDtcbiAgICAgICAgICAgIHdpbmRvd1snb25DbG9zZUZpbmlzaENiJ109IGZpbmlzaENiO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmaW5pc2hDYigpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvL+aJk+W8gGJhbm5lclxuICAgIHNob3dCYW5uZXIoKSB7XG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUgJiYgY2Muc3lzLk9TX0FORFJPSUQgPT0gY2Muc3lzLm9zKSB7XG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJzaG93YmFubmVyXCIsIFwiKClWXCIpO1xuICAgICAgICB9ZWxzZSBpZiAoY2Muc3lzLmlzTmF0aXZlICYmIGNjLnN5cy5PU19JT1MgPT0gY2Muc3lzLm9zKSB7XG5cbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICAvL+WFs+mXrWJhbm5lclxuICAgIGNsb3NlQmFubmVyKCkge1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlICYmIGNjLnN5cy5PU19BTkRST0lEID09IGNjLnN5cy5vcykge1xuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwiaGlkZWJhbm5lclwiLCBcIigpVlwiKTtcbiAgICAgICAgfWVsc2UgaWYgKGNjLnN5cy5pc05hdGl2ZSAmJiBjYy5zeXMuT1NfSU9TID09IGNjLnN5cy5vcykge1xuXG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgLy/miZPlvIDmj5LlsY9cbiAgICBzaG93SW50ZXJzdCgpIHtcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSAmJiBjYy5zeXMuT1NfQU5EUk9JRCA9PSBjYy5zeXMub3MpIHtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcInNob3dDaGFwaW5nXCIsIFwiKClWXCIpO1xuICAgICAgICB9ZWxzZSBpZiAoY2Muc3lzLmlzTmF0aXZlICYmIGNjLnN5cy5PU19JT1MgPT0gY2Muc3lzLm9zKSB7XG5cbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICAvL+aJk+W8gOivhOWIhlxuICAgIHNob3dQaW5nRmVuKCkge1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlICYmIGNjLnN5cy5PU19BTkRST0lEID09IGNjLnN5cy5vcykge1xuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwib3BlblBpbmdGZW5cIiwgXCIoKVZcIik7XG4gICAgICAgIH1lbHNlIGlmIChjYy5zeXMuaXNOYXRpdmUgJiYgY2Muc3lzLk9TX0lPUyA9PSBjYy5zeXMub3MpIHtcblxuICAgICAgICB9IFxuICAgIH1cblxuICBcbn1cblxuZXhwb3J0IGxldCBnYW1lRGF0YSA9IEdhbWVEYXRhQ2xhc3MuZ2V0SW5zdGFuY2UoKTtcblxuZXhwb3J0IGVudW0gc3RvcmFnZSB7XG4gICAgZ2FtZWRhdGEgPSBcImdhbWVkYXRhXCIsXG59XG5cbmV4cG9ydCBlbnVtIHNvdW5kIHtcbiAgICBiZ20gPSBcImJnbVwiLFxuICAgIGNsaWNrID0gXCJjbGlja1wiLFxuICAgIGNvcnJlY3QgPSBcImNvcnJlY3RcIixcbiAgICBlcnIgPSBcImVyclwiLFxuICAgIGZhaWwgPSBcImZhaWxcIixcbiAgICB3aW4gPSBcIndpblwiLFxufVxud2luZG93WydvbkNsb3NlRmluaXNoQ2InXSA9ICgpID0+IHtcbiAgIFxufVxuXG4vKipzZGvosIPnlKhqc+mHjOmdondpbmRvd+WFrOS8l+eahOWHveaVsCAqL1xud2luZG93WydvbkNsb3NlVmRpZW9GaW5pc2hDYiddID0gKCkgPT4ge1xuICAgIC8vIGlmIChpc1BsYXlNdXNpYykge1xuICAgIC8vICAgICBBdWRpb0N0ci5iZygpO1xuICAgIC8vIH1cbiAgICBjb25zb2xlLmxvZyhcIm9uQ2xvc2VWZGllby0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIilcbiAgICB3aW5kb3dbJ29uQ2xvc2VGaW5pc2hDYiddKClcbn1cblxuXG4vKipzZGvosIPnlKhqc+mHjOmdondpbmRvd+WFrOS8l+eahOWHveaVsCAqL1xud2luZG93WydvbkNsb3NlVmRpZW9mYWlsQ2InXSA9ICgpID0+IHtcbiAgICAvLyBpZiAoaXNQbGF5TXVzaWMpIHtcbiAgICAvLyAgICAgQXVkaW9DdHIuYmcoKTtcbiAgICAvLyB9XG4gICAgY29uc29sZS5sb2coXCJvbkNsb3NlVmRpZW9mYWlsQ2JvbkNsb3NlVmRpZW9mYWlsQ2JvbkNsb3NlVmRpZW9mYWlsQ2JcIilcbiAgICB3aW5kb3dbJ29uQ2xvc2VmYWlsQ2InXSgpXG59XG5cblxud2luZG93WydvbkNsb3NlZmFpbENiJ10gPSAoKSA9PiB7XG4gICBcbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/AssetUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd8022bhaGtI34HO+9B4gPxl', 'AssetUtils');
// script/tool/AssetUtils.ts

"use strict";
//资源加载工具类
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetUtils = void 0;
var BxAutoAsset_1 = require("./BxAutoAsset");
var global_1 = require("./global");
var AssetUtils = /** @class */ (function () {
    function AssetUtils() {
    }
    // 绑定资源释放
    AssetUtils.bindAutoReleaseAsset = function (parent, asset) {
        var tempAuto = parent.getComponent(BxAutoAsset_1.default);
        if (!cc.isValid(tempAuto)) {
            tempAuto = parent.addComponent(BxAutoAsset_1.default);
        }
        tempAuto.addAutoReleaseAsset(asset);
    };
    // 检测引用计数后释放资源
    AssetUtils.checkAndReleaseAsset = function (asset) {
        if (cc.isValid(asset) && asset.refCount <= 0) {
            cc.assetManager.releaseAsset(asset);
        }
    };
    //加载(必须配合addAutoReleaseAsset 使用绑定资源)
    AssetUtils.loadAsset = function (assetPath, assetType, assetCb) {
        cc.resources.load(assetPath, assetType, assetCb);
    };
    //预加载
    AssetUtils.preloadAsset = function (assetPath, assetType) {
        cc.resources.preload(assetPath, assetType);
    };
    // 加载单张图片
    AssetUtils.loadSprite = function (picPath, sprite, defPath) {
        var _this = this;
        var finishCallback = function (err, sp) {
            if (err) {
                if (defPath) {
                    _this.loadSprite(defPath, sprite);
                }
                else {
                }
                return;
            }
            if (cc.isValid(sprite) && sprite["newUrl"] == picPath) {
                sprite.addAutoReleaseAsset(sp);
                sprite.spriteFrame = sp;
            }
            else {
                _this.checkAndReleaseAsset(sp);
            }
        };
        sprite["newUrl"] = picPath; // 记录最新url 防止多次请求异步设置了旧的
        sprite.spriteFrame = null; //置空 防止玩家看到旧的道具误会
        cc.resources.load(picPath, cc.SpriteFrame, finishCallback);
    };
    //----------------资源加载------------------------
    AssetUtils.showDialog = function (url, data, callback) {
        cc.resources.load("prefeb/" + url, cc.Prefab, function (err, prefab) {
            if (err) {
                return;
            }
            var node = cc.instantiate(prefab);
            global_1.Global.assetUtils.bindAutoReleaseAsset(node, prefab);
            var parentNode = global_1.Global.getsceneNode();
            if (node && parentNode) {
                if (data) {
                    cc.log(url, "confirmExit_dialog");
                    if (node.getComponent(url).initData) {
                        node.getComponent(url).initData(data);
                    }
                }
                parentNode.addChild(node);
                var content = node.getChildByName("content");
                content.scale = 0;
                cc.Tween.stopAllByTarget(content);
                cc.tween(content)
                    .to(0.32, { scale: 1 }, { easing: 'backOut' })
                    .start();
            }
            callback && callback();
        });
    };
    return AssetUtils;
}());
exports.AssetUtils = AssetUtils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9Bc3NldFV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxTQUFTOzs7QUFFVCw2Q0FBOEM7QUFDOUMsbUNBQWtDO0FBSWxDO0lBQUE7SUE4RUEsQ0FBQztJQTVFRyxTQUFTO0lBQ0ssK0JBQW9CLEdBQWxDLFVBQW1DLE1BQWUsRUFBRSxLQUFlO1FBQy9ELElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMscUJBQWlCLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN2QixRQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxxQkFBaUIsQ0FBQyxDQUFDO1NBQ3JEO1FBQ0QsUUFBUSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxjQUFjO0lBQ0EsK0JBQW9CLEdBQWxDLFVBQW1DLEtBQWU7UUFDOUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFO1lBQzFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0wsQ0FBQztJQUVELG9DQUFvQztJQUN0QixvQkFBUyxHQUF2QixVQUF3QixTQUFpQixFQUFFLFNBQTBCLEVBQUUsT0FBc0I7UUFDekYsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsS0FBSztJQUNTLHVCQUFZLEdBQTFCLFVBQTJCLFNBQWlCLEVBQUUsU0FBMEI7UUFDcEUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxTQUFTO0lBQ0sscUJBQVUsR0FBeEIsVUFBeUIsT0FBZSxFQUFFLE1BQWlCLEVBQUUsT0FBZ0I7UUFBN0UsaUJBbUJDO1FBbEJHLElBQUksY0FBYyxHQUFHLFVBQUMsR0FBRyxFQUFFLEVBQWtCO1lBQ3pDLElBQUksR0FBRyxFQUFFO2dCQUNMLElBQUksT0FBTyxFQUFFO29CQUNULEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2lCQUNwQztxQkFBTTtpQkFDTjtnQkFDRCxPQUFPO2FBQ1Y7WUFDRCxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLE9BQU8sRUFBRTtnQkFDbkQsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMvQixNQUFNLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQzthQUMzQjtpQkFBTTtnQkFDSCxLQUFJLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDakM7UUFDTCxDQUFDLENBQUE7UUFDRCxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUEsd0JBQXdCO1FBQ25ELE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUEsaUJBQWlCO1FBQzNDLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCw4Q0FBOEM7SUFDaEMscUJBQVUsR0FBeEIsVUFBeUIsR0FBVyxFQUFFLElBQUssRUFBRSxRQUFTO1FBQ2xELEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFDLEdBQUcsRUFBRSxNQUFNO1lBQ3RELElBQUksR0FBRyxFQUFFO2dCQUNMLE9BQU87YUFDVjtZQUVELElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEMsZUFBTSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDckQsSUFBSSxVQUFVLEdBQUcsZUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3ZDLElBQUksSUFBSSxJQUFJLFVBQVUsRUFBRTtnQkFDcEIsSUFBSSxJQUFJLEVBQUU7b0JBQ04sRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsb0JBQW9CLENBQUMsQ0FBQTtvQkFDakMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRTt3QkFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7cUJBQ3hDO2lCQUNKO2dCQUNELFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzFCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzdDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQixFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7cUJBQ1osRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQztxQkFDN0MsS0FBSyxFQUFFLENBQUM7YUFDaEI7WUFDRCxRQUFRLElBQUksUUFBUSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQTlFQSxBQThFQyxJQUFBO0FBOUVZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8v6LWE5rqQ5Yqg6L295bel5YW357G7XHJcblxyXG5pbXBvcnQgQXV0b1JlbGVhc2VBc3NldHMgZnJvbSBcIi4vQnhBdXRvQXNzZXRcIjtcclxuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4vZ2xvYmFsXCI7XHJcblxyXG5leHBvcnQgdHlwZSBBc3NldENhbGxGdW5jID0gKGVycjogRXJyb3IsIGFzc2V0RGF0YTogY2MuQXNzZXQpID0+IHZvaWQ7XHJcblxyXG5leHBvcnQgY2xhc3MgQXNzZXRVdGlscyB7XHJcblxyXG4gICAgLy8g57uR5a6a6LWE5rqQ6YeK5pS+XHJcbiAgICBwdWJsaWMgc3RhdGljIGJpbmRBdXRvUmVsZWFzZUFzc2V0KHBhcmVudDogY2MuTm9kZSwgYXNzZXQ6IGNjLkFzc2V0KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHRlbXBBdXRvID0gcGFyZW50LmdldENvbXBvbmVudChBdXRvUmVsZWFzZUFzc2V0cyk7XHJcbiAgICAgICAgaWYgKCFjYy5pc1ZhbGlkKHRlbXBBdXRvKSkge1xyXG4gICAgICAgICAgICB0ZW1wQXV0byA9IHBhcmVudC5hZGRDb21wb25lbnQoQXV0b1JlbGVhc2VBc3NldHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0ZW1wQXV0by5hZGRBdXRvUmVsZWFzZUFzc2V0KGFzc2V0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmo4DmtYvlvJXnlKjorqHmlbDlkI7ph4rmlL7otYTmupBcclxuICAgIHB1YmxpYyBzdGF0aWMgY2hlY2tBbmRSZWxlYXNlQXNzZXQoYXNzZXQ6IGNjLkFzc2V0KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQoYXNzZXQpICYmIGFzc2V0LnJlZkNvdW50IDw9IDApIHtcclxuICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLnJlbGVhc2VBc3NldChhc3NldCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v5Yqg6L29KOW/hemhu+mFjeWQiGFkZEF1dG9SZWxlYXNlQXNzZXQg5L2/55So57uR5a6a6LWE5rqQKVxyXG4gICAgcHVibGljIHN0YXRpYyBsb2FkQXNzZXQoYXNzZXRQYXRoOiBzdHJpbmcsIGFzc2V0VHlwZTogdHlwZW9mIGNjLkFzc2V0LCBhc3NldENiOiBBc3NldENhbGxGdW5jKTogdm9pZCB7XHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoYXNzZXRQYXRoLCBhc3NldFR5cGUsIGFzc2V0Q2IpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6aKE5Yqg6L29XHJcbiAgICBwdWJsaWMgc3RhdGljIHByZWxvYWRBc3NldChhc3NldFBhdGg6IHN0cmluZywgYXNzZXRUeXBlOiB0eXBlb2YgY2MuQXNzZXQpOiB2b2lkIHtcclxuICAgICAgICBjYy5yZXNvdXJjZXMucHJlbG9hZChhc3NldFBhdGgsIGFzc2V0VHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Yqg6L295Y2V5byg5Zu+54mHXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvYWRTcHJpdGUocGljUGF0aDogc3RyaW5nLCBzcHJpdGU6IGNjLlNwcml0ZSwgZGVmUGF0aD86IHN0cmluZykge1xyXG4gICAgICAgIGxldCBmaW5pc2hDYWxsYmFjayA9IChlcnIsIHNwOiBjYy5TcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGVmUGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFNwcml0ZShkZWZQYXRoLCBzcHJpdGUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY2MuaXNWYWxpZChzcHJpdGUpICYmIHNwcml0ZVtcIm5ld1VybFwiXSA9PSBwaWNQYXRoKSB7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGUuYWRkQXV0b1JlbGVhc2VBc3NldChzcCk7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBzcDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tBbmRSZWxlYXNlQXNzZXQoc3ApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwcml0ZVtcIm5ld1VybFwiXSA9IHBpY1BhdGg7Ly8g6K6w5b2V5pyA5pawdXJsIOmYsuatouWkmuasoeivt+axguW8guatpeiuvue9ruS6huaXp+eahFxyXG4gICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IG51bGw7Ly/nva7nqbog6Ziy5q2i546p5a6255yL5Yiw5pen55qE6YGT5YW36K+v5LyaXHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQocGljUGF0aCwgY2MuU3ByaXRlRnJhbWUsIGZpbmlzaENhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS3otYTmupDliqDovb0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2hvd0RpYWxvZyh1cmw6IHN0cmluZywgZGF0YT8sIGNhbGxiYWNrPykge1xyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwicHJlZmViL1wiICsgdXJsLCBjYy5QcmVmYWIsIChlcnIsIHByZWZhYikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgR2xvYmFsLmFzc2V0VXRpbHMuYmluZEF1dG9SZWxlYXNlQXNzZXQobm9kZSwgcHJlZmFiKTtcclxuICAgICAgICAgICAgbGV0IHBhcmVudE5vZGUgPSBHbG9iYWwuZ2V0c2NlbmVOb2RlKCk7XHJcbiAgICAgICAgICAgIGlmIChub2RlICYmIHBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKHVybCwgXCJjb25maXJtRXhpdF9kaWFsb2dcIilcclxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5nZXRDb21wb25lbnQodXJsKS5pbml0RGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudCh1cmwpLmluaXREYXRhKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb250ZW50ID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbnRlbnRcIik7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50LnNjYWxlID0gMDtcclxuICAgICAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChjb250ZW50KTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGNvbnRlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMzIsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6ICdiYWNrT3V0JyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/dialog/comment_dialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c951dEKIOhIEKilulaNvq92', 'comment_dialog');
// script/dialog/comment_dialog.ts

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
var comment_dialog = /** @class */ (function (_super) {
    __extends(comment_dialog, _super);
    function comment_dialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.callback = null;
        _this.starBox = null;
        _this.clickBox = null;
        return _this;
    }
    comment_dialog.prototype.initData = function (data) {
    };
    comment_dialog.prototype.start = function () {
        // for (let i = 0; i < this.clickBox.children.length; i++) {
        //     let item = this.clickBox.children[i];
        //     item.on(cc.Node.EventType.TOUCH_END, () => {  
        //         this.showStar(i)
        //     }, this)
        // }
        gameData_1.gameData.showBanner();
    };
    comment_dialog.prototype.showStar = function (index) {
        for (var i = 0; i < this.starBox.children.length; i++) {
            var item = this.starBox.children[i];
            if (i <= index) {
                item.active = true;
            }
            else {
                item.active = false;
            }
        }
    };
    comment_dialog.prototype.onClick_commentBtn = function () {
        gameData_1.gameData.showPingFen();
        global_1.Global.audioUtils.commonBtnClick();
        this.node.destroy();
        gameData_1.gameData.closeBanner();
    };
    comment_dialog.prototype.onClick_close = function () {
        global_1.Global.audioUtils.commonBtnClick();
        this.node.destroy();
        gameData_1.gameData.closeBanner();
    };
    __decorate([
        property(cc.Node)
    ], comment_dialog.prototype, "starBox", void 0);
    __decorate([
        property(cc.Node)
    ], comment_dialog.prototype, "clickBox", void 0);
    comment_dialog = __decorate([
        ccclass
    ], comment_dialog);
    return comment_dialog;
}(cc.Component));
exports.default = comment_dialog;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZGlhbG9nL2NvbW1lbnRfZGlhbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUE0QztBQUM1Qyx5Q0FBd0M7QUFFbEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUFnREM7UUE5Q0csY0FBUSxHQUFhLElBQUksQ0FBQztRQUcxQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGNBQVEsR0FBWSxJQUFJLENBQUM7O0lBd0M3QixDQUFDO0lBdENHLGlDQUFRLEdBQVIsVUFBUyxJQUFJO0lBRWIsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFDSSw0REFBNEQ7UUFDNUQsNENBQTRDO1FBQzVDLHFEQUFxRDtRQUNyRCwyQkFBMkI7UUFDM0IsZUFBZTtRQUNmLElBQUk7UUFFSixtQkFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxpQ0FBUSxHQUFSLFVBQVMsS0FBSztRQUNWLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLElBQUksS0FBSyxFQUFFO2dCQUNaLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ3RCO2lCQUFNO2dCQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ3ZCO1NBQ0o7SUFDTCxDQUFDO0lBRUQsMkNBQWtCLEdBQWxCO1FBQ0ksbUJBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QixlQUFNLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDcEIsbUJBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsc0NBQWEsR0FBYjtRQUNJLGVBQU0sQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQixtQkFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUExQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDTTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNPO0lBUlIsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQWdEbEM7SUFBRCxxQkFBQztDQWhERCxBQWdEQyxDQWhEMkMsRUFBRSxDQUFDLFNBQVMsR0FnRHZEO2tCQWhEb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdhbWVEYXRhIH0gZnJvbSBcIi4uL3Rvb2wvZ2FtZURhdGFcIjtcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi90b29sL2dsb2JhbFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY29tbWVudF9kaWFsb2cgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgY2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHN0YXJCb3g6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2xpY2tCb3g6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgaW5pdERhdGEoZGF0YSkge1xuXG4gICAgfVxuXG4gICAgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jbGlja0JveC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyAgICAgbGV0IGl0ZW0gPSB0aGlzLmNsaWNrQm94LmNoaWxkcmVuW2ldO1xuICAgICAgICAvLyAgICAgaXRlbS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IHsgIFxuICAgICAgICAvLyAgICAgICAgIHRoaXMuc2hvd1N0YXIoaSlcbiAgICAgICAgLy8gICAgIH0sIHRoaXMpXG4gICAgICAgIC8vIH1cblxuICAgICAgICBnYW1lRGF0YS5zaG93QmFubmVyKCk7XG4gICAgfVxuXG4gICAgc2hvd1N0YXIoaW5kZXgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXJCb3guY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5zdGFyQm94LmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKGkgPD0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsaWNrX2NvbW1lbnRCdG4oKSB7XG4gICAgICAgIGdhbWVEYXRhLnNob3dQaW5nRmVuKCk7XG4gICAgICAgIEdsb2JhbC5hdWRpb1V0aWxzLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIGdhbWVEYXRhLmNsb3NlQmFubmVyKCk7XG4gICAgfVxuXG4gICAgb25DbGlja19jbG9zZSgpIHtcbiAgICAgICAgR2xvYmFsLmF1ZGlvVXRpbHMuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgZ2FtZURhdGEuY2xvc2VCYW5uZXIoKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------
