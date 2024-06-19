
//资源加载工具类

import AutoReleaseAssets from "./BxAutoAsset";
import { Global } from "./global";

export type AssetCallFunc = (err: Error, assetData: cc.Asset) => void;

export class AssetUtils {

    // 绑定资源释放
    public static bindAutoReleaseAsset(parent: cc.Node, asset: cc.Asset): void {
        let tempAuto = parent.getComponent(AutoReleaseAssets);
        if (!cc.isValid(tempAuto)) {
            tempAuto = parent.addComponent(AutoReleaseAssets);
        }
        tempAuto.addAutoReleaseAsset(asset);
    }

    // 检测引用计数后释放资源
    public static checkAndReleaseAsset(asset: cc.Asset): void {
        if (cc.isValid(asset) && asset.refCount <= 0) {
            cc.assetManager.releaseAsset(asset);
        }
    }

    //加载(必须配合addAutoReleaseAsset 使用绑定资源)
    public static loadAsset(assetPath: string, assetType: typeof cc.Asset, assetCb: AssetCallFunc): void {
        cc.resources.load(assetPath, assetType, assetCb);
    }

    //预加载
    public static preloadAsset(assetPath: string, assetType: typeof cc.Asset): void {
        cc.resources.preload(assetPath, assetType);
    }

    // 加载单张图片
    public static loadSprite(picPath: string, sprite: cc.Sprite, defPath?: string) {
        let finishCallback = (err, sp: cc.SpriteFrame) => {
            if (err) {
                if (defPath) {
                    this.loadSprite(defPath, sprite);
                } else {
                }
                return;
            }
            if (cc.isValid(sprite) && sprite["newUrl"] == picPath) {
                sprite.addAutoReleaseAsset(sp);
                sprite.spriteFrame = sp;
            } else {
                this.checkAndReleaseAsset(sp);
            }
        }
        sprite["newUrl"] = picPath;// 记录最新url 防止多次请求异步设置了旧的
        sprite.spriteFrame = null;//置空 防止玩家看到旧的道具误会
        cc.resources.load(picPath, cc.SpriteFrame, finishCallback);
    }

    //----------------资源加载------------------------
    public static showDialog(url: string, data?, callback?) {
        cc.resources.load("prefeb/" + url, cc.Prefab, (err, prefab) => {
            if (err) {
                return;
            }

            let node = cc.instantiate(prefab);
            Global.assetUtils.bindAutoReleaseAsset(node, prefab);
            let parentNode = Global.getsceneNode();
            if (node && parentNode) {
                if (data) {
                    cc.log(url, "confirmExit_dialog")
                    if (node.getComponent(url).initData) {
                        node.getComponent(url).initData(data)
                    }
                }
                parentNode.addChild(node);
                let content = node.getChildByName("content");
                content.scale = 0;
                cc.Tween.stopAllByTarget(content);
                cc.tween(content)
                    .to(0.32, { scale: 1 }, { easing: 'backOut' })
                    .start();
            }
            callback && callback();
        })
    }
}
