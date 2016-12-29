var HomeBgLayer = cc.Layer.extend({

    ctor:function () {
        this._super();

        var sprite = new cc.Sprite(res.HomeBg_jpg);
        sprite.attr({
            x: GF.w_2,
            y: GF.h_2
        });

        this.addChild(sprite, 0);

        return true;
    }
});