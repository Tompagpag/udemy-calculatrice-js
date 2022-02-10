do {

  var choice = parseInt(prompt("Que souhaitez-vous faire ?\n\n 1 - Addition\n 2 - Multiplication\n 3 - Soustraction\n 4 - Division\n"));

} while (choice != 1 && choice != 2 && choice != 3 && choice != 4);

do {

  var firstNumber = parseInt(prompt("Quel est le premier nombre ?"));
  console.log(typeof firstNumber);
} while (isNaN(firstNumber));

do {

  var secondNumber = parseInt(prompt("Quel est le deuxième nombre ?"));

} while (isNaN(secondNumber));


function addition(nombreA, nombreB) {
  return nombreA + nombreB
}
