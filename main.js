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
