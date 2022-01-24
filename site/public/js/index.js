import inizializePersonajes from "./personajes.js";
import Comunications from "./components/Comunications.js";
import Card from "./components/Card.js";

const setup = () => {
    const personajes = inizializePersonajes();
    console.log(personajes);
    const communicator = new Comunications();
    const card = new Card(personajes[0], "img/");
};

setup();
