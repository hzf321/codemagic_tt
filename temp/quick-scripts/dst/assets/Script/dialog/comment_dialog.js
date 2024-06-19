
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/dialog/comment_dialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c951dEKIOhIEKilulaNvq92', 'comment_dialog');
// script/dialog/comment_dialog.ts

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
var comment_dialog = /** @class */ (function (_super) {
    __extends(comment_dialog, _super);
    function comment_dialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.callback = null;
        _this.starBox = null;
        _this.clickBox = null;
        return _this;
    }
    comment_dialog.prototype.initData = function (data) {
    };
    comment_dialog.prototype.start = function () {
        // for (let i = 0; i < this.clickBox.children.length; i++) {
        //     let item = this.clickBox.children[i];
        //     item.on(cc.Node.EventType.TOUCH_END, () => {  
        //         this.showStar(i)
        //     }, this)
        // }
        gameData_1.gameData.showBanner();
    };
    comment_dialog.prototype.showStar = function (index) {
        for (var i = 0; i < this.starBox.children.length; i++) {
            var item = this.starBox.children[i];
            if (i <= index) {
                item.active = true;
            }
            else {
                item.active = false;
            }
        }
    };
    comment_dialog.prototype.onClick_commentBtn = function () {
        gameData_1.gameData.showPingFen();
        global_1.Global.audioUtils.commonBtnClick();
        this.node.destroy();
        gameData_1.gameData.closeBanner();
    };
    comment_dialog.prototype.onClick_close = function () {
        global_1.Global.audioUtils.commonBtnClick();
        this.node.destroy();
        gameData_1.gameData.closeBanner();
    };
    __decorate([
        property(cc.Node)
    ], comment_dialog.prototype, "starBox", void 0);
    __decorate([
        property(cc.Node)
    ], comment_dialog.prototype, "clickBox", void 0);
    comment_dialog = __decorate([
        ccclass
    ], comment_dialog);
    return comment_dialog;
}(cc.Component));
exports.default = comment_dialog;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZGlhbG9nL2NvbW1lbnRfZGlhbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUE0QztBQUM1Qyx5Q0FBd0M7QUFFbEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUFnREM7UUE5Q0csY0FBUSxHQUFhLElBQUksQ0FBQztRQUcxQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGNBQVEsR0FBWSxJQUFJLENBQUM7O0lBd0M3QixDQUFDO0lBdENHLGlDQUFRLEdBQVIsVUFBUyxJQUFJO0lBRWIsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFDSSw0REFBNEQ7UUFDNUQsNENBQTRDO1FBQzVDLHFEQUFxRDtRQUNyRCwyQkFBMkI7UUFDM0IsZUFBZTtRQUNmLElBQUk7UUFFSixtQkFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxpQ0FBUSxHQUFSLFVBQVMsS0FBSztRQUNWLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLElBQUksS0FBSyxFQUFFO2dCQUNaLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ3RCO2lCQUFNO2dCQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ3ZCO1NBQ0o7SUFDTCxDQUFDO0lBRUQsMkNBQWtCLEdBQWxCO1FBQ0ksbUJBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QixlQUFNLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDcEIsbUJBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsc0NBQWEsR0FBYjtRQUNJLGVBQU0sQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQixtQkFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUExQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDTTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNPO0lBUlIsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQWdEbEM7SUFBRCxxQkFBQztDQWhERCxBQWdEQyxDQWhEMkMsRUFBRSxDQUFDLFNBQVMsR0FnRHZEO2tCQWhEb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdhbWVEYXRhIH0gZnJvbSBcIi4uL3Rvb2wvZ2FtZURhdGFcIjtcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi90b29sL2dsb2JhbFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY29tbWVudF9kaWFsb2cgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgY2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHN0YXJCb3g6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2xpY2tCb3g6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgaW5pdERhdGEoZGF0YSkge1xuXG4gICAgfVxuXG4gICAgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jbGlja0JveC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyAgICAgbGV0IGl0ZW0gPSB0aGlzLmNsaWNrQm94LmNoaWxkcmVuW2ldO1xuICAgICAgICAvLyAgICAgaXRlbS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IHsgIFxuICAgICAgICAvLyAgICAgICAgIHRoaXMuc2hvd1N0YXIoaSlcbiAgICAgICAgLy8gICAgIH0sIHRoaXMpXG4gICAgICAgIC8vIH1cblxuICAgICAgICBnYW1lRGF0YS5zaG93QmFubmVyKCk7XG4gICAgfVxuXG4gICAgc2hvd1N0YXIoaW5kZXgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXJCb3guY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5zdGFyQm94LmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKGkgPD0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsaWNrX2NvbW1lbnRCdG4oKSB7XG4gICAgICAgIGdhbWVEYXRhLnNob3dQaW5nRmVuKCk7XG4gICAgICAgIEdsb2JhbC5hdWRpb1V0aWxzLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIGdhbWVEYXRhLmNsb3NlQmFubmVyKCk7XG4gICAgfVxuXG4gICAgb25DbGlja19jbG9zZSgpIHtcbiAgICAgICAgR2xvYmFsLmF1ZGlvVXRpbHMuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgZ2FtZURhdGEuY2xvc2VCYW5uZXIoKTtcbiAgICB9XG59XG4iXX0=