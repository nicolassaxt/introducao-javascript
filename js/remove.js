//Ideia de efeito com js para projeto 
var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick",function(event){
   
    event.target.parentNode.classList.add("fadeOut");

   setTimeout(function(){
    if (event.target.tagName == 'TD') {
        event.target.parentNode.remove()
    }
   }, 1000);
    

}); //Ideia de efeito com js para projeto


/* pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick",function(){
        this.remove();
    });
}); */