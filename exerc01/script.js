var data = new Date();
var horadia = data.getHours();
var minutodia = data.getMinutes();
var imagem = document.querySelector(".img")
var horamensagem = document.querySelector(".hora")
var estilo = document.createElement("link");//se fosse js seria "script"
estilo.rel = "stylesheet";//tipo

horamensagem.innerHTML = `Agora são ${horadia}:${minutodia} horas`

if(horadia >= 5 && horadia <= 11){
}else if(horadia >= 12 && horadia <= 17){
    imagem.src = "imagens/tarde.jpg";
    estilo.href = "estilos/tarde.css"
}else{
    imagem.src = "imagens/noite.jpg"
    estilo.href = "estilos/noite.css"
}

document.body.appendChild(estilo);