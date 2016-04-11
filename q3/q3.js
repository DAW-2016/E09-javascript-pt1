/**
 * Created by Lucas on 11/04/2016.
 */

var palavra  = prompt("Digite uma palavra:");


var e = palavra.length;

var cont1;

var cont2 = e - 1;

for(cont1 = 0; cont1 <= e; ++cont1){

    if(palavra.charAt(cont2)!= palavra.charAt(cont1)){
        cont1 = -45;
        break;
    }
    --cont2;
}

if(cont1 == -45){
    alert("A palavra não é palíndromo.");
}
else{
    alert("A palavra é palíndromo.");
}


