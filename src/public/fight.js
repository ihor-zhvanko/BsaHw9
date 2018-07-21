import { delay } from './my-utils';

/**
 * @param {Fighter} fighter 
 * @param {ImprovedFighter} improvedFighter 
 * @param {Array<Number>} points 
 */
async function fight(fighter, improvedFighter, ...points) {
  for (let point of points) {
    fighter.hit(improvedFighter, point);

    if (improvedFighter.health <= 0) {
      return await fighter.knockout();
    }

    await delay(1000);

    improvedFighter.hit(fighter, point);

    if (fighter.health <= 0) {
      return await improvedFighter.knockout();
    }

    await delay(1000);
  }
}

export { fight };