import { gameData } from "../tool/gameData";
import { Global } from "../tool/global";

const { ccclass, property } = cc._decorator;

@ccclass
export default class setting_dialog extends cc.Component {


    @property(cc.Sprite)
    title: cc.Sprite = null;

    @property(cc.SpriteFrame)
    pause_sprite: cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    setting_sprite: cc.SpriteFrame = null;

    @property(cc.Node)
    soundBox: cc.Node = null;

    @property(cc.Node)
    musicBox: cc.Node = null;

    @property(cc.Node)
    zhengdongBox: cc.Node = null;

    @property(cc.Node)
    setting_pausebtn: cc.Node = null;

    @property(cc.Node)
    setting_ok: cc.Node = null;

    callback: Function = null;

    start() {
        this.init();
        gameData.showBanner();
    }

    initData(data) {
        this.callback = data.callback;
        if (data.isGame) {
            this.title.spriteFrame = this.pause_sprite;
            this.setting_ok.active = false;
            this.setting_pausebtn.active = true;
        } else {
            this.title.spriteFrame = this.setting_sprite;
            this.setting_ok.active = true;
            this.setting_pausebtn.active = false;
        }
    }


    init() {

        if (!Global.audioUtils.musicSwitch) {
            this.musicBox.getChildByName("setting_on").active = false;
            this.musicBox.getChildByName("setting_off").active = true;
        } else {
            this.musicBox.getChildByName("setting_on").active = true;
            this.musicBox.getChildByName("setting_off").active = false;
        }

        if (!Global.audioUtils.effectSwitch) {
            this.soundBox.getChildByName("setting_on").active = false;
            this.soundBox.getChildByName("setting_off").active = true;
        } else {
            this.soundBox.getChildByName("setting_on").active = true;
            this.soundBox.getChildByName("setting_off").active = false;
        }

        if (!Global.audioUtils.shockSwitch) {
            this.zhengdongBox.getChildByName("setting_on").active = false;
            this.zhengdongBox.getChildByName("setting_off").active = true;
        } else {
            this.zhengdongBox.getChildByName("setting_on").active = true;
            this.zhengdongBox.getChildByName("setting_off").active = false;
        }
    }


    onClick_musicbtn() {
        Global.audioUtils.commonBtnClick();
        Global.audioUtils.switchMusic();
        if (!Global.audioUtils.musicSwitch) {
            this.musicBox.getChildByName("setting_on").active = false;
            this.musicBox.getChildByName("setting_off").active = true;
        } else {
            this.musicBox.getChildByName("setting_on").active = true;
            this.musicBox.getChildByName("setting_off").active = false;
        }
    }

    onClick_soundbtn() {
        Global.audioUtils.commonBtnClick();
        Global.audioUtils.switchEffect();
        if (!Global.audioUtils.effectSwitch) {
            this.soundBox.getChildByName("setting_on").active = false;
            this.soundBox.getChildByName("setting_off").active = true;
        } else {
            this.soundBox.getChildByName("setting_on").active = true;
            this.soundBox.getChildByName("setting_off").active = false;
        }
    }
    onClick_zhengdongbtn() {
        Global.audioUtils.commonBtnClick();
        Global.audioUtils.switchShock();
        if (!Global.audioUtils.shockSwitch) {
            this.zhengdongBox.getChildByName("setting_on").active = false;
            this.zhengdongBox.getChildByName("setting_off").active = true;
        } else {
            this.zhengdongBox.getChildByName("setting_on").active = true;
            this.zhengdongBox.getChildByName("setting_off").active = false;
        }
    }

    onClick_continue_btn() {
        Global.audioUtils.commonBtnClick();
        this.node.destroy();
        gameData.closeBanner();
        this.callback && this.callback();
    }


    onClick_ok_btn() {
        Global.audioUtils.commonBtnClick();
        this.callback && this.callback();
        this.node.destroy();
        gameData.closeBanner();
    }

    onClick_PrivacyPolicy_btn() {
        Global.audioUtils.commonBtnClick();
        cc.sys.openURL("https://sites.google.com/view/beauty-unveiled-uncover-the-di/%E9%A6%96%E9%A1%B5");
    }

    onClick_Termsofservicebtn() {
        cc.sys.openURL("https://sites.google.com/view/beautyunveileduncoverthediffer/%E9%A6%96%E9%A1%B5");
        Global.audioUtils.commonBtnClick();
    }
}
