var palindromo = prompt("Digite a palavra");
//split: splita a string em um vetor
//reverse: inverte o vetor
//join: junta o vetor em uma string
if (palindromo == palindromo.split("").reverse().join("")) {
    console.log("Palíndromo");
}
else {
    console.log("Naum");
}
