const produtos = [ {nome: "Mouse", preco: 80, estoque: true, categoria: "eletrônico"},
{nome: "Notebook", preco: 3500, estoque: true, categoria: "eletrônico"},
{nome: "Mesa", preco: 500, estoque: false, categoria: "móvel"},
{nome: "Monitor", preco: 900, estoque: true, categoria: "eletrônico"},
{nome: "Cadeira", preco: 1200, estoque: true, categoria: "móvel"},
{nome: "Tablet", preco: 1500, estoque: false, categoria: "eletrônico"},
{nome: "Smartphone", preco: 2800, estoque: true, categoria: "eletrônico"},
{nome: "Livro", preco: 40, estoque: true, categoria: "papelaria"},
{nome: "Webcam", preco: 250, estoque: true, categoria: "eletrônico"},
{nome: "TV", preco: 4200, estoque: true, categoria: "eletrônico"},
{nome: "Ventilador", preco: 300, estoque: false, categoria: "eletrodoméstico"},
{nome: "Impressora", preco: 850, estoque: true, categoria: "eletrônico"},
{nome: "Geladeira", preco: 5000, estoque: true, categoria: "eletrodoméstico"},
{nome: "Sofá", preco: 2400, estoque: true, categoria: "móvel"},
{nome: "Console", preco: 3800, estoque: true, categoria: "eletrônico"},
{nome: "Mousepad", preco: 30, estoque: true, categoria: "eletrônico"}, 
{nome: "Fogão", preco: 1900, estoque: false, categoria: "eletrodoméstico"},
{nome: "Ar-condicionado", preco: 3200, estoque: true, categoria: "eletrodoméstico"}, 
{nome: "Fone Bluetooth", preco: 450, estoque: true, categoria: "eletrônico"},
{nome: "Microfone", preco: 600, estoque: true, categoria: "eletrônico"} ];

const privilegiados = produtos.filter(produtos => produtos.preco >= 500 && produtos.estoque == true && produtos.categoria == "eletrônico");
console.log(privilegiados);


