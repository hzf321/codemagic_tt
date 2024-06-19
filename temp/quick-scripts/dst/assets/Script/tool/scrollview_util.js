
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/scrollview_util.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6742eFjCRhCdpnyZSMeH66r', 'scrollview_util');
// script/tool/scrollview_util.ts

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
/**列表draw call优化组件 */
var list_optimize = /** @class */ (function (_super) {
    __extends(list_optimize, _super);
    function list_optimize() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* --------------------------------segmentation-------------------------------- */
    list_optimize.prototype.onLoad = function () {
        if (!this.node.getComponent(cc.ScrollView)) {
            cc.error("不存在ScrollView组件！");
            return;
        }
        // ------------------事件监听
        this.node.on("scrolling", this._event_update_opacity, this);
        this.node.getComponent(cc.ScrollView).content.on(cc.Node.EventType.CHILD_REMOVED, this._event_update_opacity, this);
        this.node.getComponent(cc.ScrollView).content.on(cc.Node.EventType.CHILD_REORDER, this._event_update_opacity, this);
    };
    /* ***************功能函数*************** */
    /**获取在世界坐标系下的节点包围盒(不包含自身激活的子节点范围) */
    list_optimize.prototype._get_bounding_box_to_world = function (node_o_) {
        var w_n = node_o_._contentSize.width;
        var h_n = node_o_._contentSize.height;
        var rect_o = cc.rect(-node_o_._anchorPoint.x * w_n, -node_o_._anchorPoint.y * h_n, w_n, h_n);
        node_o_._calculWorldMatrix();
        rect_o.transformMat4(rect_o, node_o_._worldMatrix);
        return rect_o;
    };
    /**检测碰撞 */
    list_optimize.prototype._check_collision = function (node_o_) {
        var rect1_o = this._get_bounding_box_to_world(this.node.getComponent(cc.ScrollView).content.parent);
        var rect2_o = this._get_bounding_box_to_world(node_o_);
        // ------------------保险范围
        rect1_o.width += rect1_o.width * 0.5;
        rect1_o.height += rect1_o.height * 0.5;
        rect1_o.x -= rect1_o.width * 0.25;
        rect1_o.y -= rect1_o.height * 0.25;
        return rect1_o.intersects(rect2_o);
    };
    /* ***************自定义事件*************** */
    list_optimize.prototype._event_update_opacity = function () {
        var _this = this;
        this.node.getComponent(cc.ScrollView).content.children.forEach(function (v1_o) {
            var rect1_o = _this._get_bounding_box_to_world(_this.node.getComponent(cc.ScrollView).content.parent);
            rect1_o.width += rect1_o.width * 0.5;
            rect1_o.height += rect1_o.height * 0.5;
            rect1_o.x -= rect1_o.width * 0.25;
            rect1_o.y -= rect1_o.height * 0.25;
            v1_o.opacity = _this._check_collision(v1_o) ? 255 : 0;
        });
    };
    list_optimize = __decorate([
        ccclass
    ], list_optimize);
    return list_optimize;
}(cc.Component));
exports.default = list_optimize;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9zY3JvbGx2aWV3X3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUMscUJBQXFCO0FBRXJCO0lBQTJDLGlDQUFZO0lBQXZEOztJQWtEQSxDQUFDO0lBakRHLGtGQUFrRjtJQUNsRiw4QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN4QyxFQUFFLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDN0IsT0FBTztTQUNWO1FBQ0QseUJBQXlCO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwSCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hILENBQUM7SUFDRCx3Q0FBd0M7SUFDeEMsb0NBQW9DO0lBQzVCLGtEQUEwQixHQUFsQyxVQUFtQyxPQUFZO1FBQzNDLElBQUksR0FBRyxHQUFXLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQzdDLElBQUksR0FBRyxHQUFXLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO1FBQzlDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQ2hCLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUM3QixDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFDN0IsR0FBRyxFQUNILEdBQUcsQ0FDTixDQUFDO1FBQ0YsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDN0IsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ25ELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFDRCxVQUFVO0lBQ0Ysd0NBQWdCLEdBQXhCLFVBQXlCLE9BQWdCO1FBQ3JDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BHLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2RCx5QkFBeUI7UUFDekIsT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNyQyxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEMsT0FBTyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQyxPQUFPLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNELHlDQUF5QztJQUNqQyw2Q0FBcUIsR0FBN0I7UUFBQSxpQkFVQztRQVRHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7WUFDL0QsSUFBSSxPQUFPLEdBQUcsS0FBSSxDQUFDLDBCQUEwQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEcsT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUNyQyxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEMsT0FBTyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUVuQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBakRnQixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBa0RqQztJQUFELG9CQUFDO0NBbERELEFBa0RDLENBbEQwQyxFQUFFLENBQUMsU0FBUyxHQWtEdEQ7a0JBbERvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbi8qKuWIl+ihqGRyYXcgY2FsbOS8mOWMlue7hOS7tiAqL1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGxpc3Rfb3B0aW1pemUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tc2VnbWVudGF0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KSkge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCLkuI3lrZjlnKhTY3JvbGxWaWV357uE5Lu277yBXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLeS6i+S7tuebkeWQrFxuICAgICAgICB0aGlzLm5vZGUub24oXCJzY3JvbGxpbmdcIiwgdGhpcy5fZXZlbnRfdXBkYXRlX29wYWNpdHksIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpLmNvbnRlbnQub24oY2MuTm9kZS5FdmVudFR5cGUuQ0hJTERfUkVNT1ZFRCwgdGhpcy5fZXZlbnRfdXBkYXRlX29wYWNpdHksIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpLmNvbnRlbnQub24oY2MuTm9kZS5FdmVudFR5cGUuQ0hJTERfUkVPUkRFUiwgdGhpcy5fZXZlbnRfdXBkYXRlX29wYWNpdHksIHRoaXMpO1xuICAgIH1cbiAgICAvKiAqKioqKioqKioqKioqKirlip/og73lh73mlbAqKioqKioqKioqKioqKiogKi9cbiAgICAvKirojrflj5blnKjkuJbnlYzlnZDmoIfns7vkuIvnmoToioLngrnljIXlm7Tnm5Io5LiN5YyF5ZCr6Ieq6Lqr5r+A5rS755qE5a2Q6IqC54K56IyD5Zu0KSAqL1xuICAgIHByaXZhdGUgX2dldF9ib3VuZGluZ19ib3hfdG9fd29ybGQobm9kZV9vXzogYW55KTogY2MuUmVjdCB7XG4gICAgICAgIGxldCB3X246IG51bWJlciA9IG5vZGVfb18uX2NvbnRlbnRTaXplLndpZHRoO1xuICAgICAgICBsZXQgaF9uOiBudW1iZXIgPSBub2RlX29fLl9jb250ZW50U2l6ZS5oZWlnaHQ7XG4gICAgICAgIGxldCByZWN0X28gPSBjYy5yZWN0KFxuICAgICAgICAgICAgLW5vZGVfb18uX2FuY2hvclBvaW50LnggKiB3X24sIFxuICAgICAgICAgICAgLW5vZGVfb18uX2FuY2hvclBvaW50LnkgKiBoX24sIFxuICAgICAgICAgICAgd19uLCBcbiAgICAgICAgICAgIGhfblxuICAgICAgICApO1xuICAgICAgICBub2RlX29fLl9jYWxjdWxXb3JsZE1hdHJpeCgpO1xuICAgICAgICByZWN0X28udHJhbnNmb3JtTWF0NChyZWN0X28sIG5vZGVfb18uX3dvcmxkTWF0cml4KTtcbiAgICAgICAgcmV0dXJuIHJlY3RfbztcbiAgICB9XG4gICAgLyoq5qOA5rWL56Kw5pKeICovXG4gICAgcHJpdmF0ZSBfY2hlY2tfY29sbGlzaW9uKG5vZGVfb186IGNjLk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IHJlY3QxX28gPSB0aGlzLl9nZXRfYm91bmRpbmdfYm94X3RvX3dvcmxkKHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldykuY29udGVudC5wYXJlbnQpO1xuICAgICAgICBsZXQgcmVjdDJfbyA9IHRoaXMuX2dldF9ib3VuZGluZ19ib3hfdG9fd29ybGQobm9kZV9vXyk7XG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLeS/nemZqeiMg+WbtFxuICAgICAgICByZWN0MV9vLndpZHRoICs9IHJlY3QxX28ud2lkdGggKiAwLjU7XG4gICAgICAgIHJlY3QxX28uaGVpZ2h0ICs9IHJlY3QxX28uaGVpZ2h0ICogMC41O1xuICAgICAgICByZWN0MV9vLnggLT0gcmVjdDFfby53aWR0aCAqIDAuMjU7XG4gICAgICAgIHJlY3QxX28ueSAtPSByZWN0MV9vLmhlaWdodCAqIDAuMjU7XG4gICAgICAgIHJldHVybiByZWN0MV9vLmludGVyc2VjdHMocmVjdDJfbyk7XG4gICAgfVxuICAgIC8qICoqKioqKioqKioqKioqKuiHquWumuS5ieS6i+S7tioqKioqKioqKioqKioqKiAqL1xuICAgIHByaXZhdGUgX2V2ZW50X3VwZGF0ZV9vcGFjaXR5KCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpLmNvbnRlbnQuY2hpbGRyZW4uZm9yRWFjaCh2MV9vPT4ge1xuICAgICAgICAgICAgbGV0IHJlY3QxX28gPSB0aGlzLl9nZXRfYm91bmRpbmdfYm94X3RvX3dvcmxkKHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldykuY29udGVudC5wYXJlbnQpO1xuICAgICAgICAgICAgcmVjdDFfby53aWR0aCArPSByZWN0MV9vLndpZHRoICogMC41O1xuICAgICAgICAgICAgcmVjdDFfby5oZWlnaHQgKz0gcmVjdDFfby5oZWlnaHQgKiAwLjU7XG4gICAgICAgICAgICByZWN0MV9vLnggLT0gcmVjdDFfby53aWR0aCAqIDAuMjU7XG4gICAgICAgICAgICByZWN0MV9vLnkgLT0gcmVjdDFfby5oZWlnaHQgKiAwLjI1O1xuXG4gICAgICAgICAgICB2MV9vLm9wYWNpdHkgPSB0aGlzLl9jaGVja19jb2xsaXNpb24odjFfbykgPyAyNTUgOiAwO1xuICAgICAgICB9KTtcbiAgICB9XG59Il19