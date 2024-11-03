var ircadastro = document.querySelector("#ircadastro");
var souchines = document.querySelector("#souchines");
var cadastrocomum = document.querySelector(".cadastro");
var cadastrochines = document.querySelector(".cadastrochines");
var entrarcomum = document.querySelector("#ientrar");
var entrarchines = document.querySelector("#ientrarchines")
var acessochines = document.querySelector(".acessochines")
var armazenarpessoas = [];

//objeto
class Pessoa{
    constructor(pusuario,psenha){
        this.usuario = pusuario,
        this.senha = psenha;
    }
    retornar(){
        return `Usuário: ${this.usuario} <br> Senha: ${this.senha}`
    }
}

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
    var p = new Pessoa(usuario.value, senha.value)

    armazenarpessoas.push(p)

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
        
        numeropessoas.innerHTML += armazenarpessoas.length;
        
        for(let i = 0; i < armazenarpessoas.length; i++){
            contagempessoa.innerHTML += `<strong>Pessoa 0${i+1}</strong> <br> ${armazenarpessoas[i].retornar()} <br>`
            
        }
    }
})


