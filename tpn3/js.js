
//Ejercicio 1 
let auto =  {
    marca: 'Audi',
    modelo: 'A5',
    año: '2025',
    motor: 'L4 16v',
    tipodecombustible:'alto octanaje',
    color: 'Gris',
    imagen:'https://deals.carwow.es/image?filter%5Bbrand_slug%5D=audi&filter%5Bcolour%5D=Gris+Nardo+%28s%C3%B3lida%29&filter%5Bmodel_review_slug%5D=a5-sportback'
   }
   
   
   let div = document.querySelector('.div')
   
   
   div.innerHTML = `<h1>${auto.marca} ${auto.modelo} ${auto.año}
   <p>
   <h2> ${auto.motor}, ${auto.tipodecombustible}
   <p>
   <h2> ${auto.color}
   <p>
   <img src= "${auto.imagen}">`
   
   
   //Ejercicio 2
   
   
   let autos = [
       {
        marca: 'Toyota',
        modelo: 'Corolla',
        año: '2022',
        motor: '2.0L, 4 cilindros',
        tipodecombustible:'Nafta',
        color: 'Blanco',
        imagen:'https://autotest.com.ar/wp-content/uploads/2021/02/TOYOTA-COROLLA-GR-S-7.jpg'
       }, {
        marca: 'Ford',
        modelo: 'Mustang',
        año: '2021',
        motor: '5.0L V8',
        tipodecombustible:'Nafta',
        color: 'Rojo',
        imagen:'https://cdn.pixabay.com/photo/2017/09/20/00/28/ford-mustang-2767124_960_720.png'
       }, {
        marca: 'Volkswagen',
        modelo: 'Golf',
        año: '2020',
        motor: '1.4L turbo',
        tipodecombustible:'Nafta',
        color: 'Gris',
        imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeV2_mtDhwGIytuv2sp68f1BVUjyK3gqpl7Q&s'
       }
   ]
   
      
   let div2 = document.querySelector('.div2')
      
   let div3 = document.querySelector('.div3')
      
   let div4 = document.querySelector('.div4')


   /*for (let index = 0; index < autos.length; index++) {
       d

       
   }


   let divs = [document.querySelector('.div2'), document.querySelector('.div3'), document.querySelector('.div4')]
*/

   let divs = [document.querySelector('.div2'), document.querySelector('.div3'), document.querySelector('.div4')]


for (let index = 0; index < divs.length; index++) {
    divs[index].innerHTML = `<h1>${autos[index].marca} ${autos[index].modelo} ${autos[index].año}
    <p>
    <h2> ${autos[index].motor}, ${autos[index].tipodecombustible}
    <p>
    <h2> ${autos[index].color}
    <p>
    <img src= "${autos[index].imagen}">`
    
}


//Ejercicio 3


let computadoras = [
    {
        marca: 'Dell',
        modelo: 'Inspiron 15 3520',
        procesador: 'Intel Core i5-1235U',
        memoriaram: '8 GB',
        placadevideo: 'Integrada (Intel Iris Xe)',
        placamadre: 'Dell 0XYZ',
        almacenamieno: 'SSD 512 GB',
    }, {
        marca: 'HP',
        modelo: 'Pavilion Gaming TG01',
        procesador: 'AMD Ryzen 5 5600G',
        memoriaram: '16 GB',
        placadevideo: 'NVIDIA GTX 1650 (Dedicada)',
        placamadre: 'HP Erica6',
        almacenamieno: 'SSD 256 GB + HDD 1 TB',
    }, {
        marca: 'Lenovo',
        modelo: 'Legion 5',
        procesador: 'AMD Ryzen 7 5800H',
        memoriaram: '16 GB',
        placadevideo: 'NVIDIA RTX 3060 (Dedicada)',
        placamadre: 'Lenovo LNVNB161216',
        almacenamieno: 'SSD 1 TB',
    }
]


let divss = [document.querySelector('.div5'), document.querySelector('.div6'), document.querySelector('.div7')]


for (let index = 0; index < divss.length; index++) {
    divss[index].innerHTML = `<h1>${computadoras[index].marca} ${computadoras[index].modelo} 
    <p>
    <h2>${computadoras[index].procesador}, ${computadoras[index].memoriaram}, ${computadoras[index].placadevideo}, ${computadoras[index].almacenamieno}`
    
}
