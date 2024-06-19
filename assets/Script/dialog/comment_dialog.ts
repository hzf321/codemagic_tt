import { gameData } from "../tool/gameData";
import { Global } from "../tool/global";

const { ccclass, property } = cc._decorator;

@ccclass
export default class comment_dialog extends cc.Component {

    callback: Function = null;

    @property(cc.Node)
    starBox: cc.Node = null;

    @property(cc.Node)
    clickBox: cc.Node = null;

    initData(data) {

    }

    start(): void {
        // for (let i = 0; i < this.clickBox.children.length; i++) {
        //     let item = this.clickBox.children[i];
        //     item.on(cc.Node.EventType.TOUCH_END, () => {  
        //         this.showStar(i)
        //     }, this)
        // }

        gameData.showBanner();
    }

    showStar(index) {
        for (let i = 0; i < this.starBox.children.length; i++) {
            let item = this.starBox.children[i];
            if (i <= index) {
                item.active = true;
            } else {
                item.active = false;
            }
        }
    }

    onClick_commentBtn() {
        gameData.showPingFen();
        Global.audioUtils.commonBtnClick();
        this.node.destroy();
        gameData.closeBanner();
    }

    onClick_close() {
        Global.audioUtils.commonBtnClick();
        this.node.destroy();
        gameData.closeBanner();
    }
}
