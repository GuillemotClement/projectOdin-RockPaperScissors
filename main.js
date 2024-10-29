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

let computerChoice = getComputerChoice();

