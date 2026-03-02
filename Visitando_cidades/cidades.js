const turista = prompt("E aí, turista! Qual é o seu nome?")
let cidades = ""
let contagem = 0

// Convertemos a resposta para minúsculo para aceitar "Sim", "sim" ou "SIM"
let continuar = prompt("Você visitou alguma cidade? (Sim/Não)").toLowerCase()

while (continuar === "sim") {
  let cidade = prompt("Qual é o nome da cidade visitada?")
  
  // Usando Template Literals para organizar a string
  cidades += ` - ${cidade}\n`
  contagem++
  
  continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)").toLowerCase()
}

// Exibição final mais limpa
alert(
  `Turista: ${turista}` +
  `\nQuantidade de cidades visitadas: ${contagem}` +
  `\nCidades visitadas:\n${cidades}`
)