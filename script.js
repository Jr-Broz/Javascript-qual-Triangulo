function calculaTriangulo(){ 
let numero1 = +prompt("Insira um número");
let numero2 = +prompt("Insira outro número");
let numero3 = +prompt("Insira o último número");

if (numero1 == numero2 && numero2 == numero3){

  alert("é um triângulo equilátero");
  
}
else if(numero1 == numero2 && numero2 != numero3 || numero2 == numero3 && numero3 != numero1 || numero1 == numero3 && numero3 != numero2){

  alert("triângulo isósceles");
}
  else if(numero1 != numero2 && numero2 != numero3 && numero1 != numero3){


    alert("Triangulo Escaleno")
  }
}
