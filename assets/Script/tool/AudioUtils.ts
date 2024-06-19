//音频工具类

import { StorageUtils } from "./StorageUtils"

const commonBtnPath = "sound/click";
const commonBgmPath = "sound/bgm";

export class AudioUtils {

    musicSwitch: boolean;    //背景音乐开关
    effectSwitch: boolean;   //音效开关
    shockSwitch: boolean;    // 震动开关

    private btnClickEffect: cc.AudioClip = null;
    private bgmMusic: cc.AudioClip = null;

    private currMusic: cc.AudioClip = null;

    public initBtnClickEffect(): void {
        if (this.btnClickEffect) return;

        cc.resources.load(commonBtnPath, cc.AudioClip, (err: Error, clip: cc.AudioClip) => {
            if (err || !cc.isValid(this)) {
                return;
            }
            this.btnClickEffect = clip;
            clip.addRef();
        });
    }

    public initbgmMusic(): void {
        if (this.bgmMusic) return;

        cc.resources.load(commonBgmPath, cc.AudioClip, (err: Error, clip: cc.AudioClip) => {
            if (err || !cc.isValid(this)) {
                return;
            }
            this.bgmMusic = clip;
            this.commonbgmMusic();
            clip.addRef();
        });
    }

    constructor() {
        this.musicSwitch = StorageUtils.getBoolByKey("kk_setup_music", true);
        this.effectSwitch = StorageUtils.getBoolByKey("kk_setup_effect", true);
        this.shockSwitch = StorageUtils.getBoolByKey("kk_setup_shock", true);
    }

    public switchMusic(): void {
        this.musicSwitch = !this.musicSwitch;
        StorageUtils.setBoolByKey("kk_setup_music", this.musicSwitch);
        if (this.musicSwitch) {
            if (this.currMusic) {
                this.playMusic(this.currMusic);
            }
        } else {
            this.stopMusic();
        }
    }

    public switchEffect(): void {
        this.effectSwitch = !this.effectSwitch;
        StorageUtils.setBoolByKey("kk_setup_effect", this.effectSwitch);
        if (this.effectSwitch) {

        } else {
            cc.audioEngine.stopAllEffects();
        }
    }

    public switchShock(): void {
        this.shockSwitch = !this.shockSwitch;
        StorageUtils.setBoolByKey("kk_setup_shock", this.shockSwitch);
    }


    public playMusic(audio: cc.AudioClip, isLoop: boolean = true): void {
        if (!audio) return;
        this.currMusic = audio;//保存当前背景音乐
        if (this.musicSwitch) {
            // this.stopMusic();
            var audioID = cc.audioEngine.playMusic(audio, isLoop);
        }
    }

    public playEffect(audio: cc.AudioClip, isLoop: boolean = false, callback: Function = null): number {
        if (!audio) return;
        if (this.effectSwitch) {
            var audioID = cc.audioEngine.play(audio, isLoop, 1);
            if (callback) cc.audioEngine.setFinishCallback(audioID, callback);
            return audioID;
        }
        return null;
    }

    public playEffectWithPath(path: string, isLoop: boolean = false): void {
        if (!path || !this.effectSwitch) return;
        cc.resources.load(path, cc.AudioClip, (err: Error, clip: cc.AudioClip) => {
            if (err) {
                cc.log("加载音效资源失败" + path);
                return;
            }
            var audioID = cc.audioEngine.play(clip, isLoop, 1);
        });
    }


    public stopMusic(): void {
        cc.audioEngine.stopMusic();
    }


    public stopAll(): void {
        cc.audioEngine.stopAll();
    }

    public pauseAll(): void {
        if (this.musicSwitch) {
            cc.audioEngine.pauseAll();
        }
    }


    public resumeAll(): void {
        if (this.musicSwitch) {
            cc.audioEngine.resumeAll();
        }
    }


    public stopEffect(audioID: number): void {
        cc.audioEngine.stopEffect(audioID);
    }


    public pause(audioID: number): void {
        cc.audioEngine.pause(audioID);
    }


    public resume(audioID: number): void {
        if (this.musicSwitch) {
            cc.audioEngine.resume(audioID);
        }
    }

    public commonBtnClick(): void {
        this.playEffect(this.btnClickEffect, false);
    }

    public commonbgmMusic(): void {
        this.playMusic(this.bgmMusic);
    }
     

}
