
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
    GameDataClass.prototype.setGamestop = function (func) {
        window['gamestop'] = func;
    };
    GameDataClass.prototype.setGamerecovery = function (func) {
        window['gamerecovery'] = func;
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
//游戏暂停
window['gamestop'] = function () {
};
//游戏恢复
window['gamerecovery'] = function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9nYW1lRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrQ0FBOEM7QUFFOUMsSUFBSSxlQUFlLEdBQWUsSUFBSSxDQUFDO0FBQ3ZDLElBQUksYUFBYSxHQUFlLElBQUksQ0FBQztBQUNyQztJQVlJO1FBTUEsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixhQUFRLEdBQVE7WUFDWixRQUFRLEVBQUUsS0FBSztZQUNmLFFBQVEsRUFBRSxDQUFDO1lBQ1gsS0FBSyxFQUFFLENBQUM7WUFDUixNQUFNLEVBQUUsS0FBSztZQUNiLE9BQU8sRUFBRSxLQUFLO1lBQ2QsWUFBWSxFQUFFLEtBQUs7U0FDdEIsQ0FBQztRQWJFLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQzNCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBWmEseUJBQVcsR0FBekI7UUFDSSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztTQUN4QztRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBbUJELG1DQUFXLEdBQVg7UUFDSSwyQkFBWSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBR0Qsc0NBQWMsR0FBZCxVQUFlLEVBQWM7UUFDekIsTUFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUMvQixNQUFNLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFHRCxLQUFLO0lBQ0wsaUNBQVMsR0FBVCxVQUFVLFFBQW9CO1FB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Q3JCLElBQUk7SUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLHdEQUF3RCxDQUFDLENBQUE7SUFDckUsTUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUE7QUFDN0IsQ0FBQyxDQUFBO0FBR0QsTUFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFHO0FBRTFCLENBQUMsQ0FBQTtBQUdELE1BQU07QUFDTixNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUc7QUFFckIsQ0FBQyxDQUFBO0FBR0QsTUFBTTtBQUNOLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRztBQUV6QixDQUFDLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi9nbG9iYWxcIjtcbmltcG9ydCB7IFN0b3JhZ2VVdGlscyB9IGZyb20gXCIuL1N0b3JhZ2VVdGlsc1wiO1xuXG5sZXQgb25DbG9zZUZpbmlzaENiOiAoKSA9PiB2b2lkID0gbnVsbDtcbmxldCBvbkNsb3NlZmFpbENiOiAoKSA9PiB2b2lkID0gbnVsbDtcbmNsYXNzIEdhbWVEYXRhQ2xhc3Mge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBHYW1lRGF0YUNsYXNzID0gbnVsbDtcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogR2FtZURhdGFDbGFzcyB7XG4gICAgICAgIGlmICh0aGlzLl9pbnN0YW5jZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBHYW1lRGF0YUNsYXNzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNjLmdhbWUub24oY2MuZ2FtZS5FVkVOVF9ISURFLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2VEYXRhKCk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH1cblxuICAgIGxldmVsQWxsOiBudW1iZXIgPSAzMDtcbiAgICB1c2VyRGF0YTogYW55ID0ge1xuICAgICAgICBpc0NsYXVzZTogZmFsc2UsICAgIC8v5piv5ZCm5omT5byA6L+H6ZqQ56eB5Y2P6K6uICAgIFxuICAgICAgICB0aXNoaU51bTogMSwgICAgICAgIC8v5o+Q56S65qyh5pWwXG4gICAgICAgIGxldmVsOiAxLCAgICAgICAgICAgLy/lvZPliY3lhbPljaFcbiAgICAgICAgaXNIYWxsOiBmYWxzZSwgICAgICAvL+aYr+WQpui/lOWbnui/h+Wkp+WOhVxuICAgICAgICBpc0d1ZGllOiBmYWxzZSwgICAgICAvL+aYr+WQpuaJk+W8gOi/h+aWsOaJi+W8leWvvFxuICAgICAgICBmaW5pc2hMZXZlbDU6IGZhbHNlLCAgLy/mmK/lkKblrozmiJDov4fnrKw15YWzXG4gICAgfTtcblxuICAgIHN0b3JhZ2VEYXRhKCkge1xuICAgICAgICBTdG9yYWdlVXRpbHMuc2V0U3RvcmFnZUpTT04oc3RvcmFnZS5nYW1lZGF0YSwgdGhpcy51c2VyRGF0YSk7XG4gICAgfVxuXG5cbiAgICBzZXRWaWRlb0ZhaWxDYihjYjogKCkgPT4gdm9pZCkge1xuICAgICAgICB3aW5kb3dbJ29uQ2xvc2VmYWlsQ2InXSA9IG51bGw7XG4gICAgICAgIHdpbmRvd1snb25DbG9zZWZhaWxDYiddID0gY2I7XG4gICAgfVxuXG4gXG4gICAgLy/nnIvlub/lkYpcbiAgICBzaG93VmlkZW8oZmluaXNoQ2I6ICgpID0+IHZvaWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJhbmRyb2lkLS0tLS0tLS0tLS0t55yL5bm/5ZGKXCIpXG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUgJiYgY2Muc3lzLk9TX0FORFJPSUQgPT0gY2Muc3lzLm9zKSB7XG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJzaG93U2hpUGluZ1wiLCBcIigpVlwiKTtcbiAgICAgICAgICAgIG9uQ2xvc2VGaW5pc2hDYiA9IG51bGw7XG4gICAgICAgICAgICBvbkNsb3NlRmluaXNoQ2IgPSBmaW5pc2hDYjtcbiAgICAgICAgfSBlbHNlIGlmIChjYy5zeXMuaXNOYXRpdmUgJiYgY2Muc3lzLk9TX0lPUyA9PSBjYy5zeXMub3MpIHtcblxuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIlVuaXR5TWdyXCIsIFwibG9hZFJld2FyZFwiKTsvL+WFqOWxj+inhumikTtcbiAgICAgICAgICAgIHdpbmRvd1snb25DbG9zZUZpbmlzaENiJ10gPSBudWxsO1xuICAgICAgICAgICAgd2luZG93WydvbkNsb3NlRmluaXNoQ2InXSA9IGZpbmlzaENiO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmaW5pc2hDYigpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvL+aJk+W8gGJhbm5lclxuICAgIHNob3dCYW5uZXIoKSB7XG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUgJiYgY2Muc3lzLk9TX0FORFJPSUQgPT0gY2Muc3lzLm9zKSB7XG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJzaG93YmFubmVyXCIsIFwiKClWXCIpO1xuICAgICAgICB9ZWxzZSBpZiAoY2Muc3lzLmlzTmF0aXZlICYmIGNjLnN5cy5PU19JT1MgPT0gY2Muc3lzLm9zKSB7XG5cbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICAvL+WFs+mXrWJhbm5lclxuICAgIGNsb3NlQmFubmVyKCkge1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlICYmIGNjLnN5cy5PU19BTkRST0lEID09IGNjLnN5cy5vcykge1xuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwiaGlkZWJhbm5lclwiLCBcIigpVlwiKTtcbiAgICAgICAgfWVsc2UgaWYgKGNjLnN5cy5pc05hdGl2ZSAmJiBjYy5zeXMuT1NfSU9TID09IGNjLnN5cy5vcykge1xuXG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgLy/miZPlvIDmj5LlsY9cbiAgICBzaG93SW50ZXJzdCgpIHtcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSAmJiBjYy5zeXMuT1NfQU5EUk9JRCA9PSBjYy5zeXMub3MpIHtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcInNob3dDaGFwaW5nXCIsIFwiKClWXCIpO1xuICAgICAgICB9ZWxzZSBpZiAoY2Muc3lzLmlzTmF0aXZlICYmIGNjLnN5cy5PU19JT1MgPT0gY2Muc3lzLm9zKSB7XG5cbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICAvL+aJk+W8gOivhOWIhlxuICAgIHNob3dQaW5nRmVuKCkge1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlICYmIGNjLnN5cy5PU19BTkRST0lEID09IGNjLnN5cy5vcykge1xuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwib3BlblBpbmdGZW5cIiwgXCIoKVZcIik7XG4gICAgICAgIH1lbHNlIGlmIChjYy5zeXMuaXNOYXRpdmUgJiYgY2Muc3lzLk9TX0lPUyA9PSBjYy5zeXMub3MpIHtcblxuICAgICAgICB9IFxuICAgIH1cblxuXG4gICAgc2V0R2FtZXN0b3AoZnVuYzogRnVuY3Rpb24pIHtcbiAgICAgICAgd2luZG93WydnYW1lc3RvcCddID0gZnVuYztcbiAgICB9XG5cbiAgICBzZXRHYW1lcmVjb3ZlcnkoZnVuYzogRnVuY3Rpb24pIHtcbiAgICAgICAgd2luZG93WydnYW1lcmVjb3ZlcnknXSA9IGZ1bmM7XG4gICAgfVxuXG4gIFxufVxuXG5leHBvcnQgbGV0IGdhbWVEYXRhID0gR2FtZURhdGFDbGFzcy5nZXRJbnN0YW5jZSgpO1xuXG5leHBvcnQgZW51bSBzdG9yYWdlIHtcbiAgICBnYW1lZGF0YSA9IFwiZ2FtZWRhdGFcIixcbn1cblxuZXhwb3J0IGVudW0gc291bmQge1xuICAgIGJnbSA9IFwiYmdtXCIsXG4gICAgY2xpY2sgPSBcImNsaWNrXCIsXG4gICAgY29ycmVjdCA9IFwiY29ycmVjdFwiLFxuICAgIGVyciA9IFwiZXJyXCIsXG4gICAgZmFpbCA9IFwiZmFpbFwiLFxuICAgIHdpbiA9IFwid2luXCIsXG59XG53aW5kb3dbJ29uQ2xvc2VGaW5pc2hDYiddID0gKCkgPT4ge1xuICAgXG59XG5cbi8qKnNka+iwg+eUqGpz6YeM6Z2id2luZG935YWs5LyX55qE5Ye95pWwICovXG53aW5kb3dbJ29uQ2xvc2VWZGllb0ZpbmlzaENiJ10gPSAoKSA9PiB7XG4gICAgLy8gaWYgKGlzUGxheU11c2ljKSB7XG4gICAgLy8gICAgIEF1ZGlvQ3RyLmJnKCk7XG4gICAgLy8gfVxuICAgIGNvbnNvbGUubG9nKFwib25DbG9zZVZkaWVvLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKVxuICAgIHdpbmRvd1snb25DbG9zZUZpbmlzaENiJ10oKVxufVxuXG5cbi8qKnNka+iwg+eUqGpz6YeM6Z2id2luZG935YWs5LyX55qE5Ye95pWwICovXG53aW5kb3dbJ29uQ2xvc2VWZGllb2ZhaWxDYiddID0gKCkgPT4ge1xuICAgIC8vIGlmIChpc1BsYXlNdXNpYykge1xuICAgIC8vICAgICBBdWRpb0N0ci5iZygpO1xuICAgIC8vIH1cbiAgICBjb25zb2xlLmxvZyhcIm9uQ2xvc2VWZGllb2ZhaWxDYm9uQ2xvc2VWZGllb2ZhaWxDYm9uQ2xvc2VWZGllb2ZhaWxDYlwiKVxuICAgIHdpbmRvd1snb25DbG9zZWZhaWxDYiddKClcbn1cblxuXG53aW5kb3dbJ29uQ2xvc2VmYWlsQ2InXSA9ICgpID0+IHtcbiAgIFxufVxuXG5cbi8v5ri45oiP5pqC5YGcXG53aW5kb3dbJ2dhbWVzdG9wJ10gPSAoKSA9PiB7XG4gICBcbn1cblxuXG4vL+a4uOaIj+aBouWkjVxud2luZG93WydnYW1lcmVjb3ZlcnknXSA9ICgpID0+IHtcbiAgIFxufVxuIl19