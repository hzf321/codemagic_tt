
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