import Component from "./Component.js";

class Card extends Component {
    constructor(
        parentElement,
        htmlTag,
        className,
        personaje,
        ownPropperties,
        buttons
    ) {
        super(parentElement, className, htmlTag);

        this.generatreHTML(personaje);
        this.generateCharPropperties(ownPropperties);
        this.generateCardInfoDisplays(personaje);
        this.generateEmoji(personaje);
        this.generateButtons(buttons);
    }

    generatreHTML(personaje) {
        this.element.innerHTML = `
        <div class="card character__card">
            <img
              src="img/${personaje.nombre.toLowerCase()}.jpg"
              alt="Cara del personaje"
              class="character__picture card-img-top"
            />
            <div class="card-body">
              <h2 class="character__name card-title h4">${personaje.nombre} ${
            personaje.familia
        } </h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad: ${personaje.edad} años</li>
                  <li>
                    Estado:
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                </ul>
                <div class="character__actions">
                  <button class="character__action btn">habla</button>
                  <button class="character__action btn">muere</button>
                </div>
              </div>
            </div>
        </div>`;
    }

    generateCharPropperties(ownPropperties) {
        const listHolder = this.element.querySelector(".character__overlay");
        const list = listHolder.querySelector(".list-unstyled");

        ownPropperties.forEach((propperty) => {
            const newPropperty = document.createElement("li");
            newPropperty.textContent = propperty;
            list.append(newPropperty);
        });
    }

    generateCardInfoDisplays(personaje) {
        const statsDisplayer = this.element.querySelector(
            ".list-unstyled li:nth-child(2)"
        );
        if (personaje.vivo) {
            const icon = document.createElement("i");
            icon.className = "fas fa-thumbs-up";

            statsDisplayer.append(icon);
        } else {
            const icon = document.createElement("i");
            icon.className = "fas fa-thumbs-down";

            statsDisplayer.append(icon);
        }
    }

    generateEmoji(personaje) {
        const emojiHolder = this.element.querySelector(".card.character__card");
        const emojiElement = document.createElement("i");
        emojiElement.className = "emoji";
        emojiHolder.append(emojiElement);

        switch (personaje.constructor.name) {
            case "Rey":
                emojiElement.textContent = "👑";
                break;

            case "Luchador":
                emojiElement.textContent = "🗡";
                break;

            case "Escudero":
                emojiElement.textContent = "🛡";
                break;

            case "Asesor":
                emojiElement.textContent = "🎓";
                break;
            default:
                break;
        }
    }

    generateButtons(buttons) {
        const buttonHolder = this.element.querySelector(".character__actions");
        buttons.forEach((button) => {
            buttonHolder.append(button);
        });
    }
}

export default Card;
