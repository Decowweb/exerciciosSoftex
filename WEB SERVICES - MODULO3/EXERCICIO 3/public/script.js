
//AQUI ESTÁ PEGANDO O VALOR DO INPUT E USANDO O MÉTODO POST PAPA ENVIAR DADOS NOVOS
document.querySelector('form').addEventListener("submit", (e) => {
    const taskName = document.querySelector('#taskName').value
    e.preventDefault()
    fetch("http://localhost:3000/alunos", {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            "userId":5,
            "nome": taskName
        })
    })
    .then(res => res.json())
    .then(data => {
    })
})


//AQUI ESTÁ RECEBENDO OS DADOS DE TODOS OS ALUNOS USANDO O MÉTODO GET
fetch("http://localhost:3000/alunos", {
    method: "GET",
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(res => res.json())
.then(data => {
})

//AQUI ESTÁ DELETANDO O ALUNO DE ID 1 
fetch("http://localhost:3000/alunos/1", {
    method: "DELETE",
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    },
})
.then(res => res.json())
.then(data => {
    console.log(data)
})


//AQUI ESTÁ EDITANDO O VALOR DO NOME DO ALUNO DE ID 1 PARA TESTE
fetch("http://localhost:3000/alunos/1", {
    method: "PUT",
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify({
        "userId":5,
        "nome": "teste"
    })
})
.then(res => res.json())
.then(data => {
})

