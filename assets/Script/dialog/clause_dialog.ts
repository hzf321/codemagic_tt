import { gameData } from "../tool/gameData";
import { Global } from "../tool/global";
import { scene } from "../tool/utils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class clause_dialog extends cc.Component {

    callback: Function = null;

    start(): void {
        gameData.showBanner();
    }

    initData(data) {
        this.callback = data.callback;
    }

    onClick_Agreen() {
        Global.audioUtils.commonBtnClick();
        this.callback && this.callback()
        this.node.destroy();
        gameData.closeBanner();
    }
 
    onClick_PrivacyPolicy_btn() {
        Global.audioUtils.commonBtnClick();
        cc.sys.openURL("https://sites.google.com/view/beautyunveiledprivacypolicy/home");
    }

    onClick_Termsofservicebtn() {
        Global.audioUtils.commonBtnClick();
        cc.sys.openURL("https://sites.google.com/view/beautyunveiledtermsofservice/home");
    }

}
