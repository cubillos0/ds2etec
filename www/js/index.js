function consultaCep(){ //criando função para consultar API

    let campo = document.querySelector("#cep") //criando variavel que puxa o texto do input de id 'cep'
    let requisicao = new XMLHttpRequest(); // definindo os prarametros da requisição
    let url = "https://viacep.com.br/ws/"+ campo.value +"/json/"; // colocando o link da api em JSON
    requisicao.open("GET", url); // primeiramente fazendo a abertura do url
    requisicao.send(); // envia a requisição para a API
    requisicao.onload = function(){ // retorno quando a função foi executada com sucesso
        let objetoCEP = JSON.parse(requisicao.response) // criação de variáveis com query selector puxando os id do index.html
        let campoEndereco = document.querySelector("#logradouro")
        let campoLocalidade = document.querySelector("#localidade")
        let campoComplemento = document.querySelector("#complemento")
        let campoBairro = document.querySelector("#bairroo")
        let campoUF = document.querySelector("#uf")

        // vinculando as variáveis criadas anteriormente com os campos da API
        campoEndereco.value = objetoCEP.logradouro
        campoLocalidade.value = objetoCEP.localidade
        campoComplemento.value = objetoCEP.complemento
        campoBairro.value = objetoCEP.bairro
        campoUF.value = objetoCEP.uf

        // only debug alert(objetoCEP.logradouro + ", " + objetoCEP.localidade + " - " + objetoCEP.uf + "\n" + objetoCEP.bairro +"\n" + objetoCEP.complemento)
        // exibindo os campos da API assim que o botão de buscar for acionado
        (campoEndereco + ", " + campoLocalidade + " - " + campoUF + "\n" + campoBairro +"\n" + campoComplemento)
    }
}

let botao = document.querySelector("#botao"); // cria a váriavel em JS usando como base o ID "botão" no HTML
botao.addEventListener("click", consultaCep); // aguarda o acionamento do botão para poder executar a função criada acima