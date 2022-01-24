class Comunications {
    element;

    constructor() {
        this.element = document.createElement("div");
        this.element.className = "comunications";

        document.querySelector("body").append(this.element);

        this.generatreHTML();
    }

    generatreHTML() {
        this.element.innerHTML = `<p class="comunications__text display-1">Una frase que dice alguien</p>
      <img
        class="comunications__picture"
        src="img/no-one.jpg"
        alt="Nombre y familia del que habla"
      />`;
    }
}

export default Comunications;
