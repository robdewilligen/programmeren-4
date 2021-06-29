export class Characters {
    constructor(tagName) {
        this._x = 0;
        this.y = 0;
        this.create(tagName);
    }
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
    }
    getRectangle() {
        return this.div.getBoundingClientRect();
    }
    create(tagName) {
        this.div = document.createElement(tagName);
        document.body.appendChild(this.div);
    }
    update() {
        this.div.style.transform = `translate(${this._x}px, ${this.y}px)`;
    }
    isOutsideView() {
        return this.x + this.div.clientWidth < 0;
    }
    killKnight() {
        this.div.remove();
    }
}
//# sourceMappingURL=characters.js.map