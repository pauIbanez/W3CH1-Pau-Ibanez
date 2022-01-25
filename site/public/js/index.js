import inizializePersonajes from "./personajes.js";
import Comunications from "./components/Comunications.js";
import Card from "./components/Card.js";
import getCharacterOwnPropperties from "./getCharacterPropperties.js";

const setup = () => {
    const personajes = inizializePersonajes();
    const cardContainer = document.querySelector(".app.container ul");

    personajes.forEach((personaje) => {
        const properties = getCharacterOwnPropperties(personaje);
        const talkButtonAction = () => {
            console.log("button habla");
        };
        const muereButtonAction = () => {
            console.log("button muere");
        };
        const talkButton = { text: "habla", action: talkButtonAction };
        const dieButton = { text: "muere", action: muereButtonAction };
        const buttons = [talkButton, dieButton];
        // eslint-disable-next-line no-unused-vars
        const card = new Card(
            cardContainer,
            "li",
            "character col",
            personaje,
            properties,
            buttons
        );
    });
    const communicator = new Comunications(document.body, "comunications");
};

setup();
