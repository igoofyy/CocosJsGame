var HomeScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HomeBgLayer();
        this.addChild(layer);
    }
});