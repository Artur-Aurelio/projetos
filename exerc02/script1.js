var anoatual = new Date().getFullYear();
var botao = document.querySelector("#ienviar");
var imagem = document.querySelector(".img");
var contimg = document.querySelector(".cont-img")
var texto = document.querySelector(".texto")

botao.addEventListener('click', ()=>{
    var anonasc = parseInt(document.querySelector("#iano").value);
    if(anonasc > anoatual){
        alert("Ano inválido")
    }else{
        var genselecionado = document.querySelector('input[name = "gen"]:checked');
        /*alert(genselecionado.value)tinha que colocar value=masc e fem nos input*/
        imagem.classList.add("format");
        var idade = anoatual - anonasc;
        texto.innerHTML = `Você tem <strong>${idade}</strong> anos. `
        if(genselecionado.value == "masc"){
            if(idade > 0 && idade <= 12){
                imagem.src = "https://blog-leiturinha-novo.s3.us-east-1.amazonaws.com/production/uploads/2022/07/iStock-1302266351-2-1.jpg"
                texto.innerHTML += "Você é uma criança"
            }else if(idade > 12 && idade <= 18){
                imagem.src = "https://www.psicologoeterapia.com.br/wp-content/uploads/transtornos-de-personalidade-em-adolescentes.jpg"
                texto.innerHTML += "Você é um adolescente"
            }else if(idade > 18 && idade <=65){
                imagem.src = "https://img.freepik.com/fotos-premium/jovem-adulto-bonito-sorrindo-parecendo-feliz-positivo-confiante-e-bem-sucedido-com-os-dois-polegares-para-cima_1194-215353.jpg"
                texto.innerHTML += "Você é um adulto"
            }else{
                imagem.src = "https://corasenior.com.br/wp-content/uploads/2020/09/idoso-sociedade-cora-residencial-para-idosos.jpg"
                texto.innerHTML += "Você é um velho"
            }
        }else{
            if(idade >0 && idade <= 12){
                imagem.src = "imagens/criancaf.jpg"
                texto.innerHTML += "Você é uma criança"
            }else if(idade > 12 && idade <= 18){
                imagem.src = "https://eugeniafialho.com/wp-content/uploads/2023/11/TDAH-4-1-e1699883478278.png"
                texto.innerHTML += "Você é uma adolescente"
            }else if(idade > 18 && idade <=65){
                imagem.src = "https://www.psitto.com.br/wp-content/uploads/2022/12/autismo-adulto.jpg"
                texto.innerHTML += "Você é um adulto"
            }else{
                imagem.src = "imagens/velha.jpg"
                texto.innerHTML += "Você é uma velha"
            }
        }
    }
})
