var PlayGameBgLayer = cc.Layer.extend({
    _firstBgSprite:null,
    _secondBgSprite:null,

    levelText:null,
    scoreText:null,
    stepText:null,

    ctor:function () {
        this._super();

        this.initBg();

        this.initBgLabel();

    },

    initBgLabel : function() {

        var levelLabel = new cc.LabelTTF('Level',"arial",20);
        levelLabel.x = -GF.w_2 + 40;
        levelLabel.y = GF.h - 20;
        levelLabel.anchorX = 0.5;
        levelLabel.setColor(CL.HOME.LABEL);
        this.addChild(levelLabel,1);

        var levelText = new cc.LabelTTF('1',"arial",20);
        levelText.x = levelLabel.x;
        levelText.y = levelLabel.y - 25;
        levelText.setColor(CL.HOME.LABEL);
        this.addChild(levelText);
        this.levelText = levelText;

        var scoreLabel = new cc.LabelTTF("Score","arial",20);
        scoreLabel.x = 0;
        scoreLabel.y = levelLabel.y;
        scoreLabel.setColor(CL.HOME.LABEL);
        this.addChild(scoreLabel);

        var scoreText = new cc.LabelTTF("0","arial",20);
        scoreText.x = scoreLabel.x;
        scoreText.y = levelText.y;
        scoreText.setColor(CL.HOME.LABEL);
        this.addChild(scoreText);
        this.scoreText = scoreText;

        var stepLabel = new cc.LabelTTF("Step","arial",20);
        stepLabel.x = GF.w_2 - 40;
        stepLabel.y = levelLabel.y;
        stepLabel.setColor(CL.HOME.LABEL);
        this.addChild(stepLabel);
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
        this.schedule(this.update, 0.05);
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