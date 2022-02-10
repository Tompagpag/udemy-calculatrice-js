do {

  var choice = parseInt(prompt("Que souhaitez-vous faire ?\n\n 1 - Addition\n 2 - Multiplication\n 3 - Soustraction\n 4 - Division\n"));

} while (choice != 1 && choice != 2 && choice != 3 && choice != 4);

do {

  var firstNumber = parseInt(prompt("Quel est le premier nombre ?"));

} while (isNaN(firstNumber));

do {

  var secondNumber = parseInt(prompt("Quel est le deuxième nombre ?"));

} while (isNaN(secondNumber));

var resultat;

switch (choice) {
  case 1:
    resultat = addition(firstNumber, secondNumber);
    break;

  case 2:
    resultat = multiplication(firstNumber, secondNumber);
    break;

  case 3:
    resultat = soustraction(firstNumber, secondNumber);
    break;

  case 4:
    resultat = division(firstNumber, secondNumber);
    break;

  default:
    alert("Une erreur est survenue.");
    break;
}

alert(`Le resultat est ${resultat} !`);


function addition(nombreA, nombreB) {
  return nombreA + nombreB;
}
function soustraction(nombreA, nombreB) {
  return nombreA - nombreB;
}
function multiplication(nombreA, nombreB) {
  return nombreA * nombreB;
}
function division(nombreA, nombreB) {
  if (nombreB === 0) {
    alert("La division par 0 est impossible.");
  } else {
    return nombreA / nombreB;
  }
}
