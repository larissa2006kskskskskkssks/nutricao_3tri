

//--------------------------------------------
//daqui pra baixo começa o js do site


//mudanças no titulo 
//busca no site pelo titulo e aramzena ele dentro da variavel titulo
let titulo = document.querySelector(".titulo");
//mostra no devtools o conteudo de texto da varialvel titulo para fins testes
console.log(titulo.textContent);
//altera o conteudo da variavel titulo para o texto desejado
titulo.textContent = "fica grande nutrição";

//mudanças na tabela

//armazena no array paciente de dados do primeiro paciente 
let pacientes = document.querySelectorAll(".paciente");

//criação do looping for 
for(i = 0; i < pacientes.length; i++){
  
let paciente= pacientes [i];
let tdPeso= paciente.querySelector(".info-peso")
let tdAltura = paciente.querySelector(".info-altura");


let peso =tdPeso.textContent;
let altura =tdAltura.textContent;



let tdImc = paciente.querySelector(".info-imc")

//validação de dados 
let pesoEhValido = true;
let alturaEhValida = true;
//verifica se o peso é valido
if (peso <= 0|| peso >= 1000){
    tdImc.textContent= "Peso inválido";
    pesoEhValido = false;
}
//verifique se a altura é valida
if (altura <= 0 || altura >= 3){
    tdImc.textContent = "Altura inválida";
    alturaEhValida = false;
}
//verifica se o peso e a altura são validos 
if(pesoEhValido && alturaEhValida){
    let imc = peso/ (altura*altura);
    tdImc.textContent = imc;
} else {
    tdImc.textContent = "Altura e/ou peso inválidos!";
}
}

