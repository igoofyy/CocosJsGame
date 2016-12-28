
var PLAYER = PLAYER || {};

PLAYER.BLOOD = 200; //血量

PLAYER.HURT = 20; //每次伤害 20

PLAYER.INVICIBLE = false; //是否无敌

PLAYER.SCORE = 0; //分数

PLAYER.SPEED = 10; //移动速度

// 游戏Sprite的状态
PLAYER.STATE = {
    NORMAL  : 1,
    SUCCESS : 2,
    FAIL    : 3,
};