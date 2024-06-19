cc.Component.prototype.addAutoReleaseAsset = function(_asset:cc.Asset) {
    let tempAuto = this.node.getComponent(AutoReleaseAssets);
    if(!cc.isValid(tempAuto)){
        tempAuto = this.node.addComponent(AutoReleaseAssets);
    }
    tempAuto.addAutoReleaseAsset(_asset);
}

cc.Component.prototype.addAutoReleaseAssets = function(_assets:cc.Asset[]) {
    let tempAuto = this.node.getComponent(AutoReleaseAssets);
    if(!cc.isValid(tempAuto)){
        tempAuto = this.node.addComponent(AutoReleaseAssets);
    }
    for (const _assetOne  of _assets) {
        tempAuto.addAutoReleaseAsset(_assetOne);
    }
}

//-----------------------------------------------------------------------------------------------------AutoReleaseAssets

const {ccclass} = cc._decorator;

@ccclass
export default class AutoReleaseAssets extends cc.Component {

    private dynamicsAssets: cc.Asset[] = [];


    public addAutoReleaseAsset(_asset:cc.Asset){
        if(cc.isValid(_asset)){
            _asset.addRef();
            this.dynamicsAssets.push(_asset);
            // console.log("当前动态资源长度=="+this.dynamicsAssets.length);
        }
    }

    onDestroy(): void {
        // console.log("继承cc.Component 拥有生命周期 如果Node销毁就会顺带销毁这里");
        for (let index = 0; index < this.dynamicsAssets.length; index++) {
            if(cc.isValid(this.dynamicsAssets[index])){
                this.dynamicsAssets[index].decRef();
            }
        }
        this.dynamicsAssets = [];
    }
     
}
