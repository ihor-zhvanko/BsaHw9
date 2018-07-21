import { log, delay } from './my-utils';

import { Fighter } from './fighter';
import { ImprovedFighter } from './improved-fighter';
import { fight } from './fight';

let fighter = new Fighter('Tor', 10);
let improvedFighter = new ImprovedFighter('Tanos', 10);

let points = [1, 2, 3, 3, 2, 1];

window.onload = () => {
  log(`
    Fighter: ${fighter.name}  |
    Power:   ${fighter.power} |
    Health:  ${fighter.health}
  `);
  log(`
    Improved fighter: ${improvedFighter.name}  |
    Power:            ${improvedFighter.power} |
    Health:           ${improvedFighter.health}
  `);
  log(`Points ${points}`);

  delay(1000);

  log(`Fight!`);

  fight(fighter, improvedFighter, ...points);

}