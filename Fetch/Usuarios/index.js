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
            <a href="./EditarUsuario/index.html?id=${element.id}" class="btn btn-primary">Atualizar</a>
            </li>`
        })
    })
    .catch(error => console.log(error));