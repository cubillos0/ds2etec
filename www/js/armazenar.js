function salvarLocal(chave, valor) {
    localStorage.setItem(chave, valor)
    localStorage.setItem("Idade", 23)
    localStorage.setItem("Id_usuario", 105)
    localStorage.setItem("ListaProdutos", ["iPhone", "MacBook", "Tesla"] )
}

function verLocal() {
    console.log( localStorage.getItem("Idade"))
    console.log( localStorage.getItem("ListaProdutos"))
    console.log( localStorage.getItem("Id_usuario"))
}