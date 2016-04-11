/**
 * Created by Lucas on 11/04/2016.
 */

//var linhas = 5;

var linhas = prompt("Digite o numero de linhas:");

var i;
var j;

for(i = 0; i < linhas; ++i){
    var string = "";
    for(j = 0; j <= i; ++j){
        string = string + "#";
    }
    console.log((i+1) + " " + string);
}