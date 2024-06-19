import { Global } from "./global";
import { StorageUtils } from "./StorageUtils";

let onCloseFinishCb: () => void = null;
let onClosefailCb: () => void = null;
class GameDataClass {

    private static _instance: GameDataClass = null;

    public static getInstance(): GameDataClass {
        if (this._instance == null) {
            this._instance = new GameDataClass();
        }
        return this._instance;
    }


    constructor() {
        cc.game.on(cc.game.EVENT_HIDE, function () {
            this.storageData();
        }, this);
    }

    levelAll: number = 30;
    userData: any = {
        isClause: false,    //是否打开过隐私协议    
        tishiNum: 1,        //提示次数
        level: 1,           //当前关卡
        isHall: false,      //是否返回过大厅
        isGudie: false,      //是否打开过新手引导
        finishLevel5: false,  //是否完成过第5关
    };

    storageData() {
        StorageUtils.setStorageJSON(storage.gamedata, this.userData);
    }


    setVideoFailCb(cb: () => void) {
        window['onClosefailCb'] = null;
        window['onClosefailCb'] = cb;
    }

 
    //看广告
    showVideo(finishCb: () => void) {
        console.log("android------------看广告")
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showShiPing", "()V");
            onCloseFinishCb = null;
            onCloseFinishCb = finishCb;
        } else if (cc.sys.isNative && cc.sys.OS_IOS == cc.sys.os) {

            jsb.reflection.callStaticMethod("UnityMgr", "loadReward");//全屏视频;
            window['onCloseFinishCb'] = null;
            window['onCloseFinishCb']= finishCb;

        } else {
            finishCb();
        }

    }

    //打开banner
    showBanner() {
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showbanner", "()V");
        }else if (cc.sys.isNative && cc.sys.OS_IOS == cc.sys.os) {

        } 
    }

    //关闭banner
    closeBanner() {
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hidebanner", "()V");
        }else if (cc.sys.isNative && cc.sys.OS_IOS == cc.sys.os) {

        } 
    }

    //打开插屏
    showInterst() {
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showChaping", "()V");
        }else if (cc.sys.isNative && cc.sys.OS_IOS == cc.sys.os) {

        } 
    }

    //打开评分
    showPingFen() {
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "openPingFen", "()V");
        }else if (cc.sys.isNative && cc.sys.OS_IOS == cc.sys.os) {

        } 
    }

  
}

export let gameData = GameDataClass.getInstance();

export enum storage {
    gamedata = "gamedata",
}

export enum sound {
    bgm = "bgm",
    click = "click",
    correct = "correct",
    err = "err",
    fail = "fail",
    win = "win",
}
window['onCloseFinishCb'] = () => {
   
}

/**sdk调用js里面window公众的函数 */
window['onCloseVdieoFinishCb'] = () => {
    // if (isPlayMusic) {
    //     AudioCtr.bg();
    // }
    console.log("onCloseVdieo----------------------------")
    window['onCloseFinishCb']()
}


/**sdk调用js里面window公众的函数 */
window['onCloseVdieofailCb'] = () => {
    // if (isPlayMusic) {
    //     AudioCtr.bg();
    // }
    console.log("onCloseVdieofailCbonCloseVdieofailCbonCloseVdieofailCb")
    window['onClosefailCb']()
}


window['onClosefailCb'] = () => {
   
}
