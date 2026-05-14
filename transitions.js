//to be added into the scene file, for transitions between levels and win screen

slugLevelWin() {
    this.newMessage = this.add.text("That's good work!");
    textTransition();
}

slugLevelLoss() {
    this.newMessage = this.add.text("Watch out for snails!");
    textTransition();
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