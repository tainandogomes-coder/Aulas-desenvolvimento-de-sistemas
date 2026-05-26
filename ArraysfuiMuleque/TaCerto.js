const produtos = [ { nome: "Mesa", preco: 700, estoque: true, categoria: "móvel" },
{ nome: "Mouse", preco: 80, estoque: true, categoria: "eletrônico" },
{ nome: "Notebook", preco: 3500, estoque: true, categoria: "eletrônico" },
{ nome: "TV", preco: 4200, estoque: false, categoria: "eletrônico" },
{ nome: "Monitor", preco: 900, estoque: true, categoria: "eletrônico" },
{ nome: "Headset", preco: 250, estoque: true, categoria: "eletrônico" },
{ nome: "Impressora", preco: 850, estoque: false, categoria: "eletrônico" },
{ nome: "Tablet", preco: 1800, estoque: true, categoria: "eletrônico" },
{ nome: "Cadeira", preco: 1200, estoque: true, categoria: "móvel" },
{ nome: "Roteador", preco: 300, estoque: true, categoria: "eletrônico" },
{ nome: "Smartphone", preco: 2500, estoque: false,categoria: "eletrônico" },
{ nome: "Webcam", preco: 150, estoque: true, categoria: "eletrônico" },
{ nome: "Geladeira", preco: 5000, estoque: true, categoria: "eletrodoméstico" },
{ nome: "Microfone", preco: 450, estoque: true, categoria: "eletrônico" },
{ nome: "Fogão", preco: 1800, estoque: false, categoria: "eletrodoméstico" },
{ nome: "SSD", preco: 380, estoque: true, categoria: "eletrônico" },
{ nome: "Fonte", preco: 320, estoque: true, categoria: "eletrônico" },
{ nome: "Console", preco: 3900, estoque: true, categoria: "eletrônico" },
{ nome: "Mousepad", preco: 30, estoque: true, categoria: "eletrônico" },
{ nome: "Carregador", preco: 70, estoque: false, categoria: "eletrônico" } ];

const Valido = produtos.find(produtos => produtos.estoque = true && produtos.preco < 500 && produtos.categoria == "eletrônico")
console.log(Valido);
