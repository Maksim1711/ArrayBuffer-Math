import Character from './Character';

export default class MathCharacter extends Character {
  constructor(name, type) {
    super(name, type);
    this.distance = 1;
  }

  get attack() {
    let calcAttack = Math.round(this.setAttack * (1.1 - 0.1 * this.distance));
    if (this.setStoned) {
      calcAttack = Math.round(calcAttack - Math.log2(this.distance) * 5);
      if (calcAttack < 0) {
        return 0;
      }
      return calcAttack;
    }
    return calcAttack;
  }

  set attack(damage) {
    this.setAttack = damage;
  }

  get stoned() {
    return this.setStoned;
  }

  set stoned(cast) {
    this.setStoned = cast;
  }
}
