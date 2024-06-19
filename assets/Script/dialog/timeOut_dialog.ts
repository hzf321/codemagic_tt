import { gameData } from "../tool/gameData";
import { Global } from "../tool/global";

const { ccclass, property } = cc._decorator;

@ccclass
export default class timeOut_dialog extends cc.Component {

    ADcallback: Function = null;
    restartCallBack: Function = null;

    start(): void {
        gameData.showBanner();
    }

    initData(data) {

        this.ADcallback = data.ADcallback;
        this.restartCallBack = data.restartCallBack;
    }


    onClick_AD_btn() {
        Global.audioUtils.commonBtnClick();
        gameData.showVideo(()=>{
            this.scheduleOnce(()=>{
                this.ADcallback && this.ADcallback()
                this.node.destroy();
                gameData.closeBanner();
            });
        });
    }

    onClick_restart() {
        Global.audioUtils.commonBtnClick();
        this.restartCallBack && this.restartCallBack()
        this.node.destroy();
        gameData.closeBanner();
    }
}
