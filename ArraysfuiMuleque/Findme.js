const produtos = [ { nome: "Mouse", preco: 80 },
{ nome: "Teclado", preco: 150 }, 
{ nome: "Monitor", preco: 900 }, 
{ nome: "Cabo HDMI", preco: 35 },
{ nome: "Headset", preco: 220 }, 
{ nome: "Webcam", preco: 95 },
{ nome: "Notebook", preco: 3500 }, 
{ nome: "Pendrive", preco: 40 }, 
{ nome: "Impressora", preco: 700 },
{ nome: "Microfone", preco: 180 },
{ nome: "Tablet", preco: 1200 },
{ nome: "SSD", preco: 450 },
{ nome: "Fonte", preco: 320 },
{ nome: "Cadeira Gamer", preco: 950 },
{ nome: "Roteador", preco: 280 },
{ nome: "Cooler", preco: 90 },
{ nome: "Mousepad", preco: 25 },
{ nome: "Placa de Vídeo", preco: 4200 },
{ nome: "Memória RAM", preco: 380 },
{ nome: "Carregador", preco: 70 } ];

const umKmais = produtos.filter(produtos => produtos.preco > 1000)
console.log(umKmais);
