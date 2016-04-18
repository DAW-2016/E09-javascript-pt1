var n = 1;
var userChoice = prompt("Digite um valor");
var string;
for (var i = 0; i < userChoice; i++) {
    string = [];
    for (var j = 0; j < n; j++) {
        string += "#";
    }
    console.log(string);
    n++;
}
