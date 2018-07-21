import { Fighter } from './fighter';

export class ImprovedFighter extends Fighter {
  /**
   * @param {String} name
   * @param {Number} power
   * @param {Number?} health
   */
  constructor(name, power, health = 100) {
    super(name, power, health);
  }

  /**
   * @param {Fighter} enemy 
   * @param {Number} point 
   */
  doubleHit(enemy, point) {
    this.hit(enemy, point * 2);
  }
}