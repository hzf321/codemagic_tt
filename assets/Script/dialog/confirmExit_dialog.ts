import { gameData } from "../tool/gameData";
import { Global } from "../tool/global";
import { scene } from "../tool/utils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class confirmExit_dialog extends cc.Component {

    callback: Function = null;


    protected start(): void {
        gameData.showBanner();
    }

    initData(data) {
        this.callback = data.callback;
    }


    onClick_continue_btn() {
        Global.audioUtils.commonBtnClick();
        this.callback && this.callback()
        this.node.destroy();
        gameData.closeBanner();
    }

    onClick_backHall() {
        Global.audioUtils.commonBtnClick();
        this.node.destroy();
        gameData.closeBanner();
        gameData.userData.isHall = true;
        gameData.storageData();
        cc.director.loadScene(scene.hall);

    }
}
