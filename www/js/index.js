function consultaCep(){ //criando função para consultar API

    let requisicao = new XMLHttpRequest(); // definindo os prarametros da requisição
    let url = "https://viacep.com.br/ws/17054267/json/"; // colocando o link da api em JSON
    requisicao.open("GET", url); // primeiramente fazendo a abertura do url
    requisicao.send(); // envia a requisição para a API
    requisicao.onload = function(){ // retorno quando a função foi executada com sucesso
        alert(JSON.parse(requisicao.response).logradouro)
    }
}

let botao = document.querySelector("#botao") // cria a váriavel em JS usando como base o ID "botão" no HTML
botao.addEventListener("click", consultaCep) // aguarda o acionamento do botão para poder executar a função criada acima