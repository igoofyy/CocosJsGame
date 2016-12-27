var HomeBgLayer = cc.Layer.extend({

    ctor:function () {
        this._super();

        var sprite = new cc.Sprite(res.HomeBg_jpg);
        sprite.attr({
            x: GF.w_2,
            y: GF.h_2 + 45
        });

        this.addChild(sprite, 0);

        var playerSprite = new cc.Sprite(res.player_png);
        playerSprite.attr({
            x: GF.w_2,
            y: GF.h_2 + 45,
            width:0.1,
            height:0.1
        });
        this.addChild(playerSprite,0);


        return true;
    }
});