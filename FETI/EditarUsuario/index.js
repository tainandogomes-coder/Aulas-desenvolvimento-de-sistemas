const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')
console.log(id);

const nome = document.getElementById('nomeUsuario')
const idade = document.getElementById('idadeUsuario')

fetch(`http://localhost:3002/usuario/${id}`)

    .then(response => response.json())

    .then(data => {
        console.log(data)
        nome.value = data.nome
        idade.value = data.idade
    })


    .catch(error => console.log(error));

    


function atualizarUsuario(event) {
    event.preventDefault() //não recarrregar pagina

    const usuario = {
        "nome": nome.value,
        "idade": parseInt(idade.value)
    }   

    fetch(`http://localhost:3002/usuario/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    })
        .then(response => {
            if(response.ok){
                return response
            }
            return response.json()
        })

        .then(data => {
            alert("Usuario foi atualizado com sucesso!")
            window.location.href = '../index.html'
})
    
        .catch(error => console.log(error));
}
