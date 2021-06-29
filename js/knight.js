import { Characters } from "./characters.js";
export class Knight extends Characters {
    constructor(tagName) {
        super(tagName);
        console.log("Knight was created!");
        this.x = window.innerWidth + Math.floor(Math.random() * this.div.clientWidth);
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
    }
    update() {
        this.x -= 3;
        super.update();
    }
    killKnight() {
        this.div.remove();
    }
}
//# sourceMappingURL=knight.js.map