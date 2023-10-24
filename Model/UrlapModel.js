import { Urlapleiro } from "./Uralpleiro.js";
class UrlapModel {
  #leiro = {};
  constructor() {
    this.#leiro = Urlapleiro;
  }
  get leiro() {
    return { ...this.#leiro };
  }
}
export default UrlapModel;
