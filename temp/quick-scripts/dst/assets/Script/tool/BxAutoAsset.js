
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/BxAutoAsset.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b835cS/qxNLbakyyg5HTNea', 'BxAutoAsset');
// script/tool/BxAutoAsset.ts

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
cc.Component.prototype.addAutoReleaseAsset = function (_asset) {
    var tempAuto = this.node.getComponent(AutoReleaseAssets);
    if (!cc.isValid(tempAuto)) {
        tempAuto = this.node.addComponent(AutoReleaseAssets);
    }
    tempAuto.addAutoReleaseAsset(_asset);
};
cc.Component.prototype.addAutoReleaseAssets = function (_assets) {
    var tempAuto = this.node.getComponent(AutoReleaseAssets);
    if (!cc.isValid(tempAuto)) {
        tempAuto = this.node.addComponent(AutoReleaseAssets);
    }
    for (var _i = 0, _assets_1 = _assets; _i < _assets_1.length; _i++) {
        var _assetOne = _assets_1[_i];
        tempAuto.addAutoReleaseAsset(_assetOne);
    }
};
//-----------------------------------------------------------------------------------------------------AutoReleaseAssets
var ccclass = cc._decorator.ccclass;
var AutoReleaseAssets = /** @class */ (function (_super) {
    __extends(AutoReleaseAssets, _super);
    function AutoReleaseAssets() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dynamicsAssets = [];
        return _this;
    }
    AutoReleaseAssets.prototype.addAutoReleaseAsset = function (_asset) {
        if (cc.isValid(_asset)) {
            _asset.addRef();
            this.dynamicsAssets.push(_asset);
            // console.log("当前动态资源长度=="+this.dynamicsAssets.length);
        }
    };
    AutoReleaseAssets.prototype.onDestroy = function () {
        // console.log("继承cc.Component 拥有生命周期 如果Node销毁就会顺带销毁这里");
        for (var index = 0; index < this.dynamicsAssets.length; index++) {
            if (cc.isValid(this.dynamicsAssets[index])) {
                this.dynamicsAssets[index].decRef();
            }
        }
        this.dynamicsAssets = [];
    };
    AutoReleaseAssets = __decorate([
        ccclass
    ], AutoReleaseAssets);
    return AutoReleaseAssets;
}(cc.Component));
exports.default = AutoReleaseAssets;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9CeEF1dG9Bc3NldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxFQUFFLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsR0FBRyxVQUFTLE1BQWU7SUFDakUsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN6RCxJQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBQztRQUNyQixRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FBQztLQUN4RDtJQUNELFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN6QyxDQUFDLENBQUE7QUFFRCxFQUFFLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsR0FBRyxVQUFTLE9BQWtCO0lBQ3JFLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDekQsSUFBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUM7UUFDckIsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUM7S0FDeEQ7SUFDRCxLQUF5QixVQUFPLEVBQVAsbUJBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU8sRUFBRTtRQUE3QixJQUFNLFNBQVMsZ0JBQUE7UUFDaEIsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQzNDO0FBQ0wsQ0FBQyxDQUFBO0FBRUQsd0hBQXdIO0FBRWpILElBQUEsT0FBTyxHQUFJLEVBQUUsQ0FBQyxVQUFVLFFBQWpCLENBQWtCO0FBR2hDO0lBQStDLHFDQUFZO0lBQTNEO1FBQUEscUVBdUJDO1FBckJXLG9CQUFjLEdBQWUsRUFBRSxDQUFDOztJQXFCNUMsQ0FBQztJQWxCVSwrQ0FBbUIsR0FBMUIsVUFBMkIsTUFBZTtRQUN0QyxJQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUM7WUFDbEIsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLHdEQUF3RDtTQUMzRDtJQUNMLENBQUM7SUFFRCxxQ0FBUyxHQUFUO1FBQ0kseURBQXlEO1FBQ3pELEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUM3RCxJQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDO2dCQUN0QyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ3ZDO1NBQ0o7UUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBckJnQixpQkFBaUI7UUFEckMsT0FBTztPQUNhLGlCQUFpQixDQXVCckM7SUFBRCx3QkFBQztDQXZCRCxBQXVCQyxDQXZCOEMsRUFBRSxDQUFDLFNBQVMsR0F1QjFEO2tCQXZCb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ29tcG9uZW50LnByb3RvdHlwZS5hZGRBdXRvUmVsZWFzZUFzc2V0ID0gZnVuY3Rpb24oX2Fzc2V0OmNjLkFzc2V0KSB7XHJcbiAgICBsZXQgdGVtcEF1dG8gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEF1dG9SZWxlYXNlQXNzZXRzKTtcclxuICAgIGlmKCFjYy5pc1ZhbGlkKHRlbXBBdXRvKSl7XHJcbiAgICAgICAgdGVtcEF1dG8gPSB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KEF1dG9SZWxlYXNlQXNzZXRzKTtcclxuICAgIH1cclxuICAgIHRlbXBBdXRvLmFkZEF1dG9SZWxlYXNlQXNzZXQoX2Fzc2V0KTtcclxufVxyXG5cclxuY2MuQ29tcG9uZW50LnByb3RvdHlwZS5hZGRBdXRvUmVsZWFzZUFzc2V0cyA9IGZ1bmN0aW9uKF9hc3NldHM6Y2MuQXNzZXRbXSkge1xyXG4gICAgbGV0IHRlbXBBdXRvID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChBdXRvUmVsZWFzZUFzc2V0cyk7XHJcbiAgICBpZighY2MuaXNWYWxpZCh0ZW1wQXV0bykpe1xyXG4gICAgICAgIHRlbXBBdXRvID0gdGhpcy5ub2RlLmFkZENvbXBvbmVudChBdXRvUmVsZWFzZUFzc2V0cyk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IF9hc3NldE9uZSAgb2YgX2Fzc2V0cykge1xyXG4gICAgICAgIHRlbXBBdXRvLmFkZEF1dG9SZWxlYXNlQXNzZXQoX2Fzc2V0T25lKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUF1dG9SZWxlYXNlQXNzZXRzXHJcblxyXG5jb25zdCB7Y2NjbGFzc30gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b1JlbGVhc2VBc3NldHMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHByaXZhdGUgZHluYW1pY3NBc3NldHM6IGNjLkFzc2V0W10gPSBbXTtcclxuXHJcblxyXG4gICAgcHVibGljIGFkZEF1dG9SZWxlYXNlQXNzZXQoX2Fzc2V0OmNjLkFzc2V0KXtcclxuICAgICAgICBpZihjYy5pc1ZhbGlkKF9hc3NldCkpe1xyXG4gICAgICAgICAgICBfYXNzZXQuYWRkUmVmKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZHluYW1pY3NBc3NldHMucHVzaChfYXNzZXQpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuW9k+WJjeWKqOaAgei1hOa6kOmVv+W6pj09XCIrdGhpcy5keW5hbWljc0Fzc2V0cy5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLnu6fmib9jYy5Db21wb25lbnQg5oul5pyJ55Sf5ZG95ZGo5pyfIOWmguaenE5vZGXplIDmr4HlsLHkvJrpobrluKbplIDmr4Hov5nph4xcIik7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuZHluYW1pY3NBc3NldHMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGlmKGNjLmlzVmFsaWQodGhpcy5keW5hbWljc0Fzc2V0c1tpbmRleF0pKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHluYW1pY3NBc3NldHNbaW5kZXhdLmRlY1JlZigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZHluYW1pY3NBc3NldHMgPSBbXTtcclxuICAgIH1cclxuICAgICBcclxufVxyXG4iXX0=