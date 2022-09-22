var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input",function(){
    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length>0){

        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i]; 
            var tdNome = paciente.querySelector(".info-nome"); //selecionar apenas o nome que esta no campo da classe .info-nome
            var nome = tdNome.textContent; // pegar o conteudo de texto dele
            var expressao = new RegExp(this.value, "i");// "i" ignotar CaseSensitive
            if(!expressao.test(nome)){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
        }

    }else{
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i]; 

            paciente.classList.remove("invisivel");
        }
    }

});