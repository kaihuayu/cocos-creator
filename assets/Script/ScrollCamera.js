
cc.Class({
    editor: {
        requireComponent: cc.Camera,
    },
    extends: cc.Component,

    properties: {
        speed: 300,
        loopGrounds: [cc.Node],  
    },

    start () {
        this.camera = this.getComponent(cc.Camera);
    },

    update(dt) {
        let current = this.loopGrounds[0];
        let pt = this.camera.getWorldToCameraPoint(current.position);
        if (pt.y <= -cc.winSize.height) {
            let last = this.loopGrounds[this.loopGrounds.length - 1];
            this.loopGrounds.shift();
            this.loopGrounds.push(current);
            current.y = last.y + (last.height + current.height) / 2;
        }
        this.node.y += dt * this.speed;
    }
});