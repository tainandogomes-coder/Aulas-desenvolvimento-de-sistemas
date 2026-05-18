function cadastrarUsuario(event) {
    event.preventDefault() //não recarrregar pagina

    const nome = document.getElementById('nomeUsuario').value
    const idade = document.getElementById('idadeUsuario').value

    console.log(nome),
    console.log(idade);
    
    const usuario = {
        "nome": nome,
        "idade": parseInt(idade)
    }   

    fetch('http://localhost:3002/tarefas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    })
        .then(response => response.json())

        .then(data => {
            alert("Usuario foi cadastrado 'com sucesso!")
            window.location.href = '../index.html'
})
    
        .catch(error => console.log(error));
}
