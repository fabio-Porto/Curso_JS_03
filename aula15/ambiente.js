let num = [5,6,9,7,5,1,4,2,9]
/*
num[9] = 11

num.push = 7

console.log(num)
num.sort()
console.log(num)
*/
/*
num[0] = 4
console.log(num)
num.sort()
console.log(num)
*/
/*
for (let n = 0; n < num.length; n++) {
console.log(`A posicao ${n} possui o valor ${num[n]}`)
}
*/
for (let n in num) {
    console.log(`A posicao ${n} possui o valor ${num[n]}`)
}
console.log(`O vetor tem ${num.length} posicoes.`)
console.log(`O primeiro valor ${num[0]}`)
let posicao = num.indexOf(6)
if (posicao == -1) {
    console.log(`Este valor nao se encontra no vetor!`)
}else {
    console.log(`Este valor esta na posicao ${posicao}`)
}