import hall from "../hall";
import { gameData } from "../tool/gameData";
import { Global } from "../tool/global";
import { scene } from "../tool/utils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class imgItem extends cc.Component {

    @property(cc.Node)
    hall_mask: cc.Node = null;

    @property(cc.Sprite)
    img: cc.Sprite = null;

    private index: number = 0;

    private isLock: boolean = false;

    hall: hall = null;
    start() {

    }

    init(index: number, hall: hall) {
        this.index = index;
        this.hall = hall;
        if (this.index < gameData.userData.level) {
            this.hall_mask.active = false;
            this.isLock = true;
        } else {
            this.hall_mask.active = true;
            this.isLock = false;
        }
        Global.assetUtils.loadSprite("originalImg/" + (this.index + 1) + "-o", this.img);
    }

    onclick_item() {
        Global.audioUtils.commonBtnClick();
        if (this.isLock) {
            Global.imgId = this.index + 1;
            gameData.userData.isHall = false;
            gameData.storageData();
            cc.director.loadScene(scene.game);
        } else {
            this.hall.showToast("The level has not been unlocked yet");
        }
    }

}
