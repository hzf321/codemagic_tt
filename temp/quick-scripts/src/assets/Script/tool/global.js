"use strict";
cc._RF.push(module, '7fe7eKmHWtOBpfO6ERHigxH', 'global');
// script/tool/global.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Global = void 0;
var AssetUtils_1 = require("./AssetUtils");
var AudioUtils_1 = require("./AudioUtils");
var GlobalClass = /** @class */ (function () {
    function GlobalClass() {
        this.sceneNode = null;
        this.imgId = 0;
        this.audioUtils = new AudioUtils_1.AudioUtils();
        this.eventTarget = new cc.EventTarget();
        this.assetUtils = AssetUtils_1.AssetUtils;
    }
    GlobalClass.getInstance = function () {
        if (this._instance == null) {
            this._instance = new GlobalClass();
        }
        return this._instance;
    };
    GlobalClass.prototype.setsceneNode = function (node) {
        this.sceneNode = node;
    };
    GlobalClass.prototype.getsceneNode = function () {
        return this.sceneNode;
    };
    GlobalClass._instance = null;
    return GlobalClass;
}());
exports.Global = GlobalClass.getInstance();

cc._RF.pop();