var PlayGameLayer = cc.Layer.extend({

    _player : null,
    _mapBg:null,

    ctor: function () {
        this._super();

        var playGameLayer = new PlayGameBgLayer();
        playGameLayer.attr({
            x:GF.w_2,
            y:0
        });
        this._mapBg = playGameLayer;
        this.addChild(playGameLayer);

        var player = new PlayerSprite(PLAYER.STATE.NORMAL);
        player.attr({
            x:GF.w_2,
            y:50,
        });
        this.addChild(player);
        this._player = player;

        this.touchInit();
    },
    
    touchInit:function () {
        if("touches" in cc.sys.capabilities){
            cc.eventManager.addListener({
                event: cc.EventListener.TOUCH_ONE_BY_ONE,
                onTouchBegan: this._onTouchBegan.bind(this),
                onTouchMoved: this._onTouchMove.bind(this)
            }, this._mapBg);
        } else {
            console.log("-----")
            cc.eventManager.addListener({
                event: cc.EventListener.MOUSE,
                swallowTouches:false,
                onMouseDown: this._onMouseDown.bind(this)
            }, this._mapBg);
        }
    },
    _onTouchBegan: function (touch, event) {
        console.log("click ")
        return true;
    },

    _onTouchMove: function(touch, event) {
        var rect = touch.getLocation();
        // console.log(rect.x,rect.y);
        this._player.attr({
            x:rect.x,
            y:rect.y
        });
        return true;
    },

    _onMouseDown: function (touch,event) {



    },

});