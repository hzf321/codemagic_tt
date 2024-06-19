import imgItem from "./prefeb/imgItem";
import { gameData } from "./tool/gameData";
import { Global } from "./tool/global";
import { dialog, UtilsTool } from "./tool/utils";


const { ccclass, property } = cc._decorator;

@ccclass
export default class hall extends cc.Component {

    @property(cc.Node)
    bg: cc.Node = null;

    @property(cc.Prefab)
    imgItem: cc.Prefab = null;

    @property(cc.Node)
    scroll_contect: cc.Node = null;

    @property(cc.ScrollView)
    scrollView: cc.ScrollView = null;

    @property(cc.Node)
    toastNode: cc.Node = null;


    start() {
  
        if (cc.sys.platform === cc.sys.IPAD) {
            this.getComponent(cc.Canvas).fitHeight = true;
            this.getComponent(cc.Canvas).fitWidth = false;
        }

        
        Global.setsceneNode(this.node);
        UtilsTool.adapterBg(this.bg);

        this.scheduleOnce(() => {
            this.init();
        })

        this.scheduleOnce(() => {
            if (gameData.userData.level > 4 && gameData.userData.level < gameData.levelAll) {
                let hei = 260;
                let y = 0;
                if (gameData.userData.level % 2 == 0) {
                    let index = gameData.userData.level / 2 ;

                    y = ((gameData.userData.level -1) - index) * hei;
                } else {
                    let index = (gameData.userData.level + 1) / 2
                    y = (gameData.userData.level - index) * hei;
                }

                this.scrollView.scrollToOffset(cc.v2(0, y), 1);
            }
        }, 0.1)
    }

    init() {
        this.scroll_contect.destroyAllChildren()
        for (let i = 0; i < 30; i++) {
            let item = cc.instantiate(this.imgItem);
            this.scroll_contect.addChild(item);
            item.getComponent(imgItem).init(i, this);
        }
    }

    onClick_setting() {
        Global.audioUtils.commonBtnClick();
        Global.assetUtils.showDialog(dialog.setting_dialog, { isGame: false });
        // Global.assetUtils.showDialog(dialog.comment_dialog);
    }



    showToast(text: string) {
        this.toastNode.active = true;
        let toastLabel = this.toastNode.getChildByName("label");
        toastLabel.getComponent(cc.Label).string = text;
        cc.Tween.stopAllByTarget(this.toastNode);
        this.toastNode.opacity = 255;
        cc.tween(this.toastNode).to(0.15, { scale: 1.2 }).to(0.15, { scale: 1 }).delay(0.5).to(0.5, { opacity: 0 }).call(() => {
            this.toastNode.active = false;
        }).start();
    }
}
