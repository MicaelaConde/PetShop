let compra = 0;
let i = 1;
let carrito = [];
let listado = [];
const contenedorProductos= document.getElementById('contenedor-productos')

let stockproductos = [
  {
    id: 1,
    tipo: "Alimento",
    nombre: "Bolsa chica",
    img:'/imagenes/productos/comida/comida1.png',
    kilos: 1,
    precio: 120,
  },
  {
    id: 2,
    tipo: "Alimento",
    nombre: "Bolsa mediana",
    img:'imagenes/productos/comida/comida1.png',
    kilos: 5,
    precio: 500,
  },
  {
    id:3,
    tipo: "Alimento",
    nombre: "Bolsa grande",
    img:'imagenes/productos/comida/comida1.png',
    kilos: 10,
    precio: 840,
  },
  {
    id:4,
    tipo: "Juguete",
    nombre: "Pelota",
    img:'imagenes/productos/juguetes/pelotatr.png',
    precio: 150,
  },
  {
    id:5,
    tipo: "Juguete",
    nombre: "Cuerda",
    img:'imagenes/productos/juguetes/cuerdatr.png',
    precio: 80,
  },
  {
    id:6,
    tipo: "Juguete",
    nombre: "Hueso",
    img:'imagenes/productos/juguetes/huesotr.png',
    precio: 130,
  },
];

stockproductos.forEach((producto) => {
  const div = document.createElement('div')
  div.classList.add('productos')
  div.innerHTML=`
  <img src=${producto.img} alt ="">
  <h3>${producto.nombre}<h3>
  <p>${producto.tipo}</p>
  <p>precio:$ ${producto.precio}</p>
  <button id="agregar${producto.id}" class="btn-agregar">Agregar</button>
  `

  contenedorProductos.appendChild(div)
  const boton= document.getElementById(`agregar${producto.id}`)
  boton.addEventListener('click',() =>{
    agregarAlCarrito(producto.id)
  })
});

const agregarAlCarrito =(prodID) =>{
 const item = stockproductos.find((prod) => prod.id===prodID)
  carrito.push(item)
  console.log(carrito)
}
