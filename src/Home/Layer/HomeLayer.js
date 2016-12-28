
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
        this.addChild(homeBg,0);
        this.homeBg = homeBg;

        var playerSprite = new PlayerSprite(PLAYER.STATE.NORMAL);
        playerSprite.attr({
            x: GF.w_2 - 40,
            y: 20,
            width:0.1,
            height:0.1
        });
        this.addChild(playerSprite,1);
        playerSprite.runAction(cc.moveBy(2, cc.p(Math.random() * GF.w, playerSprite.y + GF.h + 100)));
        this.player = playerSprite;

        var btn = new StartBtnLayer(function(){
            console.log("点击了开始游戏");
        });

        btn.attr({
            x: GF.w_2,
            y: 120,
        });
        this.addChild(btn,1);
        this.timer();

    },

    timer: function () {
        this.schedule(this.update, 0.1);
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