function login(event){
event.preventDefault()

const email = document.getElementById("email").value;
const senha = document.getElementById("senha").value;

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

let usuarioExiste = usuarios.find(e => e.email ===email)

if(!usuarioExiste){
usuarioExiste.push({
email: email,
senha: senha
})

localStorage.setItem("usuarios", JSON.stringify(usuarios))
alert("Cadastro eventuado com sucesso!")
window.location.href = "../login"
}else{
alert("usuario ja existe")
event.target.reset()

}

}