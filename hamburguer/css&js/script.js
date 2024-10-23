var imgpeq = document.querySelectorAll(".imgpeq");
var imagens = ["css&js/imagens/ham01.png", "css&js/imagens/ham02.png", "css&js/imagens/ham03.png", "css&js/imagens/ham04.png"]
var img = document.querySelector(".imgmaior")
var indexatual = 0;

imgpeq.forEach(function(i){
    i.addEventListener("click", ()=>{
        document.addEventListener("click", function(event){
            var click = event.target.id;
            
            switch(click){
                case "imgpeq01":
                    img.src = imagens[0]
                    break;
                case "imgpeq02":
                    img.src = imagens[1]
                    break;
                case "imgpeq03":
                    img.src = imagens[2]
                    break;
                case "imgpeq04":
                    img.src = imagens[3]
            }
        })
    })
})

function troca(){
    var index = (indexatual + 1) % (imagens.length);
    /*
    1
    2
    3
    0
    */
   indexatual = index;
    img.src = imagens[index];
}
setInterval(troca, 4000)