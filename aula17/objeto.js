var Cliente = function(){
    this.nome = ""
    this.telefone = ""
    this.cpf = ""

    this.Mostrar = function(){
        alert("Nome:" + this.nome)
        alert("Telefone:" + this.telefone)
        alert("CPF:" + this.cpf)
    }

}

var c = new Cliente()

c.Mostrar