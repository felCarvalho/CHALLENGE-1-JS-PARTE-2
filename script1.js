//FUNCTIONS CHALLENGE#1!
///funções de seta com arguments(arrow function com arguments)


 //TESTE 1

 const scoreGolfinhos1 = 44;
 const scoreGolfinhos2 = 23;
 const scoreGolfinhos3 = 71;

 const scoreKoalas1 = 65;
 const scoreKoalas2 = 54;
 const scoreKoalas3 = 49;

 //TESTE 2

 /*const scoreGolfinhos1 = 85;
 const scoreGolfinhos2 = 54;
 const scoreGolfinhos3 = 41;

 const scoreKoalas1 = 23;
 const scoreKoalas2 = 34;
 const scoreKoalas3 = 27;*/

 //arrow function para retirar média do score dos koalas!
 const calAverage1 = (koalas1, koalas2, koalas3) => {
  console.log(koalas1, koalas2, koalas3);
  const resultMédia = (koalas1 + koalas2 + koalas3) / 3;
  console.log(resultMédia)
  return resultMédia
 };

const koalas = calAverage1(scoreKoalas1, scoreKoalas2, scoreKoalas3);

 //arrow function para retirar média do score dos Golfinhos!
const calAverage2 = (golfinhos1, golfinhos2, golfinhos3) => {
  console.log(golfinhos1, golfinhos2, golfinhos3);
  const resultMédia = (golfinhos1+ golfinhos2 + golfinhos3) / 3;
  console.log(resultMédia)
  return resultMédia
 };

const golfinhos = calAverage2(scoreGolfinhos1, scoreGolfinhos2, scoreGolfinhos3);

//aplicando os parametro de winner para  descobrir o vencedor!
function checandoGhanhador(koalas, golfinhos){
  if (koalas >= 2 * golfinhos) {
    console.log(`Koala winner ${koalas} vs ${golfinhos}`)
    //return `Koala winner ${koalas} vs ${golfinhos}`
  } else if (golfinhos >= 2 * koalas) {
    console.log(`Golfinhos winner ${golfinhos} vs ${koalas}`)
    //return `Golfinhos winner ${golfinhos} vs ${koalas}`
  } else {
    console.log(`Nenhuma equipe atingiu os requisitos necessários para sair como grande vencedor, boa sorte na proxima!`)
  }
};
checandoGhanhador(koalas, golfinhos);