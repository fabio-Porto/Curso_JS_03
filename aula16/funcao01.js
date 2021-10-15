function parimpar(num) {
    if (num % 2 == 0) {
        return 'par'
        //console.log(`O numero ${num} e par.`)
    } else {
        return 'impar'
        //console.log(`O numero ${num} e impar.`)
    }
}
/*
let result = parimpar(3)
console.log(result)
*/
console.log(`O numero e ${parimpar(3554)}.`)