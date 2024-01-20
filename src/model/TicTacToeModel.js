export default class TicTacToeModel {
  #list = [];
  #aktJatekos = "X";
  constructor() {
    this.#list = ["", "", "O", "", "X", "", "O", "", "X"];
  }
  getList() {
    /* azért kell hogy ne cím szerint hanem érték szerint adjuk át a listát */
    return [...this.#list];
    /*a listával úgy térünk vissza, hogy új memóriaterületre másoljuk, teljesen új listát hozunk létre */
  }

  setAllapot(id) {
    this.#list[id] = this.#aktJatekos;
    if (this.#aktJatekos === "X") {
      this.#aktJatekos = "O";
    } else {
      this.#aktJatekos = "X";
    }
    console.log(this.#aktJatekos);
  }

  getAktJatekos() {
    return this.#aktJatekos;
  }
}
