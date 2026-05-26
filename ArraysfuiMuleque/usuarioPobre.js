const usuarios = [ { nome: "Ana", idade: 22, ativo: true, compras: 15 },
{ nome: "Carlos", idade: 17, ativo: true, compras: 2 },
{ nome: "Marina", idade: 30, ativo: false, compras: 22 },
{ nome: "João", idade: 28, ativo: true, compras: 11 },
{ nome: "Pedro", idade: 19, ativo: true, compras: 9 },
{ nome: "Julia", idade: 25, ativo: true, compras: 35 },
{ nome: "Lucas", idade: 16, ativo: true, compras: 1 },
{ nome: "Fernanda", idade: 27, ativo: false, compras: 18 },
{ nome: "Gabriel", idade: 31, ativo: true, compras: 13 },
{ nome: "Larissa", idade: 20, ativo: true, compras: 7 },
{ nome: "Ricardo", idade: 29, ativo: true, compras: 40 },
{ nome: "Camila", idade: 18, ativo: true, compras: 12 },
{ nome: "Rafaela", idade: 24, ativo: false, compras: 5 },
{ nome: "Thiago", idade: 33, ativo: true, compras: 27 },
{ nome: "Amanda", idade: 21, ativo: true, compras: 8 }, 
{ nome: "Felipe", idade: 26, ativo: true, compras: 16 },
{ nome: "Bruno", idade: 15, ativo: true, compras: 1 },
{ nome: "Patrícia", idade: 40, ativo: true, compras: 50 },
{ nome: "Eduardo", idade: 23, ativo: false, compras: 14 },
{ nome: "Vanessa", idade: 32, ativo: true, compras: 19 } ];

const p = usuarios.some(usuarios => usuarios.ativo == false )
console.log(p);

const o = usuarios.some(usuarios => usuarios.idade < 18)
console.log(o);

const b = usuarios.some(usuarios => usuarios.compras < 3)
console.log(b);


