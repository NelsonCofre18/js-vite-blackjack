

/**
 * Retorna el valor de la carta
 * @param {String} carta 
 * @returns {String} Retorna el valor de la carta
 */

export const valorCarta = ( carta ) => {

    if (!carta)
        throw new Error('Debe ser una carta');

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}