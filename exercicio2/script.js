






// O primeiro numero é maior que segundo? true
// O primeiro numero é igual ao segundo? false
// O primeiro numero é divisível pelo segundo? true
// O segundo numero é divisível pelo primeiro? true

// divisível = com resto zero


let primeiroNum = prompt("Digite um número")
let segundoNum = prompt("Digite outro número")

Number(primeiroNum)
Number(segundoNum)

console.log("O primeiro número é maior que o segundo?", primeiroNum > segundoNum)
console.log("O primeiro numero é igual ao segundo?", primeiroNum === segundoNum);

console.log(" O primeiro numero é divisível pelo segundo?", primeiroNum % segundoNum == 0);
console.log(" O segundo numero é divisível pelo primeiro?", segundoNum % primeiroNum == 0);



