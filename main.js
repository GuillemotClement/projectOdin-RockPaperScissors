/**
 * Retourne une des valeurs pierre/feuille/ciseau
 * @param value
 * @returns {string}
 */
function returnChoice(value){
    switch (value){
        case 0:
            return 'pierre';
        case 1:
            return "feuille";
        case 2:
            return "ciseau";
        default:
            return "Erreur, cette valeur n'est pas valide";
    }
}

/**
 * Retourne une valeur aléatoire entre 0 et 2 permettant de faire un choix aléatoire
 * @returns {string}
 */
function getComputerChoice(){
    let randomValue = Math.floor(Math.random() * 3);
    return returnChoice(randomValue);
}

/**
 * Retourne le choix de l'utilisateur. La valeur est demandée via une alerte dans el navigateur
 * @returns {string}
 */
function getHumanChoice(){
    let valideValue = false;
    let userChoice;
    while (!valideValue){
        userChoice = parseInt(prompt("Saisir une valeur (0 - Pierre, 1 - Feuille, 3 - Ciseau)"));
        if(userChoice === 1 || userChoice === 0 || userChoice === 2) {
            valideValue = true;
        }
    }
    return returnChoice(userChoice);
}

let humanScore = 0;
let computerScore = 0;