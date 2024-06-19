
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/prefeb/imgItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcHJlZmViL2ltZ0l0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNkNBQTRDO0FBQzVDLHlDQUF3QztBQUN4Qyx1Q0FBc0M7QUFFaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBcUMsMkJBQVk7SUFBakQ7UUFBQSxxRUEwQ0M7UUF2Q0csZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixTQUFHLEdBQWMsSUFBSSxDQUFDO1FBRWQsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVsQixZQUFNLEdBQVksS0FBSyxDQUFDO1FBRWhDLFVBQUksR0FBUyxJQUFJLENBQUM7O0lBOEJ0QixDQUFDO0lBN0JHLHVCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsc0JBQUksR0FBSixVQUFLLEtBQWEsRUFBRSxJQUFVO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO2FBQU07WUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDdkI7UUFDRCxlQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckYsQ0FBQztJQUVELDhCQUFZLEdBQVo7UUFDSSxlQUFNLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25DLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLGVBQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDOUIsbUJBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNqQyxtQkFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3ZCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGFBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNyQzthQUFNO1lBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMscUNBQXFDLENBQUMsQ0FBQztTQUM5RDtJQUNMLENBQUM7SUFyQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDUTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dDQUNFO0lBTkwsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQTBDM0I7SUFBRCxjQUFDO0NBMUNELEFBMENDLENBMUNvQyxFQUFFLENBQUMsU0FBUyxHQTBDaEQ7a0JBMUNvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGhhbGwgZnJvbSBcIi4uL2hhbGxcIjtcbmltcG9ydCB7IGdhbWVEYXRhIH0gZnJvbSBcIi4uL3Rvb2wvZ2FtZURhdGFcIjtcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi90b29sL2dsb2JhbFwiO1xuaW1wb3J0IHsgc2NlbmUgfSBmcm9tIFwiLi4vdG9vbC91dGlsc1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgaW1nSXRlbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBoYWxsX21hc2s6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBpbWc6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIGluZGV4OiBudW1iZXIgPSAwO1xuXG4gICAgcHJpdmF0ZSBpc0xvY2s6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGhhbGw6IGhhbGwgPSBudWxsO1xuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuXG4gICAgaW5pdChpbmRleDogbnVtYmVyLCBoYWxsOiBoYWxsKSB7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5oYWxsID0gaGFsbDtcbiAgICAgICAgaWYgKHRoaXMuaW5kZXggPCBnYW1lRGF0YS51c2VyRGF0YS5sZXZlbCkge1xuICAgICAgICAgICAgdGhpcy5oYWxsX21hc2suYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlzTG9jayA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhhbGxfbWFzay5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pc0xvY2sgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBHbG9iYWwuYXNzZXRVdGlscy5sb2FkU3ByaXRlKFwib3JpZ2luYWxJbWcvXCIgKyAodGhpcy5pbmRleCArIDEpICsgXCItb1wiLCB0aGlzLmltZyk7XG4gICAgfVxuXG4gICAgb25jbGlja19pdGVtKCkge1xuICAgICAgICBHbG9iYWwuYXVkaW9VdGlscy5jb21tb25CdG5DbGljaygpO1xuICAgICAgICBpZiAodGhpcy5pc0xvY2spIHtcbiAgICAgICAgICAgIEdsb2JhbC5pbWdJZCA9IHRoaXMuaW5kZXggKyAxO1xuICAgICAgICAgICAgZ2FtZURhdGEudXNlckRhdGEuaXNIYWxsID0gZmFsc2U7XG4gICAgICAgICAgICBnYW1lRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHNjZW5lLmdhbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oYWxsLnNob3dUb2FzdChcIlRoZSBsZXZlbCBoYXMgbm90IGJlZW4gdW5sb2NrZWQgeWV0XCIpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=