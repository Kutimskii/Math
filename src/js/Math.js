import Character from './Character';

export default class MathAttack extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
  }

  getAttack() {
    this.attack *= (1 - ((this.cell - 1) / 10));

    if (this.stoned) {
      this.attack -= (Math.log2(this.cell) * 5);
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

  getCell() {
    return this.cell;
  }

  setCell(value) {
    this.cell = value;
  }
}
