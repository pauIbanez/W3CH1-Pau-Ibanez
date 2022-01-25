import inizializePersonajes from "./personajes.js";
import Comunications from "./components/Comunications.js";
import Card from "./components/Card.js";
import getCharacterOwnPropperties from "./getCharacterPropperties.js";

const setup = () => {
    const personajes = inizializePersonajes();
    const cardContainer = document.querySelector(".app.container ul");

    personajes.forEach((personaje) => {
        const properties = getCharacterOwnPropperties(personaje);
        // eslint-disable-next-line no-unused-vars
        const card = new Card(
            cardContainer,
            "li",
            "character col",
            personaje,
            properties
        );
    });
    const communicator = new Comunications(document.body, "comunications");
};

setup();
