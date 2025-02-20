/**
 *  Esta funcion pide una carta del deck, lo cual sera la ultima carta
 * @param {Array<String>} deck Ejemplo: deck[] Deberia contener cartas, lo cual son Stirng
 * @returns {String} Retorna la ultima carta del deck
 */
export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0)
        throw new Error('Debe de haber cartas en el deck');

    const carta = deck.pop();
    return carta;
}