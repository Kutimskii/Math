import MathAttack from './Math';

export default class Magician extends MathAttack {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 10;
    this.defence = 40;
  }
}
