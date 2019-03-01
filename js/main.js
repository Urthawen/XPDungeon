/**
 * Created by Jerome Renaux (jerome.renaux@gmail.com) on 25-02-18.
 */
var config = {
    type: Phaser.AUTO,
    width: 16*35,
    height: 16*35,
    parent: 'game',
    scene: [Game]
};

var game = new Phaser.Game(config);
