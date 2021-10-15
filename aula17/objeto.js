let pessoa = {nome:'Julio',
sexo:'M',
peso: 90.2,
mudancapeso(p){
    this.peso += p
}}
pessoa.mudancapeso(-5.9)
console.log(`${pessoa.nome} pesa ${pessoa.peso} kg.`)