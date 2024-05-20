function consultaCep()
{
    let campo = document.querySelector("#cep");
    let requisicao = new XMLHttpRequest();
    let url = "https://viacep.com.br/ws/"+ campo.value +"/json/";
    requisicao.open("GET", url);
    requisicao.send();
    requisicao.onload = function(){
        let objetoCEP = JSON.parse(requisicao.response)
        let campoEndereco = document.querySelector("#logradouro")
        let campoCidade = document.querySelector("#cidade")
        let campoBairro = document.querySelector("#bairro")
        let campoEstado = document.querySelector("#estado")
        console.log(requisicao.response)
        campoEndereco.value = objetoCEP.logradouro
        campo.value = objetoCEP.cep
        campoCidade.value = objetoCEP.localidade
        campoBairro.value = objetoCEP.bairro
        campoEstado.value = objetoCEP.uf
    } 
}
let botao = document.querySelector("#botao");
botao.addEventListener("click",consultaCep);
