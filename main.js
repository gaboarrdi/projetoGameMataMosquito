//Definindo a alura/largura da janela aberta no navegador;
var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 10;

var criaMosquitoTempo = 1500;


var nivel = window.location.search;
nivel = nivel.replace('?', ' ');

    if (nivel === 'normal'){
        criaMosquitoTempo = 1500;
} else if (nivel === 'medio') {
        criaMosquitoTempo = 1000;
}else if (nivel === 'dificil') {
        criaMosquitoTempo = 750;
}

   function ajustarTela() {
    altura = window.innerHeight;
    largura = window.innerWidth;
       console.log(altura, largura);
   }

   ajustarTela();

   var cronometro = setInterval(function() {

	tempo -= 1;

	if(tempo < 0) {
		clearInterval(cronometro);
		clearInterval(mosquito);
		window.location.href = 'vitoria.html';
	} else {
		document.getElementById('cronometro').innerHTML = tempo;
	}
	
}, 1000)
   function posicaoRamdomica() {
       
 //remover o mosquito anterior (caso exista)
       if(document.getElementById('mosquito')) {
           document.getElementById('mosquito').remove()


           if(vidas > 3) {
        window.location.href= 'fim_de_jogo.html'
           } else {

               document.getElementById('life' + vidas).src = src="./img/coracao_vazio.png";
               vidas++
           }
        }
        
        
//Ajustando a posião da mosca na Tela do game;
        
        var posiçaoX = Math.floor(Math.random() * altura) - 50;
        var posiçaoY = Math.floor(Math.random() * largura) - 50;
        console.log(posiçaoX, posiçaoY);
        
        posiçaoX = posiçaoX < 0 ? 0 : posiçaoX;
        posiçaoY = posiçaoY < 0 ? 0 : posiçaoY;
        
// Criaçao do element HTML
    var mosca = document.createElement('img');
    mosca.src = './img/mosca.png';
    mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio() ;
    mosca.style.left = posiçaoY + 'px';
    mosca.style.top = posiçaoX + 'px';
    mosca.style.position = 'absolute';
    mosca.id = 'mosquito';
    mosca.onclick = function() {
        this.remove()
    }


    document.body.appendChild(mosca);
}

function tamanhoAleatorio() {
    var tamanho = Math.floor(Math.random() *3);
   switch (tamanho) {
        case 0:
            return 'mosca'
        case 1:
             return 'mosca1'
        case 2:
             return 'mosca2'
   }
}

function ladoAleatorio() {
    var tamanho = Math.floor(Math.random() *2);
   switch (tamanho) {
        case 0:
            return 'ladoA'
        case 1:
             return 'ladoB'
   }
}


