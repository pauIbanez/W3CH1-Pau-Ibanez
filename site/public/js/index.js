import inizializePersonajes from "./personajes.js";
import Comunications from "./components/Comunications.js";
import Card from "./components/Card.js";
import getCharacterOwnPropperties from "./getCharacterPropperties.js";

const setup = () => {
    const personajes = inizializePersonajes();

    personajes.forEach((personaje) => {
        const properties = getCharacterOwnPropperties(personaje);
        const card = new Card(personaje, properties);
    });
    const communicator = new Comunications();
};

setup();
