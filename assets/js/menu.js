var click0, title, move;

var Menu = {

    preload : function() {
        // load resources, these are global scope apparently?
        game.load.spritesheet('button', './assets/images/button0.png', 148, 37 );
        game.load.audio('sfx', './assets/sfx/click2.mp3');
    },

    create : function () {
        var text_style_button = { font: "bold 12px sans-serif", fill: "#753115", align: "center" };
        var text_style_title = { font: "bold 28px sans-serif", fill: "#ffba62", align: "center" };
        
        var start_button = this.add.button(580, 400, 'button', this.startGame, this, 1, 0, 2);
        var option_button = this.add.button(580, 440, 'button', null, this, 1, 0, 2);

        game.add.text(start_button.x+58, start_button.y+10, "start", text_style_button);
        game.add.text(option_button.x+54, option_button.y+10, "options", text_style_button);
        
        title = game.add.text(620, 340, "glow", text_style_title);
        move = false;
        game.time.events.loop(50, this.effect_title, this);
        
        game.stage.backgroundColor = '#dedede';
        
        fx = game.add.audio('sfx');
        fx.addMarker('click0', 0, 1);
    },

    startGame : function () {
        fx.play('click0');
        this.state.start('Game');
    },
    
    effect_title : function() {
        if(!move){
            title.x += Math.random() * 2;
            title.y += Math.random() * 2;
            move = true;
        }
        else{
            title.x = 620; title.y = 340;
            move = false;
        }
    }

};