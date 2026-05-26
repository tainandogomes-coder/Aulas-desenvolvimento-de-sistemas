const produtos = [ { nome: "Mouse", preco: 80 },
{ nome: "Teclado", preco: 150 },
{ nome: "Monitor", preco: 900 },
{ nome: "Notebook", preco: 3500 },
{ nome: "Tablet", preco: 1800 },
{ nome: "SSD", preco: 380 },
{ nome: "Fonte", preco: 320 },
{ nome: "Impressora", preco: 850 },
{ nome: "Webcam", preco: 150 },
{ nome: "Microfone", preco: 450 },
{ nome: "TV", preco: 4200 },
{ nome: "Console", preco: 3900 },
{ nome: "Smartphone", preco: 2500 },
{ nome: "Roteador", preco: 300 },
{ nome: "Cooler", preco: 120 },
{ nome: "Pendrive", preco: 40 },
{ nome: "Memória RAM", preco: 450 },
{ nome: "Mousepad", preco: 30 },
{ nome: "Headset", preco: 250 },
{ nome: "Carregador", preco: 70 } ];

produtos.forEach(produtos =>
    console.log(`Produto: ${produtos.nome} | Preço: ${produtos.preco}`)    
)