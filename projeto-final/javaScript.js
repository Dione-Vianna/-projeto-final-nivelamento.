var valor = 34; // var é uma variaveu que pode ter seu valor alterado
const nome = 'Dione'; // const é uma constante ela não pode ter seu valor alterado

if (valor == 34) {
  alert(nome);
} else {
  alert('Não é Dione');
}
// O if else é uma estrutura de condição que executa a afirmação,
// dentro do bloco, se determinada condição for verdadeira executa o que esta no if
// se for falsa, executa o que esta no else.

for (i = 0; 1 < valor; i++) {
  alert(nome);
}
while (n < valor) {
  n++;
  alert(nome);
}
//o for e while são loop , ou laço de repetição que executa uma rotina

function alerta() {
  alert(nome);
}
// funções é uma  instrução que executa uma tarefa um bloco de codigo que vai fazer alguma coisa assim que for chamado

var numero = 12; // essa variavel esta em um escopo global
function somar() {
  var x = 12; // essa variavel esta em um escopo local
  var soma = numero + x;
}

// Escopo é a acessibilidade de variáveis, funções e objetos em diferentes partes do código.
// Basicamente falando, o que determina quais são os dados que podem ser acessados
//  em uma determinada parte do código é o escopo, é tipo uma caixa e tudo que for
// criado nessa caixa pode ser acessado dentro dessa caixa

alert('ola mundo'); //isso é um input
prompt('Qual é o seu nome'); //isso é um output

// o que é input e output(alert, console.log, prompt)
// alert, console.log e document.write é -> output
// prompt -> input

var pessoa = ['Dione', 'Vitor', 'Weberson']; // isso é um array
// um array armazenar vários itens de forma ordenada, pilha, fila

var carro = {
  modelo: 'Fiat',
  ano: '2020',
  cor: 'Verde',
}; // isso é um objeto
//Um objeto é uma coleção de dados

// camelCase => Começa com minusculo é a proxima palavra em maiscula
// PascalCase => Cada palavra começa em maiúscula
// kibab-case => Tudo em minúsculo com um traço - entre palavras
// snake_case => Tufo minúsculo com underlaine _ entre palavras

// caminho absoluto => É o caminho completo C:\Users\dione\Desktop\projeto
// caminho relativo => É o caminho na pasta .\

//  && => Operadoror E
//  || => Operador OU
//  == => Operador de igualdade
//  != => Operador diferente

// O EPER serve para organizar o que devemos fazer, por onde começar,
// entender o projeto pra depois começa a trabalhar nele.
// Após entender podemos planejar como vamos trabalhar no projeto depois excutamos,
// e revisar.

// Entender, Planejar, Executar e Revisar

let aquiFila = [1];
aquiFila.push(2);
console.log(aquiFila);

aquiFila.shift();

aquiFila.push(3);
console.log(aquiFila);

//fila o primeiro que entra é o primeiro que sai

var aquiPilha = [1];
aquiPilha.push(2);
console.log(aquiPilha);

aquiPilha.pop();
aquiPilha.push(3);

console.log(aquiPilha);
// pilha os últimos serão os primeiros.

// Html é onde fica o código que o navegador reconhece
// JavaScript é a linguagem  de programação que usamos para poder manipular o Html
// CSS é a folha de estilo para fazer o html mais bonito a pintura no caso
