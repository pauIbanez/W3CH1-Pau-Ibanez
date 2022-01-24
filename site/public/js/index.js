import inizializePersonajes from "./personajes.js";
import Comunications from "./components/Comunications.js";
import Card from "./components/Card.js";
import getCharacterOwnPropperties from "./getCharacterPropperties.js";

const setup = () => {
    const personajes = inizializePersonajes();
    const properties = getCharacterOwnPropperties(personajes[0]);
    const communicator = new Comunications();
    const card = new Card(personajes[0], properties, "img/");
};

setup();
