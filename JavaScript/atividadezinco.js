function trocaImagem(){
    let imgPrincipal = document.getElementById("imgPrincipal");

    //modificador do elemento
    if(imgPrincipal.src.includes("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0qqj_wYyK2T3XhTYHJg0ETQ47qgwCUqUPqA&s")){
    imgPrincipal.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3VGtmYHKLeZfpqdHOkH7Cuuarw1M_YouhwQ&s");
    } else{
        imgPrincipal.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0qqj_wYyK2T3XhTYHJg0ETQ47qgwCUqUPqA&s");
    }
    }
