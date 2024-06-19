"use strict";
cc._RF.push(module, 'b349d0IddZO5bDF9FOpApzL', 'imgItem');
// script/prefeb/imgItem.ts

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
var imgItem = /** @class */ (function (_super) {
    __extends(imgItem, _super);
    function imgItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hall_mask = null;
        _this.img = null;
        _this.index = 0;
        _this.isLock = false;
        _this.hall = null;
        return _this;
    }
    imgItem.prototype.start = function () {
    };
    imgItem.prototype.init = function (index, hall) {
        this.index = index;
        this.hall = hall;
        if (this.index < gameData_1.gameData.userData.level) {
            this.hall_mask.active = false;
            this.isLock = true;
        }
        else {
            this.hall_mask.active = true;
            this.isLock = false;
        }
        global_1.Global.assetUtils.loadSprite("originalImg/" + (this.index + 1) + "-o", this.img);
    };
    imgItem.prototype.onclick_item = function () {
        global_1.Global.audioUtils.commonBtnClick();
        if (this.isLock) {
            global_1.Global.imgId = this.index + 1;
            gameData_1.gameData.userData.isHall = false;
            gameData_1.gameData.storageData();
            cc.director.loadScene(utils_1.scene.game);
        }
        else {
            this.hall.showToast("The level has not been unlocked yet");
        }
    };
    __decorate([
        property(cc.Node)
    ], imgItem.prototype, "hall_mask", void 0);
    __decorate([
        property(cc.Sprite)
    ], imgItem.prototype, "img", void 0);
    imgItem = __decorate([
        ccclass
    ], imgItem);
    return imgItem;
}(cc.Component));
exports.default = imgItem;

cc._RF.pop();