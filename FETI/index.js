fetch('http://localhost:3002/usuario')

    .then(response => {
        if(response.status == 404){
            alert("Usuario não encontrado!")
        }
        return response.json()
    })
    .then(data => {
        console.log(data)
        const litaUsuario = document.getElementById("listaUsuario")
        console.log(litaUsuario);
        listaUsuario.innerHTML = "<li class='list-group-item'>teste</li>"
        data.forEach(element => {
            console.log(element);
            listaUsuario.innerHTML += 
        `<li class='list-group-item'>
            <h5>Nome:${element.nome} Idade: ${element.idade}</h5>
            <div>
                <button onclick="deletarUsuario(${element.id}, '${element.nome}')" type="button" class="btn btn-danger">Deletar</button>
                <a href="./EditarUsuario/index.html?id=${element.id}" class="btn btn-primary">Atualizar</a>                
            </div>
        </li>
        `
            
        })
    })
    .catch(error => console.log(error));

    function deletarUsuario(usuarioId, usuarioNome){
        const confirmar = confirm(`Você deseja deletar este usuario mesmo? ${usuarioNome}`)
        if (!confirmar) {
            return
        }
        
        fetch(`http://localhost:3002/tarefas/${tarefaId}`, {
        
            method: 'DELETE',
        
            headers: {
        
                'Content-Type': 'application/json'
        
            },
        
        })
        
            .then(response => {
                if(response.ok){
                    return response
                }
                return response.json()
    })
        
            .then(data => {
                alert("O usuario foi deletado com sucesso")
                window.location.reload()
            })
        
            .catch(error => console.log(error));

    } 