//Alterando titulo
var titulo = document.querySelector(".titulo");
titulo.textContent = "Rabuge";

//Obtendo a tabela de pacientes
var pacientes = document.querySelectorAll(".paciente");

// Loop para percorrer a tabela de pacientes
for (let i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdpeso = paciente.querySelector(".info-peso");
    var tdaltura = paciente.querySelector(".info-altura");

    var peso = tdpeso.textContent;
    var altura = tdaltura.textContent;


    var tdImc = paciente.querySelector(".info-imc");

    //fazendo logica de validação de dados
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido){
        tdImc.textContent= "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }
    if(!alturaEhValida){
        tdImc.textContent= "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida){
       var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso,altura){
    var imc = 0;

    imc = peso/(altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura < 3){
        return true;
    }else{
        return false;
    }
}
//exemplo de evento de click no titulo
//titulo.addEventListener("click", function(){
//    console.log("Olha só uma funcão anonima, eu sou unico nesse evento");
//});



