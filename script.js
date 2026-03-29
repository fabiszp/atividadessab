
let btnIncrementar = document.getElementById("btnIncrementar");
let btnDecrementar = document.getElementById("btnDecrementar");
let valorContador = document.getElementById("valorContador");

let campoTexto = document.getElementById("campoTexto");
let numCaracteres = document.getElementById("numCaracteres");
let containerParagrafos = document.getElementById("containerParagrafos");

let btnAdicionarLista = document.getElementById("btnAdicionarLista");
let tipoLista = document.getElementById("tipoLista");
let containerListas = document.getElementById("containerListas");

let btnReset = document.getElementById("btnReset");


let contador = 0;

btnIncrementar.onclick = function() {
    contador++; 
    valorContador.textContent = contador;
};

btnDecrementar.onclick = function() {
    if (contador > 0) {
        contador--;
        valorContador.textContent = contador;
    } else {
   
        alert("O contador já está em zero!");
    }
};

campoTexto.oninput = function() {
    let conteudo = campoTexto.value;
    let semEspaco = conteudo.replace(/\s+/g, ''); 
    numCaracteres.textContent = semEspaco.length;
};


campoTexto.onkeydown = function(event) {
    if (event.key === "Enter") {

        let p = document.createElement("p");
     
        p.innerHTML = `Mensagem: <b>${campoTexto.value}</b>`;
        containerParagrafos.append(p);
        
    
        campoTexto.value = "";
        numCaracteres.textContent = "0";
    }
};

btnAdicionarLista.onclick = function() {
    let tag = tipoLista.value; 
    let novaLista = document.createElement(tag); 
    
 
    let itens = ["Item 1", "Item 2", "Item 3"];
    
   
    for (let i = 0; i < itens.length; i++) {
        let li = document.createElement("li");
        li.textContent = itens[i];
        novaLista.append(li); 
    }
    
    
    containerListas.append(novaLista);
};

btnReset.onclick = function() {
    
    contador = 0;
    

    valorContador.textContent = "0";
    campoTexto.value = "";
    numCaracteres.textContent = "0";
    

    containerParagrafos.innerHTML = "";
    containerListas.innerHTML = "";
    
    console.log("Sistema resetado.");
};