"use strict";
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