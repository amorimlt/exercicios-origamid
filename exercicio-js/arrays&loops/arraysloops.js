var brGanhouCopa = [1959, 1962, 1970, 1994, 2002];

for (var i = 0; i < brGanhouCopa.length; i++){
console.log(`O Brasil ganhou a copa de ${brGanhouCopa[i]}`);
}


var frutas = ['banana', 'maçã', 'pera', 'uva', 'melancia'];

for (var fruta = 0; fruta < frutas.length; fruta++) {
  console.log(frutas[fruta]);
    if(frutas[fruta] === 'pera') {
      break;
    }
}

var ultimaFruta = frutas [frutas.length -1];
console.log(ultimaFruta);