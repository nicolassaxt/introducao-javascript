var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes...");
    
    var xhr = new XMLHttpRequest();

    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes") //configura a nossa requisição para ser do tipo GET

    xhr.addEventListener("load", function(){ //pegar os dados depois de carregados
        var erroAjax = document.querySelector("#erro-ajax");
        if( xhr.status == 200){
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta); //Transformou o Json em Objetos
    
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        }else{
            console.log(xhr.status);
            console.log( xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }

      });

    xhr.send() //enviar os dados
});