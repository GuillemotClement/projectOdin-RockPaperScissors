/**
 *@func - La fonction retourne le choix du pc selon un nombre aléatoire
 */
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  switch (computerChoice) {
    case 0:
      computerChoice = "paper";
      break;
    case 1:
      computerChoice = "scissors";
      break;
    case 2:
      computerChoice = "rock";
      break;
    default:
      throw new Error("Erreur critique.");
      break;
  }
  return computerChoice;
}

/**
 * La fonction retourne le choix de l'utilisateur
 */
function getHumanChoice() {
  let valueValide = false;
  while (valueValide === false) {
    let humanChoice = prompt("Saisir une des valeur : Pierre, Feuille, Ciseau").toLowerCase();
    if (humanChoice === "pierre" || humanChoice === "feuille" || humanChoice === "ciseau") {
      return humanChoice;
    } else {
      alert("Valeur non valide");
    }
  }
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice){
  if(humanChoice === 'pierre'){
    if(computerChoice === 'feuille'){
      computerScore++;
      return "Computer gagne";
    }else if(computerChoice === 'ciseau'){
      humanScore++;
      return "Humain gagne"
    }else{
      return "Egalité";
    }
  }else if(humanChoice === 'ciseau'){
    if(computerChoice === 'feuille'){
      humanScore++;
      return "Humain gagne";
    }else if(computerChoice === 'pierre'){
      computerScore++;
      return "Computer gagne"
    }else{
      return "Egalité";
    }
  }else if(humanChoice === 'feuille'){
    if(computerChoice === 'ciseau'){
      computerScore++;
      return "Computer gagne";
    }else if(computerChoice === 'feuille'){
      humanScore++;
      return "Humain gagne"
    }else{
      return "Egalité";
    }
  }
}

function playGame(){
  let numberRound = 5;
  let i = 0;
  while(i <= numberRound){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log("Score humain :" + humanScore);
    console.log('Score de Terminator :'+computerScore);
    i++;
    console.log('Round n° :' + i);
  }

  if(humanScore > computerScore){
    return "Victoire de l'humain";
  }else{
    return "Victoire de terminator";
  }
}

console.log(playGame());
