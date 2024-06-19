"use strict";
cc._RF.push(module, 'd8022bhaGtI34HO+9B4gPxl', 'AssetUtils');
// script/tool/AssetUtils.ts

"use strict";
//资源加载工具类
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetUtils = void 0;
var BxAutoAsset_1 = require("./BxAutoAsset");
var global_1 = require("./global");
var AssetUtils = /** @class */ (function () {
    function AssetUtils() {
    }
    // 绑定资源释放
    AssetUtils.bindAutoReleaseAsset = function (parent, asset) {
        var tempAuto = parent.getComponent(BxAutoAsset_1.default);
        if (!cc.isValid(tempAuto)) {
            tempAuto = parent.addComponent(BxAutoAsset_1.default);
        }
        tempAuto.addAutoReleaseAsset(asset);
    };
    // 检测引用计数后释放资源
    AssetUtils.checkAndReleaseAsset = function (asset) {
        if (cc.isValid(asset) && asset.refCount <= 0) {
            cc.assetManager.releaseAsset(asset);
        }
    };
    //加载(必须配合addAutoReleaseAsset 使用绑定资源)
    AssetUtils.loadAsset = function (assetPath, assetType, assetCb) {
        cc.resources.load(assetPath, assetType, assetCb);
    };
    //预加载
    AssetUtils.preloadAsset = function (assetPath, assetType) {
        cc.resources.preload(assetPath, assetType);
    };
    // 加载单张图片
    AssetUtils.loadSprite = function (picPath, sprite, defPath) {
        var _this = this;
        var finishCallback = function (err, sp) {
            if (err) {
                if (defPath) {
                    _this.loadSprite(defPath, sprite);
                }
                else {
                }
                return;
            }
            if (cc.isValid(sprite) && sprite["newUrl"] == picPath) {
                sprite.addAutoReleaseAsset(sp);
                sprite.spriteFrame = sp;
            }
            else {
                _this.checkAndReleaseAsset(sp);
            }
        };
        sprite["newUrl"] = picPath; // 记录最新url 防止多次请求异步设置了旧的
        sprite.spriteFrame = null; //置空 防止玩家看到旧的道具误会
        cc.resources.load(picPath, cc.SpriteFrame, finishCallback);
    };
    //----------------资源加载------------------------
    AssetUtils.showDialog = function (url, data, callback) {
        cc.resources.load("prefeb/" + url, cc.Prefab, function (err, prefab) {
            if (err) {
                return;
            }
            var node = cc.instantiate(prefab);
            global_1.Global.assetUtils.bindAutoReleaseAsset(node, prefab);
            var parentNode = global_1.Global.getsceneNode();
            if (node && parentNode) {
                if (data) {
                    cc.log(url, "confirmExit_dialog");
                    if (node.getComponent(url).initData) {
                        node.getComponent(url).initData(data);
                    }
                }
                parentNode.addChild(node);
                var content = node.getChildByName("content");
                content.scale = 0;
                cc.Tween.stopAllByTarget(content);
                cc.tween(content)
                    .to(0.32, { scale: 1 }, { easing: 'backOut' })
                    .start();
            }
            callback && callback();
        });
    };
    return AssetUtils;
}());
exports.AssetUtils = AssetUtils;

cc._RF.pop();