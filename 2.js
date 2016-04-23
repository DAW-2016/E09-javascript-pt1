max = prompt("digite um valor");

for (j = 1;j<=max;j++){
var str = "";
  for (i = 0;i<max;i++){
    if (i%2 === j%2)
      str += "#";
    else
      str += " ";
  }
    console.log(str);
}
