"use strict";
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