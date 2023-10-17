class NumberUrlapElem{
    #key = "";
    #leiro = {};
    #value="";
    #valid = true;
    constructor(fromElem, leiro, key) {
      this.#key = key;
      this.#leiro = leiro;
      this.fromElem = fromElem;
      this.#numberElem();
      this.inputElem = $(`#${this.#key}`);
      this.validElem = this.fromElem
        .children("div:last-child")
        .children(".valid");
        this.invalidElem = this.fromElem
        .children("div:last-child")
        .children(".invalid");
        this.inputElem.on("keyup",()=>{
          this.#value = this.inputElem.val();
          console.log(this.#leiro.regex.min)
          console.log(this.#value)
          console.log(this.#leiro.regex.max)
          if (this.#leiro.regex.min <= this.#value && this.#value <= this.#leiro.regex.max) {
            this.#valid = true;
            this.validElem.removeClass("elrejt");
            this.invalidElem.addClass("elrejt");
        } else {
            this.#valid = false;
            this.invalidElem.removeClass("elrejt");
            this.validElem.addClass("elrejt");
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
    #numberElem() {
        let txt = `
        <div class="mb-3 mt-3">
        <label for="${this.#key}" 
        class="form-label">${this.#leiro.megjelenes}
        </label>
        <input type="${this.#leiro.tipus}" 
        class="form-control" 
        id="${this.#key}" 
        name="${this.#key}"
        min="${this.#leiro.regex.min}"
        max="${this.#leiro.regex.max}"
        pattern="${this.#leiro.regex}"
        value="${this.#leiro.value}">
        <div class="valid elrejt">Ok</div>
        <div class="invalid elrejt">${this.#leiro.invalid}</div>
      </div>
        `;
        this.fromElem.append(txt);
      }
}
export default NumberUrlapElem