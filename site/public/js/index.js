import inizializePersonajes from "./personajes.js";
import Comunications from "./components/Comunications.js";
import Card from "./components/Card.js";
import getCharacterOwnPropperties from "./getCharacterPropperties.js";

const setup = () => {
    const personajes = inizializePersonajes();
    const cardContainer = document.querySelector(".app.container ul");
    const communicator = new Comunications(document.body, "comunications");

    personajes.forEach((personaje) => {
        const dieButtonAction = () => {
            const characters = document.querySelectorAll(".character__card");

            for (const char of characters) {
                const img = char.querySelector("img");
                const reducedImg = img.src.split("/");
                if (
                    reducedImg[reducedImg.length - 1] ===
                    `${personaje.nombre.toLowerCase()}.jpg`
                ) {
                    img.classList.add("character__picture--dead");
                    const thumb = char.querySelector(".fas.fa-thumbs-up");
                    thumb.className = "fas fa-thumbs-down";
                    return;
                }
            }
        };

        const talkButtonAction = () => {
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

        const properties = getCharacterOwnPropperties(personaje);
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
