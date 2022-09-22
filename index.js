let compra = 0;
let i = 1;
let carrito = [];
let listado = [];
const selectTag = document.getElementById('lista');
const carritoTag = document.getElementById('carrito')
const agregar = document.getElementById('btnAgregar')
agregar.addEventListener('click',AgregarItem)
const listacarrito = document.getElementById('btncarrito')
listacarrito.addEventListener('click',verCarrito)
let productos = [
  {
    tipo: "Alimento",
    nombre: "Bolsa chica",
    kilos: 1,
    precio: 120,
  },
  {
    tipo: "Alimento",
    nombre: "Bolsa mediana",
    kilos: 5,
    precio: 500,
  },
  {
    tipo: "Alimento",
    nombre: "Bolsa grande",
    kilos: 10,
    precio: 840,
  },
  {
    tipo: "Juguete",
    nombre: "Pelota",
    precio: 150,
  },
  {
    tipo: "Juguete",
    nombre: "Cuerda",
    precio: 80,
  },
  {
    tipo: "Juguete",
    nombre: "Hueso",
    precio: 130,
  },
];

productos.forEach((producto) => {
  const option = document.createElement("option");
  option.innerText = `${producto.nombre}: $${producto.precio}`;
  selectTag.append(option);
});

function AgregarItem(){
  const agregarproducto = productos[selectTag.selectedIndex];
  carrito.push(agregarproducto);

  console.log(carrito)
  
}



function verCarrito(){
  
  carrito.forEach((item) => {
    const option = document.createElement("option");
    option.innerText = `${item.nombre}: $${item.precio}`;
    carritoTag.append(option);
  })
}
