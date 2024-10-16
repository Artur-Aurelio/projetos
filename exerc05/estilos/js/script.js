var botao = document.querySelector("#ienviar");
var resp = document.querySelector(".resp")


botao.addEventListener("click", ()=>{
    resp.innerHTML = "";//apaga oq ja foi escrito
    var num = Number(document.querySelector("#inum").value);
    var n = document.querySelector("#inum");
    var mult;

    resp.style.textAlign = "center";

    if(n.value.length == 0){
        alert("ATENÇÃO, informe um número");
        return;
    }else{
        for(var i = 1; i <= 10; i++){
            mult = i*num;
            resp.innerHTML += `${num} x ${i} = ${mult} <br>`;   
        }
    }
})