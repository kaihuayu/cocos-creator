/**
 * 精灵增加 
 */

let SpriteEx = cc.Class({
    extends: cc.Sprite,

    properties: {
        bulletstate:false,
        spriteFrames: [cc.SpriteFrame],

        _index: 0,
        index: {
            type: cc.Integer,
            set(value) {
                if (value < 0) {
                    return;
                }
                this._index = value % this.spriteFrames.length;
                this.spriteFrame = this.spriteFrames[this._index];
            },
            get() {
                return this._index;
            }
        }
    },

    next() {
        this.index++
    },


    update :function(dt){
    
        if (this.bulletstate){
           // this.schedule(this.but, this.rate);
           this._index=4;
        }
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
            case cc.macro.KEY.space            :
            this.BackSpace=true;
            this.bulletstate=true;
            console.log('空格');
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
            case cc.macro.KEY.space            :
            this.BackSpace=false;
            this.bulletstate=false;
            console.log('空格');
            break;   
    }
    },





});


cc.Class.Attr.setClassAttr(SpriteEx, 'spriteFrame', 'visible', false);
cc.Class.Attr.setClassAttr(SpriteEx, '_atlas', 'visible', false);

cc.Class.Attr.setClassAttr(SpriteEx, 'fillType', 'visible', function() {
    return this._type === cc.Sprite.Type.FILLED;
});

cc.Class.Attr.setClassAttr(SpriteEx, 'fillCenter', 'visible', function() {
    return this._type === cc.Sprite.Type.FILLED;
});
cc.Class.Attr.setClassAttr(SpriteEx, 'fillStart', 'visible', function() {
    return this._type === cc.Sprite.Type.FILLED;
});
cc.Class.Attr.setClassAttr(SpriteEx, 'fillEnd', 'visible', function() {
    return this._type === cc.Sprite.Type.FILLED;
});
cc.Class.Attr.setClassAttr(SpriteEx, 'fillRange', 'visible', function() {
    return this._type === cc.Sprite.Type.FILLED;
});

cc.Class.Attr.setClassAttr(SpriteEx, 'srcBlendFactor', 'visible', function() {
    return this._type === cc.Sprite.Type.FILLED;
});
cc.Class.Attr.setClassAttr(SpriteEx, 'dstBlendFactor', 'visible', function() {
    return this._type === cc.Sprite.Type.FILLED;
});

 