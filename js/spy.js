import { Characters } from "./characters.js";
export class Spy extends Characters {
    constructor(tagName) {
        super(tagName);
        this.verticalSpeed = 0;
        this.lives = 5;
        this.score = 0;
        console.log("Spy was created!");
        window.addEventListener("keyup", (e) => this.onKeyUp(e));
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
        this.x = 100;
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
    }
    update() {
        this.y += this.verticalSpeed;
        if (this.y + this.div.clientHeight > window.innerHeight + 80) {
            this.y = -80;
        }
        if (this.y + this.div.clientHeight < 0) {
            this.y = window.innerHeight - 20;
        }
        super.update();
    }
    onKeyDown(e) {
        switch (e.key) {
            case "ArrowUp":
                console.log(e.key);
                this.verticalSpeed = -5;
                break;
            case "ArrowDown":
                console.log(e.key);
                this.verticalSpeed = 5;
                break;
            default:
                break;
        }
    }
    onKeyUp(e) {
        if (e.key == "ArrowUp" || e.key == "ArrowDown") {
            this.verticalSpeed = 0;
        }
    }
}
//# sourceMappingURL=spy.js.map