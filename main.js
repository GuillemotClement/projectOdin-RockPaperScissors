/**
 * Retourne une valeur aléatoire entre 0 et 2 permettant de faire un choix aléatoire
 * @returns {string}
 */
function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

/**
 * Retourne le vainqueur du round
 * @param humanChoice
 * @param computerChoice
 */
function playRound(humanChoice, computerChoice){

    // STONE -> 0
    // PAPIER -> 1
    // SCISSOR -> 2
    if(humanChoice === 0){
        if(computerChoice === 0){
            return "Egalité";
        }else if(computerChoice === 1){
            computerChoice++;
            return "Le point pour l'ordinateur";
        }else if(computerChoice === 2){
            humanChoice++;
            return "Le point pour toi";
        }
    }else if(humanChoice === 1){
        if(computerChoice === 0){
            humanChoice++;
            return "Le point pour toi";
        }else if(computerChoice === 1){
            return "Egalité";
        }else if(computerChoice === 2){
            computerChoice++;
            return "Le point pour l'ordinateur";
        }
    }else if(humanChoice === 2){
        if(computerChoice === 0){
            computerChoice++;
            return "Le point pour l'ordinateur";
        }else if(computerChoice === 1){
            humanChoice++;
            return "Le point pour toi";
        }else if(computerChoice === 2){
            return "Egalité";
        }
    }
}

function playGame(){
    let round = 0;
    const numberOfRound = 5;

    while (round <= numberOfRound){
        // console.log("Round n°" + round);
        // console.log(playRound(getHumanChoice(), getComputerChoice()));
        // console.log("Score de l'humain :" + humanScore);
        // console.log("Score du computer :" + computerScore);

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

// playGame(5);
/*
La fonction permet de récupérer le choix de l'utilisateur
 */
function getHumanChoice(choice){
    return choice;
};

// --------------------- GESTION EVENT ----------------------------------------->
// RECUPERATION DES BOUTONS
const paperBtn = document.querySelector("#paper");
const stoneBtn = document.querySelector("#stone");
const scissorBtn = document.querySelector('#scissor');

// AJOUT EVENT CLICK SUR LES BOUTONS
stoneBtn.addEventListener("click", () => getHumanChoice());
paperBtn.addEventListener("click", () => getHumanChoice());
scissorBtn.addEventListener("click", () => getHumanChoice());

// RECUPERATION DU NOMBRE DE ROUND
// const numberOfRound = document.querySelector("#numberRound").value;