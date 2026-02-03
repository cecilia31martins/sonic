const sonicElemento = document.querySelector('.sonic');
const eggman = document.querySelector('.eggman');
const fundo = document.querySelector('.fundo');


class Personagem {
    constructor(srcImagem, vida) {
        this.src = srcImagem;
        this.vida = vida;
    }
}


class Sonic extends Personagem { 
    constructor(srcImagem) {
        super(srcImagem, 3); 
    }

    pular() { 
        sonicElemento.classList.add('jump');
        sonicElemento.src = "./Arquivos/sonic-jump.gif";

        setTimeout(() => {
            sonicElemento.classList.remove('jump');
            sonicElemento.src = "./Arquivos/sonic.gif";
        }, 900);
    }

    colidir() { 
        this.vida--; 

        sonicElemento.style.animation = 'none';
        sonicElemento.src = "./Arquivos/Sonic-Loss.gif";
        sonicElemento.style.width = '240px';
    }
}


const sonic = new Sonic(sonicElemento.src);

document.addEventListener('click', () => {
    sonic.pular();
});


setInterval(() => {
    const eggmanPosition = eggman.offsetLeft;
    const sonicPosition = +window
        .getComputedStyle(sonicElemento)
        .bottom.replace("px", "");

    if (eggmanPosition <= 110 && eggmanPosition > 0 && sonicPosition < 220) {
        eggman.style.animation = "none";
        eggman.style.left = `${eggmanPosition}px`;

        sonic.colidir();
        fundo.src = "./Arquivos/GameoverSMB-1.png";
    }
}, 10);
