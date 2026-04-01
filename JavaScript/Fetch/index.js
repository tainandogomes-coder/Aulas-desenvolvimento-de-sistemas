if (!localStorage.getItem("ListadeCEP")) {
    //JSON.strinfy -> transfoma JSON em String
    //armazena só String
    localStorage.setItem("ListadeCEP", JSON.stringify(
        [
            "89653298"
        ]
    ))
}

function buscarCEP(event) {
    event.preventDefault() // não recarregar pagina
    // event.taget.reset() -> serve para apagar dados dos inputs

    //getElementById("id") -. pega o elemeno do html
    //.value -> pega o valor do input
    let cep = document.getElementById("cep").value

    let buscarCEP = localStorage.getItem("ListadeCEP")
    let listadeCEP = JSON.parse(buscarCEP)
    //console.log(buscarCEP);

    listadeCEP.push(cep)
    localStorage.setItem("ListadeCEP", JSON.stringify(
        listadeCEP
    )
)  
     let historico = JSON.parse(localStorage.getItem("ListadeCEP")) || [];
    let repeticao = historico.find(cep);
    

    //Serve para consultar uma api
    //fetch(url)
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        //Converte a resposta para json
        .then(response => response.json())
        //usa o dado se der certo
        .then(data => {
            console.log(data)
            let rua = document.getElementById("rua")
            let bairro = document.getElementById("bairro")
            let cidade = document.getElementById("cidade")
            let estado = document.getElementById("uf")
            //innerHTML -> preencher HTML
            //innerText ou TextContent -> Preencher Texto
            rua.innerHTML = data.logradouro;
            bairro.innerHTML = data.bairro;
            cidade.innerHTML = data.localidade;
            estado.innerHTML = data.uf;
        })
        //trata o erro = roda quando der erro
        .catch(error => {
            console.log(error)
            alert("Precisa ser um CEP valido")
        });
}