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
        let stringReturn = "";
        switch (property) {
            case "anyosReinado":
                stringReturn = `Años de reinado: ${personaje.anyosReinado}`;
                break;

            default:
                break;
        }

        return stringReturn;
    });
};

export default getCharacterOwnPropperties;
