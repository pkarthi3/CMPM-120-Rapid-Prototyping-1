class SlugLevel extends Phaser.Scene {
    constructor() {
        super('slugLevel');
    }
    
    preload() {}

    create() {
        this.add.text(100, 100, "gameplay: 2 slugs");
        
        this.input.keyboard.on('keydown-W', (event) => {
            this.slugLevelWin();
        });

        this.input.keyboard.on('keydown-L', (event) => {
            this.slugLevelLoss();
        });
    }
    
    update() {}

    slugLevelWin() {
        this.newMessage = this.add.text(0, 0, "That's good work!");
        this.newMessage.setDepth(1);
        this.newMessage.setColor('#b3f7ce');
        this.newMessage.setFontSize(40);  
        this.newMessage.setFontFamily('Arial');  
        this.newMessage.setPosition(this.cameras.main.width*0.5 - this.newMessage.width/2, this.cameras.main.height*0.2);

        this.textTransition();
    }

    slugLevelLoss() {
        this.newMessage = this.add.text(0, 0,"Watch out for slugs!");
        this.newMessage.setDepth(1);
        this.newMessage.setColor('#b3f7ce');
        this.newMessage.setFontSize(40);  
        this.newMessage.setFontFamily('Arial');
        this.newMessage.setPosition(this.cameras.main.width*0.5 - this.newMessage.width/2, this.cameras.main.height*0.2);

        this.textTransition();
    }

    textTransition() {
        this.tweens.add({
                targets: this.newMessage,
                alpha: { from: 1, to: 0 },
                easing: 'Quintic.in',
                duration: 3000        
            });
    }

    sceneTransition() {
        this.cameras.main.fade(1000, 0, 0, 0);
    }
}

class SnailLevel extends Phaser.Scene {

    constructor() {
        super('snailLevel');
    }

    preload() {

    }
    create() {
        this.add.text(400, 300, "gameplay: two snails");
        this.input.keyboard.on('keydown-W', () => {
            snailLevelWin();
        });
        this.input.keyboard.on('keydown-L', () => {
            snailLevelLoss();
        });
        
        
        
    }
    update() {

    }

    snailLevelWin() {
        this.newMessage = this.add.text(100, 100, "Good job!");
        this.textTransition();
    }

    snailLevelLoss() {
        this.newMessage = this.add.text(100, 100, "Watch out for snails!");
        this.textTransition();
    }

    textTransition() {
        this.tweens.add({
                targets: this.newMessage,
                alpha: { from: 1, to: 0 },
                easing: 'Quintic.in',
                duration: 3000        
            });
    }

    sceneTransition() {
        this.cameras.main.fade(1000, 0, 0, 0);
    }
}


let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [ SlugLevel, SnailLevel ]
}

let game = new Phaser.Game(config);