//require('pixi.js');
//require('p2');
//require('phaser');
var GameState={
    preload:function(){
      //  game.load.spritesheet('anime','assets/spritestrip.png',1536,256,6);
this.load.image('backgrnd','assets/spritestrip.png');
    },
    create :function () {
//this.anime=game.add.sprite(100,150,"anime");
  this.background=this.game.add.sprite(0,0,'background')  },
    update:function(){},
};

var game=new Phaser.Game(640,360,Phaser.AUTO);
game.state.add('GameState',GameState);
game.state.start('GameState');