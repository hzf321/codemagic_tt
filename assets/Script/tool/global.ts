import { AssetUtils } from "./AssetUtils";
import { AudioUtils } from "./AudioUtils";


export interface beautyData {
    centerPos: { x: number, y: number },                // 中心点坐标 
    startPos: { x: number, y: number },                // 起始点坐标
    endPos: { x: number, y: number },                // 结束点坐标
    blockSize: { wid: number, hei: number },                // 方块大小
    isFind: boolean,                                // 是否找到
}


class GlobalClass {

    private static _instance: GlobalClass = null;

    public static getInstance(): GlobalClass {
        if (this._instance == null) {
            this._instance = new GlobalClass();
        }
        return this._instance;
    }

    public sceneNode: cc.Node = null
    public imgId: number = 0;


    public audioUtils: AudioUtils = new AudioUtils();
    public eventTarget: cc.EventTarget = new cc.EventTarget();
    public assetUtils = AssetUtils;
    setsceneNode(node: cc.Node) {
        this.sceneNode = node;
    }

    getsceneNode() {
        return this.sceneNode;
    }
}

export let Global = GlobalClass.getInstance();