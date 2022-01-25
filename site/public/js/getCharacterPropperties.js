import Asesor from "./Asesor.js";
import Escudero from "./Escudero.js";

const getCharacterOwnPropperties = (personaje) => {
    const propperties = Object.getOwnPropertyNames(personaje);

    const defaultProppertyNames = [
        "nombre",
        "familia",
        "edad",
        "vivo",
        "serie",
    ];

    const characterProperties = propperties.filter(
        (property) => !defaultProppertyNames.includes(property)
    );

    return characterProperties.map((property) => {
        const splittedParam = property.split(/(?=[A-Z])/);

        const formatedParam = splittedParam.map((word, i) => {
            console.log(personaje.nombre);
            console.log(property);

            if (i > 0) {
                return word.toLowerCase();
            }
            return word[0].toLocaleUpperCase() + word.substring(1);
        });
        if (
            (personaje instanceof Asesor || personaje instanceof Escudero) &&
            (property === "sirveA" || property === "asesorado")
        ) {
            return `${formatedParam.join(" ")}: ${personaje[property].nombre}`;
        }

        return `${formatedParam.join(" ")}: ${personaje[property]}`;
    });
};

export default getCharacterOwnPropperties;
