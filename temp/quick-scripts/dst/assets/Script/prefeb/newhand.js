
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/prefeb/newhand.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9a1e0lTY71PmJruz9bjJlQK', 'newhand');
// script/prefeb/newhand.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var newhand = /** @class */ (function (_super) {
    __extends(newhand, _super);
    function newhand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dong1_top = null;
        _this.dongdong1_bottom = null;
        _this.hand1 = null;
        _this.dong2_top = null;
        _this.dongdong2_bottom = null;
        _this.hand2 = null;
        return _this;
    }
    newhand.prototype.start = function () {
    };
    newhand.prototype.showdong1 = function () {
        var _this = this;
        this.dong1_top.active = true;
        this.dongdong1_bottom.active = true;
        this.hand1.active = false;
        this.dong1_top.width = 500;
        this.dong1_top.height = 500;
        this.dongdong1_bottom.width = 500;
        this.dongdong1_bottom.height = 500;
        cc.Tween.stopAllByTarget(this.dong1_top);
        cc.Tween.stopAllByTarget(this.dongdong1_bottom);
        cc.tween(this.dong1_top).to(0.5, { width: 80, height: 80 }).start();
        cc.tween(this.dongdong1_bottom).to(0.5, { width: 80, height: 80 }).delay(0.1).call(function () {
            _this.hand1.active = true;
        }).start();
    };
    newhand.prototype.hidedong1 = function () {
        this.dong1_top.active = false;
        this.dongdong1_bottom.active = false;
        this.hand1.active = false;
    };
    newhand.prototype.showdong2 = function () {
        var _this = this;
        this.dong2_top.active = true;
        this.dongdong2_bottom.active = true;
        this.hand2.active = false;
        this.dong2_top.width = 500;
        this.dong2_top.height = 500;
        this.dongdong2_bottom.width = 500;
        this.dongdong2_bottom.height = 500;
        cc.Tween.stopAllByTarget(this.dong2_top);
        cc.Tween.stopAllByTarget(this.dongdong2_bottom);
        cc.tween(this.dong2_top).to(0.5, { width: 80, height: 80 }).start();
        cc.tween(this.dongdong2_bottom).to(0.5, { width: 80, height: 80 }).delay(0.1).call(function () {
            _this.hand2.active = true;
        }).start();
    };
    __decorate([
        property(cc.Node)
    ], newhand.prototype, "dong1_top", void 0);
    __decorate([
        property(cc.Node)
    ], newhand.prototype, "dongdong1_bottom", void 0);
    __decorate([
        property(cc.Node)
    ], newhand.prototype, "hand1", void 0);
    __decorate([
        property(cc.Node)
    ], newhand.prototype, "dong2_top", void 0);
    __decorate([
        property(cc.Node)
    ], newhand.prototype, "dongdong2_bottom", void 0);
    __decorate([
        property(cc.Node)
    ], newhand.prototype, "hand2", void 0);
    newhand = __decorate([
        ccclass
    ], newhand);
    return newhand;
}(cc.Component));
exports.default = newhand;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcHJlZmViL25ld2hhbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBcUMsMkJBQVk7SUFBakQ7UUFBQSxxRUE0RUM7UUF6RUcsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixzQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFHakMsV0FBSyxHQUFZLElBQUksQ0FBQztRQUl0QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLHNCQUFnQixHQUFZLElBQUksQ0FBQztRQUdqQyxXQUFLLEdBQVksSUFBSSxDQUFDOztJQXlEMUIsQ0FBQztJQXZERyx1QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELDJCQUFTLEdBQVQ7UUFBQSxpQkFtQkM7UUFsQkcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRXBDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUUxQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBRTVCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ25DLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6QyxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FB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U0FBUyxHQTRFaEQ7a0JBNUVvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG5ld2hhbmQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZG9uZzFfdG9wOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGRvbmdkb25nMV9ib3R0b206IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaGFuZDE6IGNjLk5vZGUgPSBudWxsO1xuXG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBkb25nMl90b3A6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZG9uZ2RvbmcyX2JvdHRvbTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBoYW5kMjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBzdGFydCgpIHtcblxuICAgIH1cblxuICAgIHNob3dkb25nMSgpIHtcbiAgICAgICAgdGhpcy5kb25nMV90b3AuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kb25nZG9uZzFfYm90dG9tLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5oYW5kMS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmRvbmcxX3RvcC53aWR0aCA9IDUwMDtcbiAgICAgICAgdGhpcy5kb25nMV90b3AuaGVpZ2h0ID0gNTAwO1xuXG4gICAgICAgIHRoaXMuZG9uZ2RvbmcxX2JvdHRvbS53aWR0aCA9IDUwMDtcbiAgICAgICAgdGhpcy5kb25nZG9uZzFfYm90dG9tLmhlaWdodCA9IDUwMDtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuZG9uZzFfdG9wKTtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuZG9uZ2RvbmcxX2JvdHRvbSk7XG5cblxuICAgICAgICBjYy50d2Vlbih0aGlzLmRvbmcxX3RvcCkudG8oMC41LCB7IHdpZHRoOiA4MCwgaGVpZ2h0OiA4MH0pLnN0YXJ0KCk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZG9uZ2RvbmcxX2JvdHRvbSkudG8oMC41LCB7IHdpZHRoOiA4MCwgaGVpZ2h0OiA4MH0pLmRlbGF5KDAuMSkuY2FsbCgoKT0+e1xuICAgICAgICAgICAgdGhpcy5oYW5kMS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9KS5zdGFydCgpO1xuICAgIH1cblxuXG4gICAgaGlkZWRvbmcxKCkge1xuICAgICAgICB0aGlzLmRvbmcxX3RvcC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kb25nZG9uZzFfYm90dG9tLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhhbmQxLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuXG4gICAgc2hvd2RvbmcyKCkge1xuICAgICAgICB0aGlzLmRvbmcyX3RvcC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmRvbmdkb25nMl9ib3R0b20uYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmhhbmQyLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuZG9uZzJfdG9wLndpZHRoID0gNTAwO1xuICAgICAgICB0aGlzLmRvbmcyX3RvcC5oZWlnaHQgPSA1MDA7XG5cbiAgICAgICAgdGhpcy5kb25nZG9uZzJfYm90dG9tLndpZHRoID0gNTAwO1xuICAgICAgICB0aGlzLmRvbmdkb25nMl9ib3R0b20uaGVpZ2h0ID0gNTAwO1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5kb25nMl90b3ApO1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5kb25nZG9uZzJfYm90dG9tKTtcblxuXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZG9uZzJfdG9wKS50bygwLjUsIHsgd2lkdGg6IDgwLCBoZWlnaHQ6IDgwfSkuc3RhcnQoKTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5kb25nZG9uZzJfYm90dG9tKS50bygwLjUsIHsgd2lkdGg6IDgwLCBoZWlnaHQ6IDgwfSkuZGVsYXkoMC4xKS5jYWxsKCgpPT57XG4gICAgICAgICAgICB0aGlzLmhhbmQyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuXG5cbn1cbiJdfQ==