let opcao = "5"

do {
  opcao = prompt(
    "Seja bem-vindo(a)!\n" +
    "\nEscolha uma das opções abaixo:" +
    "\n1 - Opção Um -> Arroz, feijão, Bife e salada. " +
    "\n2 - Opção Dois -> Macarronada." +
    "\n3 - Opção Três -> Feijoada." +
    "\n4 - Opção Quatro -> Caldo" +
    "\n5 - Encerar"
  )

  switch (opcao) {
    case "1":
      alert("Você escolheu a opção 1 -> Arroz, feijão, Bife e salada.")
      break
    case "2":
      alert("Você escolheu a opção 2 -> Macarronada.")
      break
    case "3":
      alert("Você escolheu a opção 3 -> Feijoada.")
      break
    case "4":
      alert("Você escolheu a opção 4 -> Caldo.")
      break
    case "5":
      alert("Obrigado pela preferência! Encerrando o programa...")
      break
    default:
      alert("Entrada inválida! Escolha uma das cinco opções.")
  }
} while (opcao !== "5");