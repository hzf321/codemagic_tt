import newhand from "./prefeb/newhand";
import { gameData, sound } from "./tool/gameData";
import { beautyData, Global } from "./tool/global";
import { dialog, scene, UtilsTool } from "./tool/utils";


const { ccclass, property } = cc._decorator;

enum GameState {
    find,       //找到
    err,        //没找到    
    finish,     //找到重复的  
}

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    bg: cc.Node = null;

    @property(cc.Node)
    originalImg: cc.Node = null;

    @property(cc.Node)
    finishImg: cc.Node = null;

    @property(cc.Node)
    tishi_qipao: cc.Node = null;

    @property(cc.Prefab)
    gameFindPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    gameErrPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    gameTishiPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    game_tuowei: cc.Prefab = null;

    @property(cc.Node)
    imgSignBox: cc.Node = null;

    @property(cc.Node)
    yeziBox: cc.Node = null;

    @property(cc.Label)
    level: cc.Label = null;

    @property(cc.Node)
    timeAll: cc.Node = null;

    @property(cc.Node)
    reduceTime: cc.Node = null;

    @property(cc.Node)
    mask: cc.Node = null;

    imgData: beautyData[] = [];
    setImgY: number = 257;
    originalScale: number = 0.5;

    yeziAllNum: number = 10;
    yeziNowNum: number = 0;
    residueTime: number = 0;

    isTiShi: boolean = false;

    timer = null;
    isPause: boolean = false;
    firstErr: boolean = false;

    private audioClips: cc.AudioClip[] = [];

    newhandNode: newhand = null;


    start() {
    
        if (cc.sys.platform === cc.sys.IPAD) {
            this.getComponent(cc.Canvas).fitHeight = true;
            this.getComponent(cc.Canvas).fitWidth = false;
        }

        this.resetAll();
        Global.setsceneNode(this.node);
        UtilsTool.adapterBg(this.bg);

        this.onEvent();
        this.init();
        this.startDownTime();
        this.loadRes();
        this.checkNewHand();

        cc.resources.loadDir("sound", cc.AudioClip, (err: Error, clips: cc.AudioClip[]) => {
            if (err || !cc.isValid(this)) return;
            this.audioClips = clips;
            this.addAutoReleaseAssets(clips);
        });
    }

    onEvent() {
        this.originalImg.on(cc.Node.EventType.TOUCH_END, this.imgEvent, this);
        this.finishImg.on(cc.Node.EventType.TOUCH_END, this.imgEvent, this);
    }

    resetAll(clearData?) {
        if (!clearData) {
            this.imgData = [];
        }
        this.imgSignBox.getChildByName("origBox").destroyAllChildren();
        this.imgSignBox.getChildByName("finishBox").destroyAllChildren();
        this.imgSignBox.getChildByName("errBox").destroyAllChildren();
        this.imgSignBox.getChildByName("tishiBox").destroyAllChildren();
        this.imgSignBox.getChildByName("lizi").destroyAllChildren();

        this.mask.active = false;
        this.firstErr = false;
        this.isPause = false;
        this.timer = null;
        this.isTiShi = false;
        this.yeziNowNum = 0;
        this.init();
    }

    checkNewHand() {
        if (gameData.userData.isGudie) {
            return;
        }
        cc.resources.load("prefeb/newhand", cc.Prefab, (err, prefab) => {
            if (err) {
                return;
            }

            let node = cc.instantiate(prefab);
            Global.assetUtils.bindAutoReleaseAsset(node, prefab);
            this.node.addChild(node);
            this.newhandNode = node.getComponent(newhand);
            this.newhandNode.showdong1();
        })
    }


    init() {
        this.level.string = "Lv" + Global.imgId;
        for (let i = 0; i < this.yeziBox.children.length; i++) {
            let anim = this.yeziBox.children[i].getComponent(sp.Skeleton);
            UtilsTool.playSp(anim, "1_an_stop");
        }

        this.residueTime = this.getDownTime();

        this.changeQiPaoNum();

        this.mask.active = false;

        let time = UtilsTool.timeChange(this.residueTime);
        this.timeAll.getComponent(cc.Label).string = time;
        this.reduceTime.active = false;
    }


    //开启倒计时
    startDownTime() {
        if (this.residueTime > 0) {
            let time = UtilsTool.timeChange(this.residueTime);
            this.timeAll.getComponent(cc.Label).string = time;
            this.timer = this.schedule(this.downTimeEvent, 1);
        }
    }

    downTimeEvent() {
        if (this.isPause) {
            return
        }
        this.residueTime--;
        let time = UtilsTool.timeChange(this.residueTime);
        this.timeAll.getComponent(cc.Label).string = time;
        if (this.residueTime <= 0) {
            this.unschedule(this.downTimeEvent);
            this.timeOutEvent();
            this.playCommonSound(sound.fail);
            cc.log("时间到了");
        }
    }

    errReduceTime() {
        if (!this.firstErr) return
        let posY = this.timeAll.y;
        let reduceTime = 30;
        this.reduceTime.y = posY;
        this.reduceTime.active = true;
        this.reduceTime.getComponent(cc.Label).string = "-" + reduceTime;
        cc.Tween.stopAllByTarget(this.reduceTime);
        cc.tween(this.reduceTime).to(0.15, { scale: 1.2 }).to(0.15, { scale: 1 }).to(1, { opacity: 255, y: posY - 25 }).call(() => {
            this.reduceTime.active = false;
        }).start();

        this.residueTime -= reduceTime;
        if (this.residueTime <= 0) {
            this.timeAll.getComponent(cc.Label).string = "00:00";
            this.playCommonSound(sound.fail);
            cc.log("时间到了");
            this.unschedule(this.downTimeEvent);
            this.timeOutEvent();
        } else {
            let time = UtilsTool.timeChange(this.residueTime);
            this.timeAll.getComponent(cc.Label).string = time;
        }
    }

    changeQiPaoNum() {
        if (gameData.userData.tishiNum > 0) {
            this.tishi_qipao.getChildByName("ad_label").active = false;
            this.tishi_qipao.getChildByName("num_label").active = true;
            this.tishi_qipao.getChildByName("num_label").getComponent(cc.Label).string = gameData.userData.tishiNum.toString();
        } else {
            this.tishi_qipao.getChildByName("ad_label").active = true;
            this.tishi_qipao.getChildByName("num_label").active = false;
        }
    }

    loadRes() {
        Global.assetUtils.loadSprite("originalImg/" + Global.imgId + "-o", this.originalImg.getComponent(cc.Sprite));

        Global.assetUtils.loadSprite("finishImg/" + Global.imgId + "-f", this.finishImg.getComponent(cc.Sprite));

        cc.resources.load("imgJson/level" + Global.imgId, cc.JsonAsset, (err, res) => {
            if (err) {
                cc.log(err)
                return;
            }
            // 获取到 Json 数据
            Global.assetUtils.bindAutoReleaseAsset(this.node, res);
            const jsonData = res.json;
            if (jsonData && jsonData.path) {
                this.imgData = jsonData.path;
                for (let i = 0; i < this.imgData.length; i++) {
                    this.imgData[i].isFind = false;
                }
                cc.log(this.imgData, "this.imgData ");
                // for (let i = 0; i < this.imgData.length; i++) {
                //     let data = this.imgData[i];
                //     this.findSignSucc(cc.v3(data.centerPos.x, data.centerPos.y))
                // }

                // for (let i = 0; i < this.imgData.length; i++) {
                //     let data = this.imgData[i];
                //     this.findSignSucc(cc.v3(data.centerPos.x, data.centerPos.y))
                // }
            }
        })
    }


    yeziLight(pos: cc.Vec3) {
        let anim = this.yeziBox.children[this.yeziNowNum - 1].getComponent(sp.Skeleton);

        let tuowei = cc.instantiate(this.game_tuowei);
        this.imgSignBox.getChildByName("lizi").addChild(tuowei);
        tuowei.setPosition(pos);

        let changePos = UtilsTool.changePos(anim.node, tuowei);

        let time = 0.5;
        if (pos.y < 0) {
            time = 1;
        }
        cc.Tween.stopAllByTarget(tuowei);
        cc.tween(tuowei).to(time, { position: changePos }).call(() => {
            this.scheduleOnce(() => {
                tuowei.destroy();
            }, 0.3);
            UtilsTool.playSp(anim, "2_bianliang");
            UtilsTool.addSequenceSp(anim, "3_liang_stop");
        }).start();
    }

    findSignSucc(targetPos: cc.Vec3, findData:beautyData) {
        for (let i = 0; i < 2; i++) {
            let gameFind = cc.instantiate(this.gameFindPrefab);
            let imgY = 0;
            if (i == 0) {
                imgY = targetPos.y * this.originalScale + this.setImgY;
                this.imgSignBox.getChildByName("origBox").addChild(gameFind)
            } else {
                this.imgSignBox.getChildByName("finishBox").addChild(gameFind)
                imgY = targetPos.y * this.originalScale - this.setImgY;
            }
            let centerPos = cc.v3(targetPos.x * this.originalScale, imgY);

            gameFind.setPosition(centerPos);

            cc.Tween.stopAllByTarget(gameFind);
            gameFind.scale = 0;


            cc.tween(gameFind).to(0.3, { scale: 1.5 }).to(0.1, { scale: 1.3 }).start();
        }
    }

    findSignErr(targetPos: cc.Vec3) {
        let clickPos = targetPos;
        let gameErr = cc.instantiate(this.gameErrPrefab);
        this.imgSignBox.getChildByName("errBox").addChild(gameErr);
        gameErr.setPosition(clickPos);
        this.errSignAnim(gameErr);

        let otherErrSign: cc.Node = null;
        if (clickPos.y > 0) {
            otherErrSign = cc.instantiate(this.gameErrPrefab);
            this.imgSignBox.getChildByName("errBox").addChild(otherErrSign);
            otherErrSign.setPosition(cc.v3(clickPos.x, clickPos.y - (this.setImgY * 2)));
        } else {
            otherErrSign = cc.instantiate(this.gameErrPrefab);
            this.imgSignBox.getChildByName("errBox").addChild(otherErrSign);
            otherErrSign.setPosition(cc.v3(clickPos.x, clickPos.y + (this.setImgY * 2)));
        }
        if (otherErrSign) {
            this.errSignAnim(otherErrSign);
        }
    }

    imgEvent(event: cc.Event.EventTouch) {
        let pos = event.getLocation();
        let clickPos = this.imgSignBox.convertToNodeSpaceAR(cc.v3(pos.x, pos.y));
        // this.findSignErr(clickPos);
        let data = this.checkImgSign(clickPos);
        if (data.type == GameState.find) {
            if (this.isTiShi) {
                this.isTiShi = false;
                this.imgSignBox.getChildByName("tishiBox").destroyAllChildren();
            }
            this.yeziNowNum = this.yeziNowNum + 1;
            this.findSignSucc(cc.v3(data.findData.centerPos.x, data.findData.centerPos.y), data.findData);
            this.yeziLight(clickPos);

            if (this.newhandNode && this.yeziNowNum == 1) {
                if( this.newhandNode){
                    this.newhandNode.hidedong1();
                    this.newhandNode.showdong2();
                }
            
            } else if (this.newhandNode && this.yeziNowNum == 2) {
                if( this.newhandNode){
                    this.newhandNode.node.destroy();
                    this.newhandNode = null;
                }
                gameData.userData.isGudie = true;
                gameData.storageData();
            }
            this.playCommonSound(sound.correct);

            if (this.yeziNowNum >= this.yeziAllNum) {       //胜利 游戏结束
                this.gameEnd();
            }
        } else if (data.type == GameState.err) {
            this.playCommonSound(sound.err);
            this.errReduceTime();
            this.findSignErr(clickPos);
            this.firstErr = true;
        } else {
            this.playCommonSound(sound.err);
            this.errReduceTime();
            this.findSignErr(clickPos);
            this.firstErr = true;
        }
    }

    checkImgSign(targetPos: cc.Vec3) {
        let type: GameState = null;
        let findData = null;
        for (let i = 0; i < this.imgData.length; i++) {
            let data = this.imgData[i];
            let x = data.centerPos.x * this.originalScale;
            let y = 0;
            if (targetPos.y > 0) {
                y = data.centerPos.y * this.originalScale + this.setImgY;
            } else {
                y = data.centerPos.y * this.originalScale - this.setImgY;
            }

            let wid = data.blockSize.wid * this.originalScale;
            let hei = data.blockSize.hei * this.originalScale;

            // let testitem = cc.instantiate(this.testitemPrefab);
            // this.imgSignBox.addChild(testitem);
            // testitem.setPosition(cc.v3(x, y));
            // testitem.width = wid;
            // testitem.height = hei;

            if (!data.isFind && targetPos.x <= x + wid / 2 && targetPos.x >= x - wid / 2
                && targetPos.y <= y + hei / 2 && targetPos.y >= y - hei / 2) {
                if (!data.isFind) {
                    cc.log("找到了");
                    type = GameState.find;
                    findData = data;
                    data.isFind = true;
                } else {
                    type = GameState.finish;
                    cc.log("找到重复的了");
                }
                return { type, findData }
            } else {
                type = GameState.err;
                cc.log("没找到");
            }
        }

        return { type, findData }
    }


    errSignAnim(node: cc.Node) {
        cc.Tween.stopAllByTarget(node);
        cc.tween(node)
            .to(0.05, { angle: 15 }).to(0.05, { angle: 0 }).to(0.05, { angle: -15 })
            .to(0.07, { angle: 10 }).to(0.07, { angle: 0 }).to(0.07, { angle: -10 })
            .to(0.1, { angle: 7 }).to(0.1, { angle: 0 }).to(0.1, { angle: -7 })
            .to(0.1, { angle: 3 }).to(0.1, { angle: 0 })
            .call(() => {
                node.destroy();
            }).start();
    }


    gameEnd() {
        cc.log("游戏结束");
        this.mask.active = true;
        this.scheduleOnce(() => {
            for (let i = 0; i < this.yeziBox.children.length; i++) {
                let anim = this.yeziBox.children[i].getComponent(sp.Skeleton);
                this.scheduleOnce(() => {
                    UtilsTool.playSp(anim, "4_man", false, () => {
                        this.scheduleOnce(() => {
                            if (i == this.yeziBox.children.length - 1) {
                                this.playCommonSound(sound.win);
                                if (gameData.userData.level + 1 <= gameData.levelAll) {
                                    gameData.userData.level = gameData.userData.level + 1;
                                    gameData.storageData();
                                }
                                Global.assetUtils.showDialog(dialog.gameover_dialog, {
                                    callback: () => {
                                        if (Global.imgId + 1 <= gameData.levelAll) {
                                            Global.imgId = Global.imgId + 1;
                                            this.resetAll();
                                            this.init();
                                            this.startDownTime();
                                            this.loadRes();
                                        } else {
                                            gameData.userData.isHall = true;
                                            gameData.storageData();
                                            cc.director.loadScene(scene.hall);
                                        }
                                    }
                                });
                            }
                        })
                    });
                }, 0.1 * i);
            }
        }, 0.5);
    }


    //获取当前关卡的倒计时
    getDownTime() {
        let level = Global.imgId;
        let time = 0;
        if (level >= 1 && level <= 5) {
            time = 5 * 60;
        } else if (level >= 6 && level <= 10) {
            time = 3 * 60;
        } else if (level >= 11 && level <= 15) {
            time = 2 * 60 + 30;
        } else if (level >= 16 && level <= 20) {
            time = 2 * 60;
        } else if (level >= 21 && level <= 25) {
            time = 1 * 60 + 30;
        } else {
            time = 1 * 60;
        }
        return time;
    }


    //时间到
    timeOutEvent() {
        Global.assetUtils.showDialog(dialog.timeOut_dialog, {
            ADcallback: () => {
                this.residueTime = 60;
                gameData.userData.tishiNum++;
                gameData.storageData();
                this.changeQiPaoNum();
                this.startDownTime();
            },

            restartCallBack: () => {
                this.resetAll(true);
                this.init();
                this.startDownTime();
                cc.log(this.imgData, "this.imgData");
                for (let i = 0; i < this.imgData.length; i++) {
                    this.imgData[i].isFind = false;
                }
            }
        });
    }

    onClick_back() {
        Global.audioUtils.commonBtnClick();
        this.isPause = true;
        Global.assetUtils.showDialog(dialog.confirmExit_dialog, { callback: () => { this.isPause = false } });
    }


    onClick_pause() {
        Global.audioUtils.commonBtnClick();
        this.isPause = true;
        Global.assetUtils.showDialog(dialog.setting_dialog, { isGame: true, callback: () => { this.isPause = false } });
         
    }

    onClick_tishi() {

        Global.audioUtils.commonBtnClick();
        if (this.isTiShi) {
            return;
        }
        let findData: beautyData = null;
        for (let i = 0; i < this.imgData.length; i++) {
            if (!this.imgData[i].isFind) {
                findData = this.imgData[i];
                break;
            }
        }

        if (!findData) {
            return
        }
        if (gameData.userData.tishiNum <= 0) {
            cc.log("看广告")

            gameData.showVideo(()=>{
                this.showTiShi(findData);
            });

            return;
        }
        gameData.userData.tishiNum = gameData.userData.tishiNum - 1;
        gameData.storageData();
        this.changeQiPaoNum();
        this.showTiShi(findData);
    }

    showTiShi(findData: beautyData) {

        if (findData) {
            this.isTiShi = true;
            for (let i = 0; i < 2; i++) {
                let tishi = cc.instantiate(this.gameTishiPrefab);
                this.imgSignBox.getChildByName("tishiBox").addChild(tishi);

                let x = findData.centerPos.x * this.originalScale;
                let y = 0
                if (i == 0) {
                    y = findData.centerPos.y * this.originalScale + this.setImgY;
                } else {
                    y = findData.centerPos.y * this.originalScale - this.setImgY;
                }
                tishi.setPosition(x, y);
                cc.Tween.stopAllByTarget(tishi);
                cc.tween(tishi).to(0.5, { scale: 0.7 }).to(0.5, { scale: 1 }).union().repeatForever().start();
            }

        }
    }


    //播放音效
    playCommonSound(audioName: string, loop: boolean = false): number {
        for (let i = 0; i < this.audioClips.length; i++) {
            if (this.audioClips[i].name == audioName) {
                let audioID = Global.audioUtils.playEffect(this.audioClips[i], loop);
                return audioID;
            }
        }
        return null;
    }
}
