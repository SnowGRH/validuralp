import TexturlapElem from "./TextUrlapElem.js";
import NumberUrlapElem from "./NumberUrlapElem.js";
class UrlapView {
  #leiro = {};
  #urlapElemlista = [];
  #osszesElemValidE = true;
  #urlapAdat = {};
  constructor(elemSzul, leiro) {
    this.elemSzul = elemSzul;
    this.#leiro = leiro;
    this.elemSzul.append("<form>");
    this.fromElem = this.elemSzul.children("form");
    this.#urlapOsszerak();
    this.submiteElem = $("#sumbit");
    this.submiteElem.on('click', (event) => {
      event.preventDefault()
      this.#osszesElemValidE = true
      this.#urlapElemlista.forEach((elem) => {
        this.#osszesElemValidE = this.#osszesElemValidE && elem.valid;
      });
      if (this.#osszesElemValidE) {
        console.log("valid az ur");
        this.#urlapElemlista.forEach((elem) => {
            this.#urlapAdat[elem.key]=elem.value;
          });
      } else {
        console.log("nem");
      }
      console.log(this.#urlapAdat);
    });
  }
  #urlapOsszerak() {
    for (const key in this.#leiro) {
      switch (this.#leiro[key].tipus) {
        case "text":
          this.#urlapElemlista.push(
            new TexturlapElem(this.fromElem, this.#leiro[key], key)
          );
          break;
        case "number":
          // this.#numberElem(key);
          new NumberUrlapElem(this.fromElem, this.#leiro[key], key);
          break;
        default:
          console.log("nincs kész az");
      }
    }
    let txt = "<input type='submit' id='sumbit' value='Küldés'>";
    this.fromElem.append(txt);
  }
}
export default UrlapView;
