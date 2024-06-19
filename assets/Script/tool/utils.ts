
export const UtilsTool = {

    /**
     * 时间转换，秒->分秒, mm:ss
     */
    timeChange(value) {
        value = +value;
        let minute: number = Math.floor(value / 60);
        let second: number = Math.floor(value % 60);
        let minStr: string = ""
        if (minute < 10) {        //分钟
            minStr = "0" + minute
        } else {
            minStr = minute.toString();
        }
        let secStr: string = ""
        if (second < 10) {        //秒数
            secStr = "0" + second
        } else {
            secStr = second.toString();
        }
        return `${minStr}:${secStr}`;
    },


    //返回范围的随机数
    getRandomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 0.999999999)) + min;
    },

    // 全屏窗口背景图适配
    adapterBg(bgNode: cc.Node) {
        //背景大图适配 等比缩放 不留黑边
        let _bgWidthScale = cc.winSize.width / bgNode.width;
        let _bgHeightScale = cc.winSize.height / bgNode.height;
        bgNode.scale = Math.max(_bgWidthScale, _bgHeightScale);
    },

    //转成节点坐标
    changePos(toNode: cc.Node, fromNode: cc.Node) {
        if (!cc.isValid(toNode) || !cc.isValid(fromNode)) return cc.v3(0, 0);
        let _pos = toNode.parent.convertToWorldSpaceAR(toNode.position);
        let _npos = fromNode.parent.convertToNodeSpaceAR(_pos);
        return _npos;
    },

    //数组打乱
    shuffleArray(array) {
        // 遍历数组
        for (let i = array.length - 1; i > 0; i--) {
            // 随机生成一个 0 到 i（包含）之间的整数
            const j = Math.floor(Math.random() * (i + 1));
            // 交换当前元素和随机选择的元素
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    },

    //在数组中随机抽几个出来
    getRandomThree(array, num) {
        let roundomArr = this.shuffleArray(array);
        return roundomArr.slice(0, num);
    },




    //------------------------------------------anim---------------------------------------------------------------
    delayCallBack(time: number, _callback: any, nodeDelay?: cc.Node): void {
        let CanvasNode = cc.director.getScene().getChildByName('Canvas');
        if (cc.isValid(nodeDelay)) {
            CanvasNode = nodeDelay;
        }
        // cc.Tween.stopAllByTarget(CanvasNode);//这里不能停止CanvasNode的所有动作
        cc.tween(CanvasNode)
            .delay(time)
            .call(() => { if (_callback) _callback(); })
            .start();
    },

    playSp(spSkel: sp.Skeleton, name: string, isLoop: boolean = false, endCallback: Function = null): void {
        spSkel.setCompleteListener(() => {
            if (endCallback) {
                this.delayCallBack(0.02, () => {
                    endCallback();
                }, spSkel.node);
            }
            spSkel.setCompleteListener(null);
            // spSkel.setDisposeListener(endCallback);
        });
        spSkel.setAnimation(0, name, isLoop);
    },
    stopSp(spSkel: sp.Skeleton): void {
        spSkel.setCompleteListener(null);
        // spSkel.clearTracks();
    },

    // 序列动画(添加一个动画到尾巴 还可以延迟几秒)
    addSequenceSp(spSkel: sp.Skeleton, name: string, isLoop: boolean = false, delayTime?: number): void {
        if (delayTime) {
            spSkel.addAnimation(0, name, isLoop, delayTime);
        } else {
            spSkel.addAnimation(0, name, isLoop);
        }
    },


    // name 动画师加的事件名
    setFraListenSp(spSkel: sp.Skeleton, name: string, func: Function): void {
        spSkel.setEventListener((tracIndex, event) => {
            if (event.data.name == name) {
                if (func) {
                    func();
                }
            }
        });
    },

    // 多事件名监听
    setFraListenSpEx(spSkel: sp.Skeleton, func: (name: string) => void): void {
        spSkel.setEventListener((tracIndex, event) => {
            if (func) {
                func(event.data.name);
            }
        });
    }
}


export const scene = {
    game: "game",
    hall: "hall",
    loading: "loading",
}

export const dialog = {
    setting_dialog: "setting_dialog",
    clause_dialog: "clause_dialog",
    confirmExit_dialog: "confirmExit_dialog",
    timeOut_dialog: "timeOut_dialog",
    comment_dialog: "comment_dialog",
    gameover_dialog: "gameover_dialog",
   
}