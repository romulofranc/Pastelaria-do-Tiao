var botaoAdicionar = document.querySelector("#adicionar-encomenda");


botaoAdicionar.addEventListener("click", function(event){
   event.preventDefault();
   console.log("Agora sim, o botão foi clicado!");
   linha.appendChild(coluna);
});

function Nova(){
   var Tabela = document.querySelector(".tabela");

   //insere uma nova linha
   var linha = Tabela.insertRow();

   //inserir celula nas linhas
   var celula1 = linha.insertCell(0);
   var celula2 = linha.insertCell(1);
   var celula3 = linha.insertCell(2);
   var celula4 = linha.insertCell(3);
   var celula5 = linha.insertCell(4);

   var nome = document.getElementById("idNome").value;
   var prod = document.getElementById("idProduto").value;
   var qtd = parseInt(document.getElementById("idQtd").value);
   var unit = parseFloat(document.getElementById("idUnitario").value);

   celula1.textContent = nome;
   celula2.textContent = prod;
   celula3.textContent = qtd;
   celula4.textContent = formata(unit);
   celula5.textContent = formata(calculaTotal(qtd, unit));
}