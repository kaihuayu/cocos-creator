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
                prefab: cc.Prefab, 
                prefab2: cc.Prefab,           
                BF_BULLET:0,//道具类型
                BF_BOMB:1,
                BackSpace:false,
                bulletstate:false,
                bx:0,
                by:0,
                rate: 0.5,                    //发射间隔
                speed: 1000,    //移动速度
                offsetX: 0,
        },

        // onLoad () {},
        onLoad:function () {
            //****获得设备分辨率****
            var b = cc.director.getWinSizeInPixels();
            this.bx = b.width;
            this.by = b.height;
            
            //初始化键盘输入监听
            cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this);
            cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this);
        },
        start () {

            //this.schedule(this.but, this.rate);
        },
        // update (dt) {},
        update :function(dt){
    
           if (this.bulletstate){
               
             this.schedule(this.but, this.rate);
           
            }else{
                this.schedule(this.but2, this.rate);
            };
           
        },

        but(){
       
            let node=cc.instantiate(this.prefab);           
            node.position = this.node.position;
            node.x += this.offsetX; //子弹的x坐标
            node.parent = this.node.parent;
            let distance = ((cc.winSize.height ) - this.node.y);
            let duration = distance / this.speed;
            let moveBy = cc.moveBy(duration, cc.v2(0, distance));
            let removeSelf = cc.removeSelf();
            let sequence = cc.sequence(moveBy, removeSelf);
            node.runAction(sequence);     
          
        },

        but2(){
       
            let node=cc.instantiate(this.prefab2);           
            node.position = this.node.position;
            node.x += this.offsetX; //子弹的x坐标
            node.parent = this.node.parent;
            let distance = ((cc.winSize.height ) - this.node.y);
            let duration = distance / this.speed;
            let moveBy = cc.moveBy(duration, cc.v2(0, distance));
            let removeSelf = cc.removeSelf();
            let sequence = cc.sequence(moveBy, removeSelf);
            node.runAction(sequence);     
          
        },

        onKeyDown(event){
            //设置对应按键按下发生的事件
           // console.log('移动了');
            switch(event.keyCode){
                //按下A键
                case cc.macro.KEY.a:
                this.left=true;
                this.BackSpace=false;
                this.bulletstate=false;
                break;
                case cc.macro.KEY.d:
                this.right=true;
                break;
                case cc.macro.KEY.w:
                this.up=true;
                break;
                case cc.macro.KEY.s:
                this.down=true;
                break;
                case cc.macro.KEY.space            :
                this.BackSpace=true;
                this.bulletstate=true;
               // console.log('空格');
                break;   
            }
        },

        onKeyUp(event){
            //设置按键抬起后的事件
            switch(event.keyCode){
                //按下A键
                case cc.macro.KEY.a:
                this.left=false;
               // console.log('移动了A');
                break;
                case cc.macro.KEY.d:
                this.right=false;
                break;
                case cc.macro.KEY.w:
                this.up=false;
                break;
                case cc.macro.KEY.s:
                this.down=false;
                break;
                case cc.macro.KEY.space            :
            
                //console.log('空格');
                break;   
        }
        },

});
