var ircadastro = document.querySelector("#ircadastro");
var souchines = document.querySelector("#souchines");
var cadastrocomum = document.querySelector(".cadastro");
var cadastrochines = document.querySelector(".cadastrochines");
var entrarcomum = document.querySelector("#ientrar");
var entrarchines = document.querySelector("#ientrarchines")
var acessochines = document.querySelector(".acessochines")
var armazenarusuario = [];
var armazenarsenha = [];

ircadastro.addEventListener("click", ()=>{
    cadastrocomum.style.display = "block";
    cadastrochines.style.display = "none";
    acessochines.style.display= "none";
})

souchines.addEventListener("click", ()=>{
    cadastrocomum.style.display = "none";
    cadastrochines.style.display = "block";
    acessochines.style.display= "none";
})

entrarcomum.addEventListener("click", ()=>{
    var usuario = document.querySelector("#iusuario");
    var senha = document.querySelector("#isenha");

    armazenarusuario.push(usuario.value);
    armazenarsenha.push(senha.value);

    usuario.value = '';
    usuario.focus()
    senha.value = '';
})

entrarchines.addEventListener("click", ()=>{
    var usuariochines = document.querySelector("#iusch");
    var senhachines = document.querySelector("#isenhach");
    var usuariocorreto = 'vietnamnaoepais'
    var senhacorreta = 'superidol'


    if(usuariochines.value != usuariocorreto || senhachines.value != senhacorreta){
        alert("Usuário ou senha chinesa INCORRETO")
    }else{
        var numeropessoas = document.querySelector(".numeropessoas");
        var contagempessoa = document.querySelector(".contagempessoa");

        acessochines.style.display= "block"
        cadastrochines.style.display = "none";
        numeropessoas.innerHTML += armazenarsenha.length;

        for(let i = 0; i < armazenarusuario.length; i++){
            contagempessoa.innerHTML += `<strong>Pessoa 0${i+1}</strong> <br> Usuário: ${armazenarusuario[i]} <br> Senha: ${armazenarsenha[i]} <br>`
            
        }
    }
})


