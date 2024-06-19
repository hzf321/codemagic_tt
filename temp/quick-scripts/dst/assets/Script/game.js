
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
        gameData_1.gameData.setGamestop(function () {
            _this.isPause = true;
        });
        gameData_1.gameData.setGamerecovery(function () {
            _this.isPause = false;
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBdUM7QUFDdkMsNENBQWtEO0FBQ2xELHdDQUFtRDtBQUNuRCxzQ0FBd0Q7QUFHbEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBSyxTQUlKO0FBSkQsV0FBSyxTQUFTO0lBQ1YseUNBQUksQ0FBQTtJQUNKLHVDQUFHLENBQUE7SUFDSCw2Q0FBTSxDQUFBO0FBQ1YsQ0FBQyxFQUpJLFNBQVMsS0FBVCxTQUFTLFFBSWI7QUFHRDtJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXVrQkM7UUFwa0JHLFFBQUUsR0FBWSxJQUFJLENBQUM7UUFHbkIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixvQkFBYyxHQUFjLElBQUksQ0FBQztRQUdqQyxtQkFBYSxHQUFjLElBQUksQ0FBQztRQUdoQyxxQkFBZSxHQUFjLElBQUksQ0FBQztRQUdsQyxpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGFBQU8sR0FBaUIsRUFBRSxDQUFDO1FBQzNCLGFBQU8sR0FBVyxHQUFHLENBQUM7UUFDdEIsbUJBQWEsR0FBVyxHQUFHLENBQUM7UUFFNUIsZ0JBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsaUJBQVcsR0FB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QyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNTO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0c7SUExQ0osUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXVrQjVCO0lBQUQsZUFBQztDQXZrQkQsQUF1a0JDLENBdmtCcUMsRUFBRSxDQUFDLFNBQVMsR0F1a0JqRDtrQkF2a0JvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5ld2hhbmQgZnJvbSBcIi4vcHJlZmViL25ld2hhbmRcIjtcbmltcG9ydCB7IGdhbWVEYXRhLCBzb3VuZCB9IGZyb20gXCIuL3Rvb2wvZ2FtZURhdGFcIjtcbmltcG9ydCB7IGJlYXV0eURhdGEsIEdsb2JhbCB9IGZyb20gXCIuL3Rvb2wvZ2xvYmFsXCI7XG5pbXBvcnQgeyBkaWFsb2csIHNjZW5lLCBVdGlsc1Rvb2wgfSBmcm9tIFwiLi90b29sL3V0aWxzXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuZW51bSBHYW1lU3RhdGUge1xuICAgIGZpbmQsICAgICAgIC8v5om+5YiwXG4gICAgZXJyLCAgICAgICAgLy/msqHmib7liLAgICAgXG4gICAgZmluaXNoLCAgICAgLy/mib7liLDph43lpI3nmoQgIFxufVxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYmc6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgb3JpZ2luYWxJbWc6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZmluaXNoSW1nOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRpc2hpX3FpcGFvOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZ2FtZUZpbmRQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGdhbWVFcnJQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGdhbWVUaXNoaVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZ2FtZV90dW93ZWk6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpbWdTaWduQm94OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHllemlCb3g6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxldmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0aW1lQWxsOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHJlZHVjZVRpbWU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbWFzazogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBpbWdEYXRhOiBiZWF1dHlEYXRhW10gPSBbXTtcbiAgICBzZXRJbWdZOiBudW1iZXIgPSAyNTc7XG4gICAgb3JpZ2luYWxTY2FsZTogbnVtYmVyID0gMC41O1xuXG4gICAgeWV6aUFsbE51bTogbnVtYmVyID0gMTA7XG4gICAgeWV6aU5vd051bTogbnVtYmVyID0gMDtcbiAgICByZXNpZHVlVGltZTogbnVtYmVyID0gMDtcblxuICAgIGlzVGlTaGk6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHRpbWVyID0gbnVsbDtcbiAgICBpc1BhdXNlOiBib29sZWFuID0gZmFsc2U7XG4gICAgZmlyc3RFcnI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgYXVkaW9DbGlwczogY2MuQXVkaW9DbGlwW10gPSBbXTtcblxuICAgIG5ld2hhbmROb2RlOiBuZXdoYW5kID0gbnVsbDtcblxuXG4gICAgc3RhcnQoKSB7XG4gICAgXG4gICAgICAgIGdhbWVEYXRhLnNldEdhbWVzdG9wKCgpPT57XG4gICAgICAgICAgICB0aGlzLmlzUGF1c2UgPSB0cnVlO1xuICAgICAgICB9KTtcblxuICAgICAgICBnYW1lRGF0YS5zZXRHYW1lcmVjb3ZlcnkoKCk9PntcbiAgICAgICAgICAgIHRoaXMuaXNQYXVzZSA9IGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuSVBBRCkge1xuICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuQ2FudmFzKS5maXRIZWlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuQ2FudmFzKS5maXRXaWR0aCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZXNldEFsbCgpO1xuICAgICAgICBHbG9iYWwuc2V0c2NlbmVOb2RlKHRoaXMubm9kZSk7XG4gICAgICAgIFV0aWxzVG9vbC5hZGFwdGVyQmcodGhpcy5iZyk7XG5cbiAgICAgICAgdGhpcy5vbkV2ZW50KCk7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB0aGlzLnN0YXJ0RG93blRpbWUoKTtcbiAgICAgICAgdGhpcy5sb2FkUmVzKCk7XG4gICAgICAgIHRoaXMuY2hlY2tOZXdIYW5kKCk7XG5cbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWREaXIoXCJzb3VuZFwiLCBjYy5BdWRpb0NsaXAsIChlcnI6IEVycm9yLCBjbGlwczogY2MuQXVkaW9DbGlwW10pID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIgfHwgIWNjLmlzVmFsaWQodGhpcykpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9DbGlwcyA9IGNsaXBzO1xuICAgICAgICAgICAgdGhpcy5hZGRBdXRvUmVsZWFzZUFzc2V0cyhjbGlwcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRXZlbnQoKSB7XG4gICAgICAgIHRoaXMub3JpZ2luYWxJbWcub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmltZ0V2ZW50LCB0aGlzKTtcbiAgICAgICAgdGhpcy5maW5pc2hJbWcub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmltZ0V2ZW50LCB0aGlzKTtcbiAgICB9XG5cbiAgICByZXNldEFsbChjbGVhckRhdGE/KSB7XG4gICAgICAgIGlmICghY2xlYXJEYXRhKSB7XG4gICAgICAgICAgICB0aGlzLmltZ0RhdGEgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJvcmlnQm94XCIpLmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xuICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJmaW5pc2hCb3hcIikuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcImVyckJveFwiKS5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgdGhpcy5pbWdTaWduQm94LmdldENoaWxkQnlOYW1lKFwidGlzaGlCb3hcIikuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcImxpemlcIikuZGVzdHJveUFsbENoaWxkcmVuKCk7XG5cbiAgICAgICAgdGhpcy5tYXNrLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZpcnN0RXJyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNQYXVzZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5pc1RpU2hpID0gZmFsc2U7XG4gICAgICAgIHRoaXMueWV6aU5vd051bSA9IDA7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGNoZWNrTmV3SGFuZCgpIHtcbiAgICAgICAgaWYgKGdhbWVEYXRhLnVzZXJEYXRhLmlzR3VkaWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcInByZWZlYi9uZXdoYW5kXCIsIGNjLlByZWZhYiwgKGVyciwgcHJlZmFiKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgICAgICBHbG9iYWwuYXNzZXRVdGlscy5iaW5kQXV0b1JlbGVhc2VBc3NldChub2RlLCBwcmVmYWIpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgdGhpcy5uZXdoYW5kTm9kZSA9IG5vZGUuZ2V0Q29tcG9uZW50KG5ld2hhbmQpO1xuICAgICAgICAgICAgdGhpcy5uZXdoYW5kTm9kZS5zaG93ZG9uZzEoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMubGV2ZWwuc3RyaW5nID0gXCJMdlwiICsgR2xvYmFsLmltZ0lkO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMueWV6aUJveC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGFuaW0gPSB0aGlzLnllemlCb3guY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICAgICAgICAgIFV0aWxzVG9vbC5wbGF5U3AoYW5pbSwgXCIxX2FuX3N0b3BcIik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlc2lkdWVUaW1lID0gdGhpcy5nZXREb3duVGltZSgpO1xuXG4gICAgICAgIHRoaXMuY2hhbmdlUWlQYW9OdW0oKTtcblxuICAgICAgICB0aGlzLm1hc2suYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IHRpbWUgPSBVdGlsc1Rvb2wudGltZUNoYW5nZSh0aGlzLnJlc2lkdWVUaW1lKTtcbiAgICAgICAgdGhpcy50aW1lQWxsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGltZTtcbiAgICAgICAgdGhpcy5yZWR1Y2VUaW1lLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuXG4gICAgLy/lvIDlkK/lgJLorqHml7ZcbiAgICBzdGFydERvd25UaW1lKCkge1xuICAgICAgICBpZiAodGhpcy5yZXNpZHVlVGltZSA+IDApIHtcbiAgICAgICAgICAgIGxldCB0aW1lID0gVXRpbHNUb29sLnRpbWVDaGFuZ2UodGhpcy5yZXNpZHVlVGltZSk7XG4gICAgICAgICAgICB0aGlzLnRpbWVBbGwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aW1lO1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IHRoaXMuc2NoZWR1bGUodGhpcy5kb3duVGltZUV2ZW50LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRvd25UaW1lRXZlbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUGF1c2UpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzaWR1ZVRpbWUtLTtcbiAgICAgICAgbGV0IHRpbWUgPSBVdGlsc1Rvb2wudGltZUNoYW5nZSh0aGlzLnJlc2lkdWVUaW1lKTtcbiAgICAgICAgdGhpcy50aW1lQWxsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGltZTtcbiAgICAgICAgaWYgKHRoaXMucmVzaWR1ZVRpbWUgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuZG93blRpbWVFdmVudCk7XG4gICAgICAgICAgICB0aGlzLnRpbWVPdXRFdmVudCgpO1xuICAgICAgICAgICAgdGhpcy5wbGF5Q29tbW9uU291bmQoc291bmQuZmFpbCk7XG4gICAgICAgICAgICBjYy5sb2coXCLml7bpl7TliLDkuoZcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlcnJSZWR1Y2VUaW1lKCkge1xuICAgICAgICBpZiAoIXRoaXMuZmlyc3RFcnIpIHJldHVyblxuICAgICAgICBsZXQgcG9zWSA9IHRoaXMudGltZUFsbC55O1xuICAgICAgICBsZXQgcmVkdWNlVGltZSA9IDMwO1xuICAgICAgICB0aGlzLnJlZHVjZVRpbWUueSA9IHBvc1k7XG4gICAgICAgIHRoaXMucmVkdWNlVGltZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlZHVjZVRpbWUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIi1cIiArIHJlZHVjZVRpbWU7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLnJlZHVjZVRpbWUpO1xuICAgICAgICBjYy50d2Vlbih0aGlzLnJlZHVjZVRpbWUpLnRvKDAuMTUsIHsgc2NhbGU6IDEuMiB9KS50bygwLjE1LCB7IHNjYWxlOiAxIH0pLnRvKDEsIHsgb3BhY2l0eTogMjU1LCB5OiBwb3NZIC0gMjUgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlZHVjZVRpbWUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG5cbiAgICAgICAgdGhpcy5yZXNpZHVlVGltZSAtPSByZWR1Y2VUaW1lO1xuICAgICAgICBpZiAodGhpcy5yZXNpZHVlVGltZSA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVBbGwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIjAwOjAwXCI7XG4gICAgICAgICAgICB0aGlzLnBsYXlDb21tb25Tb3VuZChzb3VuZC5mYWlsKTtcbiAgICAgICAgICAgIGNjLmxvZyhcIuaXtumXtOWIsOS6hlwiKTtcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmRvd25UaW1lRXZlbnQpO1xuICAgICAgICAgICAgdGhpcy50aW1lT3V0RXZlbnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0aW1lID0gVXRpbHNUb29sLnRpbWVDaGFuZ2UodGhpcy5yZXNpZHVlVGltZSk7XG4gICAgICAgICAgICB0aGlzLnRpbWVBbGwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aW1lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlUWlQYW9OdW0oKSB7XG4gICAgICAgIGlmIChnYW1lRGF0YS51c2VyRGF0YS50aXNoaU51bSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMudGlzaGlfcWlwYW8uZ2V0Q2hpbGRCeU5hbWUoXCJhZF9sYWJlbFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudGlzaGlfcWlwYW8uZ2V0Q2hpbGRCeU5hbWUoXCJudW1fbGFiZWxcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudGlzaGlfcWlwYW8uZ2V0Q2hpbGRCeU5hbWUoXCJudW1fbGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBnYW1lRGF0YS51c2VyRGF0YS50aXNoaU51bS50b1N0cmluZygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aXNoaV9xaXBhby5nZXRDaGlsZEJ5TmFtZShcImFkX2xhYmVsXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnRpc2hpX3FpcGFvLmdldENoaWxkQnlOYW1lKFwibnVtX2xhYmVsXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZFJlcygpIHtcbiAgICAgICAgR2xvYmFsLmFzc2V0VXRpbHMubG9hZFNwcml0ZShcIm9yaWdpbmFsSW1nL1wiICsgR2xvYmFsLmltZ0lkICsgXCItb1wiLCB0aGlzLm9yaWdpbmFsSW1nLmdldENvbXBvbmVudChjYy5TcHJpdGUpKTtcblxuICAgICAgICBHbG9iYWwuYXNzZXRVdGlscy5sb2FkU3ByaXRlKFwiZmluaXNoSW1nL1wiICsgR2xvYmFsLmltZ0lkICsgXCItZlwiLCB0aGlzLmZpbmlzaEltZy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSk7XG5cbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJpbWdKc29uL2xldmVsXCIgKyBHbG9iYWwuaW1nSWQsIGNjLkpzb25Bc3NldCwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2MubG9nKGVycilcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDojrflj5bliLAgSnNvbiDmlbDmja5cbiAgICAgICAgICAgIEdsb2JhbC5hc3NldFV0aWxzLmJpbmRBdXRvUmVsZWFzZUFzc2V0KHRoaXMubm9kZSwgcmVzKTtcbiAgICAgICAgICAgIGNvbnN0IGpzb25EYXRhID0gcmVzLmpzb247XG4gICAgICAgICAgICBpZiAoanNvbkRhdGEgJiYganNvbkRhdGEucGF0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW1nRGF0YSA9IGpzb25EYXRhLnBhdGg7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmltZ0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWdEYXRhW2ldLmlzRmluZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYy5sb2codGhpcy5pbWdEYXRhLCBcInRoaXMuaW1nRGF0YSBcIik7XG4gICAgICAgICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmltZ0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgbGV0IGRhdGEgPSB0aGlzLmltZ0RhdGFbaV07XG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuZmluZFNpZ25TdWNjKGNjLnYzKGRhdGEuY2VudGVyUG9zLngsIGRhdGEuY2VudGVyUG9zLnkpKVxuICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pbWdEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGxldCBkYXRhID0gdGhpcy5pbWdEYXRhW2ldO1xuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmZpbmRTaWduU3VjYyhjYy52MyhkYXRhLmNlbnRlclBvcy54LCBkYXRhLmNlbnRlclBvcy55KSlcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICB5ZXppTGlnaHQocG9zOiBjYy5WZWMzKSB7XG4gICAgICAgIGxldCBhbmltID0gdGhpcy55ZXppQm94LmNoaWxkcmVuW3RoaXMueWV6aU5vd051bSAtIDFdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG5cbiAgICAgICAgbGV0IHR1b3dlaSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ2FtZV90dW93ZWkpO1xuICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJsaXppXCIpLmFkZENoaWxkKHR1b3dlaSk7XG4gICAgICAgIHR1b3dlaS5zZXRQb3NpdGlvbihwb3MpO1xuXG4gICAgICAgIGxldCBjaGFuZ2VQb3MgPSBVdGlsc1Rvb2wuY2hhbmdlUG9zKGFuaW0ubm9kZSwgdHVvd2VpKTtcblxuICAgICAgICBsZXQgdGltZSA9IDAuNTtcbiAgICAgICAgaWYgKHBvcy55IDwgMCkge1xuICAgICAgICAgICAgdGltZSA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHR1b3dlaSk7XG4gICAgICAgIGNjLnR3ZWVuKHR1b3dlaSkudG8odGltZSwgeyBwb3NpdGlvbjogY2hhbmdlUG9zIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHR1b3dlaS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9LCAwLjMpO1xuICAgICAgICAgICAgVXRpbHNUb29sLnBsYXlTcChhbmltLCBcIjJfYmlhbmxpYW5nXCIpO1xuICAgICAgICAgICAgVXRpbHNUb29sLmFkZFNlcXVlbmNlU3AoYW5pbSwgXCIzX2xpYW5nX3N0b3BcIik7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgZmluZFNpZ25TdWNjKHRhcmdldFBvczogY2MuVmVjMywgZmluZERhdGE6YmVhdXR5RGF0YSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgICAgICAgbGV0IGdhbWVGaW5kID0gY2MuaW5zdGFudGlhdGUodGhpcy5nYW1lRmluZFByZWZhYik7XG4gICAgICAgICAgICBsZXQgaW1nWSA9IDA7XG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgaW1nWSA9IHRhcmdldFBvcy55ICogdGhpcy5vcmlnaW5hbFNjYWxlICsgdGhpcy5zZXRJbWdZO1xuICAgICAgICAgICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcIm9yaWdCb3hcIikuYWRkQ2hpbGQoZ2FtZUZpbmQpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcImZpbmlzaEJveFwiKS5hZGRDaGlsZChnYW1lRmluZClcbiAgICAgICAgICAgICAgICBpbWdZID0gdGFyZ2V0UG9zLnkgKiB0aGlzLm9yaWdpbmFsU2NhbGUgLSB0aGlzLnNldEltZ1k7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgY2VudGVyUG9zID0gY2MudjModGFyZ2V0UG9zLnggKiB0aGlzLm9yaWdpbmFsU2NhbGUsIGltZ1kpO1xuXG4gICAgICAgICAgICBnYW1lRmluZC5zZXRQb3NpdGlvbihjZW50ZXJQb3MpO1xuXG4gICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoZ2FtZUZpbmQpO1xuICAgICAgICAgICAgZ2FtZUZpbmQuc2NhbGUgPSAwO1xuXG5cbiAgICAgICAgICAgIGNjLnR3ZWVuKGdhbWVGaW5kKS50bygwLjMsIHsgc2NhbGU6IDEuNSB9KS50bygwLjEsIHsgc2NhbGU6IDEuMyB9KS5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmluZFNpZ25FcnIodGFyZ2V0UG9zOiBjYy5WZWMzKSB7XG4gICAgICAgIGxldCBjbGlja1BvcyA9IHRhcmdldFBvcztcbiAgICAgICAgbGV0IGdhbWVFcnIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdhbWVFcnJQcmVmYWIpO1xuICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJlcnJCb3hcIikuYWRkQ2hpbGQoZ2FtZUVycik7XG4gICAgICAgIGdhbWVFcnIuc2V0UG9zaXRpb24oY2xpY2tQb3MpO1xuICAgICAgICB0aGlzLmVyclNpZ25BbmltKGdhbWVFcnIpO1xuXG4gICAgICAgIGxldCBvdGhlckVyclNpZ246IGNjLk5vZGUgPSBudWxsO1xuICAgICAgICBpZiAoY2xpY2tQb3MueSA+IDApIHtcbiAgICAgICAgICAgIG90aGVyRXJyU2lnbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ2FtZUVyclByZWZhYik7XG4gICAgICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJlcnJCb3hcIikuYWRkQ2hpbGQob3RoZXJFcnJTaWduKTtcbiAgICAgICAgICAgIG90aGVyRXJyU2lnbi5zZXRQb3NpdGlvbihjYy52MyhjbGlja1Bvcy54LCBjbGlja1Bvcy55IC0gKHRoaXMuc2V0SW1nWSAqIDIpKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvdGhlckVyclNpZ24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdhbWVFcnJQcmVmYWIpO1xuICAgICAgICAgICAgdGhpcy5pbWdTaWduQm94LmdldENoaWxkQnlOYW1lKFwiZXJyQm94XCIpLmFkZENoaWxkKG90aGVyRXJyU2lnbik7XG4gICAgICAgICAgICBvdGhlckVyclNpZ24uc2V0UG9zaXRpb24oY2MudjMoY2xpY2tQb3MueCwgY2xpY2tQb3MueSArICh0aGlzLnNldEltZ1kgKiAyKSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvdGhlckVyclNpZ24pIHtcbiAgICAgICAgICAgIHRoaXMuZXJyU2lnbkFuaW0ob3RoZXJFcnJTaWduKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGltZ0V2ZW50KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XG4gICAgICAgIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xuICAgICAgICBsZXQgY2xpY2tQb3MgPSB0aGlzLmltZ1NpZ25Cb3guY29udmVydFRvTm9kZVNwYWNlQVIoY2MudjMocG9zLngsIHBvcy55KSk7XG4gICAgICAgIC8vIHRoaXMuZmluZFNpZ25FcnIoY2xpY2tQb3MpO1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY2hlY2tJbWdTaWduKGNsaWNrUG9zKTtcbiAgICAgICAgaWYgKGRhdGEudHlwZSA9PSBHYW1lU3RhdGUuZmluZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNUaVNoaSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNUaVNoaSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcInRpc2hpQm94XCIpLmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy55ZXppTm93TnVtID0gdGhpcy55ZXppTm93TnVtICsgMTtcbiAgICAgICAgICAgIHRoaXMuZmluZFNpZ25TdWNjKGNjLnYzKGRhdGEuZmluZERhdGEuY2VudGVyUG9zLngsIGRhdGEuZmluZERhdGEuY2VudGVyUG9zLnkpLCBkYXRhLmZpbmREYXRhKTtcbiAgICAgICAgICAgIHRoaXMueWV6aUxpZ2h0KGNsaWNrUG9zKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMubmV3aGFuZE5vZGUgJiYgdGhpcy55ZXppTm93TnVtID09IDEpIHtcbiAgICAgICAgICAgICAgICBpZiggdGhpcy5uZXdoYW5kTm9kZSl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV3aGFuZE5vZGUuaGlkZWRvbmcxKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV3aGFuZE5vZGUuc2hvd2RvbmcyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubmV3aGFuZE5vZGUgJiYgdGhpcy55ZXppTm93TnVtID09IDIpIHtcbiAgICAgICAgICAgICAgICBpZiggdGhpcy5uZXdoYW5kTm9kZSl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV3aGFuZE5vZGUubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV3aGFuZE5vZGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBnYW1lRGF0YS51c2VyRGF0YS5pc0d1ZGllID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBnYW1lRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wbGF5Q29tbW9uU291bmQoc291bmQuY29ycmVjdCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnllemlOb3dOdW0gPj0gdGhpcy55ZXppQWxsTnVtKSB7ICAgICAgIC8v6IOc5YipIOa4uOaIj+e7k+adn1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUVuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGRhdGEudHlwZSA9PSBHYW1lU3RhdGUuZXJyKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXlDb21tb25Tb3VuZChzb3VuZC5lcnIpO1xuICAgICAgICAgICAgdGhpcy5lcnJSZWR1Y2VUaW1lKCk7XG4gICAgICAgICAgICB0aGlzLmZpbmRTaWduRXJyKGNsaWNrUG9zKTtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RFcnIgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wbGF5Q29tbW9uU291bmQoc291bmQuZXJyKTtcbiAgICAgICAgICAgIHRoaXMuZXJyUmVkdWNlVGltZSgpO1xuICAgICAgICAgICAgdGhpcy5maW5kU2lnbkVycihjbGlja1Bvcyk7XG4gICAgICAgICAgICB0aGlzLmZpcnN0RXJyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrSW1nU2lnbih0YXJnZXRQb3M6IGNjLlZlYzMpIHtcbiAgICAgICAgbGV0IHR5cGU6IEdhbWVTdGF0ZSA9IG51bGw7XG4gICAgICAgIGxldCBmaW5kRGF0YSA9IG51bGw7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pbWdEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuaW1nRGF0YVtpXTtcbiAgICAgICAgICAgIGxldCB4ID0gZGF0YS5jZW50ZXJQb3MueCAqIHRoaXMub3JpZ2luYWxTY2FsZTtcbiAgICAgICAgICAgIGxldCB5ID0gMDtcbiAgICAgICAgICAgIGlmICh0YXJnZXRQb3MueSA+IDApIHtcbiAgICAgICAgICAgICAgICB5ID0gZGF0YS5jZW50ZXJQb3MueSAqIHRoaXMub3JpZ2luYWxTY2FsZSArIHRoaXMuc2V0SW1nWTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgeSA9IGRhdGEuY2VudGVyUG9zLnkgKiB0aGlzLm9yaWdpbmFsU2NhbGUgLSB0aGlzLnNldEltZ1k7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB3aWQgPSBkYXRhLmJsb2NrU2l6ZS53aWQgKiB0aGlzLm9yaWdpbmFsU2NhbGU7XG4gICAgICAgICAgICBsZXQgaGVpID0gZGF0YS5ibG9ja1NpemUuaGVpICogdGhpcy5vcmlnaW5hbFNjYWxlO1xuXG4gICAgICAgICAgICAvLyBsZXQgdGVzdGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnRlc3RpdGVtUHJlZmFiKTtcbiAgICAgICAgICAgIC8vIHRoaXMuaW1nU2lnbkJveC5hZGRDaGlsZCh0ZXN0aXRlbSk7XG4gICAgICAgICAgICAvLyB0ZXN0aXRlbS5zZXRQb3NpdGlvbihjYy52Myh4LCB5KSk7XG4gICAgICAgICAgICAvLyB0ZXN0aXRlbS53aWR0aCA9IHdpZDtcbiAgICAgICAgICAgIC8vIHRlc3RpdGVtLmhlaWdodCA9IGhlaTtcblxuICAgICAgICAgICAgaWYgKCFkYXRhLmlzRmluZCAmJiB0YXJnZXRQb3MueCA8PSB4ICsgd2lkIC8gMiAmJiB0YXJnZXRQb3MueCA+PSB4IC0gd2lkIC8gMlxuICAgICAgICAgICAgICAgICYmIHRhcmdldFBvcy55IDw9IHkgKyBoZWkgLyAyICYmIHRhcmdldFBvcy55ID49IHkgLSBoZWkgLyAyKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhLmlzRmluZCkge1xuICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCLmib7liLDkuoZcIik7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBHYW1lU3RhdGUuZmluZDtcbiAgICAgICAgICAgICAgICAgICAgZmluZERhdGEgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmlzRmluZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IEdhbWVTdGF0ZS5maW5pc2g7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcIuaJvuWIsOmHjeWkjeeahOS6hlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdHlwZSwgZmluZERhdGEgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0eXBlID0gR2FtZVN0YXRlLmVycjtcbiAgICAgICAgICAgICAgICBjYy5sb2coXCLmsqHmib7liLBcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyB0eXBlLCBmaW5kRGF0YSB9XG4gICAgfVxuXG5cbiAgICBlcnJTaWduQW5pbShub2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChub2RlKTtcbiAgICAgICAgY2MudHdlZW4obm9kZSlcbiAgICAgICAgICAgIC50bygwLjA1LCB7IGFuZ2xlOiAxNSB9KS50bygwLjA1LCB7IGFuZ2xlOiAwIH0pLnRvKDAuMDUsIHsgYW5nbGU6IC0xNSB9KVxuICAgICAgICAgICAgLnRvKDAuMDcsIHsgYW5nbGU6IDEwIH0pLnRvKDAuMDcsIHsgYW5nbGU6IDAgfSkudG8oMC4wNywgeyBhbmdsZTogLTEwIH0pXG4gICAgICAgICAgICAudG8oMC4xLCB7IGFuZ2xlOiA3IH0pLnRvKDAuMSwgeyBhbmdsZTogMCB9KS50bygwLjEsIHsgYW5nbGU6IC03IH0pXG4gICAgICAgICAgICAudG8oMC4xLCB7IGFuZ2xlOiAzIH0pLnRvKDAuMSwgeyBhbmdsZTogMCB9KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG5cblxuICAgIGdhbWVFbmQoKSB7XG4gICAgICAgIGNjLmxvZyhcIua4uOaIj+e7k+adn1wiKTtcbiAgICAgICAgdGhpcy5tYXNrLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy55ZXppQm94LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFuaW0gPSB0aGlzLnllemlCb3guY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFV0aWxzVG9vbC5wbGF5U3AoYW5pbSwgXCI0X21hblwiLCBmYWxzZSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IHRoaXMueWV6aUJveC5jaGlsZHJlbi5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUNvbW1vblNvdW5kKHNvdW5kLndpbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lRGF0YS51c2VyRGF0YS5sZXZlbCArIDEgPD0gZ2FtZURhdGEubGV2ZWxBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVEYXRhLnVzZXJEYXRhLmxldmVsID0gZ2FtZURhdGEudXNlckRhdGEubGV2ZWwgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZURhdGEuc3RvcmFnZURhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHbG9iYWwuYXNzZXRVdGlscy5zaG93RGlhbG9nKGRpYWxvZy5nYW1lb3Zlcl9kaWFsb2csIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEdsb2JhbC5pbWdJZCArIDEgPD0gZ2FtZURhdGEubGV2ZWxBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2xvYmFsLmltZ0lkID0gR2xvYmFsLmltZ0lkICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldEFsbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydERvd25UaW1lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFJlcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVEYXRhLnVzZXJEYXRhLmlzSGFsbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVEYXRhLnN0b3JhZ2VEYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShzY2VuZS5oYWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sIDAuMSAqIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAwLjUpO1xuICAgIH1cblxuXG4gICAgLy/ojrflj5blvZPliY3lhbPljaHnmoTlgJLorqHml7ZcbiAgICBnZXREb3duVGltZSgpIHtcbiAgICAgICAgbGV0IGxldmVsID0gR2xvYmFsLmltZ0lkO1xuICAgICAgICBsZXQgdGltZSA9IDA7XG4gICAgICAgIGlmIChsZXZlbCA+PSAxICYmIGxldmVsIDw9IDUpIHtcbiAgICAgICAgICAgIHRpbWUgPSA1ICogNjA7XG4gICAgICAgIH0gZWxzZSBpZiAobGV2ZWwgPj0gNiAmJiBsZXZlbCA8PSAxMCkge1xuICAgICAgICAgICAgdGltZSA9IDMgKiA2MDtcbiAgICAgICAgfSBlbHNlIGlmIChsZXZlbCA+PSAxMSAmJiBsZXZlbCA8PSAxNSkge1xuICAgICAgICAgICAgdGltZSA9IDIgKiA2MCArIDMwO1xuICAgICAgICB9IGVsc2UgaWYgKGxldmVsID49IDE2ICYmIGxldmVsIDw9IDIwKSB7XG4gICAgICAgICAgICB0aW1lID0gMiAqIDYwO1xuICAgICAgICB9IGVsc2UgaWYgKGxldmVsID49IDIxICYmIGxldmVsIDw9IDI1KSB7XG4gICAgICAgICAgICB0aW1lID0gMSAqIDYwICsgMzA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aW1lID0gMSAqIDYwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aW1lO1xuICAgIH1cblxuXG4gICAgLy/ml7bpl7TliLBcbiAgICB0aW1lT3V0RXZlbnQoKSB7XG4gICAgICAgIEdsb2JhbC5hc3NldFV0aWxzLnNob3dEaWFsb2coZGlhbG9nLnRpbWVPdXRfZGlhbG9nLCB7XG4gICAgICAgICAgICBBRGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNpZHVlVGltZSA9IDYwO1xuICAgICAgICAgICAgICAgIGdhbWVEYXRhLnVzZXJEYXRhLnRpc2hpTnVtKys7XG4gICAgICAgICAgICAgICAgZ2FtZURhdGEuc3RvcmFnZURhdGEoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVFpUGFvTnVtKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydERvd25UaW1lKCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICByZXN0YXJ0Q2FsbEJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0QWxsKHRydWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREb3duVGltZSgpO1xuICAgICAgICAgICAgICAgIGNjLmxvZyh0aGlzLmltZ0RhdGEsIFwidGhpcy5pbWdEYXRhXCIpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pbWdEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1nRGF0YVtpXS5pc0ZpbmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2xpY2tfYmFjaygpIHtcbiAgICAgICAgR2xvYmFsLmF1ZGlvVXRpbHMuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgdGhpcy5pc1BhdXNlID0gdHJ1ZTtcbiAgICAgICAgR2xvYmFsLmFzc2V0VXRpbHMuc2hvd0RpYWxvZyhkaWFsb2cuY29uZmlybUV4aXRfZGlhbG9nLCB7IGNhbGxiYWNrOiAoKSA9PiB7IHRoaXMuaXNQYXVzZSA9IGZhbHNlIH0gfSk7XG4gICAgfVxuXG5cbiAgICBvbkNsaWNrX3BhdXNlKCkge1xuICAgICAgICBHbG9iYWwuYXVkaW9VdGlscy5jb21tb25CdG5DbGljaygpO1xuICAgICAgICB0aGlzLmlzUGF1c2UgPSB0cnVlO1xuICAgICAgICBHbG9iYWwuYXNzZXRVdGlscy5zaG93RGlhbG9nKGRpYWxvZy5zZXR0aW5nX2RpYWxvZywgeyBpc0dhbWU6IHRydWUsIGNhbGxiYWNrOiAoKSA9PiB7IHRoaXMuaXNQYXVzZSA9IGZhbHNlIH0gfSk7XG4gICAgICAgICBcbiAgICB9XG5cbiAgICBvbkNsaWNrX3Rpc2hpKCkge1xuXG4gICAgICAgIEdsb2JhbC5hdWRpb1V0aWxzLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIGlmICh0aGlzLmlzVGlTaGkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZmluZERhdGE6IGJlYXV0eURhdGEgPSBudWxsO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW1nRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmltZ0RhdGFbaV0uaXNGaW5kKSB7XG4gICAgICAgICAgICAgICAgZmluZERhdGEgPSB0aGlzLmltZ0RhdGFbaV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWZpbmREYXRhKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2FtZURhdGEudXNlckRhdGEudGlzaGlOdW0gPD0gMCkge1xuICAgICAgICAgICAgY2MubG9nKFwi55yL5bm/5ZGKXCIpXG5cbiAgICAgICAgICAgIGdhbWVEYXRhLnNob3dWaWRlbygoKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RpU2hpKGZpbmREYXRhKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZ2FtZURhdGEudXNlckRhdGEudGlzaGlOdW0gPSBnYW1lRGF0YS51c2VyRGF0YS50aXNoaU51bSAtIDE7XG4gICAgICAgIGdhbWVEYXRhLnN0b3JhZ2VEYXRhKCk7XG4gICAgICAgIHRoaXMuY2hhbmdlUWlQYW9OdW0oKTtcbiAgICAgICAgdGhpcy5zaG93VGlTaGkoZmluZERhdGEpO1xuICAgIH1cblxuICAgIHNob3dUaVNoaShmaW5kRGF0YTogYmVhdXR5RGF0YSkge1xuXG4gICAgICAgIGlmIChmaW5kRGF0YSkge1xuICAgICAgICAgICAgdGhpcy5pc1RpU2hpID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRpc2hpID0gY2MuaW5zdGFudGlhdGUodGhpcy5nYW1lVGlzaGlQcmVmYWIpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcInRpc2hpQm94XCIpLmFkZENoaWxkKHRpc2hpKTtcblxuICAgICAgICAgICAgICAgIGxldCB4ID0gZmluZERhdGEuY2VudGVyUG9zLnggKiB0aGlzLm9yaWdpbmFsU2NhbGU7XG4gICAgICAgICAgICAgICAgbGV0IHkgPSAwXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB5ID0gZmluZERhdGEuY2VudGVyUG9zLnkgKiB0aGlzLm9yaWdpbmFsU2NhbGUgKyB0aGlzLnNldEltZ1k7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgeSA9IGZpbmREYXRhLmNlbnRlclBvcy55ICogdGhpcy5vcmlnaW5hbFNjYWxlIC0gdGhpcy5zZXRJbWdZO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aXNoaS5zZXRQb3NpdGlvbih4LCB5KTtcbiAgICAgICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGlzaGkpO1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRpc2hpKS50bygwLjUsIHsgc2NhbGU6IDAuNyB9KS50bygwLjUsIHsgc2NhbGU6IDEgfSkudW5pb24oKS5yZXBlYXRGb3JldmVyKCkuc3RhcnQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvL+aSreaUvumfs+aViFxuICAgIHBsYXlDb21tb25Tb3VuZChhdWRpb05hbWU6IHN0cmluZywgbG9vcDogYm9vbGVhbiA9IGZhbHNlKTogbnVtYmVyIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmF1ZGlvQ2xpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmF1ZGlvQ2xpcHNbaV0ubmFtZSA9PSBhdWRpb05hbWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgYXVkaW9JRCA9IEdsb2JhbC5hdWRpb1V0aWxzLnBsYXlFZmZlY3QodGhpcy5hdWRpb0NsaXBzW2ldLCBsb29wKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXVkaW9JRDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iXX0=