"use strict";
cc._RF.push(module, '090fcgAZWxOM6pwykHoyPvy', 'AudioUtils');
// script/tool/AudioUtils.ts

"use strict";
//音频工具类
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioUtils = void 0;
var StorageUtils_1 = require("./StorageUtils");
var commonBtnPath = "sound/click";
var commonBgmPath = "sound/bgm";
var AudioUtils = /** @class */ (function () {
    function AudioUtils() {
        this.btnClickEffect = null;
        this.bgmMusic = null;
        this.currMusic = null;
        this.musicSwitch = StorageUtils_1.StorageUtils.getBoolByKey("kk_setup_music", true);
        this.effectSwitch = StorageUtils_1.StorageUtils.getBoolByKey("kk_setup_effect", true);
        this.shockSwitch = StorageUtils_1.StorageUtils.getBoolByKey("kk_setup_shock", true);
    }
    AudioUtils.prototype.initBtnClickEffect = function () {
        var _this = this;
        if (this.btnClickEffect)
            return;
        cc.resources.load(commonBtnPath, cc.AudioClip, function (err, clip) {
            if (err || !cc.isValid(_this)) {
                return;
            }
            _this.btnClickEffect = clip;
            clip.addRef();
        });
    };
    AudioUtils.prototype.initbgmMusic = function () {
        var _this = this;
        if (this.bgmMusic)
            return;
        cc.resources.load(commonBgmPath, cc.AudioClip, function (err, clip) {
            if (err || !cc.isValid(_this)) {
                return;
            }
            _this.bgmMusic = clip;
            _this.commonbgmMusic();
            clip.addRef();
        });
    };
    AudioUtils.prototype.switchMusic = function () {
        this.musicSwitch = !this.musicSwitch;
        StorageUtils_1.StorageUtils.setBoolByKey("kk_setup_music", this.musicSwitch);
        if (this.musicSwitch) {
            if (this.currMusic) {
                this.playMusic(this.currMusic);
            }
        }
        else {
            this.stopMusic();
        }
    };
    AudioUtils.prototype.switchEffect = function () {
        this.effectSwitch = !this.effectSwitch;
        StorageUtils_1.StorageUtils.setBoolByKey("kk_setup_effect", this.effectSwitch);
        if (this.effectSwitch) {
        }
        else {
            cc.audioEngine.stopAllEffects();
        }
    };
    AudioUtils.prototype.switchShock = function () {
        this.shockSwitch = !this.shockSwitch;
        StorageUtils_1.StorageUtils.setBoolByKey("kk_setup_shock", this.shockSwitch);
    };
    AudioUtils.prototype.playMusic = function (audio, isLoop) {
        if (isLoop === void 0) { isLoop = true; }
        if (!audio)
            return;
        this.currMusic = audio; //保存当前背景音乐
        if (this.musicSwitch) {
            // this.stopMusic();
            var audioID = cc.audioEngine.playMusic(audio, isLoop);
        }
    };
    AudioUtils.prototype.playEffect = function (audio, isLoop, callback) {
        if (isLoop === void 0) { isLoop = false; }
        if (callback === void 0) { callback = null; }
        if (!audio)
            return;
        if (this.effectSwitch) {
            var audioID = cc.audioEngine.play(audio, isLoop, 1);
            if (callback)
                cc.audioEngine.setFinishCallback(audioID, callback);
            return audioID;
        }
        return null;
    };
    AudioUtils.prototype.playEffectWithPath = function (path, isLoop) {
        if (isLoop === void 0) { isLoop = false; }
        if (!path || !this.effectSwitch)
            return;
        cc.resources.load(path, cc.AudioClip, function (err, clip) {
            if (err) {
                cc.log("加载音效资源失败" + path);
                return;
            }
            var audioID = cc.audioEngine.play(clip, isLoop, 1);
        });
    };
    AudioUtils.prototype.stopMusic = function () {
        cc.audioEngine.stopMusic();
    };
    AudioUtils.prototype.stopAll = function () {
        cc.audioEngine.stopAll();
    };
    AudioUtils.prototype.pauseAll = function () {
        if (this.musicSwitch) {
            cc.audioEngine.pauseAll();
        }
    };
    AudioUtils.prototype.resumeAll = function () {
        if (this.musicSwitch) {
            cc.audioEngine.resumeAll();
        }
    };
    AudioUtils.prototype.stopEffect = function (audioID) {
        cc.audioEngine.stopEffect(audioID);
    };
    AudioUtils.prototype.pause = function (audioID) {
        cc.audioEngine.pause(audioID);
    };
    AudioUtils.prototype.resume = function (audioID) {
        if (this.musicSwitch) {
            cc.audioEngine.resume(audioID);
        }
    };
    AudioUtils.prototype.commonBtnClick = function () {
        this.playEffect(this.btnClickEffect, false);
    };
    AudioUtils.prototype.commonbgmMusic = function () {
        this.playMusic(this.bgmMusic);
    };
    return AudioUtils;
}());
exports.AudioUtils = AudioUtils;

cc._RF.pop();