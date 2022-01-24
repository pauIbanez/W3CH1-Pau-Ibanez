import inizializePersonajes from "./personajes.js";
import Comunications from "./components/Comunications.js";

const setup = () => {
    const personajes = inizializePersonajes();
    const communicator = new Comunications();
};

setup();
