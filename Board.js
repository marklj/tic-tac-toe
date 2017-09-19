"use strict";

module.exports = class Board {

    constructor(size) {
        this.size = size;
        this.board = new Array();
        for(let y = 0; y < size; y++) {
            this.board[y] = new Array();
            for(let x = 0; x < size; x++) {
                this.board[y][x] = null;
            }
        }
    }

    getBoard() {
        return this.board;
    }

    markSpace(x, y, marker) {
        if(!(x < this.size && y < this.size && x >= 0 && y >= 0)) {
            console.error(`Invalid space selected at (${x}, ${y})`);
            return;
        }
        if(this.board[y][x] != null) {
            console.error(`Space is already occupied at (${x}, ${y})`);
            return;
        }
        this.board[y][x] = marker;        
    }

    checkIfWinner(marker) {
        return this._checkDiag(marker) || this._checkStraight(marker);
    }

    _checkStraight(marker) {
        let matchX = true;
        let matchY = true;
        let current = 0;

        while((matchX || matchY) && current < this.size) {
            if(this.board[0][current] != marker) {
                matchY = false;
            }
            if(this.board[current][0] != marker) {
                matchX = false;
            }
            current++
        }

        return matchX || matchY;        
    }

    _checkDiag(marker) {
        let matchL = true;
        let matchR = true;
        let current = 0;

        while((matchL || matchR) && current < this.size) {
            if(this.board[current][current] != marker) {
                matchL = false;
            }
            if(this.board[this.size-current-1][current] != marker) {
                matchR = false;
            }
            current++;
        }

        return matchL || matchR;
    }
}

