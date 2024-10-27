var txt01 = "Só existe uma coisa que te separa dos teus objetivos: a sua capacidade."
var txt02 = "Ninguém precisa te humilhar. Um espelho já faz isso"
var txt03 = 'Muitos vão dizer que você não vai conseguir. Acredite neles.'
var txt04 = "Mulher quando é fácil é que nem moeda, ou é cara ou é coroa."
var txt05 = "Você não pode mudar o passado. Mas com certeza pode estragar o futuro"
var textos = [txt01, txt02, txt03, txt04, txt05];

var img01 = "https://s4.static.brasilescola.uol.com.br/be/conteudo/images/2-albert-einstein.jpg"
var img02 = "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS2RgKDdFoaeAiYz_3kBAkMSWHrrZhE64kTnL-O5rHXgCDoZQfM"
var img03 = "https://upload.wikimedia.org/wikipedia/commons/f/f1/Charles_Darwin_portrait.jpg"
var img04 = "https://e1.pxfuel.com/desktop-wallpaper/140/532/desktop-wallpaper-happy-birtay-stephen-hawking-pics-stephen-hawking-thumbnail.jpg"
var img05 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgCs6G0MEYJ_z_lYUeMKuSEF6ObisvWAlX3w&s" 
var imagens = [img01, img02, img03, img04, img05]

var nomeimg01 = "Albert Einstein"
var nomeimg02 = "Nikola Tesla"
var nomeimg03 = "Charles Darwin"
var nomeimg04 = "Stephen Hawking"
var nomeimg05 = "Nelson Mandela"
var nomeimagens = [nomeimg01, nomeimg02, nomeimg03, nomeimg04, nomeimg05]

var indexatual = 0;

function mudartudo(){
    var falas = document.querySelector(".fala");
    var imgs = document.querySelector("#img");
    var nomeimgs = document.querySelector(".nomeimg");
    indexatual = (indexatual + 1) % textos.length;

    falas.innerHTML = textos[indexatual];
    imgs.src = imagens[indexatual];
    nomeimgs.innerHTML = nomeimagens[indexatual];
}
setInterval(mudartudo, 6000);