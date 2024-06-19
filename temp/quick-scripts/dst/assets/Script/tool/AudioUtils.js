
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/AudioUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9BdWRpb1V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPOzs7QUFFUCwrQ0FBNkM7QUFFN0MsSUFBTSxhQUFhLEdBQUcsYUFBYSxDQUFDO0FBQ3BDLElBQU0sYUFBYSxHQUFHLFdBQVcsQ0FBQztBQUVsQztJQW9DSTtRQTlCUSxtQkFBYyxHQUFpQixJQUFJLENBQUM7UUFDcEMsYUFBUSxHQUFpQixJQUFJLENBQUM7UUFFOUIsY0FBUyxHQUFpQixJQUFJLENBQUM7UUE0Qm5DLElBQUksQ0FBQyxXQUFXLEdBQUcsMkJBQVksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLFlBQVksR0FBRywyQkFBWSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsV0FBVyxHQUFHLDJCQUFZLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUE3Qk0sdUNBQWtCLEdBQXpCO1FBQUEsaUJBVUM7UUFURyxJQUFJLElBQUksQ0FBQyxjQUFjO1lBQUUsT0FBTztRQUVoQyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLEdBQVUsRUFBRSxJQUFrQjtZQUMxRSxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLEVBQUU7Z0JBQzFCLE9BQU87YUFDVjtZQUNELEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBQzNCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxpQ0FBWSxHQUFuQjtRQUFBLGlCQVdDO1FBVkcsSUFBSSxJQUFJLENBQUMsUUFBUTtZQUFFLE9B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ckI7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVNLG1DQUFjLEdBQXJCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUdMLGlCQUFDO0FBQUQsQ0FySkEsQUFxSkMsSUFBQTtBQXJKWSxnQ0FBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8v6Z+z6aKR5bel5YW357G7XHJcblxyXG5pbXBvcnQgeyBTdG9yYWdlVXRpbHMgfSBmcm9tIFwiLi9TdG9yYWdlVXRpbHNcIlxyXG5cclxuY29uc3QgY29tbW9uQnRuUGF0aCA9IFwic291bmQvY2xpY2tcIjtcclxuY29uc3QgY29tbW9uQmdtUGF0aCA9IFwic291bmQvYmdtXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXVkaW9VdGlscyB7XHJcblxyXG4gICAgbXVzaWNTd2l0Y2g6IGJvb2xlYW47ICAgIC8v6IOM5pmv6Z+z5LmQ5byA5YWzXHJcbiAgICBlZmZlY3RTd2l0Y2g6IGJvb2xlYW47ICAgLy/pn7PmlYjlvIDlhbNcclxuICAgIHNob2NrU3dpdGNoOiBib29sZWFuOyAgICAvLyDpnIfliqjlvIDlhbNcclxuXHJcbiAgICBwcml2YXRlIGJ0bkNsaWNrRWZmZWN0OiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBiZ21NdXNpYzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGN1cnJNdXNpYzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgaW5pdEJ0bkNsaWNrRWZmZWN0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmJ0bkNsaWNrRWZmZWN0KSByZXR1cm47XHJcblxyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKGNvbW1vbkJ0blBhdGgsIGNjLkF1ZGlvQ2xpcCwgKGVycjogRXJyb3IsIGNsaXA6IGNjLkF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyIHx8ICFjYy5pc1ZhbGlkKHRoaXMpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5idG5DbGlja0VmZmVjdCA9IGNsaXA7XHJcbiAgICAgICAgICAgIGNsaXAuYWRkUmVmKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXRiZ21NdXNpYygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5iZ21NdXNpYykgcmV0dXJuO1xyXG5cclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChjb21tb25CZ21QYXRoLCBjYy5BdWRpb0NsaXAsIChlcnI6IEVycm9yLCBjbGlwOiBjYy5BdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgaWYgKGVyciB8fCAhY2MuaXNWYWxpZCh0aGlzKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYmdtTXVzaWMgPSBjbGlwO1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1vbmJnbU11c2ljKCk7XHJcbiAgICAgICAgICAgIGNsaXAuYWRkUmVmKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5tdXNpY1N3aXRjaCA9IFN0b3JhZ2VVdGlscy5nZXRCb29sQnlLZXkoXCJra19zZXR1cF9tdXNpY1wiLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmVmZmVjdFN3aXRjaCA9IFN0b3JhZ2VVdGlscy5nZXRCb29sQnlLZXkoXCJra19zZXR1cF9lZmZlY3RcIiwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5zaG9ja1N3aXRjaCA9IFN0b3JhZ2VVdGlscy5nZXRCb29sQnlLZXkoXCJra19zZXR1cF9zaG9ja1wiLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3dpdGNoTXVzaWMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tdXNpY1N3aXRjaCA9ICF0aGlzLm11c2ljU3dpdGNoO1xyXG4gICAgICAgIFN0b3JhZ2VVdGlscy5zZXRCb29sQnlLZXkoXCJra19zZXR1cF9tdXNpY1wiLCB0aGlzLm11c2ljU3dpdGNoKTtcclxuICAgICAgICBpZiAodGhpcy5tdXNpY1N3aXRjaCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyTXVzaWMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheU11c2ljKHRoaXMuY3Vyck11c2ljKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcE11c2ljKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzd2l0Y2hFZmZlY3QoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RTd2l0Y2ggPSAhdGhpcy5lZmZlY3RTd2l0Y2g7XHJcbiAgICAgICAgU3RvcmFnZVV0aWxzLnNldEJvb2xCeUtleShcImtrX3NldHVwX2VmZmVjdFwiLCB0aGlzLmVmZmVjdFN3aXRjaCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZWZmZWN0U3dpdGNoKSB7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzd2l0Y2hTaG9jaygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNob2NrU3dpdGNoID0gIXRoaXMuc2hvY2tTd2l0Y2g7XHJcbiAgICAgICAgU3RvcmFnZVV0aWxzLnNldEJvb2xCeUtleShcImtrX3NldHVwX3Nob2NrXCIsIHRoaXMuc2hvY2tTd2l0Y2gpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgcGxheU11c2ljKGF1ZGlvOiBjYy5BdWRpb0NsaXAsIGlzTG9vcDogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIWF1ZGlvKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5jdXJyTXVzaWMgPSBhdWRpbzsvL+S/neWtmOW9k+WJjeiDjOaZr+mfs+S5kFxyXG4gICAgICAgIGlmICh0aGlzLm11c2ljU3dpdGNoKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc3RvcE11c2ljKCk7XHJcbiAgICAgICAgICAgIHZhciBhdWRpb0lEID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKGF1ZGlvLCBpc0xvb3ApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGxheUVmZmVjdChhdWRpbzogY2MuQXVkaW9DbGlwLCBpc0xvb3A6IGJvb2xlYW4gPSBmYWxzZSwgY2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbCk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKCFhdWRpbykgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLmVmZmVjdFN3aXRjaCkge1xyXG4gICAgICAgICAgICB2YXIgYXVkaW9JRCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkoYXVkaW8sIGlzTG9vcCwgMSk7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2MuYXVkaW9FbmdpbmUuc2V0RmluaXNoQ2FsbGJhY2soYXVkaW9JRCwgY2FsbGJhY2spO1xyXG4gICAgICAgICAgICByZXR1cm4gYXVkaW9JRDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBsYXlFZmZlY3RXaXRoUGF0aChwYXRoOiBzdHJpbmcsIGlzTG9vcDogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFwYXRoIHx8ICF0aGlzLmVmZmVjdFN3aXRjaCkgcmV0dXJuO1xyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHBhdGgsIGNjLkF1ZGlvQ2xpcCwgKGVycjogRXJyb3IsIGNsaXA6IGNjLkF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCLliqDovb3pn7PmlYjotYTmupDlpLHotKVcIiArIHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBhdWRpb0lEID0gY2MuYXVkaW9FbmdpbmUucGxheShjbGlwLCBpc0xvb3AsIDEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RvcE11c2ljKCk6IHZvaWQge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BNdXNpYygpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RvcEFsbCgpOiB2b2lkIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBhdXNlQWxsKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLm11c2ljU3dpdGNoKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlQWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgcmVzdW1lQWxsKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLm11c2ljU3dpdGNoKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZUFsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0b3BFZmZlY3QoYXVkaW9JRDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEVmZmVjdChhdWRpb0lEKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHBhdXNlKGF1ZGlvSUQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlKGF1ZGlvSUQpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgcmVzdW1lKGF1ZGlvSUQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLm11c2ljU3dpdGNoKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZShhdWRpb0lEKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbW1vbkJ0bkNsaWNrKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGxheUVmZmVjdCh0aGlzLmJ0bkNsaWNrRWZmZWN0LCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbW1vbmJnbU11c2ljKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGxheU11c2ljKHRoaXMuYmdtTXVzaWMpO1xyXG4gICAgfVxyXG4gICAgIFxyXG5cclxufVxyXG4iXX0=