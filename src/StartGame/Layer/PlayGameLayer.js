var PlayGameLayer = cc.Layer.extend({

    ctor: function () {
        this._super();

        var playGameLayer = new PlayGameBgLayer();
        playGameLayer.attr({
            x:GF.w_2,
            y:0
        });
        this.addChild(playGameLayer);
    },


});