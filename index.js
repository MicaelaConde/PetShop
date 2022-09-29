let carrito = [];
let listado = [];
const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('form-carrito');

let stockproductos = [
  {
    id: 1,
    tipo: "Alimento",
    nombre: "Bolsa chica",
    img: "/imagenes/productos/comida/comida1.png",
    kilos: 1,
    precio: 120,
  },
  {
    id: 2,
    tipo: "Alimento",
    nombre: "Bolsa mediana",
    img: "imagenes/productos/comida/comida1.png",
    kilos: 5,
    precio: 500,
  },
  {
    id: 3,
    tipo: "Alimento",
    nombre: "Bolsa grande",
    img: "imagenes/productos/comida/comida1.png",
    kilos: 10,
    precio: 840,
  },
  {
    id: 4,
    tipo: "Juguete",
    nombre: "Pelota",
    img: "imagenes/productos/juguetes/pelotatr.png",
    precio: 150,
  },
  {
    id: 5,
    tipo: "Juguete",
    nombre: "Cuerda",
    img: "imagenes/productos/juguetes/cuerdatr.png",
    precio: 80,
  },
  {
    id: 6,
    tipo: "Juguete",
    nombre: "Hueso",
    img: "imagenes/productos/juguetes/huesotr.png",
    precio: 130,
  },
];

stockproductos.forEach((producto) => {
  const div = document.createElement("div");
  div.classList.add("productos");
  div.innerHTML = `
  <img src=${producto.img} alt ="">
  <h3>${producto.nombre}<h3>
  <p>${producto.tipo}</p>
  <p>precio:$ ${producto.precio}</p>
  <button id="agregar${producto.id}" class="btn-agregar">Agregar</button>
  `;

  contenedorProductos.appendChild(div);
  const boton = document.getElementById(`agregar${producto.id}`);
  boton.addEventListener("click", () => {
    agregarAlCarrito(producto.id);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `Se agrego el producto ${producto.nombre} al carrito`,
      showConfirmButton: false,
      timer: 1500
    })
   
  });

});

const agregarAlCarrito = (prodID) => {
  const item = stockproductos.find((prod) => prod.id === prodID);
  carrito.push(item);
  actualizarCarrito();
  console.log(carrito);
};

const eliminarDelCarrito = (prodID) => {
  const item = carrito.find((prod) => prod.id === prodID)
  const indice = carrito.indexOf(item)
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: `Se elimino el producto ${carrito[indice].nombre} del carrito`,
    showConfirmButton: false,
    timer: 1500
  })
  carrito.splice(indice,1)
  actualizarCarrito()
 
}

const actualizarCarrito= ()=>{
  contenedorCarrito.innerHTML=""
  carrito.forEach ((prod) => {
    const div = document.createElement('div')
    div.innerHTML=`
    <p>${prod.nombre}</p>
    <p>Precio: ${prod.precio}</p>
    <button onclick ="eliminarDelCarrito(${prod.id})" ></button>
    `

    contenedorCarrito.appendChild(div)
 
   
  })
}
