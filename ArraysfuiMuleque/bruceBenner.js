const usuarios = [ { nome: "Ana", ativo: false, premium: false },
{ nome: "Carlos", ativo: true, premium: false },
{ nome: "Marina", ativo: false, premium: true },
{ nome: "João", ativo: true, premium: true },
{ nome: "Pedro", ativo: true, premium: false },
{ nome: "Julia", ativo: true, premium: true },
{ nome: "Lucas", ativo: false, premium: false },
{ nome: "Fernanda", ativo: true, premium: false },
{ nome: "Gabriel", ativo: true, premium: true },
{ nome: "Larissa", ativo: false, premium: true },
{ nome: "Ricardo", ativo: true, premium: false },
{ nome: "Camila", ativo: true, premium: true },
{ nome: "Rafaela", ativo: false, premium: false },
{ nome: "Thiago", ativo: true, premium: true },
{ nome: "Amanda", ativo: true, premium: false },
{ nome: "Felipe", ativo: false, premium: true },
{ nome: "Bruno", ativo: true, premium: false },
{ nome: "Patrícia", ativo: true, premium: true },
{ nome: "Eduardo", ativo: false, premium: false },
{ nome: "Vanessa", ativo: true, premium: true } ];

const usuarioRico = usuarios.find(usuarios => usuarios.ativo == true && usuarios.premium == true)
console.log(usuarioRico);
