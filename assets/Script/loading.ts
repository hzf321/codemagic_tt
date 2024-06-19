import { gameData, storage } from "./tool/gameData";
import { Global } from "./tool/global";
import { StorageUtils } from "./tool/StorageUtils";
import { dialog, scene, UtilsTool } from "./tool/utils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class loading extends cc.Component {

    @property(cc.Node)
    loading_bg: cc.Node = null;

    @property(cc.Sprite)
    loaging_bar_yellow: cc.Sprite = null;

    @property(cc.Node)
    loadingBox: cc.Node = null;

    @property(cc.Node)
    gotoHallBox: cc.Node = null;

    @property(cc.Node)
    loading_play: cc.Node = null;

    private resNum = 6;
    private nowNum = 0;

    start() {

        if (cc.sys.platform === cc.sys.IPAD) {
            this.getComponent(cc.Canvas).fitHeight = true;
            this.getComponent(cc.Canvas).fitWidth = false;
        }


        UtilsTool.adapterBg(this.loading_bg);
        Global.audioUtils.initBtnClickEffect();
        Global.audioUtils.initbgmMusic();

        let gamedataStorage = StorageUtils.getStorageJSON(storage.gamedata);
        if (gamedataStorage) {
            gameData.userData = gamedataStorage;
        }

        Global.setsceneNode(this.node);


        if (!gameData.userData.isClause) {
            this.gotoHallBox.active = false;
            this.loadingBox.active = false;
            Global.assetUtils.showDialog(dialog.clause_dialog, {
                callback: () => {
                    gameData.userData.isClause = true;
                    this.gotoHallBox.active = true;
                    this.loadingBox.active = false;
                    gameData.storageData();
                    cc.tween(this.loading_play).to(0.5, { scale: 1.1 }).to(0.5, { scale: 1 }).union().repeatForever().start();
                }
            });
        } else {
            this.gotoHallBox.active = true;
            this.loadingBox.active = false;

            cc.tween(this.loading_play).to(0.5, { scale: 1.1 }).to(0.5, { scale: 1 }).union().repeatForever().start();
        }



        gameData.setVideoFailCb(()=>{
            cc.resources.load("prefeb/toast", cc.Prefab, (err, prefab) => {
                if (err) {
                    return;
                }
                let toast = cc.instantiate(prefab);
                Global.assetUtils.bindAutoReleaseAsset(toast, prefab);
                let parentNode = Global.getsceneNode();
                if (toast && parentNode) {
                    toast.active = true;
                    parentNode.addChild(toast);
                    let toastLabel = toast.getChildByName("label");
                    toastLabel.getComponent(cc.Label).string = "No ads at the moment";
                    cc.Tween.stopAllByTarget(toast);
                    toast.opacity = 255;
                    cc.tween(toast).to(0.15, { scale: 1.2 }).to(0.15, { scale: 1 }).delay(0.5).to(0.5, { opacity: 0 }).call(() => {
                        toast.destroy();
                    }).start();
                }
            })
        });
 

    }

    onClick_gotoPlay() {
        this.gotoHallBox.active = false;
        this.loadingBox.active = true;
        Global.audioUtils.commonBtnClick();

        this.loaging_bar_yellow.fillRange = 0;
        cc.Tween.stopAllByTarget(this.loaging_bar_yellow)
        cc.loader.loadResDir("prefeb", (err, assets) => {
            if (err) {
                cc.error(err);
                return;
            }
            console.log('prefeb assets in  have been loaded.');
            this.progressBarEvent();
        });
        cc.loader.loadResDir("finishImg", (err, assets) => {
            if (err) {
                cc.error(err);
                return;
            }
            console.log('finishImg assets in  have been loaded.');
            this.progressBarEvent();
        });
        cc.loader.loadResDir("originalImg", (err, assets) => {
            if (err) {
                cc.error(err);
                return;
            }
            console.log('originalImg assets in  have been loaded.');
            this.progressBarEvent();
        });
        cc.loader.loadResDir("imgJson", (err, assets) => {
            if (err) {
                cc.error(err);
                return;
            }
            gameData.levelAll = assets.length;
            console.log('imgJson assets in  have been loaded.');
            this.progressBarEvent();
        });

        cc.director.preloadScene(scene.game, (err, assets) => {
            cc.log("game scene preloaded");
            this.progressBarEvent();
        });
        cc.director.preloadScene(scene.hall, (err, assets) => {
            cc.log("hall scene preloaded");
            this.progressBarEvent();
        });

    }

    progressBarEvent() {
        let fill = 1 / 6;
        this.nowNum++;
        cc.Tween.stopAllByTarget(this.loaging_bar_yellow)
        cc.tween(this.loaging_bar_yellow).to(0.5, { fillRange: fill * this.nowNum })
            .call(() => {
                if (this.nowNum == this.resNum) {
                    this.scheduleOnce(() => {
                        if (gameData.userData.isHall) {
                            cc.director.loadScene(scene.hall);
                        } else {
                            Global.imgId = gameData.userData.level;
                            cc.director.loadScene(scene.game);
                        }
                    }, 0.05)
                }
            }).start();
    }


    showShiPing() {
        console.log("android---------------showShiPing------------------")
        gameData.showVideo(()=>{
            console.log("zzzzzzzzzzzzzzzzzzzzwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
          })
    }


    showbanner() {
        console.log("android---------------showbanner------------------")
        jsb.reflection.callStaticMethod("UnityMgr", "showbanner");
    }


    hidebanner() {
        console.log("android---------------hidebanner------------------")
        jsb.reflection.callStaticMethod("UnityMgr", "hidebanner");
    }
 
    showChaping() {
        console.log("android---------------showChaping------------------")
        jsb.reflection.callStaticMethod("UnityMgr", "loadInterstitial");
    }
   
    testBtn() {
        console.log("android---------------testBtn------------------")
        //jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "openPingFen", "()V");
    
        jsb.reflection.callStaticMethod("UnityMgr", "testlog");//全屏视频
    }
}
