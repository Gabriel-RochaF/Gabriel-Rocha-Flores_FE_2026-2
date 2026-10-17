window.onload = iniciar
function iniciar(){
    const areaPersonagens = document.getElementById("areaPersonagens")
    if (areaPersonagens != null){
        icones();
    }
}

function icones(){
    for (let index = 0; index < personagens.length; index++) {
        const divPersonagem = document.createElement('div');
        divPersonagem.setAttribute('class','personagem');

        const imgPersonagem = document.createElement('img');
        imgPersonagem.setAttribute('src', personagens[index].imagem);
        imgPersonagem.setAttribute('alt', personagens[index].nome);
        imgPersonagem.setAttribute('class', 'imagens_personagens');

        const nomePersonagem = document.createElement('h2');
        nomePersonagem.innerText = "Nome: " + personagens[index].nome

        const universoPersonagem = document.createElement('h3');
        universoPersonagem.innerText = "Universo: " + personagens[index].universo
        
        divPersonagem.appendChild(imgPersonagem)
        divPersonagem.appendChild(nomePersonagem)
        divPersonagem.appendChild(universoPersonagem)
        areaPersonagens.appendChild(divPersonagem)
    }
}
const dirImagens = "img/Personagens/"
function Personagem(nome, universo, imagem) {
    this.nome = nome
    this.universo = universo
    this.imagem = dirImagens + imagem
}

function adicionar(nome, universo, imagem){
    personagens = personagens.concat(new Personagem(nome,universo,imagem))
}
let personagens = new Array()
adicionar("Homen-aranha","Marvel","aranha.jpeg")
adicionar("Buzz LightYear","Toy Story/Pixar","buzz.jpeg")
adicionar("Freddy Fazbear","Five Nights at Freddy's","Freddy.jpg")
adicionar("jonesy","Fortnite","jonesy.png")
adicionar("Mario","Super Mario/Nintendo","Mario.jpeg")
adicionar("Pikachu","Pokemon","pikachu.jpeg")
adicionar("r2-d2","Star Wars","r2-d2.jpeg")
adicionar("Rexy","Jurassic Park","rex.jpeg")
adicionar("Steve","Minecraft","Steve.jpg")
adicionar("Wall-e","Wall-e/Pixar","wall-e.jpeg")



console.log(personagens[5].imagem)