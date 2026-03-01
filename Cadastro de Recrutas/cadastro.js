const PrimeiroNome= prompt("Informe seu primeiro nome: ")
const Sobrenome= prompt("Informe seu Sobrenome: ")
const CampoEstudo= prompt("Informe seu campo de estudo: ")
const AnoDeNascimento= prompt("Informe seu ano de nascimento: ")

alert(
    "Recruta Cadastrado com Sucesso! \n" +
    "\n Nome Completo: " + PrimeiroNome + " " + Sobrenome + " " +
    "\n Campo de Estudo: " + CampoEstudo +
    "\n Idade: " + (2026 - AnoDeNascimento) 
);