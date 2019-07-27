cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Node		
        },
				       FLY6: {
            default: null,
            type: cc.Node
        },

        // defaults, set visually when attaching this script to the Canvas

		//玩家移动速度
       // Movelabel:10,
    },

    // use this for initialization
    onLoad () {
        // set initial move direction
        this.turnRight();

        //add keyboard input listener to call turnLeft and turnRight
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
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
                break;
            case macro.KEY.d:
            case macro.KEY.right:
                console.log('turn right');
                this.turnRight();
                break;
        }
    },

    // called every frame
    update (dt) {

		this.FLY6.x += 30* dt;
    },

    turnLeft () {
        this.FLY6.x = -100;
        this.FLY6.scaleX = 1;
    },

    turnRight () {
        this.FLY6.x = 100;
        this.FLY6.scaleX = -1;
    }

	
	
});
