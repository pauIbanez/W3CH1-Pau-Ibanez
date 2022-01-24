class Card {
    element;

    constructor(propperties, image) {
        this.element = document.createElement("ul");
        this.element.className = "character col";
        document.querySelector("body").append(this.element);

        this.generatreHTML(propperties, image);
    }

    generatreHTML(propperties, image) {
        // const propperties = Object.getOwnPropertyNames(personaje);

        // const defaultProppertyNames = [
        //     "nombre",
        //     "familia",
        //     "edad",
        //     "vivo",
        //     "serie",
        // ];

        // const ownPropperties = propperties.filter(
        //     (property) => !defaultProppertyNames.includes(property)
        // );

        console.log(propperties.constructor.arguments);
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
    }
}

export default Card;
