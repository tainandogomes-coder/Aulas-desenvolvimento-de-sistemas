function cadastrarUsuario(event) {
    event.preventDefault() //não recarrregar pagina

    const titulo = document.getElementById('tituloTarefa').value
    const descricao = document.getElementById('descricaoTarefa').value

    const tarefa = {
        "titulo": titulo,
        "descricao": descricao
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
