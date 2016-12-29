var PlayGameLayer = cc.Layer.extend({

    _player : null,

    ctor: function () {
        this._super();

        var playGameLayer = new PlayGameBgLayer();
        playGameLayer.attr({
            x:GF.w_2,
            y:0
        });
        this.addChild(playGameLayer);

        var player = new PlayerSprite(PLAYER.STATE.NORMAL);
        player.attr({
            x:GF.w_2,
            y:50,
        });
        this.addChild(player);
        this._player = player;
    },


});