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
        userChoice = parseInt(prompt("Saisir une valeur (0 - Pierre, 1 - Feuille, 2 - Ciseau)"));
        if(userChoice === 1 || userChoice === 0 || userChoice === 2) {
            valideValue = true;
        }
    }
    return returnChoice(userChoice);
}

/**
 * Retourne le vainqueur du round
 * @param humanChoice
 * @param computerChoice
 */
function playRound(humanChoice, computerChoice){
    console.log("Choix de humain : " + humanChoice);
    console.log("Choix de l'ordinateur : " + computerChoice);
    if(humanChoice === "pierre"){
        if(computerChoice === "feuille"){
            computerScore++;
            return "Victoire de l'ordinateur";
        }else if(computerChoice === "pierre"){
            return "Égalité";
        }else if(computerChoice === "ciseau"){
            humanScore++;
            return "Victoire de l'humain";
        }
    }else if(humanChoice === "feuille"){
        if(computerChoice === "feuille"){
            return "Égalité";
        }else if(computerChoice === "pierre"){
            humanScore++;
            return "Victoire de l'humain";
        }else if(computerChoice === "ciseau"){
            computerScore++;
            return "Victoire de l'ordinateur";
        }
    }else if(humanChoice === "ciseau"){
        if(computerChoice === "feuille"){
            humanScore++;
            return "Victoire de l'humain";
        }else if(computerChoice === "pierre"){
            computerScore++;
            return "Victoire de l'ordinateur";
        }else if(computerChoice === "ciseau"){
            return "Égalité";
        }
    }
}

function playGame(numberOfRound){
    let round = 1;

    while (round <= numberOfRound){
        console.log("Round n°" + round);
        console.log(playRound(getHumanChoice(), getComputerChoice()));
        console.log("Score de l'humain :" + humanScore);
        console.log("Score du computer :" + computerScore);

        if(round === numberOfRound){
            if(humanScore > computerScore){
                console.log("Victoire finale de l'humain");
            }else{
                console.log("Victoire finale de l'ordinateur");
            }
        }
        round++;
    }
}

let humanScore = 0;
let computerScore = 0;
playGame(5);