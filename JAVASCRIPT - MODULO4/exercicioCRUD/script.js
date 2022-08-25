function Enviar(nome, email, telefone, profissao){
    this.nome = nome
    this.email = email
    this.telefone = telefone
    this.profissao = profissao
    this.remover = function(contato){
        delete contato.nome
        delete contato.email
        delete contato.telefone
        delete contato.profissao
        delete contato.remover
    }
}

let contatoUm = new Enviar('Andre', 'andre.bottentuit@gmail.com', '999999999', 'Administrador')

let contatoDois = new Enviar('Artur', 'artur@gmail.com', '888888888', 'Advogado')

contatoUm.remover(contatoUm) //REMOVENDO AS PROPRIEDADES DO CONTATOUM

console.log(contatoUm)

console.log(contatoDois)