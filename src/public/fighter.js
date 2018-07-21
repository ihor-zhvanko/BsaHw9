import { log } from './my-utils';

export class Fighter {
  /**
   * @param {String} name
   * @param {Number} power
   * @param {Number?} health
   */
  constructor(name, power, health = 100) {
    this._name = name;
    this._power = power;
    this._health = health;
  }

  /**  @returns {String} */
  get name() { return this._name; }

  /**  @returns {Number} */
  get power() { return this._power; }
  /**
   * @param {Number} power
   * @returns {Number}
   */
  set power(power) { this._power = power; }

  /**  @returns {Number} */
  get health() { return this._health; }
  /**
   * @param {Number} health
   * @returns {Number}
   */
  set health(health) { this._health = health; }

  /**
   * @param {Number} damage 
   */
  setDamage(damage) {
    this.health -= damage;
    log(`${this.name} health: ${this.health}`);
  }

  /**
   * @param {Fighter} enemy 
   * @param {Number} point 
   */
  hit(enemy, point) {
    let damage = this.power * point;
    enemy.setDamage(damage);
  }

  /**
   * @returns {Promise<void>}
   */
  knockout() {
    return new Promise((resolve, reject) => {
      setTimeout(() => { log(`time is over. ${this.name} lost`); resolve(); }, 500);
    });
  }
}