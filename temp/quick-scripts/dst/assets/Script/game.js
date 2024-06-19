
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBdUM7QUFDdkMsNENBQWtEO0FBQ2xELHdDQUFtRDtBQUNuRCxzQ0FBd0Q7QUFHbEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBSyxTQUlKO0FBSkQsV0FBSyxTQUFTO0lBQ1YseUNBQUksQ0FBQTtJQUNKLHVDQUFHLENBQUE7SUFDSCw2Q0FBTSxDQUFBO0FBQ1YsQ0FBQyxFQUpJLFNBQVMsS0FBVCxTQUFTLFFBSWI7QUFHRDtJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQStqQkM7UUE1akJHLFFBQUUsR0FBWSxJQUFJLENBQUM7UUFHbkIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixvQkFBYyxHQUFjLElBQUksQ0FBQztRQUdqQyxtQkFBYSxHQUFjLElBQUksQ0FBQztRQUdoQyxxQkFBZSxHQUFjLElBQUksQ0FBQztRQUdsQyxpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGFBQU8sR0FBaUIsRUFBRSxDQUFDO1FBQzNCLGFBQU8sR0FBVyxHQUFHLENBQUM7UUFDdEIsbUJBQWEsR0FBVyxHQUFHLENBQUM7UUFFNUIsZ0JBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFFeEIsYUFBTyxHQUFZLEtBQUssQ0FBQztRQUV6QixXQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2IsYUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixjQUFRLEdBQVksS0FBSyxDQUFDO1FBRWxCLGdCQUFVLEdBQW1CLEVBQUUsQ0FBQztRQUV4QyxpQkFBVyxHQUFZLElBQUksQ0FBQzs7SUFtZ0JoQyxDQUFDO0lBaGdCRyx3QkFBSyxHQUFMO1FBQUEsaUJBc0JDO1FBcEJHLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUU7WUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUM5QyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ2pEO1FBRUQsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLGVBQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLGlCQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUU3QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXBCLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQUMsR0FBVSxFQUFFLEtBQXFCO1lBQzFFLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUM7Z0JBQUUsT0FBTztZQUNyQyxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixLQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsMEJBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCwyQkFBUSxHQUFSLFVBQVMsU0FBVTtRQUNmLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDWixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztTQUNyQjtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDL0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUNqRSxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzlELElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDaEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUU1RCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCwrQkFBWSxHQUFaO1FBQUEsaUJBZUM7UUFkRyxJQUFJLG1CQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRTtZQUMzQixPQUFPO1NBQ1Y7UUFDRCxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQUMsR0FBRyxFQUFFLE1BQU07WUFDdkQsSUFBSSxHQUFHLEVBQUU7Z0JBQ0wsT0FBTzthQUNWO1lBRUQsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsQyxlQUFNLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNyRCxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QixLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQU8sQ0FBQyxDQUFDO1lBQzlDLEtBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBR0QsdUJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxlQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5RCxpQkFBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDdkM7UUFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUV0QyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRXpCLElBQUksSUFBSSxHQUFHLGlCQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNsRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQztJQUdELE9BQU87SUFDUCxnQ0FBYSxHQUFiO1FBQ0ksSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsRUFBRTtZQUN0QixJQUFJLElBQUksR0FBRyxpQkFBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDckQ7SUFDTCxDQUFDO0lBRUQsZ0NBQWEsR0FBYjtRQUNJLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLE9BQU07U0FDVDtRQUNELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLElBQUksR0FBRyxpQkFBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbEQsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pDLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbEI7SUFDTCxDQUFDO0lBRUQsZ0NBQWEsR0FBYjtRQUFBLGlCQXVCQztRQXRCRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFNO1FBQzFCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzFCLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQztRQUNqRSxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDMUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2pILEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVYLElBQUksQ0FBQyxXQUFXLElBQUksVUFBVSxDQUFDO1FBQy9CLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLEVBQUU7WUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7WUFDckQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pDLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdkI7YUFBTTtZQUNILElBQUksSUFBSSxHQUFHLGlCQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNyRDtJQUNMLENBQUM7SUFFRCxpQ0FBYyxHQUFkO1FBQ0ksSUFBSSxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDM0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUMzRCxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDdEg7YUFBTTtZQUNILElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDMUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUMvRDtJQUNMLENBQUM7SUFFRCwwQkFBTyxHQUFQO1FBQUEsaUJBOEJDO1FBN0JHLGVBQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLGNBQWMsR0FBRyxlQUFNLENBQUMsS0FBSyxHQUFHLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUU3RyxlQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsZUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFekcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHO1lBQ3JFLElBQUksR0FBRyxFQUFFO2dCQUNMLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ1gsT0FBTzthQUNWO1lBQ0QsY0FBYztZQUNkLGVBQU0sQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsS0FBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN2RCxJQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQzFCLElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7Z0JBQzNCLEtBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFDN0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUMxQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7aUJBQ2xDO2dCQUNELEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztnQkFDdEMsa0RBQWtEO2dCQUNsRCxrQ0FBa0M7Z0JBQ2xDLG1FQUFtRTtnQkFDbkUsSUFBSTtnQkFFSixrREFBa0Q7Z0JBQ2xELGtDQUFrQztnQkFDbEMsbUVBQW1FO2dCQUNuRSxJQUFJO2FBQ1A7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFHRCw0QkFBUyxHQUFULFVBQVUsR0FBWTtRQUF0QixpQkFxQkM7UUFwQkcsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRWhGLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4RCxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXhCLElBQUksU0FBUyxHQUFHLGlCQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFdkQsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNYLElBQUksR0FBRyxDQUFDLENBQUM7U0FDWjtRQUNELEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNwRCxLQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNyQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDUixpQkFBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFDdEMsaUJBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELCtCQUFZLEdBQVosVUFBYSxTQUFrQixFQUFFLFFBQW1CO1FBQ2hELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEIsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDbkQsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNSLElBQUksR0FBRyxTQUFTLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDdkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2FBQy9EO2lCQUFNO2dCQUNILElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtnQkFDOUQsSUFBSSxHQUFHLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQzFEO1lBQ0QsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFOUQsUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUVoQyxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuQyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUduQixFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDOUU7SUFDTCxDQUFDO0lBRUQsOEJBQVcsR0FBWCxVQUFZLFNBQWtCO1FBQzFCLElBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQztRQUN6QixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0QsT0FBTyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTFCLElBQUksWUFBWSxHQUFZLElBQUksQ0FBQztRQUNqQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2hCLFlBQVksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDaEUsWUFBWSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hGO2FBQU07WUFDSCxZQUFZLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2hFLFlBQVksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoRjtRQUNELElBQUksWUFBWSxFQUFFO1lBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNsQztJQUNMLENBQUM7SUFFRCwyQkFBUSxHQUFSLFVBQVMsS0FBMEI7UUFDL0IsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzlCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLDhCQUE4QjtRQUM5QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxTQUFTLENBQUMsSUFBSSxFQUFFO1lBQzdCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDZCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzthQUNuRTtZQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUV6QixJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUU7Z0JBQzFDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBQztvQkFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztpQkFDaEM7YUFFSjtpQkFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUU7Z0JBQ2pELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBQztvQkFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2lCQUMzQjtnQkFDRCxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNqQyxtQkFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQzFCO1lBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRXBDLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQVEsU0FBUztnQkFDckQsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ2xCO1NBQ0o7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNuQyxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDeEI7YUFBTTtZQUNILElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUN4QjtJQUNMLENBQUM7SUFFRCwrQkFBWSxHQUFaLFVBQWEsU0FBa0I7UUFDM0IsSUFBSSxJQUFJLEdBQWMsSUFBSSxDQUFDO1FBQzNCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQztRQUNwQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQzlDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNWLElBQUksU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2pCLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDNUQ7aUJBQU07Z0JBQ0gsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUM1RDtZQUVELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDbEQsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUVsRCxzREFBc0Q7WUFDdEQsc0NBQXNDO1lBQ3RDLHFDQUFxQztZQUNyQyx3QkFBd0I7WUFDeEIseUJBQXlCO1lBRXpCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7bUJBQ3JFLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRTtnQkFDN0QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQ2QsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDZCxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztvQkFDdEIsUUFBUSxHQUFHLElBQUksQ0FBQztvQkFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7aUJBQ3RCO3FCQUFNO29CQUNILElBQUksR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO29CQUN4QixFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUNwQjtnQkFDRCxPQUFPLEVBQUUsSUFBSSxNQUFBLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQTthQUM1QjtpQkFBTTtnQkFDSCxJQUFJLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQztnQkFDckIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNqQjtTQUNKO1FBRUQsT0FBTyxFQUFFLElBQUksTUFBQSxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQUE7SUFDN0IsQ0FBQztJQUdELDhCQUFXLEdBQVgsVUFBWSxJQUFhO1FBQ3JCLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2FBQ1QsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7YUFDdkUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7YUFDdkUsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7YUFDbEUsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDM0MsSUFBSSxDQUFDO1lBQ0YsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFHRCwwQkFBTyxHQUFQO1FBQUEsaUJBb0NDO1FBbkNHLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQztvQ0FDTCxDQUFDO2dCQUNOLElBQUksSUFBSSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzlELEtBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ2QsaUJBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUU7d0JBQ25DLEtBQUksQ0FBQyxZQUFZLENBQUM7NEJBQ2QsSUFBSSxDQUFDLElBQUksS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQ0FDdkMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dDQUNoQyxJQUFJLG1CQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksbUJBQVEsQ0FBQyxRQUFRLEVBQUU7b0NBQ2xELG1CQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO29DQUN0RCxtQkFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO2lDQUMxQjtnQ0FDRCxlQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxjQUFNLENBQUMsZUFBZSxFQUFFO29DQUNqRCxRQUFRLEVBQUU7d0NBQ04sSUFBSSxlQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxtQkFBUSxDQUFDLFFBQVEsRUFBRTs0Q0FDdkMsZUFBTSxDQUFDLEtBQUssR0FBRyxlQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzs0Q0FDaEMsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDOzRDQUNoQixLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7NENBQ1osS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDOzRDQUNyQixLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7eUNBQ2xCOzZDQUFNOzRDQUNILG1CQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7NENBQ2hDLG1CQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7NENBQ3ZCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGFBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzt5Q0FDckM7b0NBQ0wsQ0FBQztpQ0FDSixDQUFDLENBQUM7NkJBQ047d0JBQ0wsQ0FBQyxDQUFDLENBQUE7b0JBQ04sQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzs7WUE3QmhCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO3dCQUE1QyxDQUFDO2FBOEJUO1FBQ0wsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUdELFlBQVk7SUFDWiw4QkFBVyxHQUFYO1FBQ0ksSUFBSSxLQUFLLEdBQUcsZUFBTSxDQUFDLEtBQUssQ0FBQztRQUN6QixJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7UUFDYixJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtZQUMxQixJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNqQjthQUFNLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRSxFQUFFO1lBQ2xDLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ2pCO2FBQU0sSUFBSSxLQUFLLElBQUksRUFBRSxJQUFJLEtBQUssSUFBSSxFQUFFLEVBQUU7WUFDbkMsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO1NBQ3RCO2FBQU0sSUFBSSxLQUFLLElBQUksRUFBRSxJQUFJLEtBQUssSUFBSSxFQUFFLEVBQUU7WUFDbkMsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDakI7YUFBTSxJQUFJLEtBQUssSUFBSSxFQUFFLElBQUksS0FBSyxJQUFJLEVBQUUsRUFBRTtZQUNuQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7U0FDdEI7YUFBTTtZQUNILElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ2pCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUdELEtBQUs7SUFDTCwrQkFBWSxHQUFaO1FBQUEsaUJBb0JDO1FBbkJHLGVBQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLGNBQU0sQ0FBQyxjQUFjLEVBQUU7WUFDaEQsVUFBVSxFQUFFO2dCQUNSLEtBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO2dCQUN0QixtQkFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDN0IsbUJBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDdkIsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN0QixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDekIsQ0FBQztZQUVELGVBQWUsRUFBRTtnQkFDYixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQixLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ1osS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNyQixFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7Z0JBQ3JDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDMUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2lCQUNsQztZQUNMLENBQUM7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsK0JBQVksR0FBWjtRQUFBLGlCQUlDO1FBSEcsZUFBTSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixlQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxjQUFNLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxRQUFRLEVBQUUsY0FBUSxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUcsQ0FBQztJQUdELGdDQUFhLEdBQWI7UUFBQSxpQkFLQztRQUpHLGVBQU0sQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsZUFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsY0FBTSxDQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLGNBQVEsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRXBILENBQUM7SUFFRCxnQ0FBYSxHQUFiO1FBQUEsaUJBOEJDO1FBNUJHLGVBQU0sQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsT0FBTztTQUNWO1FBQ0QsSUFBSSxRQUFRLEdBQWUsSUFBSSxDQUFDO1FBQ2hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3pCLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixNQUFNO2FBQ1Q7U0FDSjtRQUVELElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDWCxPQUFNO1NBQ1Q7UUFDRCxJQUFJLG1CQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUU7WUFDakMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUViLG1CQUFRLENBQUMsU0FBUyxDQUFDO2dCQUNmLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDN0IsQ0FBQyxDQUFDLENBQUM7WUFFSCxPQUFPO1NBQ1Y7UUFDRCxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsbUJBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUM1RCxtQkFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCw0QkFBUyxHQUFULFVBQVUsUUFBb0I7UUFFMUIsSUFBSSxRQUFRLEVBQUU7WUFDVixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN4QixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDakQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUUzRCxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO2dCQUNsRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNSLENBQUMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7aUJBQ2hFO3FCQUFNO29CQUNILENBQUMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7aUJBQ2hFO2dCQUNELEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDaEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ2pHO1NBRUo7SUFDTCxDQUFDO0lBR0QsTUFBTTtJQUNOLGtDQUFlLEdBQWYsVUFBZ0IsU0FBaUIsRUFBRSxJQUFxQjtRQUFyQixxQkFBQSxFQUFBLFlBQXFCO1FBQ3BELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM3QyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLFNBQVMsRUFBRTtnQkFDdEMsSUFBSSxPQUFPLEdBQUcsZUFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDckUsT0FBTyxPQUFPLENBQUM7YUFDbEI7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUEzakJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0NBQ0M7SUFHbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDVTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNRO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1U7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvREFDYTtJQUdqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO21EQUNZO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7cURBQ2M7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztpREFDVTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNTO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQTFDSixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBK2pCNUI7SUFBRCxlQUFDO0NBL2pCRCxBQStqQkMsQ0EvakJxQyxFQUFFLENBQUMsU0FBUyxHQStqQmpEO2tCQS9qQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbmV3aGFuZCBmcm9tIFwiLi9wcmVmZWIvbmV3aGFuZFwiO1xuaW1wb3J0IHsgZ2FtZURhdGEsIHNvdW5kIH0gZnJvbSBcIi4vdG9vbC9nYW1lRGF0YVwiO1xuaW1wb3J0IHsgYmVhdXR5RGF0YSwgR2xvYmFsIH0gZnJvbSBcIi4vdG9vbC9nbG9iYWxcIjtcbmltcG9ydCB7IGRpYWxvZywgc2NlbmUsIFV0aWxzVG9vbCB9IGZyb20gXCIuL3Rvb2wvdXRpbHNcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5lbnVtIEdhbWVTdGF0ZSB7XG4gICAgZmluZCwgICAgICAgLy/mib7liLBcbiAgICBlcnIsICAgICAgICAvL+ayoeaJvuWIsCAgICBcbiAgICBmaW5pc2gsICAgICAvL+aJvuWIsOmHjeWkjeeahCAgXG59XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBiZzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBvcmlnaW5hbEltZzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBmaW5pc2hJbWc6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGlzaGlfcWlwYW86IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBnYW1lRmluZFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZ2FtZUVyclByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZ2FtZVRpc2hpUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBnYW1lX3R1b3dlaTogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGltZ1NpZ25Cb3g6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgeWV6aUJveDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGV2ZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRpbWVBbGw6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcmVkdWNlVGltZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBtYXNrOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIGltZ0RhdGE6IGJlYXV0eURhdGFbXSA9IFtdO1xuICAgIHNldEltZ1k6IG51bWJlciA9IDI1NztcbiAgICBvcmlnaW5hbFNjYWxlOiBudW1iZXIgPSAwLjU7XG5cbiAgICB5ZXppQWxsTnVtOiBudW1iZXIgPSAxMDtcbiAgICB5ZXppTm93TnVtOiBudW1iZXIgPSAwO1xuICAgIHJlc2lkdWVUaW1lOiBudW1iZXIgPSAwO1xuXG4gICAgaXNUaVNoaTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgdGltZXIgPSBudWxsO1xuICAgIGlzUGF1c2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBmaXJzdEVycjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBhdWRpb0NsaXBzOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuXG4gICAgbmV3aGFuZE5vZGU6IG5ld2hhbmQgPSBudWxsO1xuXG5cbiAgICBzdGFydCgpIHtcbiAgICBcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLklQQUQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcykuZml0SGVpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcykuZml0V2lkdGggPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVzZXRBbGwoKTtcbiAgICAgICAgR2xvYmFsLnNldHNjZW5lTm9kZSh0aGlzLm5vZGUpO1xuICAgICAgICBVdGlsc1Rvb2wuYWRhcHRlckJnKHRoaXMuYmcpO1xuXG4gICAgICAgIHRoaXMub25FdmVudCgpO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgdGhpcy5zdGFydERvd25UaW1lKCk7XG4gICAgICAgIHRoaXMubG9hZFJlcygpO1xuICAgICAgICB0aGlzLmNoZWNrTmV3SGFuZCgpO1xuXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkRGlyKFwic291bmRcIiwgY2MuQXVkaW9DbGlwLCAoZXJyOiBFcnJvciwgY2xpcHM6IGNjLkF1ZGlvQ2xpcFtdKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyIHx8ICFjYy5pc1ZhbGlkKHRoaXMpKSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLmF1ZGlvQ2xpcHMgPSBjbGlwcztcbiAgICAgICAgICAgIHRoaXMuYWRkQXV0b1JlbGVhc2VBc3NldHMoY2xpcHMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkV2ZW50KCkge1xuICAgICAgICB0aGlzLm9yaWdpbmFsSW1nLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5pbWdFdmVudCwgdGhpcyk7XG4gICAgICAgIHRoaXMuZmluaXNoSW1nLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5pbWdFdmVudCwgdGhpcyk7XG4gICAgfVxuXG4gICAgcmVzZXRBbGwoY2xlYXJEYXRhPykge1xuICAgICAgICBpZiAoIWNsZWFyRGF0YSkge1xuICAgICAgICAgICAgdGhpcy5pbWdEYXRhID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbWdTaWduQm94LmdldENoaWxkQnlOYW1lKFwib3JpZ0JveFwiKS5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgdGhpcy5pbWdTaWduQm94LmdldENoaWxkQnlOYW1lKFwiZmluaXNoQm94XCIpLmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xuICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJlcnJCb3hcIikuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcInRpc2hpQm94XCIpLmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xuICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJsaXppXCIpLmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xuXG4gICAgICAgIHRoaXMubWFzay5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5maXJzdEVyciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzUGF1c2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgICAgIHRoaXMuaXNUaVNoaSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnllemlOb3dOdW0gPSAwO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBjaGVja05ld0hhbmQoKSB7XG4gICAgICAgIGlmIChnYW1lRGF0YS51c2VyRGF0YS5pc0d1ZGllKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwcmVmZWIvbmV3aGFuZFwiLCBjYy5QcmVmYWIsIChlcnIsIHByZWZhYikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgR2xvYmFsLmFzc2V0VXRpbHMuYmluZEF1dG9SZWxlYXNlQXNzZXQobm9kZSwgcHJlZmFiKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChub2RlKTtcbiAgICAgICAgICAgIHRoaXMubmV3aGFuZE5vZGUgPSBub2RlLmdldENvbXBvbmVudChuZXdoYW5kKTtcbiAgICAgICAgICAgIHRoaXMubmV3aGFuZE5vZGUuc2hvd2RvbmcxKCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmxldmVsLnN0cmluZyA9IFwiTHZcIiArIEdsb2JhbC5pbWdJZDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnllemlCb3guY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhbmltID0gdGhpcy55ZXppQm94LmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICBVdGlsc1Rvb2wucGxheVNwKGFuaW0sIFwiMV9hbl9zdG9wXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZXNpZHVlVGltZSA9IHRoaXMuZ2V0RG93blRpbWUoKTtcblxuICAgICAgICB0aGlzLmNoYW5nZVFpUGFvTnVtKCk7XG5cbiAgICAgICAgdGhpcy5tYXNrLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIGxldCB0aW1lID0gVXRpbHNUb29sLnRpbWVDaGFuZ2UodGhpcy5yZXNpZHVlVGltZSk7XG4gICAgICAgIHRoaXMudGltZUFsbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRpbWU7XG4gICAgICAgIHRoaXMucmVkdWNlVGltZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cblxuICAgIC8v5byA5ZCv5YCS6K6h5pe2XG4gICAgc3RhcnREb3duVGltZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzaWR1ZVRpbWUgPiAwKSB7XG4gICAgICAgICAgICBsZXQgdGltZSA9IFV0aWxzVG9vbC50aW1lQ2hhbmdlKHRoaXMucmVzaWR1ZVRpbWUpO1xuICAgICAgICAgICAgdGhpcy50aW1lQWxsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGltZTtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSB0aGlzLnNjaGVkdWxlKHRoaXMuZG93blRpbWVFdmVudCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkb3duVGltZUV2ZW50KCkge1xuICAgICAgICBpZiAodGhpcy5pc1BhdXNlKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc2lkdWVUaW1lLS07XG4gICAgICAgIGxldCB0aW1lID0gVXRpbHNUb29sLnRpbWVDaGFuZ2UodGhpcy5yZXNpZHVlVGltZSk7XG4gICAgICAgIHRoaXMudGltZUFsbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRpbWU7XG4gICAgICAgIGlmICh0aGlzLnJlc2lkdWVUaW1lIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmRvd25UaW1lRXZlbnQpO1xuICAgICAgICAgICAgdGhpcy50aW1lT3V0RXZlbnQoKTtcbiAgICAgICAgICAgIHRoaXMucGxheUNvbW1vblNvdW5kKHNvdW5kLmZhaWwpO1xuICAgICAgICAgICAgY2MubG9nKFwi5pe26Ze05Yiw5LqGXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXJyUmVkdWNlVGltZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZpcnN0RXJyKSByZXR1cm5cbiAgICAgICAgbGV0IHBvc1kgPSB0aGlzLnRpbWVBbGwueTtcbiAgICAgICAgbGV0IHJlZHVjZVRpbWUgPSAzMDtcbiAgICAgICAgdGhpcy5yZWR1Y2VUaW1lLnkgPSBwb3NZO1xuICAgICAgICB0aGlzLnJlZHVjZVRpbWUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZWR1Y2VUaW1lLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCItXCIgKyByZWR1Y2VUaW1lO1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5yZWR1Y2VUaW1lKTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5yZWR1Y2VUaW1lKS50bygwLjE1LCB7IHNjYWxlOiAxLjIgfSkudG8oMC4xNSwgeyBzY2FsZTogMSB9KS50bygxLCB7IG9wYWNpdHk6IDI1NSwgeTogcG9zWSAtIDI1IH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZWR1Y2VUaW1lLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9KS5zdGFydCgpO1xuXG4gICAgICAgIHRoaXMucmVzaWR1ZVRpbWUgLT0gcmVkdWNlVGltZTtcbiAgICAgICAgaWYgKHRoaXMucmVzaWR1ZVRpbWUgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy50aW1lQWxsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIwMDowMFwiO1xuICAgICAgICAgICAgdGhpcy5wbGF5Q29tbW9uU291bmQoc291bmQuZmFpbCk7XG4gICAgICAgICAgICBjYy5sb2coXCLml7bpl7TliLDkuoZcIik7XG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5kb3duVGltZUV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMudGltZU91dEV2ZW50KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgdGltZSA9IFV0aWxzVG9vbC50aW1lQ2hhbmdlKHRoaXMucmVzaWR1ZVRpbWUpO1xuICAgICAgICAgICAgdGhpcy50aW1lQWxsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGltZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZVFpUGFvTnVtKCkge1xuICAgICAgICBpZiAoZ2FtZURhdGEudXNlckRhdGEudGlzaGlOdW0gPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnRpc2hpX3FpcGFvLmdldENoaWxkQnlOYW1lKFwiYWRfbGFiZWxcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnRpc2hpX3FpcGFvLmdldENoaWxkQnlOYW1lKFwibnVtX2xhYmVsXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnRpc2hpX3FpcGFvLmdldENoaWxkQnlOYW1lKFwibnVtX2xhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZ2FtZURhdGEudXNlckRhdGEudGlzaGlOdW0udG9TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGlzaGlfcWlwYW8uZ2V0Q2hpbGRCeU5hbWUoXCJhZF9sYWJlbFwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy50aXNoaV9xaXBhby5nZXRDaGlsZEJ5TmFtZShcIm51bV9sYWJlbFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvYWRSZXMoKSB7XG4gICAgICAgIEdsb2JhbC5hc3NldFV0aWxzLmxvYWRTcHJpdGUoXCJvcmlnaW5hbEltZy9cIiArIEdsb2JhbC5pbWdJZCArIFwiLW9cIiwgdGhpcy5vcmlnaW5hbEltZy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSk7XG5cbiAgICAgICAgR2xvYmFsLmFzc2V0VXRpbHMubG9hZFNwcml0ZShcImZpbmlzaEltZy9cIiArIEdsb2JhbC5pbWdJZCArIFwiLWZcIiwgdGhpcy5maW5pc2hJbWcuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpO1xuXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwiaW1nSnNvbi9sZXZlbFwiICsgR2xvYmFsLmltZ0lkLCBjYy5Kc29uQXNzZXQsIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNjLmxvZyhlcnIpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g6I635Y+W5YiwIEpzb24g5pWw5o2uXG4gICAgICAgICAgICBHbG9iYWwuYXNzZXRVdGlscy5iaW5kQXV0b1JlbGVhc2VBc3NldCh0aGlzLm5vZGUsIHJlcyk7XG4gICAgICAgICAgICBjb25zdCBqc29uRGF0YSA9IHJlcy5qc29uO1xuICAgICAgICAgICAgaWYgKGpzb25EYXRhICYmIGpzb25EYXRhLnBhdGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmltZ0RhdGEgPSBqc29uRGF0YS5wYXRoO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pbWdEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1nRGF0YVtpXS5pc0ZpbmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2MubG9nKHRoaXMuaW1nRGF0YSwgXCJ0aGlzLmltZ0RhdGEgXCIpO1xuICAgICAgICAgICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pbWdEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGxldCBkYXRhID0gdGhpcy5pbWdEYXRhW2ldO1xuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmZpbmRTaWduU3VjYyhjYy52MyhkYXRhLmNlbnRlclBvcy54LCBkYXRhLmNlbnRlclBvcy55KSlcbiAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW1nRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vICAgICBsZXQgZGF0YSA9IHRoaXMuaW1nRGF0YVtpXTtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5maW5kU2lnblN1Y2MoY2MudjMoZGF0YS5jZW50ZXJQb3MueCwgZGF0YS5jZW50ZXJQb3MueSkpXG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgeWV6aUxpZ2h0KHBvczogY2MuVmVjMykge1xuICAgICAgICBsZXQgYW5pbSA9IHRoaXMueWV6aUJveC5jaGlsZHJlblt0aGlzLnllemlOb3dOdW0gLSAxXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuXG4gICAgICAgIGxldCB0dW93ZWkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdhbWVfdHVvd2VpKTtcbiAgICAgICAgdGhpcy5pbWdTaWduQm94LmdldENoaWxkQnlOYW1lKFwibGl6aVwiKS5hZGRDaGlsZCh0dW93ZWkpO1xuICAgICAgICB0dW93ZWkuc2V0UG9zaXRpb24ocG9zKTtcblxuICAgICAgICBsZXQgY2hhbmdlUG9zID0gVXRpbHNUb29sLmNoYW5nZVBvcyhhbmltLm5vZGUsIHR1b3dlaSk7XG5cbiAgICAgICAgbGV0IHRpbWUgPSAwLjU7XG4gICAgICAgIGlmIChwb3MueSA8IDApIHtcbiAgICAgICAgICAgIHRpbWUgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0dW93ZWkpO1xuICAgICAgICBjYy50d2Vlbih0dW93ZWkpLnRvKHRpbWUsIHsgcG9zaXRpb246IGNoYW5nZVBvcyB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0dW93ZWkuZGVzdHJveSgpO1xuICAgICAgICAgICAgfSwgMC4zKTtcbiAgICAgICAgICAgIFV0aWxzVG9vbC5wbGF5U3AoYW5pbSwgXCIyX2JpYW5saWFuZ1wiKTtcbiAgICAgICAgICAgIFV0aWxzVG9vbC5hZGRTZXF1ZW5jZVNwKGFuaW0sIFwiM19saWFuZ19zdG9wXCIpO1xuICAgICAgICB9KS5zdGFydCgpO1xuICAgIH1cblxuICAgIGZpbmRTaWduU3VjYyh0YXJnZXRQb3M6IGNjLlZlYzMsIGZpbmREYXRhOmJlYXV0eURhdGEpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBnYW1lRmluZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ2FtZUZpbmRQcmVmYWIpO1xuICAgICAgICAgICAgbGV0IGltZ1kgPSAwO1xuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgIGltZ1kgPSB0YXJnZXRQb3MueSAqIHRoaXMub3JpZ2luYWxTY2FsZSArIHRoaXMuc2V0SW1nWTtcbiAgICAgICAgICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJvcmlnQm94XCIpLmFkZENoaWxkKGdhbWVGaW5kKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJmaW5pc2hCb3hcIikuYWRkQ2hpbGQoZ2FtZUZpbmQpXG4gICAgICAgICAgICAgICAgaW1nWSA9IHRhcmdldFBvcy55ICogdGhpcy5vcmlnaW5hbFNjYWxlIC0gdGhpcy5zZXRJbWdZO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGNlbnRlclBvcyA9IGNjLnYzKHRhcmdldFBvcy54ICogdGhpcy5vcmlnaW5hbFNjYWxlLCBpbWdZKTtcblxuICAgICAgICAgICAgZ2FtZUZpbmQuc2V0UG9zaXRpb24oY2VudGVyUG9zKTtcblxuICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KGdhbWVGaW5kKTtcbiAgICAgICAgICAgIGdhbWVGaW5kLnNjYWxlID0gMDtcblxuXG4gICAgICAgICAgICBjYy50d2VlbihnYW1lRmluZCkudG8oMC4zLCB7IHNjYWxlOiAxLjUgfSkudG8oMC4xLCB7IHNjYWxlOiAxLjMgfSkuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbmRTaWduRXJyKHRhcmdldFBvczogY2MuVmVjMykge1xuICAgICAgICBsZXQgY2xpY2tQb3MgPSB0YXJnZXRQb3M7XG4gICAgICAgIGxldCBnYW1lRXJyID0gY2MuaW5zdGFudGlhdGUodGhpcy5nYW1lRXJyUHJlZmFiKTtcbiAgICAgICAgdGhpcy5pbWdTaWduQm94LmdldENoaWxkQnlOYW1lKFwiZXJyQm94XCIpLmFkZENoaWxkKGdhbWVFcnIpO1xuICAgICAgICBnYW1lRXJyLnNldFBvc2l0aW9uKGNsaWNrUG9zKTtcbiAgICAgICAgdGhpcy5lcnJTaWduQW5pbShnYW1lRXJyKTtcblxuICAgICAgICBsZXQgb3RoZXJFcnJTaWduOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAgICAgaWYgKGNsaWNrUG9zLnkgPiAwKSB7XG4gICAgICAgICAgICBvdGhlckVyclNpZ24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdhbWVFcnJQcmVmYWIpO1xuICAgICAgICAgICAgdGhpcy5pbWdTaWduQm94LmdldENoaWxkQnlOYW1lKFwiZXJyQm94XCIpLmFkZENoaWxkKG90aGVyRXJyU2lnbik7XG4gICAgICAgICAgICBvdGhlckVyclNpZ24uc2V0UG9zaXRpb24oY2MudjMoY2xpY2tQb3MueCwgY2xpY2tQb3MueSAtICh0aGlzLnNldEltZ1kgKiAyKSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3RoZXJFcnJTaWduID0gY2MuaW5zdGFudGlhdGUodGhpcy5nYW1lRXJyUHJlZmFiKTtcbiAgICAgICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcImVyckJveFwiKS5hZGRDaGlsZChvdGhlckVyclNpZ24pO1xuICAgICAgICAgICAgb3RoZXJFcnJTaWduLnNldFBvc2l0aW9uKGNjLnYzKGNsaWNrUG9zLngsIGNsaWNrUG9zLnkgKyAodGhpcy5zZXRJbWdZICogMikpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3RoZXJFcnJTaWduKSB7XG4gICAgICAgICAgICB0aGlzLmVyclNpZ25BbmltKG90aGVyRXJyU2lnbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbWdFdmVudChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xuICAgICAgICBsZXQgcG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgbGV0IGNsaWNrUG9zID0gdGhpcy5pbWdTaWduQm94LmNvbnZlcnRUb05vZGVTcGFjZUFSKGNjLnYzKHBvcy54LCBwb3MueSkpO1xuICAgICAgICAvLyB0aGlzLmZpbmRTaWduRXJyKGNsaWNrUG9zKTtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNoZWNrSW1nU2lnbihjbGlja1Bvcyk7XG4gICAgICAgIGlmIChkYXRhLnR5cGUgPT0gR2FtZVN0YXRlLmZpbmQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVGlTaGkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzVGlTaGkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJ0aXNoaUJveFwiKS5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMueWV6aU5vd051bSA9IHRoaXMueWV6aU5vd051bSArIDE7XG4gICAgICAgICAgICB0aGlzLmZpbmRTaWduU3VjYyhjYy52MyhkYXRhLmZpbmREYXRhLmNlbnRlclBvcy54LCBkYXRhLmZpbmREYXRhLmNlbnRlclBvcy55KSwgZGF0YS5maW5kRGF0YSk7XG4gICAgICAgICAgICB0aGlzLnllemlMaWdodChjbGlja1Bvcyk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm5ld2hhbmROb2RlICYmIHRoaXMueWV6aU5vd051bSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgaWYoIHRoaXMubmV3aGFuZE5vZGUpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld2hhbmROb2RlLmhpZGVkb25nMSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld2hhbmROb2RlLnNob3dkb25nMigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm5ld2hhbmROb2RlICYmIHRoaXMueWV6aU5vd051bSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgaWYoIHRoaXMubmV3aGFuZE5vZGUpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld2hhbmROb2RlLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld2hhbmROb2RlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZ2FtZURhdGEudXNlckRhdGEuaXNHdWRpZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZ2FtZURhdGEuc3RvcmFnZURhdGEoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucGxheUNvbW1vblNvdW5kKHNvdW5kLmNvcnJlY3QpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy55ZXppTm93TnVtID49IHRoaXMueWV6aUFsbE51bSkgeyAgICAgICAvL+iDnOWIqSDmuLjmiI/nu5PmnZ9cbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVFbmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLnR5cGUgPT0gR2FtZVN0YXRlLmVycikge1xuICAgICAgICAgICAgdGhpcy5wbGF5Q29tbW9uU291bmQoc291bmQuZXJyKTtcbiAgICAgICAgICAgIHRoaXMuZXJyUmVkdWNlVGltZSgpO1xuICAgICAgICAgICAgdGhpcy5maW5kU2lnbkVycihjbGlja1Bvcyk7XG4gICAgICAgICAgICB0aGlzLmZpcnN0RXJyID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGxheUNvbW1vblNvdW5kKHNvdW5kLmVycik7XG4gICAgICAgICAgICB0aGlzLmVyclJlZHVjZVRpbWUoKTtcbiAgICAgICAgICAgIHRoaXMuZmluZFNpZ25FcnIoY2xpY2tQb3MpO1xuICAgICAgICAgICAgdGhpcy5maXJzdEVyciA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0ltZ1NpZ24odGFyZ2V0UG9zOiBjYy5WZWMzKSB7XG4gICAgICAgIGxldCB0eXBlOiBHYW1lU3RhdGUgPSBudWxsO1xuICAgICAgICBsZXQgZmluZERhdGEgPSBudWxsO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW1nRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmltZ0RhdGFbaV07XG4gICAgICAgICAgICBsZXQgeCA9IGRhdGEuY2VudGVyUG9zLnggKiB0aGlzLm9yaWdpbmFsU2NhbGU7XG4gICAgICAgICAgICBsZXQgeSA9IDA7XG4gICAgICAgICAgICBpZiAodGFyZ2V0UG9zLnkgPiAwKSB7XG4gICAgICAgICAgICAgICAgeSA9IGRhdGEuY2VudGVyUG9zLnkgKiB0aGlzLm9yaWdpbmFsU2NhbGUgKyB0aGlzLnNldEltZ1k7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHkgPSBkYXRhLmNlbnRlclBvcy55ICogdGhpcy5vcmlnaW5hbFNjYWxlIC0gdGhpcy5zZXRJbWdZO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgd2lkID0gZGF0YS5ibG9ja1NpemUud2lkICogdGhpcy5vcmlnaW5hbFNjYWxlO1xuICAgICAgICAgICAgbGV0IGhlaSA9IGRhdGEuYmxvY2tTaXplLmhlaSAqIHRoaXMub3JpZ2luYWxTY2FsZTtcblxuICAgICAgICAgICAgLy8gbGV0IHRlc3RpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy50ZXN0aXRlbVByZWZhYik7XG4gICAgICAgICAgICAvLyB0aGlzLmltZ1NpZ25Cb3guYWRkQ2hpbGQodGVzdGl0ZW0pO1xuICAgICAgICAgICAgLy8gdGVzdGl0ZW0uc2V0UG9zaXRpb24oY2MudjMoeCwgeSkpO1xuICAgICAgICAgICAgLy8gdGVzdGl0ZW0ud2lkdGggPSB3aWQ7XG4gICAgICAgICAgICAvLyB0ZXN0aXRlbS5oZWlnaHQgPSBoZWk7XG5cbiAgICAgICAgICAgIGlmICghZGF0YS5pc0ZpbmQgJiYgdGFyZ2V0UG9zLnggPD0geCArIHdpZCAvIDIgJiYgdGFyZ2V0UG9zLnggPj0geCAtIHdpZCAvIDJcbiAgICAgICAgICAgICAgICAmJiB0YXJnZXRQb3MueSA8PSB5ICsgaGVpIC8gMiAmJiB0YXJnZXRQb3MueSA+PSB5IC0gaGVpIC8gMikge1xuICAgICAgICAgICAgICAgIGlmICghZGF0YS5pc0ZpbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwi5om+5Yiw5LqGXCIpO1xuICAgICAgICAgICAgICAgICAgICB0eXBlID0gR2FtZVN0YXRlLmZpbmQ7XG4gICAgICAgICAgICAgICAgICAgIGZpbmREYXRhID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5pc0ZpbmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBHYW1lU3RhdGUuZmluaXNoO1xuICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCLmib7liLDph43lpI3nmoTkuoZcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7IHR5cGUsIGZpbmREYXRhIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdHlwZSA9IEdhbWVTdGF0ZS5lcnI7XG4gICAgICAgICAgICAgICAgY2MubG9nKFwi5rKh5om+5YiwXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgdHlwZSwgZmluZERhdGEgfVxuICAgIH1cblxuXG4gICAgZXJyU2lnbkFuaW0obm9kZTogY2MuTm9kZSkge1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQobm9kZSk7XG4gICAgICAgIGNjLnR3ZWVuKG5vZGUpXG4gICAgICAgICAgICAudG8oMC4wNSwgeyBhbmdsZTogMTUgfSkudG8oMC4wNSwgeyBhbmdsZTogMCB9KS50bygwLjA1LCB7IGFuZ2xlOiAtMTUgfSlcbiAgICAgICAgICAgIC50bygwLjA3LCB7IGFuZ2xlOiAxMCB9KS50bygwLjA3LCB7IGFuZ2xlOiAwIH0pLnRvKDAuMDcsIHsgYW5nbGU6IC0xMCB9KVxuICAgICAgICAgICAgLnRvKDAuMSwgeyBhbmdsZTogNyB9KS50bygwLjEsIHsgYW5nbGU6IDAgfSkudG8oMC4xLCB7IGFuZ2xlOiAtNyB9KVxuICAgICAgICAgICAgLnRvKDAuMSwgeyBhbmdsZTogMyB9KS50bygwLjEsIHsgYW5nbGU6IDAgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuXG5cbiAgICBnYW1lRW5kKCkge1xuICAgICAgICBjYy5sb2coXCLmuLjmiI/nu5PmnZ9cIik7XG4gICAgICAgIHRoaXMubWFzay5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMueWV6aUJveC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBhbmltID0gdGhpcy55ZXppQm94LmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBVdGlsc1Rvb2wucGxheVNwKGFuaW0sIFwiNF9tYW5cIiwgZmFsc2UsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSB0aGlzLnllemlCb3guY2hpbGRyZW4ubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlDb21tb25Tb3VuZChzb3VuZC53aW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZURhdGEudXNlckRhdGEubGV2ZWwgKyAxIDw9IGdhbWVEYXRhLmxldmVsQWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lRGF0YS51c2VyRGF0YS5sZXZlbCA9IGdhbWVEYXRhLnVzZXJEYXRhLmxldmVsICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVEYXRhLnN0b3JhZ2VEYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2xvYmFsLmFzc2V0VXRpbHMuc2hvd0RpYWxvZyhkaWFsb2cuZ2FtZW92ZXJfZGlhbG9nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChHbG9iYWwuaW1nSWQgKyAxIDw9IGdhbWVEYXRhLmxldmVsQWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdsb2JhbC5pbWdJZCA9IEdsb2JhbC5pbWdJZCArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRBbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREb3duVGltZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRSZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lRGF0YS51c2VyRGF0YS5pc0hhbGwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoc2NlbmUuaGFsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LCAwLjEgKiBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMC41KTtcbiAgICB9XG5cblxuICAgIC8v6I635Y+W5b2T5YmN5YWz5Y2h55qE5YCS6K6h5pe2XG4gICAgZ2V0RG93blRpbWUoKSB7XG4gICAgICAgIGxldCBsZXZlbCA9IEdsb2JhbC5pbWdJZDtcbiAgICAgICAgbGV0IHRpbWUgPSAwO1xuICAgICAgICBpZiAobGV2ZWwgPj0gMSAmJiBsZXZlbCA8PSA1KSB7XG4gICAgICAgICAgICB0aW1lID0gNSAqIDYwO1xuICAgICAgICB9IGVsc2UgaWYgKGxldmVsID49IDYgJiYgbGV2ZWwgPD0gMTApIHtcbiAgICAgICAgICAgIHRpbWUgPSAzICogNjA7XG4gICAgICAgIH0gZWxzZSBpZiAobGV2ZWwgPj0gMTEgJiYgbGV2ZWwgPD0gMTUpIHtcbiAgICAgICAgICAgIHRpbWUgPSAyICogNjAgKyAzMDtcbiAgICAgICAgfSBlbHNlIGlmIChsZXZlbCA+PSAxNiAmJiBsZXZlbCA8PSAyMCkge1xuICAgICAgICAgICAgdGltZSA9IDIgKiA2MDtcbiAgICAgICAgfSBlbHNlIGlmIChsZXZlbCA+PSAyMSAmJiBsZXZlbCA8PSAyNSkge1xuICAgICAgICAgICAgdGltZSA9IDEgKiA2MCArIDMwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGltZSA9IDEgKiA2MDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGltZTtcbiAgICB9XG5cblxuICAgIC8v5pe26Ze05YiwXG4gICAgdGltZU91dEV2ZW50KCkge1xuICAgICAgICBHbG9iYWwuYXNzZXRVdGlscy5zaG93RGlhbG9nKGRpYWxvZy50aW1lT3V0X2RpYWxvZywge1xuICAgICAgICAgICAgQURjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzaWR1ZVRpbWUgPSA2MDtcbiAgICAgICAgICAgICAgICBnYW1lRGF0YS51c2VyRGF0YS50aXNoaU51bSsrO1xuICAgICAgICAgICAgICAgIGdhbWVEYXRhLnN0b3JhZ2VEYXRhKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VRaVBhb051bSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREb3duVGltZSgpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgcmVzdGFydENhbGxCYWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldEFsbCh0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RG93blRpbWUoKTtcbiAgICAgICAgICAgICAgICBjYy5sb2codGhpcy5pbWdEYXRhLCBcInRoaXMuaW1nRGF0YVwiKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW1nRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmltZ0RhdGFbaV0uaXNGaW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNsaWNrX2JhY2soKSB7XG4gICAgICAgIEdsb2JhbC5hdWRpb1V0aWxzLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIHRoaXMuaXNQYXVzZSA9IHRydWU7XG4gICAgICAgIEdsb2JhbC5hc3NldFV0aWxzLnNob3dEaWFsb2coZGlhbG9nLmNvbmZpcm1FeGl0X2RpYWxvZywgeyBjYWxsYmFjazogKCkgPT4geyB0aGlzLmlzUGF1c2UgPSBmYWxzZSB9IH0pO1xuICAgIH1cblxuXG4gICAgb25DbGlja19wYXVzZSgpIHtcbiAgICAgICAgR2xvYmFsLmF1ZGlvVXRpbHMuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgdGhpcy5pc1BhdXNlID0gdHJ1ZTtcbiAgICAgICAgR2xvYmFsLmFzc2V0VXRpbHMuc2hvd0RpYWxvZyhkaWFsb2cuc2V0dGluZ19kaWFsb2csIHsgaXNHYW1lOiB0cnVlLCBjYWxsYmFjazogKCkgPT4geyB0aGlzLmlzUGF1c2UgPSBmYWxzZSB9IH0pO1xuICAgICAgICAgXG4gICAgfVxuXG4gICAgb25DbGlja190aXNoaSgpIHtcblxuICAgICAgICBHbG9iYWwuYXVkaW9VdGlscy5jb21tb25CdG5DbGljaygpO1xuICAgICAgICBpZiAodGhpcy5pc1RpU2hpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZpbmREYXRhOiBiZWF1dHlEYXRhID0gbnVsbDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmltZ0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pbWdEYXRhW2ldLmlzRmluZCkge1xuICAgICAgICAgICAgICAgIGZpbmREYXRhID0gdGhpcy5pbWdEYXRhW2ldO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFmaW5kRGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdhbWVEYXRhLnVzZXJEYXRhLnRpc2hpTnVtIDw9IDApIHtcbiAgICAgICAgICAgIGNjLmxvZyhcIueci+W5v+WRilwiKVxuXG4gICAgICAgICAgICBnYW1lRGF0YS5zaG93VmlkZW8oKCk9PntcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dUaVNoaShmaW5kRGF0YSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGdhbWVEYXRhLnVzZXJEYXRhLnRpc2hpTnVtID0gZ2FtZURhdGEudXNlckRhdGEudGlzaGlOdW0gLSAxO1xuICAgICAgICBnYW1lRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICB0aGlzLmNoYW5nZVFpUGFvTnVtKCk7XG4gICAgICAgIHRoaXMuc2hvd1RpU2hpKGZpbmREYXRhKTtcbiAgICB9XG5cbiAgICBzaG93VGlTaGkoZmluZERhdGE6IGJlYXV0eURhdGEpIHtcblxuICAgICAgICBpZiAoZmluZERhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuaXNUaVNoaSA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCB0aXNoaSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ2FtZVRpc2hpUHJlZmFiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJ0aXNoaUJveFwiKS5hZGRDaGlsZCh0aXNoaSk7XG5cbiAgICAgICAgICAgICAgICBsZXQgeCA9IGZpbmREYXRhLmNlbnRlclBvcy54ICogdGhpcy5vcmlnaW5hbFNjYWxlO1xuICAgICAgICAgICAgICAgIGxldCB5ID0gMFxuICAgICAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgeSA9IGZpbmREYXRhLmNlbnRlclBvcy55ICogdGhpcy5vcmlnaW5hbFNjYWxlICsgdGhpcy5zZXRJbWdZO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHkgPSBmaW5kRGF0YS5jZW50ZXJQb3MueSAqIHRoaXMub3JpZ2luYWxTY2FsZSAtIHRoaXMuc2V0SW1nWTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGlzaGkuc2V0UG9zaXRpb24oeCwgeSk7XG4gICAgICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRpc2hpKTtcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aXNoaSkudG8oMC41LCB7IHNjYWxlOiAwLjcgfSkudG8oMC41LCB7IHNjYWxlOiAxIH0pLnVuaW9uKCkucmVwZWF0Rm9yZXZlcigpLnN0YXJ0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy/mkq3mlL7pn7PmlYhcbiAgICBwbGF5Q29tbW9uU291bmQoYXVkaW9OYW1lOiBzdHJpbmcsIGxvb3A6IGJvb2xlYW4gPSBmYWxzZSk6IG51bWJlciB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hdWRpb0NsaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hdWRpb0NsaXBzW2ldLm5hbWUgPT0gYXVkaW9OYW1lKSB7XG4gICAgICAgICAgICAgICAgbGV0IGF1ZGlvSUQgPSBHbG9iYWwuYXVkaW9VdGlscy5wbGF5RWZmZWN0KHRoaXMuYXVkaW9DbGlwc1tpXSwgbG9vcCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF1ZGlvSUQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuIl19