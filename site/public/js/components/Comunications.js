import Component from "./Component.js";

class Comunications extends Component {
    constructor(parentElement, className, htmlTag = "div") {
        super(parentElement, className, htmlTag);

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
