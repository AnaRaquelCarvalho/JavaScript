const numero = prompt(
    "Olá, Eu sou o Robô da Tabuada! \n" +
    "Informe o número que você deseja calculara a tabuada: "
)

let resultado = " "

for (let fator = 1; fator <= 20; fator++) {
  resultado += " -> " + numero + " x " + fator + " = " + (numero * fator) + "\n"
}

    alert("Resultado da Tabuada de " + numero + ":\n\n" + resultado)