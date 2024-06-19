"use strict";
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