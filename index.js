let carrito = [];
let listado = [];
const contenedorProductos = document.getElementById("contenedor-productos");
const btnCarrito = document.getElementById("miCarrito");
const modalContainer = document.getElementById("modal-container");
const btnClose= document.getElementById("btnclose")
const modal=document.getElementById("modal");
const btnFetch= document.getElementById('btn-fetch');
const random= document.getElementById('img-random')
let stockproductos = [
  {
    id: 1,
    tipo: "Alimento Perros",
    nombre: "Bolsa chica",
    img: "/imagenes/productos/comida/comidaPerro.png",
    kilos: 1,
    precio: 120,
  },
  {
    id: 2,
    tipo: "Alimento Perros",
    nombre: "Bolsa mediana",
    img: "imagenes/productos/comida/comidaPerro.png",
    kilos: 5,
    precio: 500,
  },
  {
    id: 3,
    tipo: "Alimento Perros",
    nombre: "Bolsa grande",
    img: "imagenes/productos/comida/comidaPerro.png",
    kilos: 10,
    precio: 840,
  },
  {
    id: 4,
    tipo: "Juguete",
    nombre: "Pelota",
    img: "imagenes/productos/juguetes/perros/pelotatr.png",
    precio: 150,
  },
  {
    id: 5,
    tipo: "Juguete",
    nombre: "Cuerda",
    img: "imagenes/productos/juguetes/perros/cuerdatr.png",
    precio: 80,
  },
  {
    id: 6,
    tipo: "Juguete",
    nombre: "Hueso",
    img: "imagenes/productos/juguetes/perros/huesotr.png",
    precio: 130,
  },
  {
    id: 7,
    tipo: "Alimento Gatos",
    nombre: "Bolsa Grande",
    img: "imagenes/productos/comida/comidaGato.png",
    precio: 180,
  },
  {
    id: 8,
    tipo: "Alimento Gatos",
    nombre: "Bolsa Mediana",
    img: "imagenes/productos/comida/comidaGato.png",
    precio: 120,
  },
  {
    id: 9,
    tipo: "Alimento Gatos",
    nombre: "Bolsa Chica",
    img: "imagenes/productos/comida/comidaGato.png",
    precio: 90,
  },
  {
    id: 10,
    tipo: "Juguete",
    nombre: "Rascador",
    img: "imagenes/productos/juguetes/gatos/rascadorGato.png",
    precio: 300,
  },
  {
    id: 11,
    tipo: "Juguete",
    nombre: "Raton",
    img: "imagenes/productos/juguetes/gatos/ratonCuerda.png",
    precio: 70,
  },
  {
    id: 12,
    tipo: "Juguete",
    nombre: "Raton",
    img: "imagenes/productos/juguetes/gatos/ratonPalo.png",
    precio: 100,
  },
  {
    id: 13,
    tipo: "Alimento Ave",
    nombre: "Bolsa Grande",
    img: "imagenes/productos/comida/comidaAve.png",
    precio: 100,
  },
  {
    id: 14,
    tipo: "Alimento Ave",
    nombre: "Bolsa Mediana",
    img: "imagenes/productos/comida/comidaAve.png",
    precio: 90,
  },
  {
    id: 15,
    tipo: "Alimento Ave",
    nombre: "Bolsa Chica",
    img: "imagenes/productos/comida/comidaAve.png",
    precio: 60,
  },
  {
    id: 16,
    tipo: "Juguete",
    nombre: "Carrito",
    img: "imagenes/productos/juguetes/pajaros/carrito.png",
    precio: 220,
  },
  {
    id: 17,
    tipo: "Juguete",
    nombre: "Hamaca",
    img: "imagenes/productos/juguetes/pajaros/hamaca.png",
    precio: 250,
  },
  {
    id: 12,
    tipo: "Juguete",
    nombre: "Sonajero",
    img: "imagenes/productos/juguetes/pajaros/sonajero.png",
    precio: 110,
  },
];

stockproductos.forEach((producto) => {
  const div = document.createElement("div");
  div.classList.add("productos");
  div.innerHTML = `
  <img src=${producto.img} alt ="">
  <p class="descripcion-producto">${producto.tipo}</p>
  <h3 class="nombre-producto">${producto.nombre}   $${producto.precio}<h3>
  <button id="agregar${producto.id}" class="btn-agregar">Agregar</button>
  `;

  contenedorProductos.appendChild(div);
  const boton = document.getElementById(`agregar${producto.id}`);
  boton.addEventListener("click", () => {
    agregarAlCarrito(producto.id);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `Se agrego el producto ${producto.nombre} al carrito`,
      showConfirmButton: false,
      timer: 1500,
    });
  });
});

const agregarAlCarrito = (prodID) => {
  const item = stockproductos.find((prod) => prod.id === prodID);
  carrito.push(item);
  actualizarCarrito();
  console.log(carrito);
};

const eliminarDelCarrito = (prodID) => {
  const item = carrito.find((prod) => prod.id === prodID);
  const indice = carrito.indexOf(item);
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: `Se elimino el producto ${carrito[indice].nombre} del carrito`,
    showConfirmButton: false,
    timer: 1500,
  });
  carrito.splice(indice, 1);
  actualizarCarrito();
};

const actualizarCarrito = () => {
  modal.innerHTML = "";
  carrito.forEach((prod) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <img src=${prod.img} alt ="">
    <p>${prod.nombre}</p>
    <p>Precio: $${prod.precio}</p>
    <button onclick ="eliminarDelCarrito(${prod.id})" ></button>
    
 `;

  
 modal.appendChild(div);

  });
};

btnCarrito.addEventListener('click',() => {
  modalContainer.classList.add('modal_show');
  
});


btnClose.addEventListener('click',() => {
  modalContainer.classList.remove('modal_show');
  
});

btnFetch.onclick=()=>{
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(json => {
    const animales = json.message
    console.log(animales)
    random.innerHTML=`
    <img src=${animales} alt ="">
    `
  })
 
 }
