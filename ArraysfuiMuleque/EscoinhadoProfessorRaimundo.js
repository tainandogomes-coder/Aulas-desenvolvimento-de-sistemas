const alunos = [ { nome: "Ana", nota: 8, frequencia: 90 },
{ nome: "Carlos", nota: 5, frequencia: 80 },
{ nome: "Marina", nota: 9, frequencia: 95 },
{ nome: "João", nota: 6, frequencia: 70 },
{ nome: "Pedro", nota: 7, frequencia: 76 },
{ nome: "Julia", nota: 10, frequencia: 100 },
{ nome: "Lucas", nota: 4, frequencia: 60 },
{ nome: "Fernanda", nota: 8, frequencia: 82 },
{ nome: "Gabriel", nota: 7, frequencia: 74 },
{ nome: "Larissa", nota: 9, frequencia: 91 },
{ nome: "Ricardo", nota: 5, frequencia: 85 },
{ nome: "Camila", nota: 8, frequencia: 77 },
{ nome: "Rafaela", nota: 6, frequencia: 73 },
{ nome: "Thiago", nota: 9, frequencia: 88 },
{ nome: "Amanda", nota: 7, frequencia: 79 },
{ nome: "Felipe", nota: 3, frequencia: 50 },
{ nome: "Bruno", nota: 8, frequencia: 81 },
{ nome: "Patrícia", nota: 10, frequencia: 99 },
{ nome: "Eduardo", nota: 6, frequencia: 76 },
{ nome: "Vanessa", nota: 9, frequencia: 93 } ];

const alunosPassados = alunos.filter(alunos => alunos.nota >= 7 && alunos.frequencia >= 75);
console.log(alunosPassados);
;

