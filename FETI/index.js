fetch('http://localhost:3002/usuario')

    .then(response => {
        if(response.status == 404){
            alert("Tarefa não encontrado!")
        }
        return response.json()
    })
    .then(data => {
        console.log(data)
        const litaUsuario = document.getElementById("listaTarefa")
        console.log(litaTarefa);
        data.forEach(element => {
            console.log(element);
            listaTarefa.innerHTML += 
        `<li class='list-group-item'>
            <h5>titulo:${element.titulo} concluida: ${element.descricao}</h5>
            <div>
                <button onclick="deletarUsuario(${element.titulo}, '${element.descricao}')" type="button" class="btn btn-danger">Deletar</button>
                <a href="./EditarUsuario/index.html?id=${element.id}" class="btn btn-primary">Atualizar</a>                
            </div>
        </li>
        `
            
        })
    })
    .catch(error => console.log(error));

    function deletarTarefa(tarefaIdId, tarefaTitulo){
        const confirmar = confirm(`Você deseja deletar esta tarefa mesmo? ${tarefaTitulo}`)
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
                alert("A tarefa foi deletado com sucesso")
                window.location.reload()
            })
        
            .catch(error => console.log(error));

    } 