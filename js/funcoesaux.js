
const entrada= [45, 3, 67, 12, 15];


function gets(){
    maior = 0
    for(let i=0; i<entrada.length ; i++){
        if (maior < entrada[i]){
            maior = entrada[i];
        };
   }
    return maior;
}

function print(texto){
    console.log(texto);
}

module.exports = {gets, print};