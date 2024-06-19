"use strict";
cc._RF.push(module, '014741UGutBway3J/ZL6r3K', 'hall');
// script/hall.ts

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
var imgItem_1 = require("./prefeb/imgItem");
var gameData_1 = require("./tool/gameData");
var global_1 = require("./tool/global");
var utils_1 = require("./tool/utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var hall = /** @class */ (function (_super) {
    __extends(hall, _super);
    function hall() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bg = null;
        _this.imgItem = null;
        _this.scroll_contect = null;
        _this.scrollView = null;
        _this.toastNode = null;
        return _this;
    }
    hall.prototype.start = function () {
        var _this = this;
        if (cc.sys.platform === cc.sys.IPAD) {
            this.getComponent(cc.Canvas).fitHeight = true;
            this.getComponent(cc.Canvas).fitWidth = false;
        }
        global_1.Global.setsceneNode(this.node);
        utils_1.UtilsTool.adapterBg(this.bg);
        this.scheduleOnce(function () {
            _this.init();
        });
        this.scheduleOnce(function () {
            if (gameData_1.gameData.userData.level > 4 && gameData_1.gameData.userData.level < gameData_1.gameData.levelAll) {
                var hei = 260;
                var y = 0;
                if (gameData_1.gameData.userData.level % 2 == 0) {
                    var index = gameData_1.gameData.userData.level / 2;
                    y = ((gameData_1.gameData.userData.level - 1) - index) * hei;
                }
                else {
                    var index = (gameData_1.gameData.userData.level + 1) / 2;
                    y = (gameData_1.gameData.userData.level - index) * hei;
                }
                _this.scrollView.scrollToOffset(cc.v2(0, y), 1);
            }
        }, 0.1);
    };
    hall.prototype.init = function () {
        this.scroll_contect.destroyAllChildren();
        for (var i = 0; i < 30; i++) {
            var item = cc.instantiate(this.imgItem);
            this.scroll_contect.addChild(item);
            item.getComponent(imgItem_1.default).init(i, this);
        }
    };
    hall.prototype.onClick_setting = function () {
        global_1.Global.audioUtils.commonBtnClick();
        global_1.Global.assetUtils.showDialog(utils_1.dialog.setting_dialog, { isGame: false });
        // Global.assetUtils.showDialog(dialog.comment_dialog);
    };
    hall.prototype.showToast = function (text) {
        var _this = this;
        this.toastNode.active = true;
        var toastLabel = this.toastNode.getChildByName("label");
        toastLabel.getComponent(cc.Label).string = text;
        cc.Tween.stopAllByTarget(this.toastNode);
        this.toastNode.opacity = 255;
        cc.tween(this.toastNode).to(0.15, { scale: 1.2 }).to(0.15, { scale: 1 }).delay(0.5).to(0.5, { opacity: 0 }).call(function () {
            _this.toastNode.active = false;
        }).start();
    };
    __decorate([
        property(cc.Node)
    ], hall.prototype, "bg", void 0);
    __decorate([
        property(cc.Prefab)
    ], hall.prototype, "imgItem", void 0);
    __decorate([
        property(cc.Node)
    ], hall.prototype, "scroll_contect", void 0);
    __decorate([
        property(cc.ScrollView)
    ], hall.prototype, "scrollView", void 0);
    __decorate([
        property(cc.Node)
    ], hall.prototype, "toastNode", void 0);
    hall = __decorate([
        ccclass
    ], hall);
    return hall;
}(cc.Component));
exports.default = hall;

cc._RF.pop();