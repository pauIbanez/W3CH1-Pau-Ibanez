class Card {
    element;

    constructor(propperties, image) {
        this.element = document.createElement("li");
        this.element.className = "character col";
        document.querySelector(".characters-list").append(this.element);

        this.generatreHTML(propperties, image);
    }

    generatreHTML(propperties, image) {
        this.element.innerHTML = `<div class="card character__card">
            <img
              src="${image}"
              alt="Cara del personaje"
              class="character__picture card-img-top"
            />
            <div class="card-body">
              <h2 class="character__name card-title h4">Nombre y familia</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad: X años</li>
                  <li>
                    Estado:
                    <i class="fas fa-thumbs-down"></i>
                    <i class="fas fa-thumbs-up"></i>
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

        propperties.forEach((propperty) => {
            const newPropperty = document.createElement("li");
            newPropperty.textContent = propperty;
            list.append(newPropperty);
        });
    }
}

export default Card;
