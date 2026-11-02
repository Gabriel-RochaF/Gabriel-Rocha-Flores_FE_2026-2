window.onload = iniciar

function iniciar(){
    const areaPersonagens = document.getElementById("areaPersonagens")
    const jogoMemoria = document.getElementById("jogoMemoria")
    if (localStorage.getItem('melhorTentativa') != null){
        melhorTentativa = localStorage.getItem('melhorTentativa')
    }
    if (areaPersonagens != null){
        icones();
    } else if (jogoMemoria != null){
        memoria();
    }

}

let melhorTentativa;
let cartasviradas = [];
let bloquearClique = false;
let tentativas= 0;
let paresAcertados = 0;
function memoria(){
    const copia = [...personagens];
    for (let i = copia.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    selecionados = []
    for (let index = 0; index < 8; index++) {
        selecionados[index] = copia.shift();
    }
    selecionadosCopia = [...selecionados];
    a = 0
    while (a < 16){
        

        const imgPersonagem = document.createElement('img');
        
        imgPersonagem.setAttribute('class', 'imagens_personagens');
        
        s = selecionados.length 
        c = selecionadosCopia.length
        aleatorio = Math.round(Math.random())

        ordemFinal = []
        if (aleatorio == 1 && s > 0){
            s--
            ordemFinal[a] = selecionados.shift();
            imgPersonagem.setAttribute('src', ordemFinal[a].imagem);
            imgPersonagem.setAttribute('alt', ordemFinal[a].nome);
            
        } else if ( c > 0){
            c--
            for (let i = selecionadosCopia.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [selecionadosCopia[i], selecionadosCopia[j]] = [selecionadosCopia[j], selecionadosCopia[i]];
            }
            ordemFinal[a] = selecionadosCopia.shift();
            imgPersonagem.setAttribute('src', ordemFinal[a].imagem);
            imgPersonagem.setAttribute('alt', ordemFinal[a].nome);
            
        } else if (s > 0) {
            s--
            for (let i = selecionados.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [selecionados[i], selecionados[j]] = [selecionados[j], selecionados[i]];
            }
            ordemFinal[a] = selecionados.shift();
            imgPersonagem.setAttribute('src', ordemFinal[a].imagem);
            imgPersonagem.setAttribute('alt', ordemFinal[a].nome);
            
        }
        const divPersonagem = document.createElement('div');
        divPersonagem.setAttribute('class','personagem');
        divPersonagem.classList.add('carta');
        divPersonagem.addEventListener('click', virarCarta);
        divPersonagem.appendChild(imgPersonagem);
        jogoMemoria.appendChild(divPersonagem);
        a++
    }
}
function virarCarta(evento){
    const cartaSelecionada = evento.currentTarget;

    if (cartaSelecionada.classList.contains('carta-desvirada')) return;
    if (bloquearClique) return;
    if (cartaSelecionada === cartasviradas[0]) return;
    
    cartaSelecionada.classList.add('carta-desvirada');

    cartasviradas.push(cartaSelecionada);

    if (cartasviradas.length === 2) {
        bloquearClique = true;
        verificarPar();        
    }
}

function verificarPar() {
    const carta1 = cartasviradas[0];
    const carta2 = cartasviradas[1];
    imagem1 = carta1.querySelector('img').src
    imagem2 = carta2.querySelector('img').src
    tentativas ++;
    if (imagem1 === imagem2) {
        
        cartasviradas = [];
        bloquearClique = false;
        paresAcertados ++
        console.log(paresAcertados)
        if (paresAcertados === 8) {
            if (melhorTentativa != null){
                if (melhorTentativa > tentativas){
                    melhorTentativa = tentativas
                    localStorage.setItem('melhorTentativa', melhorTentativa);
                }
            } else {
                melhorTentativa = tentativas
                localStorage.setItem('melhorTentativa', melhorTentativa);
            }
            telaVitoria = document.getElementById("tela-vitoria");
            telaVitoria.style.display = "block";

            const ptentativas = document.createElement('p');
            ptentativas.innerText = "Em " + tentativas + " tentativas"
            telaVitoria.appendChild(ptentativas)

            const pMelhorTentativa = document.createElement('p');
            pMelhorTentativa.innerText = "melhor desempenho: " + melhorTentativa
            telaVitoria.appendChild(pMelhorTentativa)

            const botaoResetar = document.createElement('button')
            botaoResetar.innerText = "Jogar novamente"
            botaoResetar.id = "resetar"
            botaoResetar.onclick = function() {
                window.location.reload();
            };
            telaVitoria.appendChild(botaoResetar)
        }
    } else {
        
        bloquearClique = true;

        setTimeout(() => {
        
        carta1.classList.remove('carta-desvirada');
        carta2.classList.remove('carta-desvirada');

        
        cartasviradas = [];
        bloquearClique = false;
        }, 1000); 
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
adicionar("Woody","Toy Story/Pixar","woody.jpg")
adicionar("Freddy Fazbear","Five Nights at Freddy's","Freddy.jpg")
adicionar("Mario","Super Mario/Nintendo","Mario.jpeg")
adicionar("Luigi","Super Mario/Nintendo","luigi.png")
adicionar("Steve","Minecraft","Steve.jpg")
adicionar("r2-d2","Star Wars","r2-d2.jpeg")
adicionar("Darth Vader", "Star Wars","darthVader.jpeg")
adicionar("Homer Simpson", "Os Simpsons","homer.jpg")
adicionar("Embananado", "Fortnite","embananado.png")
adicionar("jonesy","Fortnite","jonesy.png")
adicionar("Wall-e","Wall-e/Pixar","wall-e.jpeg")
adicionar("Goku","Dragon Ball","goku.jpg")
adicionar("Vegeta","Dragon Ball","vegeta.jpg")
adicionar("Link","The legend of Zelda","Link.png")
adicionar("Superman", "DC","SuperHomen.jpeg")
adicionar("Batman", "DC","batman.jpg")
adicionar("Rexy","Jurassic Park","rex.jpeg")
adicionar("Pikachu","Pokemon","pikachu.jpeg")
adicionar("Ash Ketchum", "Pokemon","ash.png")

