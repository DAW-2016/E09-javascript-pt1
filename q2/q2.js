var linhas = prompt("Digite o numero de linhas:");

var i;

for(i = 1; i <= linhas; ++i){
    if( i%2 != 0){
        console.log("# # # # ");
    }
    else{
        console.log(" # # # #");
    }
}