//definindo as barras para que na hora que avancar mudar de cor
var barra01 = document.querySelector("#barra01");
var barra02 = document.querySelector("#barra02");
var barra03 = document.querySelector("#barra03");
var barras = [barra01, barra02, barra03];

//ficar mais facil para alterar se preciso as imgs
var img01 = "cssandjs/imagens/lamborg.png";
var img02 = "https://i.ibb.co/c19F43V/1.png"
var img03 = "cssandjs/imagens/carroverm1.png"
var imagens = [img01, img02, img03];
var imagematual = document.querySelector("#imgatual")

var nomecarro1 = "Lamborghini";
var nomecarro2 = "911 Turbo"
var nomecarro3 = "Ferrari"
var nomedoscarros = [nomecarro1, nomecarro2, nomecarro3]
var nomeatualcarro = document.querySelector("#nomecarro");

var indiceatual = 0;

//como são 2 setas, precisa fazer for.each
document.querySelectorAll(".avancar").forEach((cliqueseta)=>{
    cliqueseta.addEventListener("click", function(event){

        //detectar se foi clicada a seta da direta ou da esquerda
        
        var clique = event.target.id;
        var numero = document.querySelector(".numero")

        barras[0].classList.add("barraativa")

        switch(clique){
            case "setaesq":
                if(indiceatual == 0){
                    barras[indiceatual].classList.remove("barraativa")

                    indiceatual = imagens.length - 1;
        
                }else{
                    barras[0].classList.remove("barraativa")
                    barras[indiceatual].classList.remove("barraativa")
                    indiceatual--;
                }
                break;

            case "setadir":
                if(indiceatual == imagens.length-1){
                    indiceatual = 0;
                    barras[2].classList.remove("barraativa")
                }else{
                    barras[0].classList.remove("barraativa")
                    barras[indiceatual].classList.remove("barraativa")
                    indiceatual++;
                }
                break;
        }

        numero.innerHTML =`0${indiceatual + 1}`;
        barras[indiceatual].classList.add("barraativa")
        imagematual.src = imagens[indiceatual]
        nomeatualcarro.innerHTML = nomedoscarros[indiceatual]
    })
})