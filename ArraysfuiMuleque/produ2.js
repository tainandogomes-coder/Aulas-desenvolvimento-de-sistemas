const produtos = [ { nome: "Mouse" },
{ nome: "Teclado" },
{ nome: "Monitor" },
{ nome: "Notebook" },
{ nome: "Tablet" },
{ nome: "SSD" },
{ nome: "Fonte" },
{ nome: "Impressora" },
{ nome: "Webcam" },
{ nome: "Microfone" },
{ nome: "TV" },
{ nome: "Console" },
{ nome: "Smartphone" },
{ nome: "Roteador" },
{ nome: "Cooler" },
{ nome: "Pendrive" }, 
{ nome: "Memória RAM" }, 
{ nome: "Mousepad" },
{ nome: "Headset" },
{ nome: "Carregador" } ];

const tela = produtos.find(produtos => produtos.nome == "Monitor")
console.log(tela);
