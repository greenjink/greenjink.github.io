var time, exp, hp_max, hp, energy, speed, update_delay, cursors, time_value, energy_value, exp_value, text_style_small, text_style_large;

var Game = {

    preload : function() {
        // this will probably get huge? make its own file with progress bar? (https://github.com/MattMcFarland/phaser-menu-system)
        game.load.image('test_img', './assets/images/test_img.png');
        game.load.image('test_char', './assets/images/test_char.png');
        game.load.spritesheet('test_char_anim', './assets/images/test_char_sheet.png', 189, 389);
    },

    create : function() {
        time = 0;
        speed = 0;
        energy = 0;
        exp = 0;
        hp_max = 10;
        hp = hp_max;
        update_counter = 0;

        // phaser controller for keyboard input
        cursors = game.input.keyboard.createCursorKeys();

        game.stage.backgroundColor = '#dadada';

        text_style_small = { font: "bold 14px sans-serif", fill: "#947e64", align: "center" };
        text_style_large = { font: "bold 18px sans-serif", fill: "#ff9141", align: "center" };
        
        game.add.text(230, 20, "exp", text_style_small);
        exp_value = game.add.text(270, 18, exp.toString(), text_style_large);
        game.add.text(70, 20, "energy", text_style_small);
        energy_value = game.add.text(130, 18, energy.toString(), text_style_large);
        
        var but_1 = this.add.button(50, 100, 'button', this.gain_exp, this, 1, 0, 2);
        var but_2 = this.add.button(50, 150, 'button', this.energy_tick, this, 1, 0, 2);
        var but_3 = this.add.button(50, 200, 'button', this.floating_text, this, 1, 0, 2);
        but_3.events.onInputDown.add(function(){this.floating_text(300, 300, 'testing event')}, this);
        
        var char = game.add.sprite(580, 200, 'test_char_anim');
        var char_idle = char.animations.add('char_idle');
        char.animations.play('char_idle', 12, true);
        
        game.time.events.loop(1000, this.energy_tick, this);
    },

    update : function() {
        time += 1;
        //time_value.text = time;
        //if(time >= 1000) { this.reset_time(); }
    },
    
    reset_time : function() {
        time = 0;
    },
    
    energy_tick : function() {
        energy++;
        energy_value.text = energy;
    },
    
    gain_exp : function() {
        fx.play('click0');
        if(energy >= 10) {
            //
            exp += Math.floor((Math.random() * (10 - 1)) + 1);
            exp_value.text = exp;
            energy -= 10; energy_value.text = energy;
        }
    },
    
    get_random : function(min, max) {
        Math.floor((Math.random() * (max - min)) + min);
    },
    
    floating_text : function(pos_x, pos_y, text) {
        var txt = game.add.text(pos_x, pos_y, text, text_style_small);
        //game.time.events.add(1000, txt.destroy(), this)
        // move text
        //
        
    }
};