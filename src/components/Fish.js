import { Sprite, Texture } from 'pixi.js-legacy';
import gsap from 'gsap';

export default class Fish extends Sprite {
    constructor() {
        super();
        // Add textures
        this._texSmall = Texture.from('small');
        this._texBig = Texture.from('big');

        this.texture = this._texSmall;

        this.name = "fish";
        this.interactive = true;
        // Mouse becomes pointer because of this mode
        this.buttonMode = true;
        this.anchor.set(0.5);

        this._scaleFactor = 1.5;
        this._animSpeedExpand = 1000;
        this._animSpeedContract = 1000;

        const timeOut = 5000 - this._animSpeedContract;
        this.on("click", () => {
            this.expand();
            setTimeout(() => this.contract(), timeOut);
        });
    }

    /*
     * Expands Fish 
     */
    expand() {
        this.texture = this._texBig;
        let inSeconds = this._animSpeedExpand / 1000;
        gsap.to(this.scale, { x: this._scaleFactor, y: this._scaleFactor, duration: inSeconds, ease: 'elastic' });
    }

    /*
    * Contracts Fish
    */
    contract() {
        let inSeconds = this._animSpeedContract / 1000;
        gsap.to(this.scale, { x: 1, y: 1, duration: inSeconds, ease: 'elastic'});
        this.texture = this._texSmall;
    }
}