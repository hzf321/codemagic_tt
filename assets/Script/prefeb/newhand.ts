const { ccclass, property } = cc._decorator;

@ccclass
export default class newhand extends cc.Component {

    @property(cc.Node)
    dong1_top: cc.Node = null;

    @property(cc.Node)
    dongdong1_bottom: cc.Node = null;

    @property(cc.Node)
    hand1: cc.Node = null;


    @property(cc.Node)
    dong2_top: cc.Node = null;

    @property(cc.Node)
    dongdong2_bottom: cc.Node = null;

    @property(cc.Node)
    hand2: cc.Node = null;

    start() {

    }

    showdong1() {
        this.dong1_top.active = true;
        this.dongdong1_bottom.active = true;

        this.hand1.active = false;

        this.dong1_top.width = 500;
        this.dong1_top.height = 500;

        this.dongdong1_bottom.width = 500;
        this.dongdong1_bottom.height = 500;
        cc.Tween.stopAllByTarget(this.dong1_top);
        cc.Tween.stopAllByTarget(this.dongdong1_bottom);


        cc.tween(this.dong1_top).to(0.5, { width: 80, height: 80}).start();
        cc.tween(this.dongdong1_bottom).to(0.5, { width: 80, height: 80}).delay(0.1).call(()=>{
            this.hand1.active = true;
        }).start();
    }


    hidedong1() {
        this.dong1_top.active = false;
        this.dongdong1_bottom.active = false;
        this.hand1.active = false;
    }


    showdong2() {
        this.dong2_top.active = true;
        this.dongdong2_bottom.active = true;

        this.hand2.active = false;

        this.dong2_top.width = 500;
        this.dong2_top.height = 500;

        this.dongdong2_bottom.width = 500;
        this.dongdong2_bottom.height = 500;
        cc.Tween.stopAllByTarget(this.dong2_top);
        cc.Tween.stopAllByTarget(this.dongdong2_bottom);


        cc.tween(this.dong2_top).to(0.5, { width: 80, height: 80}).start();
        cc.tween(this.dongdong2_bottom).to(0.5, { width: 80, height: 80}).delay(0.1).call(()=>{
            this.hand2.active = true;
        }).start();
    }


}
