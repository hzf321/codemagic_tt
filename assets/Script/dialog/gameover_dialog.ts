import { gameData } from "../tool/gameData";
import { Global } from "../tool/global";
import { dialog, UtilsTool } from "../tool/utils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class gameover_dialog extends cc.Component {


    @property(cc.RichText)
    title: cc.RichText = null;

    @property(cc.Node)
    bg: cc.Node = null;


    callback: Function = null;

    initData(data) {
        this.callback = data.callback;
    }


    onLoad(): void {
        if (Global.imgId >= 6) {
            gameData.showInterst();
        }

      
    }


    start(): void {
        this.title.string = "<color=#e8c30f>CONGRATULATIONS TO YOU!Clear</c><color=#f4f4f5> level " + Global.imgId + "</color>";
        UtilsTool.adapterBg(this.bg);
    }

    onClick_continueBtn() {
        Global.audioUtils.commonBtnClick();
        this.callback && this.callback();
        this.node.destroy();
    }

    onClick_close() {
        Global.audioUtils.commonBtnClick();
        this.node.destroy();
    }
}
