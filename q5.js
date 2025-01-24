/* Escreva um programa que inverta os caracteres de um string.*/
const text = "string"

/**
 * 
 * @param {String} text 
 * @returns {String}
 */
function invertText(text){
    return text.split("").reverse().join("")
}