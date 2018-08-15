!function (r) {
    var t = {};

    function e(i) {
        if (t[i]) return t[i].exports;
        var n = t[i] = {i: i, l: !1, exports: {}};
        return r[i].call(n.exports, n, n.exports, e), n.l = !0, n.exports
    }

    e.m = r, e.c = t, e.d = function (r, t, i) {
        e.o(r, t) || Object.defineProperty(r, t, {enumerable: !0, get: i})
    }, e.r = function (r) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(r, "__esModule", {value: !0})
    }, e.t = function (r, t) {
        if (1 & t && (r = e(r)), 8 & t) return r;
        if (4 & t && "object" == typeof r && r && r.__esModule) return r;
        var i = Object.create(null);
        if (e.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: r
        }), 2 & t && "string" != typeof r) for (var n in r) e.d(i, n, function (t) {
            return r[t]
        }.bind(null, n));
        return i
    }, e.n = function (r) {
        var t = r && r.__esModule ? function () {
            return r.default
        } : function () {
            return r
        };
        return e.d(t, "a", t), t
    }, e.o = function (r, t) {
        return Object.prototype.hasOwnProperty.call(r, t)
    }, e.p = "", e(e.s = 0)
}([function (r, t, e) {
    var i = e(1), n = e(2);
    var o = new function () {
        this.board = document.querySelectorAll("#board div"), this.furry = new i, this.coin = new n, this.score = 0, this.index = function (r, t) {
            return r + 10 * t
        }, this.showFurry = function () {
            this.board[this.index(this.furry.x, this.furry.y)].classList.add("furry")
        }, this.showCoin = function () {
            this.board[this.index(this.coin.x, this.coin.y)].classList.add("coin")
        }, this.startGame = function () {
            self = this, this.idSetInterval = setInterval(function () {
                self.moveFurry()
            }, 250)
        }, this.moveFurry = function () {
            "right" === this.furry.direction ? this.furry.x += 1 :
                "down" === this.furry.direction ? this.furry.y += 1 :
                    "left" === this.furry.direction ? this.furry.x -= 1 :
                        "up" === this.furry.direction && (this.furry.y -= 1),
            this.gameOver() || (this.hideVisibleFurry(),
                this.showFurry(),
                this.checkCoinCollision())
        }, this.hideVisibleFurry = function () {
            document.querySelector(".furry").classList.remove("furry")
        }, document.addEventListener("keydown", function (r) {
            o.turnFurry(r)
        }), this.turnFurry = function (r) {
            switch (r.which) {
                case 37:
                    this.furry.direction = "left";
                    break;
                case 38:
                    this.furry.direction = "up";
                    break;
                case 39:
                    this.furry.direction = "right";
                    break;
                case 40:
                    this.furry.direction = "down";
                    break;
                default:
                    console.log("Zły klawisz..")
            }
        },
            this.checkCoinCollision = function () {
            this.furry.x === this.coin.x && this.furry.y === this.coin.y && (document.querySelector(".coin").classList.remove("coin"),
                o.score += 1,
                document.querySelector("strong").innerText = o.score.toString(),
                this.coin = new n, o.showCoin())
        },
            this.gameOver = function () {
            if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9)
                return this.hideVisibleFurry(),
                    window.clearInterval(this.idSetInterval),
                    console.log("wszedlem"),
                    document.querySelectorAll("section").forEach(function (r) {
                r.parentNode.removeChild(r)
            }), document.querySelector(".gameOver").style.display = "flex",
                    document.querySelector(".score h1").innerText = "Score: " + o.score.toString(), !0
        }
    };
    o.showFurry(), o.showCoin(), o.startGame()
}, function (r, t) {
    r.exports = function () {
        this.x = 0, this.y = 0, this.direction = "right"
    }
}, function (r, t) {
    r.exports = function () {
        this.x = Math.floor(10 * Math.random()), this.y = Math.floor(10 * Math.random())
    }
}]);