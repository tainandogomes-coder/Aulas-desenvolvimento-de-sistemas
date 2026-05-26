const alunos = [ { nome: "Ana", nota: 8 },
{ nome: "Carlos", nota: 9 },
{ nome: "Marina", nota: 10 },
{ nome: "João", nota: 6 },
{ nome: "Pedro", nota: 7 },
{ nome: "Julia", nota: 8 },
{ nome: "Lucas", nota: 5 },
{ nome: "Fernanda", nota: 9 },
{ nome: "Gabriel", nota: 10 },
{ nome: "Larissa", nota: 7 },
{ nome: "Ricardo", nota: 6 },
{ nome: "Camila", nota: 8 }, 
{ nome: "Rafaela", nota: 9 },
{ nome: "Thiago", nota: 10 }, 
{ nome: "Amanda", nota: 7 },
{ nome: "Felipe", nota: 4 },
{ nome: "Bruno", nota: 8 }, 
{ nome: "Patrícia", nota: 9 }, 
{ nome: "Eduardo", nota: 6 },
{ nome: "Vanessa", nota: 10 } ];

const nota = alunos.find(alunos => alunos.nota < 7);
console.log(nota);
