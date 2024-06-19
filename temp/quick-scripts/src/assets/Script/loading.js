"use strict";
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