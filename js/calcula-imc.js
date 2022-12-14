var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido")//assim já é umaboa prática
       
    }

    if (altura <= 0 || altura >= 3.00) {
        alturaEhValida = false;
        tdImc.textContent = "Altura Inválida";
        paciente.style.fontWeight = "bold"; // pode chamar assim, mas não é o modo correto
        paciente.style.backgroundColor = "lightcoral";
    }

  if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso,altura); 
        tdImc.textContent = imc;// toFixed para deixar duas casas decimais no meu imc
    }
}
function calculaImc(peso,altura) {
    var imc = 0;

    imc= peso / (altura * altura);

    return imc.toFixed(2);
}
