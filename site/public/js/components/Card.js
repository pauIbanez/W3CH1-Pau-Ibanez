class Card {
    element;

    constructor(personaje, ownPropperties, image) {
        this.element = document.createElement("li");
        this.element.className = "character col";
        document.querySelector(".characters-list").append(this.element);

        this.generatreHTML(personaje, ownPropperties, image);
    }

    generatreHTML(personaje, ownPropperties, image) {
        this.element.innerHTML = `<div class="card character__card">
            <img
              src="${image}"
              alt="Cara del personaje"
              class="character__picture card-img-top"
            />
            <div class="card-body">
              <h2 class="character__name card-title h4">${personaje.nombre} ${personaje.familia} </h2>
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
            <i class="emoji"></i>
          </div>`;

        const listHolder = this.element.querySelector(".character__overlay");
        const list = listHolder.querySelector(".list-unstyled");

        ownPropperties.forEach((propperty) => {
            const newPropperty = document.createElement("li");
            newPropperty.textContent = propperty;
            list.append(newPropperty);
        });

        const estadoDisplayer = this.element.querySelector(
            ".list-unstyled li:nth-child(2)"
        );
        if (personaje.vivo) {
            const icon = document.createElement("i");
            icon.className = "fas fa-thumbs-up";

            estadoDisplayer.append(icon);
        } else {
            const icon = document.createElement("i");
            icon.className = "fas fa-thumbs-down";

            estadoDisplayer.append(icon);
        }
    }
}

export default Card;
