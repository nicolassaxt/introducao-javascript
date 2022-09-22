//adicionando paciente de um formulario na tabela
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();

    //pegando os dados do novo paciente do formulario pelo input
    var form = document.querySelector("#form-adiciona");
    var paciente = obterPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);
    console.log(erros);
    if(erros.length>0){
        exibeMensagensDeErro(erros);
        return;  //return vazio ele para a execulão toda já aqui e não ver o resto das outras linhas.
    }
    
    //adicionando o paciente na tabela
    adicionaPacienteNaTabela(paciente);

    //resetar os campos do formulario
    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
    });
    
    function adicionaPacienteNaTabela(paciente){
        var pacienteTr = montaTr(paciente);
        var tbPacientes = document.querySelector("#tabela-pacientes");
        tbPacientes.appendChild(pacienteTr);
    }

    function exibeMensagensDeErro(erros){
        var ul = document.querySelector("#mensagens-erro");
        ul.innerHTML = "";

        erros.forEach(function(erro){
            var li = document.createElement("li");
            li.textContent = erro;
            ul.appendChild(li);
        });
    }    



function obterPacienteDoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)

    }

    return paciente;
}

function montaTr(paciente){

    //criando tr
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    //crliando tds englobando as td's na Tr
    pacienteTr.appendChild(nomeTd = montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(pesoTd = montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(alturaTd = montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(gorduraTd = montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(imcTd = montaTd(paciente.imc, "info-imc"));
    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){

    //criando listas de erros
    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }

    if(!validaPeso(paciente.peso)) erros.push("O Peso é inválido");

    if(!validaAltura(paciente.altura)) erros.push("Altura é invalida");

    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    if(paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }

    if(paciente.altura.length == 0){
        erros.push("Altura não pode ser em branco");
    }

    return erros;
}

