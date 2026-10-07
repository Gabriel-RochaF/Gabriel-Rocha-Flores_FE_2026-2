const areaPersonagens = document.getElementById("AreaPersonagens")

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
adicionar("jonesy","Fortnite","jonesy.jpg")
adicionar("Mario","Super Mario/Nintendo","Mario.jpg")
adicionar("Pikachu","Pokemon","pikachu.jpg")
adicionar("r2-d2","Star Wars","r2-d2.jpg")
adicionar("Rexy","Jurassic Park","rex.jpg")
adicionar("Steve","Minecraft","Steve.jpg")
adicionar("Wall-e","Wall-e/Pixar","wall-e.jpg")

for (let index = 0; index < personagens.length; index++) {
    const personagem = document.createElement('div')
    personagem.className = 'personagem'
    const imagem = document.createElement('img')
    imagem.setAttribute('src', personagens[index].imagem)
    /*const nome = document.createElement('h2')
    nome.innerText('Nome: ' + personagens[index].nome)
    const universo = document.createElement('h3')
    universo.innerText('Universo: ' + personagens[index].universo)*/
    personagem.after(imagem)
    /*personagem.append(nome)
    personagem.append(universo)*/
    areaPersonagens.appendChild(personagem)
}

console.log(personagens[5].imagem)