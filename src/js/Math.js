import Character from './Character';

export default class MathAttack extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
  }

  getAttack() {
    return this.attack;
  }

  setAttack(cell) {
    this.attack *= (1 - ((cell - 1) / 10));
  }

  getStoned() {
    return this.stoned;
  }

  setStoned(cell) {
    this.stoned = this.attack - (Math.log2(cell) * 5);
    this.attack = this.stoned;
  }
}
