
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