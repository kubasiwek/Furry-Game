var Furry = function () {
    this.x = 0;
    this.y = 0;
    this.direction = "right";
}

var Coin = function () {
    this.x = Math.floor(Math.random() * 10);
    this.y = Math.floor(Math.random() * 10);
}

var Game = function () {
    this.board = document.querySelectorAll('#board div');
    this.furry = new Furry();
    this.coin = new Coin();
    this.score = 0;
    this.finished = false;

    this.index = function (x, y) {
        return x + (y * 10);
    }

    this.showFurry = function () {
        this.hideVisibleFurry();
        this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
    }

    this.showCoin = function () {
        this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
    }

    this.startGame = function () {
        self = this;
        this.idSetInterval = setInterval(function () {
                self.moveFurry()
            }, 250
        );
    }

    this.moveFurry = function () {
        if (this.furry.direction === "right") {
            this.furry.x = this.furry.x + 1;
        }
        else if (this.furry.direction === "left") {
            this.furry.x = this.furry.x - 1;
        }
        else if (this.furry.direction === "up") {
            this.furry.y = this.furry.y - 1;
        }
        else if (this.furry.direction === "down") {
            this.furry.y = this.furry.y + 1;
        }
        this.gameOver();
        if (this.finished === false) {
            this.showFurry();
            this.checkCoinColission();
        }

    }
    this.hideVisibleFurry = function () {
        this.hiding = document.querySelector('.furry');
        if (this.hiding !== null) {
            this.hiding.classList.remove('furry');
        }
    }

    this.turnFurry = function () {
        switch (event.which) {
            case 37:
                this.furry.direction = 'left';
                break;
            case 38:
                this.furry.direction = 'up';
                break;
            case 39:
                this.furry.direction = 'right';
                break;
            case 40:
                this.furry.direction = 'down';
                break;
        }
    }

    this.checkCoinColission = function () {
        if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {
            this.dollar = document.querySelector('.coin');
            this.dollar.classList.remove('coin');
            this.score += 1;
            this.scoresheet = document.querySelector('#score strong');
            this.scoresheet.innerText = this.score;
            this.coin = new Coin();
            this.showCoin();
        }
    }

    this.gameOver = function () {
        if ((this.furry.x > 9) || (this.furry.y > 9) || (this.furry.x < 0) || (this.furry.y < 0)) {
            this.finished = true;
            return window.clearInterval(this.idSetInterval),
                this.hideVisibleFurry(),
                document.getElementById('over').classList.remove("invisible");
        }

    }
    this.start = function(){
        this.showCoin();
        this.showFurry();
        this.startGame();
    }
}

var game = new Game();
game.start();
// game.showCoin();
// game.showFurry();
// game.startGame();

document.addEventListener('keydown', function (event) {
    game.turnFurry();
})