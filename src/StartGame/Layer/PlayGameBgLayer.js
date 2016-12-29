var PlayGameBgLayer = cc.Layer.extend({
    _firstBgSprite:null,
    _secondBgSprite:null,

    ctor:function () {
        this._super();

        this.initBg();

    },
    
    initBg:function () {
        var firstBgSprite = new cc.Sprite(res.start_gamebg02_jpg);
        firstBgSprite.attr({
            x:0,
            y:0,
            anchorY :0,
        });
        this.addChild(firstBgSprite);
        this._firstBgSprite = firstBgSprite;

        var secondBgSprite = new cc.Sprite(res.start_gamebg01_jpg);
        secondBgSprite.attr({
            x:0,
            y:GF.h,
            anchorY :0,
        });
        this.addChild(secondBgSprite);
        this._secondBgSprite = secondBgSprite;
        this.schedule(this.update, 0.1);
    },

    update: function () {
        if (this._firstBgSprite.y - 2 <= -GF.h) {
            this._firstBgSprite.y = GF.h;

        } else {
            this._firstBgSprite.y -= 2;
        }

        if (this._secondBgSprite.y -2 <= -GF.h) {
            this._secondBgSprite.y = GF.h;
        } else {
            this._secondBgSprite.y -= 2;
        }
    }

});