var dispari = [];
var numero;
for (var i = 0; i < 6; i++){
    numero = parseInt(prompt('Inserisci un numero dispari'));
    if (numero%2 ==0){
        alert("Il numero è Pari, inserici un numero dispari");
        }else{
            dispari.push(numero);
        }
}
console.log(dispari);