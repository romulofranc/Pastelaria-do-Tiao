var titulo = document.querySelector(".encomendas");
titulo.textContent = "Lista de encomendas";

document.querySelector(".info-total").textContent = document.querySelector(".info-qtd").textContent * document.querySelector(".info-valor").textContent;

var linhas = document.querySelectorAll(".linhasTabela");

for(var i = 0; i < linhas.length; i++){
    
    linhas[i].querySelector(".info-total").textContent = linhas[i].querySelector(".info-qtd").textContent * linhas[i].querySelector(".info-valor").textContent;
}