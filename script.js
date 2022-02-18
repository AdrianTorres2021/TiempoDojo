function alertFunction() {
    alert("Cargando informe meteorológico…");
}
function removeFunction(){
    document.querySelector(".cookies").remove();
}
function c2f(temp){
    return Math.round (9 / 5 * temp + 32);
}
function f2c(temp){
    return Math.round (5 / 9 * (temp - 32));
}
function convert(element){
    for(var i=1; i<9; i++){
        var tempSpan = document.querySelector("#temp" + i);
        var tempVal = parseInt(tempSpan.innerText);
        if(element.value == "°C"){
            tempSpan.innerText= f2c(tempVal);
        } else {
            tempSpan.innerText= c2f(tempVal);
        }
    }
}
/*
let arr1=[6,7,8,9,10];
function termometro(n,arreglo){
    var resultado=[];

    for(var i=0; i<=arreglo.lenght; i++){
        arr1 = arreglo + 1;
        resultado.push(arr1);
    }
    return resultado;
}
console.log(termometro(0,arr1));





function termometroCalculator(){
const array = [1, 2, 3, 4];
let sum = 0;
var resultado=[];
for (let i = 0; i < array.length; i++) {
    sum = array[i] + 51;   resultado.push(sum);      
}
console.log(resultado);

const array2 = [2, 3, 4, 5];
let suma = 0;
var resultados=[];
for (let i = 0; i < array.length; i++) {
    suma = array2[i] + 51;   resultados.push(sum);      
}
console.log(resultados);
}
*/
