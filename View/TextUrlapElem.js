class TexturlapElem {
  #key = "";
  #leiro = {};
  #value="";
  #valid = true;
  constructor(fromElem, leiro, key) {
    this.#key = key;
    this.#leiro = leiro;
    this.fromElem = fromElem;
    this.#textElem();
    this.inputElem = $(`#${this.#key}`);
    this.validElem = this.fromElem
      .children("div:last-child")
      .children(".valid");
      this.invalidElem = this.fromElem
      .children("div:last-child")
      .children(".invalid");
      this.inputElem.on("keyup",()=>{
        this.#value = this.inputElem.val();
        let reg = this.#leiro.regex;
        let regOBJ = new RegExp(reg);
        console.log(regOBJ.test(this.#value))
        if (regOBJ.test(this.#value)) {
            this.#valid = true;
            this.validElem.removeClass("elrejt")
            this.invalidElem.addClass("elrejt")
        }else{
            this.#valid = false;
            this.validElem.removeClass("elrejt")
            this.invalidElem.addClass("elrejt")
        }
      })
  }
  get valid(){
    return this.#valid;
  }
  get value(){
    return this.#value;
  }
  get key(){
    return this.#key;
  }
  #textElem() {
    let txt = `
    <div class="mb-3 mt-3">
    <label for="${this.#key}" 
    class="form-label">${this.#leiro.megjelenes}
    </label>
    <input type="${this.#leiro.tipus}" 
    class="form-control" 
    id="${this.#key}" 
    placeholder="${this.#leiro.placeholder}" 
    name="${this.#key}"
    pattern="${this.#leiro.regex}"
    value="${this.#leiro.value}">
    <div class="valid elrejt">Ok</div>
    <div class="invalid elrejt">${this.#leiro.invalid}</div>
  </div>
    `;
    this.fromElem.append(txt);
  }
}
export default TexturlapElem;
