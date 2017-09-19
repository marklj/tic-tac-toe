(function() {
    "use strict";

    const Board = require('./Board');    
    const Player = require('./Player');    

    let board = new Board(3);
    const playerX = new Player('x');
    const playerO = new Player('o');

    board.markSpace(0, 0, playerX.marker);
    board.markSpace(0, 1, playerX.marker);
    board.markSpace(0, 2, playerX.marker);

    console.log(board.checkIfWinner('x'))
    
})();

