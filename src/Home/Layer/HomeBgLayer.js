var HomeBgLayer = cc.Layer.extend({

    levelText:null,
    scoreText:null,
    stepText:null,

    ctor:function () {
        this._super();

        var sprite = new cc.Sprite(res.HomeBg_jpg);
        sprite.attr({
            x: GF.w_2,
            y: GF.h_2
        });

        this.addChild(sprite, 0);

        var levelLabel = new cc.LabelTTF('Level',"arial",20);
        levelLabel.x = 40;
        levelLabel.y = GF.h - 20;
        levelLabel.setColor(CL.HOME.LABEL);
        this.addChild(levelLabel);

        var levelText = new cc.LabelTTF('1',"arial",20);
        levelText.x = 40;
        levelText.y = levelLabel.y - 25;
        levelText.setColor(CL.HOME.LABEL);
        this.addChild(levelText);
        this.levelText = levelText;

        var scoreLabel = new cc.LabelTTF("Score","arial",20);
        scoreLabel.x = GF.w_2;
        scoreLabel.y = levelLabel.y;
        scoreLabel.setColor(CL.HOME.LABEL);
        this.addChild(scoreLabel);

        var scoreText = new cc.LabelTTF("0","arial",20);
        scoreText.x = GF.w_2;
        scoreText.y = levelText.y;
        scoreText.setColor(CL.HOME.LABEL);
        this.addChild(scoreText);
        this.scoreText = scoreText;

        var stepLabel = new cc.LabelTTF("Step","arial",20);
        stepLabel.x = GF.w - 30;
        stepLabel.y = levelLabel.y;
        stepLabel.setColor(CL.HOME.LABEL);
        this.addChild(stepLabel);

        return true;
    }
});