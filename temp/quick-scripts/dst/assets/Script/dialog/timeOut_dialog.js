
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/dialog/timeOut_dialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '98460XFFs1JCI9f0VmFuXBW', 'timeOut_dialog');
// script/dialog/timeOut_dialog.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var timeOut_dialog = /** @class */ (function (_super) {
    __extends(timeOut_dialog, _super);
    function timeOut_dialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ADcallback = null;
        _this.restartCallBack = null;
        return _this;
    }
    timeOut_dialog.prototype.start = function () {
        gameData_1.gameData.showBanner();
    };
    timeOut_dialog.prototype.initData = function (data) {
        this.ADcallback = data.ADcallback;
        this.restartCallBack = data.restartCallBack;
    };
    timeOut_dialog.prototype.onClick_AD_btn = function () {
        var _this = this;
        global_1.Global.audioUtils.commonBtnClick();
        gameData_1.gameData.showVideo(function () {
            _this.scheduleOnce(function () {
                _this.ADcallback && _this.ADcallback();
                _this.node.destroy();
                gameData_1.gameData.closeBanner();
            });
        });
    };
    timeOut_dialog.prototype.onClick_restart = function () {
        global_1.Global.audioUtils.commonBtnClick();
        this.restartCallBack && this.restartCallBack();
        this.node.destroy();
        gameData_1.gameData.closeBanner();
    };
    timeOut_dialog = __decorate([
        ccclass
    ], timeOut_dialog);
    return timeOut_dialog;
}(cc.Component));
exports.default = timeOut_dialog;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZGlhbG9nL3RpbWVPdXRfZGlhbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUE0QztBQUM1Qyx5Q0FBd0M7QUFFbEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUFpQ0M7UUEvQkcsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFDNUIscUJBQWUsR0FBYSxJQUFJLENBQUM7O0lBOEJyQyxDQUFDO0lBNUJHLDhCQUFLLEdBQUw7UUFDSSxtQkFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxpQ0FBUSxHQUFSLFVBQVMsSUFBSTtRQUVULElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNsQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDaEQsQ0FBQztJQUdELHVDQUFjLEdBQWQ7UUFBQSxpQkFTQztRQVJHLGVBQU0sQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkMsbUJBQVEsQ0FBQyxTQUFTLENBQUM7WUFDZixLQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLEtBQUksQ0FBQyxVQUFVLElBQUksS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO2dCQUNwQyxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNwQixtQkFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsd0NBQWUsR0FBZjtRQUNJLGVBQU0sQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQixtQkFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFoQ2dCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FpQ2xDO0lBQUQscUJBQUM7Q0FqQ0QsQUFpQ0MsQ0FqQzJDLEVBQUUsQ0FBQyxTQUFTLEdBaUN2RDtrQkFqQ29CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnYW1lRGF0YSB9IGZyb20gXCIuLi90b29sL2dhbWVEYXRhXCI7XG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi4vdG9vbC9nbG9iYWxcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHRpbWVPdXRfZGlhbG9nIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEFEY2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbDtcbiAgICByZXN0YXJ0Q2FsbEJhY2s6IEZ1bmN0aW9uID0gbnVsbDtcblxuICAgIHN0YXJ0KCk6IHZvaWQge1xuICAgICAgICBnYW1lRGF0YS5zaG93QmFubmVyKCk7XG4gICAgfVxuXG4gICAgaW5pdERhdGEoZGF0YSkge1xuXG4gICAgICAgIHRoaXMuQURjYWxsYmFjayA9IGRhdGEuQURjYWxsYmFjaztcbiAgICAgICAgdGhpcy5yZXN0YXJ0Q2FsbEJhY2sgPSBkYXRhLnJlc3RhcnRDYWxsQmFjaztcbiAgICB9XG5cblxuICAgIG9uQ2xpY2tfQURfYnRuKCkge1xuICAgICAgICBHbG9iYWwuYXVkaW9VdGlscy5jb21tb25CdG5DbGljaygpO1xuICAgICAgICBnYW1lRGF0YS5zaG93VmlkZW8oKCk9PntcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5BRGNhbGxiYWNrICYmIHRoaXMuQURjYWxsYmFjaygpXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICBnYW1lRGF0YS5jbG9zZUJhbm5lcigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2xpY2tfcmVzdGFydCgpIHtcbiAgICAgICAgR2xvYmFsLmF1ZGlvVXRpbHMuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgdGhpcy5yZXN0YXJ0Q2FsbEJhY2sgJiYgdGhpcy5yZXN0YXJ0Q2FsbEJhY2soKVxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICBnYW1lRGF0YS5jbG9zZUJhbm5lcigpO1xuICAgIH1cbn1cbiJdfQ==