
var HomeLayer = cc.Layer.extend({

    player:null,
    homeBg:null,

    ctor: function () {
        this._super();

        this.initBackGround();

        return true;
    },

    initBackGround: function () {
        var homeBg = new HomeBgLayer();
        homeBg.x = 0;
        homeBg.y = 0;
        homeBg.anchorX = 0.1;
        homeBg.anchorY = 0.2;
        this.addChild(homeBg,0);
        this.homeBg = homeBg;

        var playerSprite = new PlayerSprite(PLAYER.STATE.NORMAL);
        playerSprite.attr({
            x: GF.w_2,
            y: 30,
        });
        homeBg.addChild(playerSprite,1);
        playerSprite.runAction(cc.moveBy(2, cc.p(Math.random() * GF.w, playerSprite.y + GF.h + 100)));
        this.player = playerSprite;

        var btn = new StartBtnLayer(function(){
            // cc.audioEngine.stopAllEffects();
            cc.director.runScene(new cc.TransitionFade(1.2, new PlayGame()));
        });

        btn.attr({
            x:GF.w_2,
            y:100,
        });
        homeBg.addChild(btn,1);

        var point01 = btn.convertToWorldSpace(btn.getPosition());
        console.log(point01);
        this.timer();

        var rect = cc.p(100,100);

    },

    timer: function () {
        this.schedule(this.update, 0.2);
    },

    update: function () {
        if (this.player.y > 568) {
            this.player.x = Math.random() * GF.w;
            this.player.y = 10;
            this.player.runAction(cc.moveBy(
                parseInt(3 * Math.random(), 10),
                cc.p(Math.random() * GF.w, this.player.y + 568)
            ));
        }
    }
});