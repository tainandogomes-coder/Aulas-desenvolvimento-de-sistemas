const produtos = [ { nome: "Mouse", preco: 80, estoque: true, categoria: "eletrônico" },
{ nome: "Teclado", preco: 150, estoque: true, categoria: "eletrônico" },
{ nome: "Monitor", preco: 900, estoque: true, categoria: "eletrônico" },
{ nome: "Notebook", preco: 3500, estoque: true, categoria: "eletrônico" },
{ nome: "Tablet", preco: 1800, estoque: true, categoria: "eletrônico" },
{ nome: "SSD", preco: 380, estoque: true, categoria: "eletrônico" },
{ nome: "Fonte", preco: 320, estoque: true, categoria: "eletrônico" },
{ nome: "Impressora", preco: 850, estoque: true, categoria: "eletrônico" },
{ nome: "Webcam", preco: 150, estoque: true, categoria: "eletrônico" },
{ nome: "Microfone", preco: 450, estoque: true, categoria: "eletrônico" },
{ nome: "TV", preco: 4200, estoque: true, categoria: "eletrônico" },
{ nome: "Console", preco: 3900, estoque: true, categoria: "eletrônico" },
{ nome: "Smartphone", preco: 2500, estoque: true,categoria: "eletrônico" },
{ nome: "Roteador", preco: 300, estoque: true, categoria: "eletrônico" },
{ nome: "Cooler", preco: 120, estoque: true, categoria: "eletrônico" },
{ nome: "Pendrive", preco: 40, estoque: true, categoria: "eletrônico" },
{ nome: "Memória RAM", preco: 450, estoque: true, categoria: "eletrônico" }, 
{ nome: "Mousepad", preco: 30, estoque: true, categoria: "eletrônico" },
{ nome: "Headset", preco: 250, estoque: true, categoria: "eletrônico" },
{ nome: "Mesa", preco: 700, estoque: true, categoria: "móvel" } ];

const preco = produtos.every(produtos => produtos.preco > 0)
console.log(preco);

const estoque = produtos.every(produtos => produtos.estoque == true)
console.log(estoque);

const cat = produtos.every(produtos => produtos.categoria == "eletrônico");
console.log(cat);