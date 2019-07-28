// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        Flysprite:{
            default: null,
            type: cc.Node	
        },
        left:false,
        right:false,
  
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    onLoad:function(){
        this.left=false;
        this.right=false;
        var animationCompoent = this.getComponent(cc.Animation) ;
        animationCompoent.play('Flysprite');
               //add keyboard input listener to call turnLeft and turnRight
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);

    },
    start () {

    },
    onDestroy () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    },

    onKeyDown (event) {
        var macro = cc.macro;
        switch(event.keyCode) {
            case macro.KEY.a:
            case macro.KEY.left:
                console.log('turn left');
                this.turnLeft();
                this.left=true;
                break;
            case macro.KEY.d:
            case macro.KEY.right:
                console.log('turn right');
                this.turnRight();
                this.right=true;
                break;
        }
    },

    // called every frame
    update (dt) {
        if (this.right){
            
        this.Flysprite.x += this.speed* dt;
            
        }

           if (this.left){
        this.Flysprite.x += this.speed* dt;
        }

        

},

    turnLeft () {
        
        this.speed = -100;
        this.Flysprite.scaleX = 1;
        this.right=false;
    },

    turnRight () {
    
        this.speed= 100;
        this.Flysprite.scaleX = -1;
        this.left=false;
    }

        //update (dt) {},
});
