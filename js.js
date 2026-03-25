let p = document.querySelector('p')


let colores =  ["Rosa","Violeta", "Azul", "Turquesa", "Marrón" ] 

p.textContent = colores[4]

console.log(colores[0]);
console.log(colores[4])

console.log(colores.length)

colores.push("Naranja")
console.log(colores);

colores.unshift("Rojo")
console.log(colores);

colores.pop()
console.log(colores);

colores.shift()

colores[1] = "Amarillo"

for (let i = 0; i < colores.length; i++) {
    console.log(colores[i])
    
}

let colorNuevo = prompt('Ingrese un color!')
let colorNuevoo = prompt('Ingrese otro color :)')
let colorNuevooo = prompt('Ingrese otro color más...porfavor ;)')

let nuevosColores = []

nuevosColores.push(colorNuevo)
nuevosColores.push(colorNuevoo)
nuevosColores.push(colorNuevooo)

console.log(nuevosColores)