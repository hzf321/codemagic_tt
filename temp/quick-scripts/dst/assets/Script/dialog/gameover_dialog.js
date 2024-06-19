
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/dialog/gameover_dialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5a09auqmsBG27JJ2bvnIpkk', 'gameover_dialog');
// script/dialog/gameover_dialog.ts

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
var gameData_1 = require("../tool/gameData");
var global_1 = require("../tool/global");
var utils_1 = require("../tool/utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var gameover_dialog = /** @class */ (function (_super) {
    __extends(gameover_dialog, _super);
    function gameover_dialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.title = null;
        _this.bg = null;
        _this.callback = null;
        return _this;
    }
    gameover_dialog.prototype.initData = function (data) {
        this.callback = data.callback;
    };
    gameover_dialog.prototype.onLoad = function () {
        if (global_1.Global.imgId >= 6) {
            gameData_1.gameData.showInterst();
        }
    };
    gameover_dialog.prototype.start = function () {
        this.title.string = "<color=#e8c30f>CONGRATULATIONS TO YOU!Clear</c><color=#f4f4f5> level " + global_1.Global.imgId + "</color>";
        utils_1.UtilsTool.adapterBg(this.bg);
    };
    gameover_dialog.prototype.onClick_continueBtn = function () {
        global_1.Global.audioUtils.commonBtnClick();
        this.callback && this.callback();
        this.node.destroy();
    };
    gameover_dialog.prototype.onClick_close = function () {
        global_1.Global.audioUtils.commonBtnClick();
        this.node.destroy();
    };
    __decorate([
        property(cc.RichText)
    ], gameover_dialog.prototype, "title", void 0);
    __decorate([
        property(cc.Node)
    ], gameover_dialog.prototype, "bg", void 0);
    gameover_dialog = __decorate([
        ccclass
    ], gameover_dialog);
    return gameover_dialog;
}(cc.Component));
exports.default = gameover_dialog;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZGlhbG9nL2dhbWVvdmVyX2RpYWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBNEM7QUFDNUMseUNBQXdDO0FBQ3hDLHVDQUFrRDtBQUU1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQXlDQztRQXJDRyxXQUFLLEdBQWdCLElBQUksQ0FBQztRQUcxQixRQUFFLEdBQVksSUFBSSxDQUFDO1FBR25CLGNBQVEsR0FBYSxJQUFJLENBQUM7O0lBK0I5QixDQUFDO0lBN0JHLGtDQUFRLEdBQVIsVUFBUyxJQUFJO1FBQ1QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ2xDLENBQUM7SUFHRCxnQ0FBTSxHQUFOO1FBQ0ksSUFBSSxlQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBRTtZQUNuQixtQkFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzFCO0lBR0wsQ0FBQztJQUdELCtCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyx1RUFBdUUsR0FBRyxlQUFNLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztRQUN4SCxpQkFBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELDZDQUFtQixHQUFuQjtRQUNJLGVBQU0sQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsdUNBQWEsR0FBYjtRQUNJLGVBQU0sQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBcENEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7a0RBQ0k7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDQztJQVBGLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0F5Q25DO0lBQUQsc0JBQUM7Q0F6Q0QsQUF5Q0MsQ0F6QzRDLEVBQUUsQ0FBQyxTQUFTLEdBeUN4RDtrQkF6Q29CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnYW1lRGF0YSB9IGZyb20gXCIuLi90b29sL2dhbWVEYXRhXCI7XG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi4vdG9vbC9nbG9iYWxcIjtcbmltcG9ydCB7IGRpYWxvZywgVXRpbHNUb29sIH0gZnJvbSBcIi4uL3Rvb2wvdXRpbHNcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGdhbWVvdmVyX2RpYWxvZyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblxuICAgIEBwcm9wZXJ0eShjYy5SaWNoVGV4dClcbiAgICB0aXRsZTogY2MuUmljaFRleHQgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYmc6IGNjLk5vZGUgPSBudWxsO1xuXG5cbiAgICBjYWxsYmFjazogRnVuY3Rpb24gPSBudWxsO1xuXG4gICAgaW5pdERhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gZGF0YS5jYWxsYmFjaztcbiAgICB9XG5cblxuICAgIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKEdsb2JhbC5pbWdJZCA+PSA2KSB7XG4gICAgICAgICAgICBnYW1lRGF0YS5zaG93SW50ZXJzdCgpO1xuICAgICAgICB9XG5cbiAgICAgIFxuICAgIH1cblxuXG4gICAgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGl0bGUuc3RyaW5nID0gXCI8Y29sb3I9I2U4YzMwZj5DT05HUkFUVUxBVElPTlMgVE8gWU9VIUNsZWFyPC9jPjxjb2xvcj0jZjRmNGY1PiBsZXZlbCBcIiArIEdsb2JhbC5pbWdJZCArIFwiPC9jb2xvcj5cIjtcbiAgICAgICAgVXRpbHNUb29sLmFkYXB0ZXJCZyh0aGlzLmJnKTtcbiAgICB9XG5cbiAgICBvbkNsaWNrX2NvbnRpbnVlQnRuKCkge1xuICAgICAgICBHbG9iYWwuYXVkaW9VdGlscy5jb21tb25CdG5DbGljaygpO1xuICAgICAgICB0aGlzLmNhbGxiYWNrICYmIHRoaXMuY2FsbGJhY2soKTtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBvbkNsaWNrX2Nsb3NlKCkge1xuICAgICAgICBHbG9iYWwuYXVkaW9VdGlscy5jb21tb25CdG5DbGljaygpO1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cbn1cbiJdfQ==