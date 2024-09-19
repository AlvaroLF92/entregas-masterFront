class SlotMachine {
  coins: number;
  constructor() {

    // Establecemos un contador de monedas inicializado a 0 , que aumentará cada vez que "juguemos" , es decir, ejecutemos el método play.

    this.coins = 0;
  }

  play(): void {

    // Aumentamos las monedas al jugar

    this.coins += 1;

    // Generamos trés booleanos con un 50% de posibilidades de dar true o false.

    const roulette1 = Math.random() >= 0.5;
    const roulette2 = Math.random() >= 0.5;
    const roulette3 = Math.random() >= 0.5;

    // Comprobamos si los booleanos son todos "true" , en cuyo caso el jugador ha ganado y le "entregamos" las monedas acumuladas, en el contrario le desearemos suerte la próxima vez.

    if (roulette1 === true && roulette2 === true && roulette3 === true) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.coins = 0;
    } else {
      console.log("Good luck next time!!");
    }
  }
};

// Hacemos una isntancia de una máquina

const machine1 = new SlotMachine();


// Jugamos X número de veces.

machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();