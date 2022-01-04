import { Sprite } from 'pixi.js-legacy';
import Scene from './Scene';
import gsap from 'gsap';
import Fish from '../components/Fish';

export default class Play extends Scene {
  async onCreated() {

    const fish = new Fish();
    this.addChild(fish);
  }

  /**
   * Hook called by the application when the browser window is resized.
   * Use this to re-arrange the game elements according to the window size
   *
   * @param  {Number} width  Window width
   * @param  {Number} height Window height
   */
  onResize(width, height) { // eslint-disable-line no-unused-vars

  }
}
