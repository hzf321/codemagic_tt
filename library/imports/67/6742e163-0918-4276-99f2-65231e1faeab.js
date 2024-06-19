"use strict";
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