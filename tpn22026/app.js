
//Ejercicio1 

let frutas = ['Coco', 'Uva', 'Arandanos']
frutas.push('Tomate')
frutas.unshift('Manzana')
frutas.pop()
frutas.shift()
console.log(frutas)

//Ejercicio 2

let nombres = ['Ulises', 'Vito', 'Matilda']
console.log(frutas.length)
nombres.push('Luisana', 'Maylen')
console.log(nombres.length)

//Ejercicio 3

let numeros = [3, 8, 9, 5, 10]
let suma = 0
for (let index = 0; index < numeros.length; index++) {
    suma += numeros[index]
}
console.log(suma)

//Ejercicio 4

let p = document.querySelector('p')

let palabras = []
palabras.push(prompt('Escribe una palabra!'))
palabras.push(prompt('Escribe otra palabra!!'))
palabras.push(prompt('Escribe una más :)'))
palabras.push(prompt('Ya falta poco! Una más'))
palabras.push(prompt('La última palabra!! :))'))
p.textContent = palabras


//Ejercicio 5
let parrafo = document.querySelector('.parrafo')

let numeros5 =[]

numeros5.push(prompt('Escribe un número'))
numeros5.push(prompt('Escribe otro número!'))
numeros5.push(prompt('Escribe uno más!'))
numeros5.push(prompt('Yaa, casi casi el últimoo'))
numeros5.push(prompt('El último :))'))

for (let index = 0; index < numeros5.length; index++) {
    if (numeros5[index] >= 100) {
        parrafo.innerHTML += `<b>${' ' + numeros5[index]}</b>`;
    } else {
        parrafo.innerHTML += ' ' + numeros5[index]
    }
    
}