 //verifica se é truthy
 function isTruthy(valor) {
  return !!valor; 
 }
 
 //perimetro quadrado
 function perimetroQuadrado(lado) {
    return lado * 4;
  }

  perimetroQuadrado(10);

  //nome completo
  function nomeCompleto(nome, sobrenome) {
   return `${nome} ${sobrenome}`;
  }

  nomeCompleto('Juliane', 'Amorim');

  //verifica se numero é par
  function numeroPar(numero) {
    var numero = numero % 2
    if(numero === 0) {
      return ('O número é par');
    } else {
      return ('O número é ímpar');
    }
  }

  //verifica tipo de dado
  function verifica(dado) {
    return (`Este dado é um(a) ${typeof dado}`);
  }
  
//aparece nome ao utilizar scroll
  addEventListener ('scroll', function(){
    console.log('Juliane Amorim');
  });

  //corrija o erro
  var totalPaises = 193;

  function precisoVisitar(paisesVisitados) {
    return console.log(`Ainda faltam ${totalPaises - paisesVisitados} países para visitar`);
  }

  function jaVisitei(paisesVisitados) {
    return console.log(`Já visitei ${paisesVisitados} do total de ${totalPaises} países`);
  }

  precisoVisitar(20);
  jaVisitei (30);
  
