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

btnFinalizar.onclick = () =>{
  let compra=0
  carrito.forEach((producto)=>{
compra=compra + producto.precio
  })
  alert("El monto total de su compra es: $"+compra)

}

