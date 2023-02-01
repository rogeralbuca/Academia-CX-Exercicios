let numero1 = 100;
let numero2 = 10;

function somar(){
  return numero1 + numero2;
}

let multiplicar = function(){
  return numero1 * numero2;

}

let dividir = () => {
  
  return numero1 / numero2;

}


let Subtrair = function(numero1, numero2){
  this.numero1 = numero1;
  this.numero2 = numero2;

  this.subtrair = this.numero1 - this.numero2;

}

let subtracao = new Subtrair(numero1, numero2);


console.log(somar());
console.log(multiplicar());
console.log(dividir());
console.log(subtracao.subtrair);