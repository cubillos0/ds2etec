function enviar(){

    const dbParam = JSON.stringify(
        {
            "Nome": document.querySelector("#nome").value,
            "Documento": document.querySelector("#documento").value,
            "Celular": document.querySelector("#celular").value,
            "Numero": document.querySelector("#numero").value,
            "CEP": document.querySelector("#cep").value,
            "Endereço": document.querySelector("#endereco").value,
            "Bairro": document.querySelector("#bairro").value,
            "Cidade": document.querySelector("#cidade").value,
            "Estado": document.querySelector("#estado").value
        }
    );
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
        const myObj = JSON.parse(this.responseText);
        console.log(myObj);
        document.getElementById("demo").innerHTML = myObj;
    }
    xmlhttp.open("POST", "https://etec.fernandograciano.com.br/cadastrocliente.php");
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("dados="+dbParam );

}