import * as PIXI from 'pixi.js';
import { range } from './random';

const SIZE = 40;
const SPEED = 3;
const SPIN_SPEED = 0.05;

export default class {
  constructor(viewport) {
    this.target = new PIXI.Sprite(PIXI.Texture.WHITE);
    this.target.tint = 0;
    this.target.width = SIZE;
    this.target.height = SIZE;
    this.target.anchor.set(0.5);
    this.target.position.set(viewport.worldWidth / 2, viewport.worldHeight / 2);
    viewport.addChild(this.target);
    this.viewport = viewport;
  }

  start() {
    this.active = true;
    this.last = Date.now();
    this.changeTarget();
  }

  update() {
    if (this.active) {
      this.target.rotation += SPIN_SPEED;
      this.target.x += this.velocity[0];
      this.target.y += this.velocity[1];
      const now = Date.now();
      this.time -= now - this.last;
      this.last = now;
      if (this.time <= 0) {
        this.changeTarget();
      }
    }
  }

  changeTarget() {
    const x = range(SIZE / 2, this.viewport.worldWidth - SIZE / 2);
    const y = range(SIZE / 2, this.viewport.worldHeight - SIZE / 2);
    const angle = Math.atan2(y - this.target.y, x - this.target.x);
    this.velocity = [Math.cos(angle) * SPEED, Math.sin(angle) * SPEED];
    this.time = Math.sqrt(Math.pow(x - this.target.x, 2) + Math.pow(y - this.target.y, 2)) / ((SPEED * 60) / 1000);
  }

  isDirty() {
    return this.active;
  }
}
