alert("Bienvenido a Pet Shop");
let compra = 0;
let i = 1;
let carrito =[]
let listado= []
const selectTag = document.getElementById('lista')
let productos = [
  {
    tipo:"Alimento",
    nombre: "Bolsa chica",
    kilos:1,
    precio:120
  },
  {
    tipo:"Alimento",
    nombre:"Bolsa mediana",
    kilos:5,
    precio:500
  },
  {
    tipo:"Alimento",
    nombre:"Bolsa grande",
    kilos: 10,
    precio: 840
  },
  {
    tipo:"Juguete",
    nombre:"Pelota",
    precio:150
  },
  {
    tipo:"Juguete",
  nombre: "Cuerda",
  precio:80
 },
 {
  tipo:"Juguete",
  nombre:"Hueso",
  precio:130
 },

]


productos.forEach(producto=>{
  const option = document.createElement('option')
  option.innerText = `${producto.nombre}: $${producto.precio}`
  selectTag.append(option)
})
 const boton = document.createElement('button')
 boton.innerText = "Agregar al carrito"
 document.body.append(boton)

 btnFinalizar = document.createElement('button')
 btnFinalizar.innerText ="Finalizar compra"
 document.body.append(btnFinalizar)


 boton.onclick=()=>{
  const agregarproducto= productos[selectTag.selectedIndex]
  carrito.push(agregarproducto)
 }


//   let h=0
// while (i <= 4) {

//   let menu = parseInt(
//     prompt("      Menu\n1- Alimentos\n2- Juguetes\n3- Contacto\n4- Salir")
//   );
//   switch (menu) {
//     case 1:

//       let eligioAlimentos = parseInt(
//         prompt(
//           "1- Bolsa 1kg $120\n2- Bolsa 5kg $500\n3- Bolsa 10kg $840\n4- Salir"
//         )
//       );
//       if (eligioAlimentos === 1) {
//         carrito.push(productos[0])
//         compra= compra + carrito[h].precio
//         h=h+1
//         break;
//       } else if (eligioAlimentos === 2) {
//         carrito.push(productos[1])
//         compra = compra + carrito[h].precio
//         h++
//         break;
//       } else if (eligioAlimentos === 3) {
//         carrito.push(productos[2])
//         compra = compra + carrito[h].precio;
//         h++
//         break;
//       } else if (eligioAlimentos === 4) {
//         i = 5;
//         break;
//       } else {
//         alert("Ingrese una opcion valida");
//         break;
//       }

//     case 2:
//       let eligioJuguetes = parseInt(
//         prompt("1- Pelota $150\n2- Cuerda $80\n3- Hueso $130\n4- Salir")
//       );
//       if (eligioJuguetes === 1) {
//         carrito.push(productos[3])
//         compra = compra + carrito[h].precio;
//         h++
//         break;
//       } if (eligioJuguetes === 2) {
//         carrito.push(productos[4])
//         compra = compra + carrito[h].precio;
//         h++
//         break;
//       } else if (eligioJuguetes === 3) {
//         carrito.push(productos[5])
//         compra = compra + carrito[h].precio;
//         h++
//         break;
//       } else if (eligioJuguetes === 4) {
//         i = 5;
//         break;
//       } else {
//         alert("Ingrese una opcion valida");
//         break;
//       }

//     case 3:
//       alert(
//         "Puedes contactarnos mediante\nWhatsapp: 095478452\nMail: petshop@gmail.com"
//       );
//       break;
//     case 4:
//       i = 5;
//       break;
//   }
// }


// let a=0
// while (a<=4){
// let verCarrito=parseInt(prompt("A continuacion puede ver nuestra lista de productos, seleccione la opcion deseada\n 1- Productos\n 2- Ver su Carrito\n 3- Salir"))

// if (verCarrito>3){
//   alert("Ingrese una opcion valida")
// }
//  else if (verCarrito === 1){
//   for(let i=0;i<productos.length;i++){
//     console.log(productos[i])
// }
//     }else if(verCarrito=== 2){
//       for(let i=0;i<carrito.length;i++){
//         console.log(carrito[i])
//     }
//   }
//     else if(verCarrito === 3){
//       break
//     }


// }