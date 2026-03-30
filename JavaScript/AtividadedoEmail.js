function login(event){
event.preventDefault()

const email = document.getElementById("email").value;
const senha = document.getElementById("senha").value;
const formulario = document.getElementById("email" , "senha");

formulario.addEventListener('submit', function(event) {
    // Evita que a página recarregue ao enviar
    event.preventDefault();

    // 3. Coleta os dados usando FormData (forma moderna e eficiente)
    const formData = new FormData(formulario);
    const dados = Object.fromEntries(formData.entries());

    // 4. Salva no LocalStorage
    // Importante: LocalStorage só armazena strings, por isso usamos JSON.stringify
    localStorage.setItem('usuarioLogado', JSON.stringify(dados));

    console.log('Dados salvos com sucesso!', dados);
    alert('Dados salvos localmente!')})

let usuarios = JSON.parse(localStorage.getItem("usuarios"));

let usuarioExiste = usuarios.find(e => e.email ===email);

if(!usuarioExiste){
usuarioExiste.push({
email: email,
senha: senha
});


localStorage.setItem("usuarios", JSON.stringify(usuarios))
alert("Cadastro eventuado com sucesso!")
window.location.href = "../login"
}else{
alert("usuario ja existe")
event.target.reset();
}
}