const getCharacterOwnPropperties = (personaje) => {
    const propperties = Object.getOwnPropertyNames(personaje);

    const defaultProppertyNames = [
        "nombre",
        "familia",
        "edad",
        "vivo",
        "serie",
    ];

    return propperties.filter(
        (property) => !defaultProppertyNames.includes(property)
    );
};

export default getCharacterOwnPropperties;
