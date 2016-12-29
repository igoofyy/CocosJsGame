var PlayGame = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new PlayGameLayer();
        this.addChild(layer);
    }
});