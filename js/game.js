import { Spy } from "./spy.js";
import { Knight } from "./knight.js";
class Game {
    constructor() {
        this.knight = [];
        this.characters = [];
        console.log("Game was created!");
        this.knightCount = 5;
        for (let i = 0; i < this.knightCount; i++) {
            this.createKnight();
        }
        this.spy = new Spy("spy");
        this.displayLives();
        this.displayScore();
        this.gameLoop();
    }
    gameLoop() {
        for (let i = 0; i < this.characters.length; i++) {
            this.characters[i].update();
            if (this.checkCollision(this.characters[i].getRectangle(), this.spy.getRectangle())) {
                this.killKnight(i);
                this.createKnight();
                this.spy.lives--;
                this.updateLives();
                console.log(`lives = ${this.spy.lives}`);
                if (this.spy.lives == 0) {
                    console.log("Game Over!");
                    location.href = "gameOver.html";
                }
            }
            if (this.characters[i].isOutsideView()) {
                this.killKnight(i);
                this.spy.score++;
                this.updateScore();
            }
        }
        if (this.characters.length === 0) {
            this.knightCount++;
            for (let i = 0; i < this.knightCount; i++) {
                this.createKnight();
            }
        }
        this.spy.update();
        requestAnimationFrame(() => this.gameLoop());
    }
    displayLives() {
        this.lives = document.createElement('lives');
        document.body.appendChild(this.lives);
        this.lives.textContent = `${this.spy.lives} lives left`;
    }
    updateLives() {
        this.lives.textContent = `${this.spy.lives} lives left`;
    }
    updateScore() {
        this.score.textContent = `${this.spy.score} points scored`;
    }
    displayScore() {
        this.score = document.createElement('score');
        document.body.appendChild(this.score);
        this.score.textContent = `${this.spy.score} points scored`;
    }
    createKnight() {
        this.characters.push(new Knight("knight"));
    }
    killKnight(i) {
        this.characters[i].killKnight();
        this.characters.splice(i, 1);
    }
    checkCollision(a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    }
}
new Game();
//# sourceMappingURL=game.js.map