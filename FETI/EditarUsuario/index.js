const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')
console.log(id);

const titulo = document.getElementById('tituloTareda')
const descricao = document.getElementById('descricaoTarefa')

fetch(`http://localhost:3002/tarefa/${id}`)

    .then(response => response.json())

    .then(data => {
        console.log(data)
        nome.value = data.titulo
        idade.value = data.descricao
    })


    .catch(error => console.log(error));

    


function atualizarTarefa(event) {
    event.preventDefault() //não recarrregar pagina

    const tarefa = {
        "titulo": titulo.value,
        "descricao": descricao.value
    }   

    fetch(`http://localhost:3002/tarefa/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tarefa)
    })
        .then(response => {
            if(response.ok){
                return response
            }
            return response.json()
        })

        .then(data => {
            alert("Tarefa foi atualizado com sucesso!")
            window.location.href = '../index.html'
})
    
        .catch(error => console.log(error));
}
