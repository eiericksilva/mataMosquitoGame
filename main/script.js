

let width;
let hight;
let vidas = 1;
let tempo = 15;
let criarMosquitoTempo = 1500;

let nivel = window.location.search;
nivel = nivel.replace("?", '')


if(nivel === 'facil'){
    criarMosquitoTempo = 1500;
} else if(nivel === 'dificil'){
    criarMosquitoTempo = 1000;
} else if(nivel === 'muito_dificil'){
    criarMosquitoTempo = 750;
}

document.getElementById("cronometro").innerHTML = tempo;

function ajustarWindow (){
    width = window.innerWidth
    hight = window.innerHeight  
    
}

ajustarWindow()

let cronometro = setInterval(function(){
    
    tempo -= 1

    if(tempo < 0){
        clearInterval(cronometro);
        clearInterval(criarMosquito);
        alert("win")
        window.location.href = "vitoria.html"
    } else {
        document.getElementById("cronometro").innerHTML = tempo;

    }
}, 1000)



    function posicaoRandomica(){

        if(document.querySelector("#mosquito")){
            document.querySelector("#mosquito").remove()
        

            if(vidas > 3){

                window.location.href = "fim_de_jogo.html"
                alert ("Game Over")
            } else {
                document.getElementById("v"+vidas).src = "../imagens/coracao_vazio.png"
                vidas += 1;
            }
        }
 
        let positionX = Math.floor(Math.random() * width) - 90
        let positionY = Math.floor(Math.random() * hight) - 90
        
        if (positionX < 0){
            positionX = 0;
        }
        if (positionY < 0){
            positionY = 0;
        }
        
        
        let mosquito = document.createElement('img')
        mosquito.src = '../imagens/mosquito.png'
        
        mosquito.className=`${tamanhoAleatorio()} ${ladoAleatorio()}`
        mosquito.style.position = "absolute"
        mosquito.style.left = `${positionX}px`
        mosquito.style.top = `${positionY }px`
        mosquito.id="mosquito"
        

        mosquito.addEventListener('click', function(){
            this.remove()
        })
        
        document.body.appendChild(mosquito)
    
        console.log(tamanhoAleatorio())
        console.log(ladoAleatorio())


    }
posicaoRandomica()

let criarMosquito = setInterval(function(){
    posicaoRandomica()
}, criarMosquitoTempo)

//tamanho de mosquito variável

function tamanhoAleatorio (){
    /* random inicia no 0. Portanto o retorno será 0,1 ou 2. Por isso somei +1 para se adequar ao nome da Classe */
    let classe = Math.floor(Math.random() * 3)+1
    return `mosquito${classe}`
}

function ladoAleatorio(){
    let classe = Math.floor(Math.random()*2)
    switch(classe){
        case 0:
            return "ladoA";
        case 1:
            return "ladoB"; 
    }
    
}



