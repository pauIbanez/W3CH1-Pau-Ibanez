import inizializePersonajes from "./personajes.js";
import Comunications from "./components/Comunications.js";
import Card from "./components/Card.js";
import getCharacterOwnPropperties from "./getCharacterPropperties.js";

const setup = () => {
    const personajes = inizializePersonajes();
    const cardContainer = document.querySelector(".app.container ul");
    const communicator = new Comunications(document.body, "comunications");
    personajes.forEach((personaje) => {
        const properties = getCharacterOwnPropperties(personaje);
        const dieButtonAction = () => {
            console.log("button habla");
        };
        const talkButtonAction = () => {
            console.log("button muere");
            communicator.element.classList.add("on");
            communicator.element.querySelector(
                "img"
            ).src = `img/${personaje.nombre.toLowerCase()}.jpg`;
            setTimeout(() => {
                communicator.element.classList.remove("on");
            }, 2000);
            communicator.element.querySelector("p").textContent =
                personaje.comunicar();
        };
        const talkButton = { text: "habla", action: talkButtonAction };
        const dieButton = { text: "muere", action: dieButtonAction };
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
};

setup();
