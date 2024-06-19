
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