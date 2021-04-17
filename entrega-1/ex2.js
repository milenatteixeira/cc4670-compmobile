class VideoGame{
    constructor(marca, nControles, tipoMidia, ligado){
        this.marca = marca;
        this.nControles = nControles;
        this.tipoMidia = tipoMidia;
        this.ligado = ligado;
    }

    jogar(){
        if(!this.ligado){
            console.log('erro: videogame desligado');
        }else{
            console.log('*jogando*');
        }
    }

    ligar(estado){
        if(!estado){
            console.log('videogame já está ligado.');
        }else{
            this.ligado = true;
            console.log('videogame ligado.');
        }
    }

    salvarJogo(){
        if(!this.ligado){
            console.log('erro: videogame desligado');
        }else{
            console.log('*jogo salvo*');
        }
    }
}

var playstation = new VideoGame('sony', '2', 'dvd', false);
playstation.jogar();
playstation.ligar(true);
playstation.jogar();
playstation.salvarJogo();
console.log(playstation);
// {marca: 'sony', nControles: '2', tipoMidia: 'dvd' }