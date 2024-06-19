
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/AssetUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9Bc3NldFV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxTQUFTOzs7QUFFVCw2Q0FBOEM7QUFDOUMsbUNBQWtDO0FBSWxDO0lBQUE7SUE4RUEsQ0FBQztJQTVFRyxTQUFTO0lBQ0ssK0JBQW9CLEdBQWxDLFVBQW1DLE1BQWUsRUFBRSxLQUFlO1FBQy9ELElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMscUJBQWlCLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN2QixRQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxxQkFBaUIsQ0FBQyxDQUFDO1NBQ3JEO1FBQ0QsUUFBUSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxjQUFjO0lBQ0EsK0JBQW9CLEdBQWxDLFVBQW1DLEtBQWU7UUFDOUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFO1lBQzFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0wsQ0FBQztJQUVELG9DQUFvQztJQUN0QixvQkFBUyxHQUF2QixVQUF3QixTQUFpQixFQUFFLFNBQTBCLEVBQUUsT0FBc0I7UUFDekYsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsS0FBSztJQUNTLHVCQUFZLEdBQTFCLFVBQTJCLFNBQWlCLEVBQUUsU0FBMEI7UUFDcEUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxTQUFTO0lBQ0sscUJBQVUsR0FBeEIsVUFBeUIsT0FBZSxFQUFFLE1BQWlCLEVBQUUsT0FBZ0I7UUFBN0UsaUJBbUJDO1FBbEJHLElBQUksY0FBYyxHQUFHLFVBQUMsR0FBRyxFQUFFLEVBQWtCO1lBQ3pDLElBQUksR0FBRyxFQUFFO2dCQUNMLElBQUksT0FBTyxFQUFFO29CQUNULEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2lCQUNwQztxQkFBTTtpQkFDTjtnQkFDRCxPQUFPO2FBQ1Y7WUFDRCxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLE9BQU8sRUFBRTtnQkFDbkQsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMvQixNQUFNLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQzthQUMzQjtpQkFBTTtnQkFDSCxLQUFJLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDakM7UUFDTCxDQUFDLENBQUE7UUFDRCxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUEsd0JBQXdCO1FBQ25ELE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUEsaUJBQWlCO1FBQzNDLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCw4Q0FBOEM7SUFDaEMscUJBQVUsR0FBeEIsVUFBeUIsR0FBVyxFQUFFLElBQUssRUFBRSxRQUFTO1FBQ2xELEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFDLEdBQUcsRUFBRSxNQUFNO1lBQ3RELElBQUksR0FBRyxFQUFFO2dCQUNMLE9BQU87YUFDVjtZQUVELElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEMsZUFBTSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDckQsSUFBSSxVQUFVLEdBQUcsZUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3ZDLElBQUksSUFBSSxJQUFJLFVBQVUsRUFBRTtnQkFDcEIsSUFBSSxJQUFJLEVBQUU7b0JBQ04sRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsb0JBQW9CLENBQUMsQ0FBQTtvQkFDakMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRTt3QkFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7cUJBQ3hDO2lCQUNKO2dCQUNELFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzFCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzdDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQixFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7cUJBQ1osRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQztxQkFDN0MsS0FBSyxFQUFFLENBQUM7YUFDaEI7WUFDRCxRQUFRLElBQUksUUFBUSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQTlFQSxBQThFQyxJQUFBO0FBOUVZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8v6LWE5rqQ5Yqg6L295bel5YW357G7XHJcblxyXG5pbXBvcnQgQXV0b1JlbGVhc2VBc3NldHMgZnJvbSBcIi4vQnhBdXRvQXNzZXRcIjtcclxuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4vZ2xvYmFsXCI7XHJcblxyXG5leHBvcnQgdHlwZSBBc3NldENhbGxGdW5jID0gKGVycjogRXJyb3IsIGFzc2V0RGF0YTogY2MuQXNzZXQpID0+IHZvaWQ7XHJcblxyXG5leHBvcnQgY2xhc3MgQXNzZXRVdGlscyB7XHJcblxyXG4gICAgLy8g57uR5a6a6LWE5rqQ6YeK5pS+XHJcbiAgICBwdWJsaWMgc3RhdGljIGJpbmRBdXRvUmVsZWFzZUFzc2V0KHBhcmVudDogY2MuTm9kZSwgYXNzZXQ6IGNjLkFzc2V0KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHRlbXBBdXRvID0gcGFyZW50LmdldENvbXBvbmVudChBdXRvUmVsZWFzZUFzc2V0cyk7XHJcbiAgICAgICAgaWYgKCFjYy5pc1ZhbGlkKHRlbXBBdXRvKSkge1xyXG4gICAgICAgICAgICB0ZW1wQXV0byA9IHBhcmVudC5hZGRDb21wb25lbnQoQXV0b1JlbGVhc2VBc3NldHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0ZW1wQXV0by5hZGRBdXRvUmVsZWFzZUFzc2V0KGFzc2V0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmo4DmtYvlvJXnlKjorqHmlbDlkI7ph4rmlL7otYTmupBcclxuICAgIHB1YmxpYyBzdGF0aWMgY2hlY2tBbmRSZWxlYXNlQXNzZXQoYXNzZXQ6IGNjLkFzc2V0KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQoYXNzZXQpICYmIGFzc2V0LnJlZkNvdW50IDw9IDApIHtcclxuICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLnJlbGVhc2VBc3NldChhc3NldCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v5Yqg6L29KOW/hemhu+mFjeWQiGFkZEF1dG9SZWxlYXNlQXNzZXQg5L2/55So57uR5a6a6LWE5rqQKVxyXG4gICAgcHVibGljIHN0YXRpYyBsb2FkQXNzZXQoYXNzZXRQYXRoOiBzdHJpbmcsIGFzc2V0VHlwZTogdHlwZW9mIGNjLkFzc2V0LCBhc3NldENiOiBBc3NldENhbGxGdW5jKTogdm9pZCB7XHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoYXNzZXRQYXRoLCBhc3NldFR5cGUsIGFzc2V0Q2IpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6aKE5Yqg6L29XHJcbiAgICBwdWJsaWMgc3RhdGljIHByZWxvYWRBc3NldChhc3NldFBhdGg6IHN0cmluZywgYXNzZXRUeXBlOiB0eXBlb2YgY2MuQXNzZXQpOiB2b2lkIHtcclxuICAgICAgICBjYy5yZXNvdXJjZXMucHJlbG9hZChhc3NldFBhdGgsIGFzc2V0VHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Yqg6L295Y2V5byg5Zu+54mHXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvYWRTcHJpdGUocGljUGF0aDogc3RyaW5nLCBzcHJpdGU6IGNjLlNwcml0ZSwgZGVmUGF0aD86IHN0cmluZykge1xyXG4gICAgICAgIGxldCBmaW5pc2hDYWxsYmFjayA9IChlcnIsIHNwOiBjYy5TcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGVmUGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFNwcml0ZShkZWZQYXRoLCBzcHJpdGUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY2MuaXNWYWxpZChzcHJpdGUpICYmIHNwcml0ZVtcIm5ld1VybFwiXSA9PSBwaWNQYXRoKSB7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGUuYWRkQXV0b1JlbGVhc2VBc3NldChzcCk7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBzcDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tBbmRSZWxlYXNlQXNzZXQoc3ApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwcml0ZVtcIm5ld1VybFwiXSA9IHBpY1BhdGg7Ly8g6K6w5b2V5pyA5pawdXJsIOmYsuatouWkmuasoeivt+axguW8guatpeiuvue9ruS6huaXp+eahFxyXG4gICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IG51bGw7Ly/nva7nqbog6Ziy5q2i546p5a6255yL5Yiw5pen55qE6YGT5YW36K+v5LyaXHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQocGljUGF0aCwgY2MuU3ByaXRlRnJhbWUsIGZpbmlzaENhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS3otYTmupDliqDovb0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2hvd0RpYWxvZyh1cmw6IHN0cmluZywgZGF0YT8sIGNhbGxiYWNrPykge1xyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwicHJlZmViL1wiICsgdXJsLCBjYy5QcmVmYWIsIChlcnIsIHByZWZhYikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgR2xvYmFsLmFzc2V0VXRpbHMuYmluZEF1dG9SZWxlYXNlQXNzZXQobm9kZSwgcHJlZmFiKTtcclxuICAgICAgICAgICAgbGV0IHBhcmVudE5vZGUgPSBHbG9iYWwuZ2V0c2NlbmVOb2RlKCk7XHJcbiAgICAgICAgICAgIGlmIChub2RlICYmIHBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKHVybCwgXCJjb25maXJtRXhpdF9kaWFsb2dcIilcclxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5nZXRDb21wb25lbnQodXJsKS5pbml0RGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudCh1cmwpLmluaXREYXRhKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb250ZW50ID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbnRlbnRcIik7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50LnNjYWxlID0gMDtcclxuICAgICAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChjb250ZW50KTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGNvbnRlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMzIsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6ICdiYWNrT3V0JyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iXX0=