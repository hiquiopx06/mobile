// Seleção dos elementos
const display = document.querySelector("#displayInput");
const botaoIgual = document.querySelector(".igual");
const botaoPonto = document.querySelector(".ponto");
const botoesNumeros = document.querySelectorAll(".num");
const botoesOperadores = document.querySelectorAll(".operador");

// Variáveis globais
let operacaoAtual = "";
let operador = null;
let valorAnterior = "";
let calculando = false;

// Funções
const atualizaDisplay = () => {
display.value = operacaoAtual;
};

const insereNumero = (evento) => {
if (calculando) {
operacaoAtual = evento.target.textContent;
calculando = false;
} else {
operacaoAtual += evento.target.textContent;
}
atualizaDisplay();
};

const insereOperador = (evento) => {
if (operacaoAtual !== "") {
if (!calculando) {
if (operador !== null) calcula();
valorAnterior = operacaoAtual;
operacaoAtual = "";
}
operador = evento.target.textContent;
}
};

const calcula = () => {
let resultado = null;
const operandoAnterior = parseFloat(valorAnterior);
const operandoAtual = parseFloat(operacaoAtual);

switch (operador) {
case "+":
resultado = operandoAnterior + operandoAtual;
break;
case "-":
resultado = operandoAnterior - operandoAtual;
break;
case "*":
resultado = operandoAnterior * operandoAtual;
break;
case "/":
if (operandoAtual !== 0) {
resultado = operandoAnterior / operandoAtual;
} else {
alert("Erro: Divisão por zero não é permitida!");
return;
}
break;
}
document.addEventListener("DOMContentLoaded", function() {
    // Obtenha uma referência ao botão AC e ao campo de texto de exibição
    var acButton = document.getElementById("acButton");
    var display = document.getElementById("display");

    // Adicione um ouvinte de evento ao botão AC
    acButton.addEventListener("click", function() {
        // Limpe o conteúdo do campo de texto (definindo-o como "0")
        display.value = "0";
    });
});operacaoAtual = String(resultado);
valorAnterior = operacaoAtual;
calculando = true;
atualizaDisplay();
};

const inserePonto = () => {
if (operacaoAtual.indexOf(".") === -1) {
operacaoAtual += ".";
atualizaDisplay();
}
};

// EventListeners
botaoIgual.addEventListener("click", () => {
if (operador !== null && operacaoAtual !== "" && !calculando) {
calcula();
operador = null;
}
});
botaoPonto.addEventListener("click", inserePonto);
botoesNumeros.forEach((botao) => botao.addEventListener("click", insereNumero));
botoesOperadores.forEach((botao) =>
botao.addEventListener("click", insereOperador)
);
document.addEventListener("DOMContentLoaded", function() {
    // Obtenha uma referência ao campo de texto de exibição
    var display = document.getElementById("displayInput");
  
    // Obtenha todas as teclas da calculadora
    var buttons = document.querySelectorAll("button");
  
    // Adicione um ouvinte de evento para cada botão
    buttons.forEach(function(button) {
      button.addEventListener("click", function() {
        var buttonText = button.textContent;
  
        switch (buttonText) {
          case "AC":
            // Limpar o campo de texto (definindo-o como vazio)
            display.value = "";
            break;
          case "Delete":
            // Remover o último caractere do campo de texto
            display.value = display.value.slice(0, -1);
            break;
          default:
            // Adicionar o texto do botão ao campo de texto
            display.value += buttonText;
            break;
        }
      });
    });
  });