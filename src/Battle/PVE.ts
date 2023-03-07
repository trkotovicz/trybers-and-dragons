import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(player: Fighter, private monsters: Fighter[] | SimpleFighter[]) {
    super(player);
  }

  fight(): number {
    if (
      this.player.lifePoints > 0
      && this.monsters.every((monster) => monster.lifePoints > 0)) {
      this.monsters.forEach((monster) => this.player.attack(monster));
      this.monsters.forEach((monster) => monster.attack(this.player));
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}