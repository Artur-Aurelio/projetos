var botao = document.querySelector("#ienviar");

botao.addEventListener("click", ()=>{
    //var inicio = document.querySelector("#inum") --> funcionar linha 14
    var inicio = Number(document.querySelector("#inum").value);
    var fim = Number(document.querySelector("#ifinum").value);
    var passo = Number(document.querySelector("#ipasso").value);
    var resp = document.querySelector(".resp");

    var i = document.querySelector("#inum");
    var f = document.querySelector("#ifinum");


    //i.value.lenght se for = 0, é pq n tem nada
    if(passo == 0 || passo < 0 || i.value.lenght == 0 || f.value.length == 0){
        alert("Insira valores válidos")
        resp.innerHTML = "Impossível contar <br>";
        return;
    }

    resp.innerHTML = "";

    if(fim > inicio){
        while(inicio <= fim){
            resp.innerHTML += `${inicio} -> `;
            inicio += passo;
        }
    }else{
        while(inicio >= fim){
            resp.innerHTML += `${inicio} -> `;
            inicio -= passo; 
        }
    }
    resp.innerHTML += "FIM.";
})