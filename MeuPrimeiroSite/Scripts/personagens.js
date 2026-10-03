//areaPersonagens = document.getElementById("AreaPersonagens")

const dirImagens = "img/Personagens/"
function Personagem(nome, universo, imagem) {
    this.nome = nome
    this.universo = universo
    this.imagem = dirImagens + imagem
}
let personagens = new Array()
personagens = personagens.concat(new Personagem("Homen-aranha","Marvel","aranha.jpeg"))
personagens = personagens.concat(new Personagem("Buzz LightYear","Toy Story/Pixar","buzz.jpeg"))
personagens = personagens.concat(new Personagem("Freddy Fazbear","Five Nights at Freddy's","Freddy.jpg"))
personagens = personagens.concat(new Personagem("jonesy","Fortnite","jonesy.jpg"))
personagens = personagens.concat(new Personagem("Mario","Super Mario/Nintendo","Mario.jpg"))
personagens = personagens.concat(new Personagem("Pikachu","Pokemon","pikachu.jpg"))
personagens = personagens.concat(new Personagem("r2-d2","Star Wars","r2-d2.jpg"))
personagens = personagens.concat(new Personagem("Rexy","Jurassic Park","rex.jpg"))
personagens = personagens.concat(new Personagem("Steve","Minecraft","Steve.jpg"))
personagens = personagens.concat(new Personagem("Wall-e","Wall-e/Pixar","wall-e.jpg"))
console.log(personagens[0].universo)