var cont = 0;
var guardarnum = [];
var valaloc = document.querySelector(".valaloc");
var resp = document.querySelector(".resp");
var qnt = 0;
var rep1 = 0;

valaloc.style.fontSize = "12pt";

function calcmaior(n1){
    var m = n1[0];

    for(let i = 0; i < n1.length; i++){
        if(m < n1[i]){
            m = n1[i];
        }
    }
    return m;
}
function calcmenor(n2){
    var me = n2[0];

    for(let i = 0; i < n2.length; i++){
        if(me > n2[i]){
            me = n2[i];
        }
    }
    return me;
}
function soma(n3){
    var soma = 0;

    for(let i = 0; i < n3.length; i++){
        soma += n3[i];
    } 

    return soma;
}
function media(n4){
    var media;
    var soma = 0;

    for(let i = 0; i < n4.length; i++){
        soma += n4[i];
    } 

    media = soma/n4.length;

    return media;
}

document.querySelector("#ialocar").addEventListener("click", ()=>{
    var num = document.querySelector("#inum").value;
    var num2 = document.querySelector("#inum");

    if(num.length == 0 || Number(num) < 0 || Number(num) > 500){
        alert("INSIRA UM VALOR VÁLIDO")
    }else{
        if(Number(num) == guardarnum[cont-1]){
            alert("Numéro Repetido");
            return;
        }else{
            if(qnt > 0){//analisa se houve repeticao, se sim, apaga tudo
                valaloc.innerHTML = '';  
                qnt = 0//reiniciar
                cont = 0;//reiniciar o contador para reescrever o array
            }
            guardarnum[cont] = Number(num)
            valaloc.innerHTML += `Valor <strong>${guardarnum[cont]}</strong> alocado. <br>`;
            cont++;
        }
    }

    num2.value = "";//toda vez q envia, vai zerar o valor
    num2.focus();//fica piscando/volta pra escrever de novo
})

document.querySelector("#ianalisar").addEventListener("click", ()=>{
    qnt++;//ja foi mostrado, ou seja, vai repetir
    
    resp.innerHTML = "";

    if(guardarnum.length <= 1){
        resp.innerHTML += `Há ${guardarnum.length} números cadastrados; <br>`
    }else{
        resp.innerHTML += `Há ${guardarnum.length} números cadastrados; <br>`

        var maiorv = calcmaior(guardarnum);
        resp.innerHTML += `O maior valor informado foi ${maiorv}; <br>`

         var menorv = calcmenor(guardarnum);
        resp.innerHTML += `O menor valor informado foi ${menorv}; <br>`

        var somav = soma(guardarnum);
        resp.innerHTML += `A soma dos valores é ${somav}; <br>`

        var mediav = media(guardarnum);
        resp.innerHTML += `A média dos valores é ${mediav.toFixed(2)}. <br>`
    }
})

document.addEventListener("click", function (event){
    var clique = event.target.id

    if(clique == "ianalisar"){
        cont = 0;//garantir q vai zerar
    }
})