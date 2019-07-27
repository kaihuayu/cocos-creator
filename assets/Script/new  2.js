cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Node
		
		
			
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'hellowww',
		//玩家移动速度
        MoveSpeed:100,
      speed:180,
      state:true
    },

    // use this for initialization
    onLoad: function () {
        //this.label.string ="this.text";
		 this.left=false;
        this.right=false;
        this.up=false,
        this.down=false;
        
        //初始化键盘输入监听
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this);
		    //绑定事件
    this.node.on(cc.Node.EventType.TOUCH_MOVE,this.mouseFun,this);
},

mouseFun(event){
    console.log('鼠标移动了');
    //触摸点的世界坐标
    var pos=new cc.Vec2(event.getLocationX(),event.getLocationY());
    //转换为UI坐标
    pos=this.node.convertToNodeSpaceAR(pos);
    //给要移动的物体赋值
    this.label.position=pos;
    //只移动x轴,Y轴同理
    this.label.x=pos.x;
},

    // called every frame
    update: function (dt) {
         //根据要移动的方向更新主角速度
         //左右移动
      //   this.label.x += this.MoveSpeed * dt;
         if (this.state){

          this.label.x += this.MoveSpeed * dt;
          if (this.label.x >250){
            this.state=false;
          }

         }

         if (!this.state){
          this.label.x -= this.MoveSpeed * dt;
          if (this.label.x <-250){
            this.state=true;
          }
         }
		 //this.label.x += this.MoveSpeed * dt;
         if(this.left){
             this.label.x-=this.MoveSpeed*dt;
         }else if(this.right){
            this.label.x+=this.MoveSpeed*dt;
         }
         //上下移动
         if(this.down){
            this.label.y-=this.MoveSpeed*dt;
        }else if(this.up){
           this.label.y+=this.MoveSpeed*dt;
        }

    },
	
	
	  onKeyDown(event){
        //设置对应按键按下发生的事件
		console.log('移动了');
        switch(event.keyCode){
            //按下A键
            case cc.macro.KEY.a:
              this.left=true;
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
        }
    },

    onKeyUp(event){
        //设置按键抬起后的事件
        switch(event.keyCode){
            //按下A键
            case cc.macro.KEY.a:
              this.left=false;
			  console.log('移动了A');
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
        }
    },

	
	
});
