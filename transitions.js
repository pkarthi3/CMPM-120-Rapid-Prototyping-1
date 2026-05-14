class Title extends Phaser.Scene {
    constructor() {
        super('title');
    }

    preload() {}

    create() {
        this.add.text(100, 100, "title screen: game title/illustration, indicator to click to continue");
        this.input.once('pointerdown', () => {
            this.sceneTransition();
            this.time.delayedCall(1000, () => {
                this.scene.start('slugLevel');
            });
        });
    }

    update() {}

    sceneTransition() {
        this.cameras.main.fade(1000, 0, 0, 0);
    }
}


class SlugLevel extends Phaser.Scene {
    constructor() {
        super('slugLevel');
    }
    
    preload() {}

    create() {
        this.newMessage = this.add.text(0, 0, "Watch out for slugs!");
        this.newMessage.setDepth(1);
        this.newMessage.setColor('#b3f7ce');
        this.newMessage.setFontSize(40);  
        this.newMessage.setFontFamily('Arial');  
        this.newMessage.setPosition(this.cameras.main.width*0.5 - this.newMessage.width/2, this.cameras.main.height*0.2);
        this.textTransition();


        this.add.text(100, 50, "gameplay: 2 slugs\nW to simulate win, L for loss");
        
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
        
        this.time.delayedCall(2000, () => {
            this.sceneTransition();
            this.scene.start('snailLevel');
        });
    }

    slugLevelLoss() {
        this.newMessage = this.add.text(0, 0,"Watch out for slugs!");
        this.newMessage.setDepth(1);
        this.newMessage.setColor('#b3f7ce');
        this.newMessage.setFontSize(40);  
        this.newMessage.setFontFamily('Arial');
        this.newMessage.setPosition(this.cameras.main.width*0.5 - this.newMessage.width/2, this.cameras.main.height*0.2);

        this.textTransition();
        this.sceneTransition();

        this.scene.start('slugLevel');
    }

    textTransition() {
        this.tweens.add({
                targets: this.newMessage,
                alpha: { from: 1, to: 0 },
                easing: 'Quintic.in',
                duration: 2000        
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
        this.add.text(100, 50, "gameplay: two snails\nW to simulate win, L for loss");

        this.newMessage = this.add.text(100, 100, "Watch out for snails!");
        this.newMessage.setDepth(1);
        this.newMessage.setColor('#b3f7ce');
        this.newMessage.setFontSize(40);  
        this.newMessage.setFontFamily('Arial');
        this.newMessage.setPosition(this.cameras.main.width*0.5 - this.newMessage.width/2, this.cameras.main.height*0.2);
        this.textTransition();

        this.input.keyboard.on('keydown-W', () => {
            this.snailLevelWin();
        });
        this.input.keyboard.on('keydown-L', () => {
            this.snailLevelLoss();
        });
        
        
        
    }
    update() {

    }

    snailLevelWin() {
        this.newMessage = this.add.text(100, 100, "Good job!");
        this.newMessage.setDepth(1);
        this.newMessage.setColor('#b3f7ce');
        this.newMessage.setFontSize(40);  
        this.newMessage.setFontFamily('Arial');
        this.newMessage.setPosition(this.cameras.main.width*0.5 - this.newMessage.width/2, this.cameras.main.height*0.2);
        this.textTransition();
        this.sceneTransition();

        this.scene.start('finalLevel');
    }

    snailLevelLoss() {
        this.newMessage = this.add.text(100, 100, "Watch out for snails!");
        this.newMessage.setDepth(1);
        this.newMessage.setColor('#b3f7ce');
        this.newMessage.setFontSize(40);  
        this.newMessage.setFontFamily('Arial');
        this.newMessage.setPosition(this.cameras.main.width*0.5 - this.newMessage.width/2, this.cameras.main.height*0.2);
        this.textTransition();
        this.sceneTransition();

        this.scene.start('snailLevel');
    }

    textTransition() {
        this.tweens.add({
                targets: this.newMessage,
                alpha: { from: 1, to: 0 },
                easing: 'Quintic.in',
                duration: 2000        
            });
    }

    sceneTransition() {
        this.cameras.main.fade(1000, 0, 0, 0);
    }
}

class FinalLevel extends Phaser.Scene {
    constructor() {
        super('finalLevel');
    }

    preload() {}
    create() {
        this.newMessage = this.add.text(100, 100, "This is the last level!");
        this.newMessage.setDepth(1);
        this.newMessage.setColor('#b3f7ce');
        this.newMessage.setFontSize(40);  
        this.newMessage.setFontFamily('Arial');
        this.newMessage.setPosition(this.cameras.main.width*0.5 - this.newMessage.width/2, this.cameras.main.height*0.2);
        this.textTransition();

        this.add.text(100, 50, "gameplay: 3 obstacles, mix of slugs/snails\nW to simulate win, L for loss");

         this.input.keyboard.on('keydown-W', () => {
            this.sceneTransition();
            this.time.delayedCall(2000, () =>{
                this.scene.start('victory');
            })
         });
        this.input.keyboard.on('keydown-L', () => {
            this.finalLevelLoss();
        });
    }
    update() {}

    finalLevelLoss() {
        this.newMessage = this.add.text(100, 100, "This is the last level!");
        this.newMessage.setDepth(1);
        this.newMessage.setColor('#b3f7ce');
        this.newMessage.setFontSize(40);  
        this.newMessage.setFontFamily('Arial');
        this.newMessage.setPosition(this.cameras.main.width*0.5 - this.newMessage.width/2, this.cameras.main.height*0.2);
        this.textTransition();

        this.scene.start('finalLevel');
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

class Victory extends Phaser.Scene {
    constructor() {
        super('victory');
    }
    
    preload() {}
    
    create() {
        this.newMessage = this.add.text(100, 100, "The roly poly gets a badge!");
        this.newMessage.setDepth(1);
        this.newMessage.setColor('#b3f7ce');
        this.newMessage.setFontSize(40);  
        this.newMessage.setFontFamily('Arial');
        this.newMessage.setPosition(this.cameras.main.width*0.5 - this.newMessage.width/2, this.cameras.main.height*0.2);
        this.textTransition();

        this.add.text(25, 300, "victory screen: roly poly gets badge, indicator to click to return to title");

        this.input.once('pointerdown', () => {
            this.sceneTransition();
            this.time.delayedCall(1000, () => {
                this.scene.start('title');
            });
        });
    }

    update() {}

    textTransition() {
        this.tweens.add({
            targets: this.newMessage,
            alpha: { from: 1, to: 0 },
            easing: 'Quintic.in',
            duration: 2000        
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
    scene: [ Title, SlugLevel, SnailLevel, FinalLevel, Victory ]
}

let game = new Phaser.Game(config);