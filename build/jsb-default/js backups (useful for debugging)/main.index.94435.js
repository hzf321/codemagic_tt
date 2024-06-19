window.__require = function t(e, o, i) {
function n(a, s) {
if (!o[a]) {
if (!e[a]) {
var l = a.split("/");
l = l[l.length - 1];
if (!e[l]) {
var r = "function" == typeof __require && __require;
if (!s && r) return r(l, !0);
if (c) return c(l, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = l;
}
var u = o[a] = {
exports: {}
};
e[a][0].call(u.exports, function(t) {
return n(e[a][1][t] || t);
}, u, u.exports, t, e, o, i);
}
return o[a].exports;
}
for (var c = "function" == typeof __require && __require, a = 0; a < i.length; a++) n(i[a]);
return n;
}({
AssetUtils: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d8022bhaGtI34HO+9B4gPxl", "AssetUtils");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.AssetUtils = void 0;
var i = t("./BxAutoAsset"), n = t("./global"), c = function() {
function t() {}
t.bindAutoReleaseAsset = function(t, e) {
var o = t.getComponent(i.default);
cc.isValid(o) || (o = t.addComponent(i.default));
o.addAutoReleaseAsset(e);
};
t.checkAndReleaseAsset = function(t) {
cc.isValid(t) && t.refCount <= 0 && cc.assetManager.releaseAsset(t);
};
t.loadAsset = function(t, e, o) {
cc.resources.load(t, e, o);
};
t.preloadAsset = function(t, e) {
cc.resources.preload(t, e);
};
t.loadSprite = function(t, e, o) {
var i = this;
e.newUrl = t;
e.spriteFrame = null;
cc.resources.load(t, cc.SpriteFrame, function(n, c) {
if (n) o && i.loadSprite(o, e); else if (cc.isValid(e) && e.newUrl == t) {
e.addAutoReleaseAsset(c);
e.spriteFrame = c;
} else i.checkAndReleaseAsset(c);
});
};
t.showDialog = function(t, e, o) {
cc.resources.load("prefeb/" + t, cc.Prefab, function(i, c) {
if (!i) {
var a = cc.instantiate(c);
n.Global.assetUtils.bindAutoReleaseAsset(a, c);
var s = n.Global.getsceneNode();
if (a && s) {
if (e) {
cc.log(t, "confirmExit_dialog");
a.getComponent(t).initData && a.getComponent(t).initData(e);
}
s.addChild(a);
var l = a.getChildByName("content");
l.scale = 0;
cc.Tween.stopAllByTarget(l);
cc.tween(l).to(.32, {
scale: 1
}, {
easing: "backOut"
}).start();
}
o && o();
}
});
};
return t;
}();
o.AssetUtils = c;
cc._RF.pop();
}, {
"./BxAutoAsset": "BxAutoAsset",
"./global": "global"
} ],
AudioUtils: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "090fcgAZWxOM6pwykHoyPvy", "AudioUtils");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.AudioUtils = void 0;
var i = t("./StorageUtils"), n = function() {
function t() {
this.btnClickEffect = null;
this.bgmMusic = null;
this.currMusic = null;
this.musicSwitch = i.StorageUtils.getBoolByKey("kk_setup_music", !0);
this.effectSwitch = i.StorageUtils.getBoolByKey("kk_setup_effect", !0);
this.shockSwitch = i.StorageUtils.getBoolByKey("kk_setup_shock", !0);
}
t.prototype.initBtnClickEffect = function() {
var t = this;
this.btnClickEffect || cc.resources.load("sound/click", cc.AudioClip, function(e, o) {
if (!e && cc.isValid(t)) {
t.btnClickEffect = o;
o.addRef();
}
});
};
t.prototype.initbgmMusic = function() {
var t = this;
this.bgmMusic || cc.resources.load("sound/bgm", cc.AudioClip, function(e, o) {
if (!e && cc.isValid(t)) {
t.bgmMusic = o;
t.commonbgmMusic();
o.addRef();
}
});
};
t.prototype.switchMusic = function() {
this.musicSwitch = !this.musicSwitch;
i.StorageUtils.setBoolByKey("kk_setup_music", this.musicSwitch);
this.musicSwitch ? this.currMusic && this.playMusic(this.currMusic) : this.stopMusic();
};
t.prototype.switchEffect = function() {
this.effectSwitch = !this.effectSwitch;
i.StorageUtils.setBoolByKey("kk_setup_effect", this.effectSwitch);
this.effectSwitch || cc.audioEngine.stopAllEffects();
};
t.prototype.switchShock = function() {
this.shockSwitch = !this.shockSwitch;
i.StorageUtils.setBoolByKey("kk_setup_shock", this.shockSwitch);
};
t.prototype.playMusic = function(t, e) {
void 0 === e && (e = !0);
if (t) {
this.currMusic = t;
this.musicSwitch && cc.audioEngine.playMusic(t, e);
}
};
t.prototype.playEffect = function(t, e, o) {
void 0 === e && (e = !1);
void 0 === o && (o = null);
if (t) {
if (this.effectSwitch) {
var i = cc.audioEngine.play(t, e, 1);
o && cc.audioEngine.setFinishCallback(i, o);
return i;
}
return null;
}
};
t.prototype.playEffectWithPath = function(t, e) {
void 0 === e && (e = !1);
t && this.effectSwitch && cc.resources.load(t, cc.AudioClip, function(o, i) {
o ? cc.log("加载音效资源失败" + t) : cc.audioEngine.play(i, e, 1);
});
};
t.prototype.stopMusic = function() {
cc.audioEngine.stopMusic();
};
t.prototype.stopAll = function() {
cc.audioEngine.stopAll();
};
t.prototype.pauseAll = function() {
this.musicSwitch && cc.audioEngine.pauseAll();
};
t.prototype.resumeAll = function() {
this.musicSwitch && cc.audioEngine.resumeAll();
};
t.prototype.stopEffect = function(t) {
cc.audioEngine.stopEffect(t);
};
t.prototype.pause = function(t) {
cc.audioEngine.pause(t);
};
t.prototype.resume = function(t) {
this.musicSwitch && cc.audioEngine.resume(t);
};
t.prototype.commonBtnClick = function() {
this.playEffect(this.btnClickEffect, !1);
};
t.prototype.commonbgmMusic = function() {
this.playMusic(this.bgmMusic);
};
return t;
}();
o.AudioUtils = n;
cc._RF.pop();
}, {
"./StorageUtils": "StorageUtils"
} ],
BxAutoAsset: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b835cS/qxNLbakyyg5HTNea", "BxAutoAsset");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, a = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (c < 3 ? n(a) : c > 3 ? n(e, o, a) : n(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
cc.Component.prototype.addAutoReleaseAsset = function(t) {
var e = this.node.getComponent(s);
cc.isValid(e) || (e = this.node.addComponent(s));
e.addAutoReleaseAsset(t);
};
cc.Component.prototype.addAutoReleaseAssets = function(t) {
var e = this.node.getComponent(s);
cc.isValid(e) || (e = this.node.addComponent(s));
for (var o = 0, i = t; o < i.length; o++) {
var n = i[o];
e.addAutoReleaseAsset(n);
}
};
var a = cc._decorator.ccclass, s = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.dynamicsAssets = [];
return e;
}
e.prototype.addAutoReleaseAsset = function(t) {
if (cc.isValid(t)) {
t.addRef();
this.dynamicsAssets.push(t);
}
};
e.prototype.onDestroy = function() {
for (var t = 0; t < this.dynamicsAssets.length; t++) cc.isValid(this.dynamicsAssets[t]) && this.dynamicsAssets[t].decRef();
this.dynamicsAssets = [];
};
return c([ a ], e);
}(cc.Component);
o.default = s;
cc._RF.pop();
}, {} ],
StorageUtils: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f021e0ydDZC+qJMjJKjbysY", "StorageUtils");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.StorageUtils = void 0;
var i = function() {
function t() {}
t.setStringByKey = function(t, e) {
cc.sys.localStorage.setItem(t, e);
};
t.getStringByKey = function(t, e) {
e = e || "";
return cc.sys.localStorage.getItem(t) || e;
};
t.setBoolByKey = function(e, o) {
t.setStringByKey(e, o ? "1" : "0");
};
t.getBoolByKey = function(t, e) {
e = e || !1;
var o = cc.sys.localStorage.getItem(t);
return o ? "1" == o : e;
};
t.setIntegerByKey = function(e, o) {
t.setStringByKey(e, o.toString());
};
t.getIntegerByKey = function(t, e) {
var o = cc.sys.localStorage.getItem(t);
return o ? parseInt(o) : e;
};
t.getStorageJSON = function(t) {
var e = cc.sys.localStorage.getItem(t);
return e instanceof Array && e.length < 1 ? null : e ? JSON.parse(e) : null;
};
t.setStorageJSON = function(t, e) {
cc.sys.localStorage.setItem(t, JSON.stringify(e));
};
t.removeByKey = function(t) {
cc.sys.localStorage.removeItem(t);
};
return t;
}();
o.StorageUtils = i;
cc._RF.pop();
}, {} ],
clause_dialog: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "288ffaP2ZJMYZaoB90GcwU0", "clause_dialog");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, a = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (c < 3 ? n(a) : c > 3 ? n(e, o, a) : n(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../tool/gameData"), s = t("../tool/global"), l = cc._decorator, r = l.ccclass, u = (l.property, 
function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.callback = null;
return e;
}
e.prototype.start = function() {
a.gameData.showBanner();
};
e.prototype.initData = function(t) {
this.callback = t.callback;
};
e.prototype.onClick_Agreen = function() {
s.Global.audioUtils.commonBtnClick();
this.callback && this.callback();
this.node.destroy();
a.gameData.closeBanner();
};
e.prototype.onClick_PrivacyPolicy_btn = function() {
s.Global.audioUtils.commonBtnClick();
cc.sys.openURL("https://sites.google.com/view/beauty-unveiled-uncover-the-di/%E9%A6%96%E9%A1%B5");
};
e.prototype.onClick_Termsofservicebtn = function() {
s.Global.audioUtils.commonBtnClick();
cc.sys.openURL("https://sites.google.com/view/beautyunveileduncoverthediffer/%E9%A6%96%E9%A1%B5");
};
return c([ r ], e);
}(cc.Component));
o.default = u;
cc._RF.pop();
}, {
"../tool/gameData": "gameData",
"../tool/global": "global"
} ],
comment_dialog: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c951dEKIOhIEKilulaNvq92", "comment_dialog");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, a = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (c < 3 ? n(a) : c > 3 ? n(e, o, a) : n(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../tool/gameData"), s = t("../tool/global"), l = cc._decorator, r = l.ccclass, u = l.property, d = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.callback = null;
e.starBox = null;
e.clickBox = null;
return e;
}
e.prototype.initData = function() {};
e.prototype.start = function() {
a.gameData.showBanner();
};
e.prototype.showStar = function(t) {
for (var e = 0; e < this.starBox.children.length; e++) {
this.starBox.children[e].active = e <= t;
}
};
e.prototype.onClick_commentBtn = function() {
a.gameData.showPingFen();
s.Global.audioUtils.commonBtnClick();
this.node.destroy();
a.gameData.closeBanner();
};
e.prototype.onClick_close = function() {
s.Global.audioUtils.commonBtnClick();
this.node.destroy();
a.gameData.closeBanner();
};
c([ u(cc.Node) ], e.prototype, "starBox", void 0);
c([ u(cc.Node) ], e.prototype, "clickBox", void 0);
return c([ r ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../tool/gameData": "gameData",
"../tool/global": "global"
} ],
confirmExit_dialog: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "9335d26T05DjJw8MacCCseS", "confirmExit_dialog");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, a = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (c < 3 ? n(a) : c > 3 ? n(e, o, a) : n(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../tool/gameData"), s = t("../tool/global"), l = t("../tool/utils"), r = cc._decorator, u = r.ccclass, d = (r.property, 
function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.callback = null;
return e;
}
e.prototype.start = function() {
a.gameData.showBanner();
};
e.prototype.initData = function(t) {
this.callback = t.callback;
};
e.prototype.onClick_continue_btn = function() {
s.Global.audioUtils.commonBtnClick();
this.callback && this.callback();
this.node.destroy();
a.gameData.closeBanner();
};
e.prototype.onClick_backHall = function() {
s.Global.audioUtils.commonBtnClick();
this.node.destroy();
a.gameData.closeBanner();
a.gameData.userData.isHall = !0;
a.gameData.storageData();
cc.director.loadScene(l.scene.hall);
};
return c([ u ], e);
}(cc.Component));
o.default = d;
cc._RF.pop();
}, {
"../tool/gameData": "gameData",
"../tool/global": "global",
"../tool/utils": "utils"
} ],
gameData: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "7487f4XLFFFn6UYutYNkRUg", "gameData");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.sound = o.storage = o.gameData = void 0;
var i, n = t("./StorageUtils"), c = function() {
function t() {
this.levelAll = 30;
this.userData = {
isClause: !1,
tishiNum: 1,
level: 1,
isHall: !1,
isGudie: !1,
finishLevel5: !1
};
cc.game.on(cc.game.EVENT_HIDE, function() {
this.storageData();
}, this);
}
t.getInstance = function() {
null == this._instance && (this._instance = new t());
return this._instance;
};
t.prototype.storageData = function() {
n.StorageUtils.setStorageJSON(i.gamedata, this.userData);
};
t.prototype.setVideoFailCb = function(t) {
window.onClosefailCb = null;
window.onClosefailCb = t;
};
t.prototype.showVideo = function(t) {
console.log("android------------看广告");
if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showShiPing", "()V"); else if (cc.sys.isNative && cc.sys.OS_IOS == cc.sys.os) {
jsb.reflection.callStaticMethod("UnityMgr", "loadReward");
window.onCloseFinishCb = null;
window.onCloseFinishCb = t;
} else t();
};
t.prototype.showBanner = function() {
cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os ? jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showbanner", "()V") : cc.sys.isNative && (cc.sys.OS_IOS, 
cc.sys.os);
};
t.prototype.closeBanner = function() {
cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os ? jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hidebanner", "()V") : cc.sys.isNative && (cc.sys.OS_IOS, 
cc.sys.os);
};
t.prototype.showInterst = function() {
cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os ? jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showChaping", "()V") : cc.sys.isNative && (cc.sys.OS_IOS, 
cc.sys.os);
};
t.prototype.showPingFen = function() {
cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os ? jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "openPingFen", "()V") : cc.sys.isNative && (cc.sys.OS_IOS, 
cc.sys.os);
};
t._instance = null;
return t;
}();
o.gameData = c.getInstance();
(function(t) {
t.gamedata = "gamedata";
})(i = o.storage || (o.storage = {}));
(function(t) {
t.bgm = "bgm";
t.click = "click";
t.correct = "correct";
t.err = "err";
t.fail = "fail";
t.win = "win";
})(o.sound || (o.sound = {}));
window.onCloseFinishCb = function() {};
window.onCloseVdieoFinishCb = function() {
console.log("onCloseVdieo----------------------------");
window.onCloseFinishCb();
};
window.onCloseVdieofailCb = function() {
console.log("onCloseVdieofailCbonCloseVdieofailCbonCloseVdieofailCb");
window.onClosefailCb();
};
window.onClosefailCb = function() {};
cc._RF.pop();
}, {
"./StorageUtils": "StorageUtils"
} ],
gameover_dialog: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5a09auqmsBG27JJ2bvnIpkk", "gameover_dialog");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, a = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (c < 3 ? n(a) : c > 3 ? n(e, o, a) : n(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../tool/gameData"), s = t("../tool/global"), l = t("../tool/utils"), r = cc._decorator, u = r.ccclass, d = r.property, h = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.title = null;
e.bg = null;
e.callback = null;
return e;
}
e.prototype.initData = function(t) {
this.callback = t.callback;
};
e.prototype.onLoad = function() {
s.Global.imgId >= 6 && a.gameData.showInterst();
};
e.prototype.start = function() {
this.title.string = "<color=#e8c30f>CONGRATULATIONS TO YOU!Clear</c><color=#f4f4f5> level " + s.Global.imgId + "</color>";
l.UtilsTool.adapterBg(this.bg);
};
e.prototype.onClick_continueBtn = function() {
s.Global.audioUtils.commonBtnClick();
this.callback && this.callback();
this.node.destroy();
};
e.prototype.onClick_close = function() {
s.Global.audioUtils.commonBtnClick();
this.node.destroy();
};
c([ d(cc.RichText) ], e.prototype, "title", void 0);
c([ d(cc.Node) ], e.prototype, "bg", void 0);
return c([ u ], e);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {
"../tool/gameData": "gameData",
"../tool/global": "global",
"../tool/utils": "utils"
} ],
game: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "73ed6/QdxxO+pIbRjS+FY/O", "game");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, a = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (c < 3 ? n(a) : c > 3 ? n(e, o, a) : n(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a, s = t("./prefeb/newhand"), l = t("./tool/gameData"), r = t("./tool/global"), u = t("./tool/utils"), d = cc._decorator, h = d.ccclass, p = d.property;
(function(t) {
t[t.find = 0] = "find";
t[t.err = 1] = "err";
t[t.finish = 2] = "finish";
})(a || (a = {}));
var g = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.bg = null;
e.originalImg = null;
e.finishImg = null;
e.tishi_qipao = null;
e.gameFindPrefab = null;
e.gameErrPrefab = null;
e.gameTishiPrefab = null;
e.game_tuowei = null;
e.imgSignBox = null;
e.yeziBox = null;
e.level = null;
e.timeAll = null;
e.reduceTime = null;
e.mask = null;
e.imgData = [];
e.setImgY = 257;
e.originalScale = .5;
e.yeziAllNum = 10;
e.yeziNowNum = 0;
e.residueTime = 0;
e.isTiShi = !1;
e.timer = null;
e.isPause = !1;
e.firstErr = !1;
e.audioClips = [];
e.newhandNode = null;
return e;
}
e.prototype.start = function() {
var t = this;
if (cc.sys.platform === cc.sys.IPAD) {
this.getComponent(cc.Canvas).fitHeight = !0;
this.getComponent(cc.Canvas).fitWidth = !1;
}
this.resetAll();
r.Global.setsceneNode(this.node);
u.UtilsTool.adapterBg(this.bg);
this.onEvent();
this.init();
this.startDownTime();
this.loadRes();
this.checkNewHand();
cc.resources.loadDir("sound", cc.AudioClip, function(e, o) {
if (!e && cc.isValid(t)) {
t.audioClips = o;
t.addAutoReleaseAssets(o);
}
});
};
e.prototype.onEvent = function() {
this.originalImg.on(cc.Node.EventType.TOUCH_END, this.imgEvent, this);
this.finishImg.on(cc.Node.EventType.TOUCH_END, this.imgEvent, this);
};
e.prototype.resetAll = function(t) {
t || (this.imgData = []);
this.imgSignBox.getChildByName("origBox").destroyAllChildren();
this.imgSignBox.getChildByName("finishBox").destroyAllChildren();
this.imgSignBox.getChildByName("errBox").destroyAllChildren();
this.imgSignBox.getChildByName("tishiBox").destroyAllChildren();
this.imgSignBox.getChildByName("lizi").destroyAllChildren();
this.mask.active = !1;
this.firstErr = !1;
this.isPause = !1;
this.timer = null;
this.isTiShi = !1;
this.yeziNowNum = 0;
this.init();
};
e.prototype.checkNewHand = function() {
var t = this;
l.gameData.userData.isGudie || cc.resources.load("prefeb/newhand", cc.Prefab, function(e, o) {
if (!e) {
var i = cc.instantiate(o);
r.Global.assetUtils.bindAutoReleaseAsset(i, o);
t.node.addChild(i);
t.newhandNode = i.getComponent(s.default);
t.newhandNode.showdong1();
}
});
};
e.prototype.init = function() {
this.level.string = "Lv" + r.Global.imgId;
for (var t = 0; t < this.yeziBox.children.length; t++) {
var e = this.yeziBox.children[t].getComponent(sp.Skeleton);
u.UtilsTool.playSp(e, "1_an_stop");
}
this.residueTime = this.getDownTime();
this.changeQiPaoNum();
this.mask.active = !1;
var o = u.UtilsTool.timeChange(this.residueTime);
this.timeAll.getComponent(cc.Label).string = o;
this.reduceTime.active = !1;
};
e.prototype.startDownTime = function() {
if (this.residueTime > 0) {
var t = u.UtilsTool.timeChange(this.residueTime);
this.timeAll.getComponent(cc.Label).string = t;
this.timer = this.schedule(this.downTimeEvent, 1);
}
};
e.prototype.downTimeEvent = function() {
if (!this.isPause) {
this.residueTime--;
var t = u.UtilsTool.timeChange(this.residueTime);
this.timeAll.getComponent(cc.Label).string = t;
if (this.residueTime <= 0) {
this.unschedule(this.downTimeEvent);
this.timeOutEvent();
this.playCommonSound(l.sound.fail);
cc.log("时间到了");
}
}
};
e.prototype.errReduceTime = function() {
var t = this;
if (this.firstErr) {
var e = this.timeAll.y;
this.reduceTime.y = e;
this.reduceTime.active = !0;
this.reduceTime.getComponent(cc.Label).string = "-30";
cc.Tween.stopAllByTarget(this.reduceTime);
cc.tween(this.reduceTime).to(.15, {
scale: 1.2
}).to(.15, {
scale: 1
}).to(1, {
opacity: 255,
y: e - 25
}).call(function() {
t.reduceTime.active = !1;
}).start();
this.residueTime -= 30;
if (this.residueTime <= 0) {
this.timeAll.getComponent(cc.Label).string = "00:00";
this.playCommonSound(l.sound.fail);
cc.log("时间到了");
this.unschedule(this.downTimeEvent);
this.timeOutEvent();
} else {
var o = u.UtilsTool.timeChange(this.residueTime);
this.timeAll.getComponent(cc.Label).string = o;
}
}
};
e.prototype.changeQiPaoNum = function() {
if (l.gameData.userData.tishiNum > 0) {
this.tishi_qipao.getChildByName("ad_label").active = !1;
this.tishi_qipao.getChildByName("num_label").active = !0;
this.tishi_qipao.getChildByName("num_label").getComponent(cc.Label).string = l.gameData.userData.tishiNum.toString();
} else {
this.tishi_qipao.getChildByName("ad_label").active = !0;
this.tishi_qipao.getChildByName("num_label").active = !1;
}
};
e.prototype.loadRes = function() {
var t = this;
r.Global.assetUtils.loadSprite("originalImg/" + r.Global.imgId + "-o", this.originalImg.getComponent(cc.Sprite));
r.Global.assetUtils.loadSprite("finishImg/" + r.Global.imgId + "-f", this.finishImg.getComponent(cc.Sprite));
cc.resources.load("imgJson/level" + r.Global.imgId, cc.JsonAsset, function(e, o) {
if (e) cc.log(e); else {
r.Global.assetUtils.bindAutoReleaseAsset(t.node, o);
var i = o.json;
if (i && i.path) {
t.imgData = i.path;
for (var n = 0; n < t.imgData.length; n++) t.imgData[n].isFind = !1;
cc.log(t.imgData, "this.imgData ");
}
}
});
};
e.prototype.yeziLight = function(t) {
var e = this, o = this.yeziBox.children[this.yeziNowNum - 1].getComponent(sp.Skeleton), i = cc.instantiate(this.game_tuowei);
this.imgSignBox.getChildByName("lizi").addChild(i);
i.setPosition(t);
var n = u.UtilsTool.changePos(o.node, i), c = .5;
t.y < 0 && (c = 1);
cc.Tween.stopAllByTarget(i);
cc.tween(i).to(c, {
position: n
}).call(function() {
e.scheduleOnce(function() {
i.destroy();
}, .3);
u.UtilsTool.playSp(o, "2_bianliang");
u.UtilsTool.addSequenceSp(o, "3_liang_stop");
}).start();
};
e.prototype.findSignSucc = function(t) {
for (var e = 0; e < 2; e++) {
var o = cc.instantiate(this.gameFindPrefab), i = 0;
if (0 == e) {
i = t.y * this.originalScale + this.setImgY;
this.imgSignBox.getChildByName("origBox").addChild(o);
} else {
this.imgSignBox.getChildByName("finishBox").addChild(o);
i = t.y * this.originalScale - this.setImgY;
}
var n = cc.v3(t.x * this.originalScale, i);
o.setPosition(n);
cc.Tween.stopAllByTarget(o);
o.scale = 0;
cc.tween(o).to(.3, {
scale: 1.5
}).to(.1, {
scale: 1.3
}).start();
}
};
e.prototype.findSignErr = function(t) {
var e = t, o = cc.instantiate(this.gameErrPrefab);
this.imgSignBox.getChildByName("errBox").addChild(o);
o.setPosition(e);
this.errSignAnim(o);
var i = null;
if (e.y > 0) {
i = cc.instantiate(this.gameErrPrefab);
this.imgSignBox.getChildByName("errBox").addChild(i);
i.setPosition(cc.v3(e.x, e.y - 2 * this.setImgY));
} else {
i = cc.instantiate(this.gameErrPrefab);
this.imgSignBox.getChildByName("errBox").addChild(i);
i.setPosition(cc.v3(e.x, e.y + 2 * this.setImgY));
}
i && this.errSignAnim(i);
};
e.prototype.imgEvent = function(t) {
var e = t.getLocation(), o = this.imgSignBox.convertToNodeSpaceAR(cc.v3(e.x, e.y)), i = this.checkImgSign(o);
if (i.type == a.find) {
if (this.isTiShi) {
this.isTiShi = !1;
this.imgSignBox.getChildByName("tishiBox").destroyAllChildren();
}
this.yeziNowNum = this.yeziNowNum + 1;
this.findSignSucc(cc.v3(i.findData.centerPos.x, i.findData.centerPos.y), i.findData);
this.yeziLight(o);
if (this.newhandNode && 1 == this.yeziNowNum) {
if (this.newhandNode) {
this.newhandNode.hidedong1();
this.newhandNode.showdong2();
}
} else if (this.newhandNode && 2 == this.yeziNowNum) {
if (this.newhandNode) {
this.newhandNode.node.destroy();
this.newhandNode = null;
}
l.gameData.userData.isGudie = !0;
l.gameData.storageData();
}
this.playCommonSound(l.sound.correct);
this.yeziNowNum >= this.yeziAllNum && this.gameEnd();
} else if (i.type == a.err) {
this.playCommonSound(l.sound.err);
this.errReduceTime();
this.findSignErr(o);
this.firstErr = !0;
} else {
this.playCommonSound(l.sound.err);
this.errReduceTime();
this.findSignErr(o);
this.firstErr = !0;
}
};
e.prototype.checkImgSign = function(t) {
for (var e = null, o = null, i = 0; i < this.imgData.length; i++) {
var n, c = this.imgData[i], s = c.centerPos.x * this.originalScale;
n = t.y > 0 ? c.centerPos.y * this.originalScale + this.setImgY : c.centerPos.y * this.originalScale - this.setImgY;
var l = c.blockSize.wid * this.originalScale, r = c.blockSize.hei * this.originalScale;
if (!c.isFind && t.x <= s + l / 2 && t.x >= s - l / 2 && t.y <= n + r / 2 && t.y >= n - r / 2) {
if (c.isFind) {
e = a.finish;
cc.log("找到重复的了");
} else {
cc.log("找到了");
e = a.find;
o = c;
c.isFind = !0;
}
return {
type: e,
findData: o
};
}
e = a.err;
cc.log("没找到");
}
return {
type: e,
findData: o
};
};
e.prototype.errSignAnim = function(t) {
cc.Tween.stopAllByTarget(t);
cc.tween(t).to(.05, {
angle: 15
}).to(.05, {
angle: 0
}).to(.05, {
angle: -15
}).to(.07, {
angle: 10
}).to(.07, {
angle: 0
}).to(.07, {
angle: -10
}).to(.1, {
angle: 7
}).to(.1, {
angle: 0
}).to(.1, {
angle: -7
}).to(.1, {
angle: 3
}).to(.1, {
angle: 0
}).call(function() {
t.destroy();
}).start();
};
e.prototype.gameEnd = function() {
var t = this;
cc.log("游戏结束");
this.mask.active = !0;
this.scheduleOnce(function() {
for (var e = function(e) {
var o = t.yeziBox.children[e].getComponent(sp.Skeleton);
t.scheduleOnce(function() {
u.UtilsTool.playSp(o, "4_man", !1, function() {
t.scheduleOnce(function() {
if (e == t.yeziBox.children.length - 1) {
t.playCommonSound(l.sound.win);
if (l.gameData.userData.level + 1 <= l.gameData.levelAll) {
l.gameData.userData.level = l.gameData.userData.level + 1;
l.gameData.storageData();
}
r.Global.assetUtils.showDialog(u.dialog.gameover_dialog, {
callback: function() {
if (r.Global.imgId + 1 <= l.gameData.levelAll) {
r.Global.imgId = r.Global.imgId + 1;
t.resetAll();
t.init();
t.startDownTime();
t.loadRes();
} else {
l.gameData.userData.isHall = !0;
l.gameData.storageData();
cc.director.loadScene(u.scene.hall);
}
}
});
}
});
});
}, .1 * e);
}, o = 0; o < t.yeziBox.children.length; o++) e(o);
}, .5);
};
e.prototype.getDownTime = function() {
var t = r.Global.imgId;
return t >= 1 && t <= 5 ? 300 : t >= 6 && t <= 10 ? 180 : t >= 11 && t <= 15 ? 150 : t >= 16 && t <= 20 ? 120 : t >= 21 && t <= 25 ? 90 : 60;
};
e.prototype.timeOutEvent = function() {
var t = this;
r.Global.assetUtils.showDialog(u.dialog.timeOut_dialog, {
ADcallback: function() {
t.residueTime = 60;
l.gameData.userData.tishiNum++;
l.gameData.storageData();
t.changeQiPaoNum();
t.startDownTime();
},
restartCallBack: function() {
t.resetAll(!0);
t.init();
t.startDownTime();
cc.log(t.imgData, "this.imgData");
for (var e = 0; e < t.imgData.length; e++) t.imgData[e].isFind = !1;
}
});
};
e.prototype.onClick_back = function() {
var t = this;
r.Global.audioUtils.commonBtnClick();
this.isPause = !0;
r.Global.assetUtils.showDialog(u.dialog.confirmExit_dialog, {
callback: function() {
t.isPause = !1;
}
});
};
e.prototype.onClick_pause = function() {
var t = this;
r.Global.audioUtils.commonBtnClick();
this.isPause = !0;
r.Global.assetUtils.showDialog(u.dialog.setting_dialog, {
isGame: !0,
callback: function() {
t.isPause = !1;
}
});
};
e.prototype.onClick_tishi = function() {
var t = this;
r.Global.audioUtils.commonBtnClick();
if (!this.isTiShi) {
for (var e = null, o = 0; o < this.imgData.length; o++) if (!this.imgData[o].isFind) {
e = this.imgData[o];
break;
}
if (e) if (l.gameData.userData.tishiNum <= 0) {
cc.log("看广告");
l.gameData.showVideo(function() {
t.showTiShi(e);
});
} else {
l.gameData.userData.tishiNum = l.gameData.userData.tishiNum - 1;
l.gameData.storageData();
this.changeQiPaoNum();
this.showTiShi(e);
}
}
};
e.prototype.showTiShi = function(t) {
if (t) {
this.isTiShi = !0;
for (var e = 0; e < 2; e++) {
var o = cc.instantiate(this.gameTishiPrefab);
this.imgSignBox.getChildByName("tishiBox").addChild(o);
var i, n = t.centerPos.x * this.originalScale;
i = 0 == e ? t.centerPos.y * this.originalScale + this.setImgY : t.centerPos.y * this.originalScale - this.setImgY;
o.setPosition(n, i);
cc.Tween.stopAllByTarget(o);
cc.tween(o).to(.5, {
scale: .7
}).to(.5, {
scale: 1
}).union().repeatForever().start();
}
}
};
e.prototype.playCommonSound = function(t, e) {
void 0 === e && (e = !1);
for (var o = 0; o < this.audioClips.length; o++) if (this.audioClips[o].name == t) return r.Global.audioUtils.playEffect(this.audioClips[o], e);
return null;
};
c([ p(cc.Node) ], e.prototype, "bg", void 0);
c([ p(cc.Node) ], e.prototype, "originalImg", void 0);
c([ p(cc.Node) ], e.prototype, "finishImg", void 0);
c([ p(cc.Node) ], e.prototype, "tishi_qipao", void 0);
c([ p(cc.Prefab) ], e.prototype, "gameFindPrefab", void 0);
c([ p(cc.Prefab) ], e.prototype, "gameErrPrefab", void 0);
c([ p(cc.Prefab) ], e.prototype, "gameTishiPrefab", void 0);
c([ p(cc.Prefab) ], e.prototype, "game_tuowei", void 0);
c([ p(cc.Node) ], e.prototype, "imgSignBox", void 0);
c([ p(cc.Node) ], e.prototype, "yeziBox", void 0);
c([ p(cc.Label) ], e.prototype, "level", void 0);
c([ p(cc.Node) ], e.prototype, "timeAll", void 0);
c([ p(cc.Node) ], e.prototype, "reduceTime", void 0);
c([ p(cc.Node) ], e.prototype, "mask", void 0);
return c([ h ], e);
}(cc.Component);
o.default = g;
cc._RF.pop();
}, {
"./prefeb/newhand": "newhand",
"./tool/gameData": "gameData",
"./tool/global": "global",
"./tool/utils": "utils"
} ],
global: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "7fe7eKmHWtOBpfO6ERHigxH", "global");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.Global = void 0;
var i = t("./AssetUtils"), n = t("./AudioUtils"), c = function() {
function t() {
this.sceneNode = null;
this.imgId = 0;
this.audioUtils = new n.AudioUtils();
this.eventTarget = new cc.EventTarget();
this.assetUtils = i.AssetUtils;
}
t.getInstance = function() {
null == this._instance && (this._instance = new t());
return this._instance;
};
t.prototype.setsceneNode = function(t) {
this.sceneNode = t;
};
t.prototype.getsceneNode = function() {
return this.sceneNode;
};
t._instance = null;
return t;
}();
o.Global = c.getInstance();
cc._RF.pop();
}, {
"./AssetUtils": "AssetUtils",
"./AudioUtils": "AudioUtils"
} ],
hall: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "014741UGutBway3J/ZL6r3K", "hall");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, a = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (c < 3 ? n(a) : c > 3 ? n(e, o, a) : n(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./prefeb/imgItem"), s = t("./tool/gameData"), l = t("./tool/global"), r = t("./tool/utils"), u = cc._decorator, d = u.ccclass, h = u.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.bg = null;
e.imgItem = null;
e.scroll_contect = null;
e.scrollView = null;
e.toastNode = null;
return e;
}
e.prototype.start = function() {
var t = this;
if (cc.sys.platform === cc.sys.IPAD) {
this.getComponent(cc.Canvas).fitHeight = !0;
this.getComponent(cc.Canvas).fitWidth = !1;
}
l.Global.setsceneNode(this.node);
r.UtilsTool.adapterBg(this.bg);
this.scheduleOnce(function() {
t.init();
});
this.scheduleOnce(function() {
if (s.gameData.userData.level > 4 && s.gameData.userData.level < s.gameData.levelAll) {
var e = 0;
if (s.gameData.userData.level % 2 == 0) {
var o = s.gameData.userData.level / 2;
e = 260 * (s.gameData.userData.level - 1 - o);
} else {
o = (s.gameData.userData.level + 1) / 2;
e = 260 * (s.gameData.userData.level - o);
}
t.scrollView.scrollToOffset(cc.v2(0, e), 1);
}
}, .1);
};
e.prototype.init = function() {
this.scroll_contect.destroyAllChildren();
for (var t = 0; t < 30; t++) {
var e = cc.instantiate(this.imgItem);
this.scroll_contect.addChild(e);
e.getComponent(a.default).init(t, this);
}
};
e.prototype.onClick_setting = function() {
l.Global.audioUtils.commonBtnClick();
l.Global.assetUtils.showDialog(r.dialog.setting_dialog, {
isGame: !1
});
};
e.prototype.showToast = function(t) {
var e = this;
this.toastNode.active = !0;
this.toastNode.getChildByName("label").getComponent(cc.Label).string = t;
cc.Tween.stopAllByTarget(this.toastNode);
this.toastNode.opacity = 255;
cc.tween(this.toastNode).to(.15, {
scale: 1.2
}).to(.15, {
scale: 1
}).delay(.5).to(.5, {
opacity: 0
}).call(function() {
e.toastNode.active = !1;
}).start();
};
c([ h(cc.Node) ], e.prototype, "bg", void 0);
c([ h(cc.Prefab) ], e.prototype, "imgItem", void 0);
c([ h(cc.Node) ], e.prototype, "scroll_contect", void 0);
c([ h(cc.ScrollView) ], e.prototype, "scrollView", void 0);
c([ h(cc.Node) ], e.prototype, "toastNode", void 0);
return c([ d ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"./prefeb/imgItem": "imgItem",
"./tool/gameData": "gameData",
"./tool/global": "global",
"./tool/utils": "utils"
} ],
imgItem: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b349d0IddZO5bDF9FOpApzL", "imgItem");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, a = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (c < 3 ? n(a) : c > 3 ? n(e, o, a) : n(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../tool/gameData"), s = t("../tool/global"), l = t("../tool/utils"), r = cc._decorator, u = r.ccclass, d = r.property, h = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.hall_mask = null;
e.img = null;
e.index = 0;
e.isLock = !1;
e.hall = null;
return e;
}
e.prototype.start = function() {};
e.prototype.init = function(t, e) {
this.index = t;
this.hall = e;
if (this.index < a.gameData.userData.level) {
this.hall_mask.active = !1;
this.isLock = !0;
} else {
this.hall_mask.active = !0;
this.isLock = !1;
}
s.Global.assetUtils.loadSprite("originalImg/" + (this.index + 1) + "-o", this.img);
};
e.prototype.onclick_item = function() {
s.Global.audioUtils.commonBtnClick();
if (this.isLock) {
s.Global.imgId = this.index + 1;
a.gameData.userData.isHall = !1;
a.gameData.storageData();
cc.director.loadScene(l.scene.game);
} else this.hall.showToast("The level has not been unlocked yet");
};
c([ d(cc.Node) ], e.prototype, "hall_mask", void 0);
c([ d(cc.Sprite) ], e.prototype, "img", void 0);
return c([ u ], e);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {
"../tool/gameData": "gameData",
"../tool/global": "global",
"../tool/utils": "utils"
} ],
loading: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3f30aa1wRVDbLr8Lgi0ltz2", "loading");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, a = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (c < 3 ? n(a) : c > 3 ? n(e, o, a) : n(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./tool/gameData"), s = t("./tool/global"), l = t("./tool/StorageUtils"), r = t("./tool/utils"), u = cc._decorator, d = u.ccclass, h = u.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.loading_bg = null;
e.loaging_bar_yellow = null;
e.loadingBox = null;
e.gotoHallBox = null;
e.loading_play = null;
e.resNum = 6;
e.nowNum = 0;
return e;
}
e.prototype.start = function() {
var t = this;
if (cc.sys.platform === cc.sys.IPAD) {
this.getComponent(cc.Canvas).fitHeight = !0;
this.getComponent(cc.Canvas).fitWidth = !1;
}
r.UtilsTool.adapterBg(this.loading_bg);
s.Global.audioUtils.initBtnClickEffect();
s.Global.audioUtils.initbgmMusic();
var e = l.StorageUtils.getStorageJSON(a.storage.gamedata);
e && (a.gameData.userData = e);
s.Global.setsceneNode(this.node);
if (a.gameData.userData.isClause) {
this.gotoHallBox.active = !0;
this.loadingBox.active = !1;
cc.tween(this.loading_play).to(.5, {
scale: 1.1
}).to(.5, {
scale: 1
}).union().repeatForever().start();
} else {
this.gotoHallBox.active = !1;
this.loadingBox.active = !1;
s.Global.assetUtils.showDialog(r.dialog.clause_dialog, {
callback: function() {
a.gameData.userData.isClause = !0;
t.gotoHallBox.active = !0;
t.loadingBox.active = !1;
a.gameData.storageData();
cc.tween(t.loading_play).to(.5, {
scale: 1.1
}).to(.5, {
scale: 1
}).union().repeatForever().start();
}
});
}
a.gameData.setVideoFailCb(function() {
cc.resources.load("prefeb/toast", cc.Prefab, function(t, e) {
if (!t) {
var o = cc.instantiate(e);
s.Global.assetUtils.bindAutoReleaseAsset(o, e);
var i = s.Global.getsceneNode();
if (o && i) {
o.active = !0;
i.addChild(o);
o.getChildByName("label").getComponent(cc.Label).string = "No ads at the moment";
cc.Tween.stopAllByTarget(o);
o.opacity = 255;
cc.tween(o).to(.15, {
scale: 1.2
}).to(.15, {
scale: 1
}).delay(.5).to(.5, {
opacity: 0
}).call(function() {
o.destroy();
}).start();
}
}
});
});
};
e.prototype.onClick_gotoPlay = function() {
var t = this;
this.gotoHallBox.active = !1;
this.loadingBox.active = !0;
s.Global.audioUtils.commonBtnClick();
this.loaging_bar_yellow.fillRange = 0;
cc.Tween.stopAllByTarget(this.loaging_bar_yellow);
cc.loader.loadResDir("prefeb", function(e) {
if (e) cc.error(e); else {
console.log("prefeb assets in  have been loaded.");
t.progressBarEvent();
}
});
cc.loader.loadResDir("finishImg", function(e) {
if (e) cc.error(e); else {
console.log("finishImg assets in  have been loaded.");
t.progressBarEvent();
}
});
cc.loader.loadResDir("originalImg", function(e) {
if (e) cc.error(e); else {
console.log("originalImg assets in  have been loaded.");
t.progressBarEvent();
}
});
cc.loader.loadResDir("imgJson", function(e, o) {
if (e) cc.error(e); else {
a.gameData.levelAll = o.length;
console.log("imgJson assets in  have been loaded.");
t.progressBarEvent();
}
});
cc.director.preloadScene(r.scene.game, function() {
cc.log("game scene preloaded");
t.progressBarEvent();
});
cc.director.preloadScene(r.scene.hall, function() {
cc.log("hall scene preloaded");
t.progressBarEvent();
});
};
e.prototype.progressBarEvent = function() {
var t = this;
this.nowNum++;
cc.Tween.stopAllByTarget(this.loaging_bar_yellow);
cc.tween(this.loaging_bar_yellow).to(.5, {
fillRange: 1 / 6 * this.nowNum
}).call(function() {
t.nowNum == t.resNum && t.scheduleOnce(function() {
if (a.gameData.userData.isHall) cc.director.loadScene(r.scene.hall); else {
s.Global.imgId = a.gameData.userData.level;
cc.director.loadScene(r.scene.game);
}
}, .05);
}).start();
};
e.prototype.showShiPing = function() {
console.log("android---------------showShiPing------------------");
a.gameData.showVideo(function() {
console.log("zzzzzzzzzzzzzzzzzzzzwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
});
};
e.prototype.showbanner = function() {
console.log("android---------------showbanner------------------");
jsb.reflection.callStaticMethod("UnityMgr", "showbanner");
};
e.prototype.hidebanner = function() {
console.log("android---------------hidebanner------------------");
jsb.reflection.callStaticMethod("UnityMgr", "hidebanner");
};
e.prototype.showChaping = function() {
console.log("android---------------showChaping------------------");
jsb.reflection.callStaticMethod("UnityMgr", "loadInterstitial");
};
e.prototype.testBtn = function() {
console.log("android---------------testBtn------------------");
jsb.reflection.callStaticMethod("UnityMgr", "testlog");
};
c([ h(cc.Node) ], e.prototype, "loading_bg", void 0);
c([ h(cc.Sprite) ], e.prototype, "loaging_bar_yellow", void 0);
c([ h(cc.Node) ], e.prototype, "loadingBox", void 0);
c([ h(cc.Node) ], e.prototype, "gotoHallBox", void 0);
c([ h(cc.Node) ], e.prototype, "loading_play", void 0);
return c([ d ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"./tool/StorageUtils": "StorageUtils",
"./tool/gameData": "gameData",
"./tool/global": "global",
"./tool/utils": "utils"
} ],
newhand: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "9a1e0lTY71PmJruz9bjJlQK", "newhand");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, a = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (c < 3 ? n(a) : c > 3 ? n(e, o, a) : n(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, l = a.property, r = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.dong1_top = null;
e.dongdong1_bottom = null;
e.hand1 = null;
e.dong2_top = null;
e.dongdong2_bottom = null;
e.hand2 = null;
return e;
}
e.prototype.start = function() {};
e.prototype.showdong1 = function() {
var t = this;
this.dong1_top.active = !0;
this.dongdong1_bottom.active = !0;
this.hand1.active = !1;
this.dong1_top.width = 500;
this.dong1_top.height = 500;
this.dongdong1_bottom.width = 500;
this.dongdong1_bottom.height = 500;
cc.Tween.stopAllByTarget(this.dong1_top);
cc.Tween.stopAllByTarget(this.dongdong1_bottom);
cc.tween(this.dong1_top).to(.5, {
width: 80,
height: 80
}).start();
cc.tween(this.dongdong1_bottom).to(.5, {
width: 80,
height: 80
}).delay(.1).call(function() {
t.hand1.active = !0;
}).start();
};
e.prototype.hidedong1 = function() {
this.dong1_top.active = !1;
this.dongdong1_bottom.active = !1;
this.hand1.active = !1;
};
e.prototype.showdong2 = function() {
var t = this;
this.dong2_top.active = !0;
this.dongdong2_bottom.active = !0;
this.hand2.active = !1;
this.dong2_top.width = 500;
this.dong2_top.height = 500;
this.dongdong2_bottom.width = 500;
this.dongdong2_bottom.height = 500;
cc.Tween.stopAllByTarget(this.dong2_top);
cc.Tween.stopAllByTarget(this.dongdong2_bottom);
cc.tween(this.dong2_top).to(.5, {
width: 80,
height: 80
}).start();
cc.tween(this.dongdong2_bottom).to(.5, {
width: 80,
height: 80
}).delay(.1).call(function() {
t.hand2.active = !0;
}).start();
};
c([ l(cc.Node) ], e.prototype, "dong1_top", void 0);
c([ l(cc.Node) ], e.prototype, "dongdong1_bottom", void 0);
c([ l(cc.Node) ], e.prototype, "hand1", void 0);
c([ l(cc.Node) ], e.prototype, "dong2_top", void 0);
c([ l(cc.Node) ], e.prototype, "dongdong2_bottom", void 0);
c([ l(cc.Node) ], e.prototype, "hand2", void 0);
return c([ s ], e);
}(cc.Component);
o.default = r;
cc._RF.pop();
}, {} ],
scrollview_util: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6742eFjCRhCdpnyZSMeH66r", "scrollview_util");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, a = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (c < 3 ? n(a) : c > 3 ? n(e, o, a) : n(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, l = (a.property, function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
if (this.node.getComponent(cc.ScrollView)) {
this.node.on("scrolling", this._event_update_opacity, this);
this.node.getComponent(cc.ScrollView).content.on(cc.Node.EventType.CHILD_REMOVED, this._event_update_opacity, this);
this.node.getComponent(cc.ScrollView).content.on(cc.Node.EventType.CHILD_REORDER, this._event_update_opacity, this);
} else cc.error("不存在ScrollView组件！");
};
e.prototype._get_bounding_box_to_world = function(t) {
var e = t._contentSize.width, o = t._contentSize.height, i = cc.rect(-t._anchorPoint.x * e, -t._anchorPoint.y * o, e, o);
t._calculWorldMatrix();
i.transformMat4(i, t._worldMatrix);
return i;
};
e.prototype._check_collision = function(t) {
var e = this._get_bounding_box_to_world(this.node.getComponent(cc.ScrollView).content.parent), o = this._get_bounding_box_to_world(t);
e.width += .5 * e.width;
e.height += .5 * e.height;
e.x -= .25 * e.width;
e.y -= .25 * e.height;
return e.intersects(o);
};
e.prototype._event_update_opacity = function() {
var t = this;
this.node.getComponent(cc.ScrollView).content.children.forEach(function(e) {
var o = t._get_bounding_box_to_world(t.node.getComponent(cc.ScrollView).content.parent);
o.width += .5 * o.width;
o.height += .5 * o.height;
o.x -= .25 * o.width;
o.y -= .25 * o.height;
e.opacity = t._check_collision(e) ? 255 : 0;
});
};
return c([ s ], e);
}(cc.Component));
o.default = l;
cc._RF.pop();
}, {} ],
setting_dialog: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "373fe8INcZH8KIbG9PDCZWr", "setting_dialog");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, a = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (c < 3 ? n(a) : c > 3 ? n(e, o, a) : n(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../tool/gameData"), s = t("../tool/global"), l = cc._decorator, r = l.ccclass, u = l.property, d = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.title = null;
e.pause_sprite = null;
e.setting_sprite = null;
e.soundBox = null;
e.musicBox = null;
e.zhengdongBox = null;
e.setting_pausebtn = null;
e.setting_ok = null;
e.callback = null;
return e;
}
e.prototype.start = function() {
this.init();
a.gameData.showBanner();
};
e.prototype.initData = function(t) {
this.callback = t.callback;
if (t.isGame) {
this.title.spriteFrame = this.pause_sprite;
this.setting_ok.active = !1;
this.setting_pausebtn.active = !0;
} else {
this.title.spriteFrame = this.setting_sprite;
this.setting_ok.active = !0;
this.setting_pausebtn.active = !1;
}
};
e.prototype.init = function() {
if (s.Global.audioUtils.musicSwitch) {
this.musicBox.getChildByName("setting_on").active = !0;
this.musicBox.getChildByName("setting_off").active = !1;
} else {
this.musicBox.getChildByName("setting_on").active = !1;
this.musicBox.getChildByName("setting_off").active = !0;
}
if (s.Global.audioUtils.effectSwitch) {
this.soundBox.getChildByName("setting_on").active = !0;
this.soundBox.getChildByName("setting_off").active = !1;
} else {
this.soundBox.getChildByName("setting_on").active = !1;
this.soundBox.getChildByName("setting_off").active = !0;
}
if (s.Global.audioUtils.shockSwitch) {
this.zhengdongBox.getChildByName("setting_on").active = !0;
this.zhengdongBox.getChildByName("setting_off").active = !1;
} else {
this.zhengdongBox.getChildByName("setting_on").active = !1;
this.zhengdongBox.getChildByName("setting_off").active = !0;
}
};
e.prototype.onClick_musicbtn = function() {
s.Global.audioUtils.commonBtnClick();
s.Global.audioUtils.switchMusic();
if (s.Global.audioUtils.musicSwitch) {
this.musicBox.getChildByName("setting_on").active = !0;
this.musicBox.getChildByName("setting_off").active = !1;
} else {
this.musicBox.getChildByName("setting_on").active = !1;
this.musicBox.getChildByName("setting_off").active = !0;
}
};
e.prototype.onClick_soundbtn = function() {
s.Global.audioUtils.commonBtnClick();
s.Global.audioUtils.switchEffect();
if (s.Global.audioUtils.effectSwitch) {
this.soundBox.getChildByName("setting_on").active = !0;
this.soundBox.getChildByName("setting_off").active = !1;
} else {
this.soundBox.getChildByName("setting_on").active = !1;
this.soundBox.getChildByName("setting_off").active = !0;
}
};
e.prototype.onClick_zhengdongbtn = function() {
s.Global.audioUtils.commonBtnClick();
s.Global.audioUtils.switchShock();
if (s.Global.audioUtils.shockSwitch) {
this.zhengdongBox.getChildByName("setting_on").active = !0;
this.zhengdongBox.getChildByName("setting_off").active = !1;
} else {
this.zhengdongBox.getChildByName("setting_on").active = !1;
this.zhengdongBox.getChildByName("setting_off").active = !0;
}
};
e.prototype.onClick_continue_btn = function() {
s.Global.audioUtils.commonBtnClick();
this.node.destroy();
a.gameData.closeBanner();
this.callback && this.callback();
};
e.prototype.onClick_ok_btn = function() {
s.Global.audioUtils.commonBtnClick();
this.callback && this.callback();
this.node.destroy();
a.gameData.closeBanner();
};
e.prototype.onClick_PrivacyPolicy_btn = function() {
s.Global.audioUtils.commonBtnClick();
cc.sys.openURL("https://sites.google.com/view/beauty-unveiled-uncover-the-di/%E9%A6%96%E9%A1%B5");
};
e.prototype.onClick_Termsofservicebtn = function() {
cc.sys.openURL("https://sites.google.com/view/beautyunveileduncoverthediffer/%E9%A6%96%E9%A1%B5");
s.Global.audioUtils.commonBtnClick();
};
c([ u(cc.Sprite) ], e.prototype, "title", void 0);
c([ u(cc.SpriteFrame) ], e.prototype, "pause_sprite", void 0);
c([ u(cc.SpriteFrame) ], e.prototype, "setting_sprite", void 0);
c([ u(cc.Node) ], e.prototype, "soundBox", void 0);
c([ u(cc.Node) ], e.prototype, "musicBox", void 0);
c([ u(cc.Node) ], e.prototype, "zhengdongBox", void 0);
c([ u(cc.Node) ], e.prototype, "setting_pausebtn", void 0);
c([ u(cc.Node) ], e.prototype, "setting_ok", void 0);
return c([ r ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../tool/gameData": "gameData",
"../tool/global": "global"
} ],
timeOut_dialog: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "98460XFFs1JCI9f0VmFuXBW", "timeOut_dialog");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, a = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (c < 3 ? n(a) : c > 3 ? n(e, o, a) : n(e, o)) || a);
return c > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../tool/gameData"), s = t("../tool/global"), l = cc._decorator, r = l.ccclass, u = (l.property, 
function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.ADcallback = null;
e.restartCallBack = null;
return e;
}
e.prototype.start = function() {
a.gameData.showBanner();
};
e.prototype.initData = function(t) {
this.ADcallback = t.ADcallback;
this.restartCallBack = t.restartCallBack;
};
e.prototype.onClick_AD_btn = function() {
var t = this;
s.Global.audioUtils.commonBtnClick();
a.gameData.showVideo(function() {
t.scheduleOnce(function() {
t.ADcallback && t.ADcallback();
t.node.destroy();
a.gameData.closeBanner();
});
});
};
e.prototype.onClick_restart = function() {
s.Global.audioUtils.commonBtnClick();
this.restartCallBack && this.restartCallBack();
this.node.destroy();
a.gameData.closeBanner();
};
return c([ r ], e);
}(cc.Component));
o.default = u;
cc._RF.pop();
}, {
"../tool/gameData": "gameData",
"../tool/global": "global"
} ],
utils: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e75de39iqJBE4u//arB87VO", "utils");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.dialog = o.scene = o.UtilsTool = void 0;
o.UtilsTool = {
timeChange: function(t) {
t = +t;
var e = Math.floor(t / 60), o = Math.floor(t % 60);
return (e < 10 ? "0" + e : e.toString()) + ":" + (o < 10 ? "0" + o : o.toString());
},
getRandomInt: function(t, e) {
return Math.floor(Math.random() * (e - t + .999999999)) + t;
},
adapterBg: function(t) {
var e = cc.winSize.width / t.width, o = cc.winSize.height / t.height;
t.scale = Math.max(e, o);
},
changePos: function(t, e) {
if (!cc.isValid(t) || !cc.isValid(e)) return cc.v3(0, 0);
var o = t.parent.convertToWorldSpaceAR(t.position);
return e.parent.convertToNodeSpaceAR(o);
},
shuffleArray: function(t) {
for (var e, o = t.length - 1; o > 0; o--) {
var i = Math.floor(Math.random() * (o + 1));
e = [ t[i], t[o] ], t[o] = e[0], t[i] = e[1];
}
return t;
},
getRandomThree: function(t, e) {
return this.shuffleArray(t).slice(0, e);
},
delayCallBack: function(t, e, o) {
var i = cc.director.getScene().getChildByName("Canvas");
cc.isValid(o) && (i = o);
cc.tween(i).delay(t).call(function() {
e && e();
}).start();
},
playSp: function(t, e, o, i) {
var n = this;
void 0 === o && (o = !1);
void 0 === i && (i = null);
t.setCompleteListener(function() {
i && n.delayCallBack(.02, function() {
i();
}, t.node);
t.setCompleteListener(null);
});
t.setAnimation(0, e, o);
},
stopSp: function(t) {
t.setCompleteListener(null);
},
addSequenceSp: function(t, e, o, i) {
void 0 === o && (o = !1);
i ? t.addAnimation(0, e, o, i) : t.addAnimation(0, e, o);
},
setFraListenSp: function(t, e, o) {
t.setEventListener(function(t, i) {
i.data.name == e && o && o();
});
},
setFraListenSpEx: function(t, e) {
t.setEventListener(function(t, o) {
e && e(o.data.name);
});
}
};
o.scene = {
game: "game",
hall: "hall",
loading: "loading"
};
o.dialog = {
setting_dialog: "setting_dialog",
clause_dialog: "clause_dialog",
confirmExit_dialog: "confirmExit_dialog",
timeOut_dialog: "timeOut_dialog",
comment_dialog: "comment_dialog",
gameover_dialog: "gameover_dialog"
};
cc._RF.pop();
}, {} ]
}, {}, [ "clause_dialog", "comment_dialog", "confirmExit_dialog", "gameover_dialog", "setting_dialog", "timeOut_dialog", "game", "hall", "loading", "imgItem", "newhand", "AssetUtils", "AudioUtils", "BxAutoAsset", "StorageUtils", "gameData", "global", "scrollview_util", "utils" ]);