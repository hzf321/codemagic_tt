
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/hall.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQTFFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29DQUNDO0lBR25CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eUNBQ007SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDYTtJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDOzRDQUNTO0lBR2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ1E7SUFmVCxJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBOEV4QjtJQUFELFdBQUM7Q0E5RUQsQUE4RUMsQ0E5RWlDLEVBQUUsQ0FBQyxTQUFTLEdBOEU3QztrQkE5RW9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW1nSXRlbSBmcm9tIFwiLi9wcmVmZWIvaW1nSXRlbVwiO1xuaW1wb3J0IHsgZ2FtZURhdGEgfSBmcm9tIFwiLi90b29sL2dhbWVEYXRhXCI7XG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi90b29sL2dsb2JhbFwiO1xuaW1wb3J0IHsgZGlhbG9nLCBVdGlsc1Rvb2wgfSBmcm9tIFwiLi90b29sL3V0aWxzXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGhhbGwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYmc6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBpbWdJdGVtOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc2Nyb2xsX2NvbnRlY3Q6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNjcm9sbFZpZXcpXG4gICAgc2Nyb2xsVmlldzogY2MuU2Nyb2xsVmlldyA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0b2FzdE5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG5cbiAgICBzdGFydCgpIHtcbiAgXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5JUEFEKSB7XG4gICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5DYW52YXMpLmZpdEhlaWdodCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5DYW52YXMpLmZpdFdpZHRoID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICAgICAgR2xvYmFsLnNldHNjZW5lTm9kZSh0aGlzLm5vZGUpO1xuICAgICAgICBVdGlsc1Rvb2wuYWRhcHRlckJnKHRoaXMuYmcpO1xuXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChnYW1lRGF0YS51c2VyRGF0YS5sZXZlbCA+IDQgJiYgZ2FtZURhdGEudXNlckRhdGEubGV2ZWwgPCBnYW1lRGF0YS5sZXZlbEFsbCkge1xuICAgICAgICAgICAgICAgIGxldCBoZWkgPSAyNjA7XG4gICAgICAgICAgICAgICAgbGV0IHkgPSAwO1xuICAgICAgICAgICAgICAgIGlmIChnYW1lRGF0YS51c2VyRGF0YS5sZXZlbCAlIDIgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBnYW1lRGF0YS51c2VyRGF0YS5sZXZlbCAvIDIgO1xuXG4gICAgICAgICAgICAgICAgICAgIHkgPSAoKGdhbWVEYXRhLnVzZXJEYXRhLmxldmVsIC0xKSAtIGluZGV4KSAqIGhlaTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSAoZ2FtZURhdGEudXNlckRhdGEubGV2ZWwgKyAxKSAvIDJcbiAgICAgICAgICAgICAgICAgICAgeSA9IChnYW1lRGF0YS51c2VyRGF0YS5sZXZlbCAtIGluZGV4KSAqIGhlaTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9PZmZzZXQoY2MudjIoMCwgeSksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAwLjEpXG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxfY29udGVjdC5kZXN0cm95QWxsQ2hpbGRyZW4oKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMwOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pbWdJdGVtKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsX2NvbnRlY3QuYWRkQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICBpdGVtLmdldENvbXBvbmVudChpbWdJdGVtKS5pbml0KGksIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DbGlja19zZXR0aW5nKCkge1xuICAgICAgICBHbG9iYWwuYXVkaW9VdGlscy5jb21tb25CdG5DbGljaygpO1xuICAgICAgICBHbG9iYWwuYXNzZXRVdGlscy5zaG93RGlhbG9nKGRpYWxvZy5zZXR0aW5nX2RpYWxvZywgeyBpc0dhbWU6IGZhbHNlIH0pO1xuICAgICAgICAvLyBHbG9iYWwuYXNzZXRVdGlscy5zaG93RGlhbG9nKGRpYWxvZy5jb21tZW50X2RpYWxvZyk7XG4gICAgfVxuXG5cblxuICAgIHNob3dUb2FzdCh0ZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy50b2FzdE5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgbGV0IHRvYXN0TGFiZWwgPSB0aGlzLnRvYXN0Tm9kZS5nZXRDaGlsZEJ5TmFtZShcImxhYmVsXCIpO1xuICAgICAgICB0b2FzdExhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGV4dDtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMudG9hc3ROb2RlKTtcbiAgICAgICAgdGhpcy50b2FzdE5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgY2MudHdlZW4odGhpcy50b2FzdE5vZGUpLnRvKDAuMTUsIHsgc2NhbGU6IDEuMiB9KS50bygwLjE1LCB7IHNjYWxlOiAxIH0pLmRlbGF5KDAuNSkudG8oMC41LCB7IG9wYWNpdHk6IDAgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRvYXN0Tm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG59XG4iXX0=