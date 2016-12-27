var PlayerSprite = cc.Sprite.extend({

    playerState:PLAYER.STATE.NORMAL,
    blood:PLAYER.BLOOD,
    speed:PLAYER.SPEED,
    score:PLAYER.SCORE,
    invicible:PLAYER.INVICIBLE,


    /*
       根据状态生成不同的player sprite
     */
    ctor: function () {
        this._super();

        // this.playerState = playerState;
    },

    hurt: function () {
        this.blood -= PLAYER.HURT;
        if (this.blood <= 0) {
            this.over();
        }
    },

    reset: function() {
        this.blood = PLAYER.BLOOD;
        this.score = PLAYER.SCORE;
        this.speed = PLAYER.SPEED;
        this.playerState = PLAYER.STATE.NORMAL;
    },
    
    over: function () {
        this.blood = 0;
        this.playerState = PLAYER.STATE.FAIL;
    }

});