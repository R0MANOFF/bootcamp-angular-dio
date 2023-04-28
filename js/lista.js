/* 

faça um algoritmo que dado 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprime a sua media
e a sua classificacao conforme a tabela abaixo

media menor que 5 = reprovacao 
media entre 5 e 7 = recuperação
media maior que 7 = aprovado 


*/


var nota1= 3.0
var nota2 = 8.0
var nota3= 10.0

var media = (nota1+nota2+nota3)/3

if(media < 5){
    console.log(media + " reprovado")
}
else if(media >=5 && media <7){
    console.log(media +" recuperacao")
}
else if (media >= 7){
    console.log(media +" aprovado")
}