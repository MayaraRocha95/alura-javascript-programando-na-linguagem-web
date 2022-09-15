var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent; //aqui vou dizer que a altura é o meru texto

var tdImc = paciente.querySelector(".info-imc");

var pesoValido = true;
var alturaValida = true;

if(peso <= 0 || peso >= 1000){
  pesoValido = false;
  tdImc.textContent = "Peso Inválido!";
}
if (altura <= 0 || altura >= 3.00){
   alturaValida = false;
  tdImc.textContent = "Altura Inválido!";
}
if (alturaValida && pesoValido){
  var imc = peso / (altura * altura);
  tdImc.textContent = imc;

}

