const usuarios = [ { nome: "Ana", idade: 22, ativo: true, premium: true, compras: 15 },
{ nome: "Carlos", idade: 17, ativo: true, premium: false, compras: 4 },
{ nome: "Marina", idade: 30, ativo: false, premium: true, compras: 22 },
{ nome: "João", idade: 28, ativo: true, premium: true, compras: 11 },
{ nome: "Pedro", idade: 19, ativo: true, premium: false, compras: 9 },
{ nome: "Julia", idade: 25, ativo: true, premium: true, compras: 35 },
{ nome: "Lucas", idade: 16, ativo: true, premium: false, compras: 2 },
{ nome: "Fernanda", idade: 27, ativo: false, premium: true, compras: 18 },
{ nome: "Gabriel", idade: 31, ativo: true, premium: true, compras: 13 },
{ nome: "Larissa", idade: 20, ativo: true, premium: false, compras: 7 },
{ nome: "Ricardo", idade: 29, ativo: true, premium: true, compras: 40 },
{ nome: "Camila", idade: 18, ativo: true, premium: true, compras: 12 },
{ nome: "Rafaela", idade: 24, ativo: false, premium: false, compras: 5 },
{ nome: "Thiago", idade: 33, ativo: true, premium: true, compras: 27 },
{ nome: "Amanda", idade: 21, ativo: true, premium: false, compras: 8 },
{ nome: "Felipe", idade: 26, ativo: true, premium: true,compras: 16 },
{ nome: "Bruno", idade: 15, ativo: true, premium: false, compras: 1 },
{ nome: "Patrícia", idade: 40, ativo: true, premium: true, compras: 50 },
{ nome: "Eduardo", idade: 23, ativo: false, premium: true, compras: 14 },
{ nome: "Vanessa", idade: 32, ativo: true, premium: true, compras: 19 } ];

const usuariosValidos = usuarios.filter(usuarios => usuarios.idade >= 18 && usuarios.ativo && usuarios.premium && usuarios.compras >= 10);
console.log(usuariosValidos);
    