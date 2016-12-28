
var StartBtnLayer = cc.Layer.extend({

    startBtn:null,
    next : null,

    ctor: function (next) {
        this._super();

        this.next = next;
        var menuItem = new cc.MenuItemImage(res.start_btn01_png,res.start_btn02_png,this.startGame,this);
        var menu = new cc.Menu(menuItem);

        menu.attr({
            x: 0,
            y: 0
        });

        this.startBtn = menu;

        this.addChild(menu);
    },
    
    update: function () {

    },

    changeImage:function () {

    },
    
    startGame: function () {
        this.next();
    }

});