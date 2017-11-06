export class DiceRoller {
  private faces: number;
  private quantity: number;

  constructor(params: {faces?: number, quantity?: number} = {}) {
    const {faces, quantity} = params;

    if (faces && ![4, 6, 8, 10, 12, 20].includes(faces)) throw new Error("Invalid dice shape.");
    if (quantity && quantity > 1000) throw new Error("Too many dices.");

    this.faces = faces || 6;
    this.quantity = quantity || 1;
  }

  roll() {
    const dices = new Array(this.quantity).fill(0).map(() => Math.ceil(Math.random() * this.faces));
    const sum = dices.reduce((acc, n) => acc + n, 0);

    return {sum, dices};
  }
}
