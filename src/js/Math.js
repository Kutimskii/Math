import Character from './Character';

export default class MathAttack extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
  }

  getAttack(cell) {
    this.attack *= (1 - ((cell - 1) / 10));

    if (this.stoned) {
      this.attack -= (Math.log2(cell) * 5);
    }
    return this.attack;
  }

  setAttack(value) {
    this.attack = value;
  }

  getStoned() {
    return this.stoned;
  }

  setStoned(state) {
    this.stoned = state;
  }
}
