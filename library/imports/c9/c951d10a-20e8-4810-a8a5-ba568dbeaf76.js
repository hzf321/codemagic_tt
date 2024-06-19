"use strict";
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