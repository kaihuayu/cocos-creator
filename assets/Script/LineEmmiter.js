
cc.Class({
    extends: cc.Component,

    properties: {
        //prefab: cc.Prefab,
        bullet:{
            default: null,
            type: cc.Node,	
                  //发射间隔
            speed: 1000,    //移动速度
            

        },
        rate: 1,        //发射间隔
        speed: 1000,    //移动速度
        offsetX: 0,
    },

    start() {
        this.schedule(this._emmitNode, this.rate);
    },

    _emmitNode() {
        let node = cc.instantiate(this.bullet);
        node.position = this.node.position;
        node.x += this.offsetX;
        node.parent = this.node.parent;

        let distance = ((cc.winSize.height / 2) - this.node.y);
        let duration = distance / this.speed;
        let moveBy = cc.moveBy(duration, cc.v2(0, distance));
        let removeSelf = cc.removeSelf();
        let sequence = cc.sequence(moveBy, removeSelf);
        node.runAction(sequence);    
    }
});
