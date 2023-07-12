let num = [5, 8, 2, 9, 3]

// Ordenando em ordem crescrente
num.sort()

// Mostrando o vetor em ordem crescente 
console.log(num)

// Adiciona um elemento na posição definida entre colchete
num[5] = 4

// push() adiciona um elemento ao final do array
num.push(7)

// Mostra o total de elementos no vetor
num.length
console.log(`O vetor tem ${num.length} posições`)

// Pesquisar posição (Elemento) em um vetor.: Obs: O comando sort está ordenando o vetor
let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)
