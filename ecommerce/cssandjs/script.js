var burguer = document.querySelector("#iburguer");
var clique = 0;

burguer.addEventListener("click", ()=>{
    var itenslista = document.querySelector("#listacelular");

    if(clique == 0){
        itenslista.style.display = "block"
        clique = 1;
    }else{
        itenslista.style.display = "none"
        clique = 0;
    }
})

var textoavaliacao1 = "O Melhor website ecommerce responsivo e moderno, vou já compartilhar com o maior número de pessoas para ajudar o canale crescer."
var textoavaliacao2 = "O site é muito intuitivo e fácil de navegar! Encontrei tudo o que precisava em poucos cliques, e o visual é super atrativo."
var textoavaliacao3 = "Simples e objetivo, o site oferece tudo o que promete. O layout é limpo e sem excessos, tornando a navegação bem agradável."
var textosavaliacoes = [textoavaliacao1, textoavaliacao2, textoavaliacao3];
var textoavaliacaoatual = document.querySelector("#texto-avaliacao")

var nomeavaliacao1 = "Artur Aurélio"
var nomeavaliacao2 = "João Pedro"
var nomeavaliacao3 = "Maria Eduarda"
var nomesavaliacoes = [nomeavaliacao1, nomeavaliacao2, nomeavaliacao3];
var nomeavaliacaoatual = document.querySelector("#nome-avaliacao")

var indicieatual = 0;

function mudartexto(){
    indicieatual = (indicieatual + 1) % textosavaliacoes.length;

    textoavaliacaoatual.innerHTML = textosavaliacoes[indicieatual];
    nomeavaliacaoatual.innerHTML = nomesavaliacoes[indicieatual];
}

setInterval(mudartexto, 5000);