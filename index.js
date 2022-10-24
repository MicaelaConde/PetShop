let carrito = [];
let listado = [];
const contenedorProductos = document.getElementById('contenedor-productos');
const btnCarrito = document.getElementById('miCarrito');
const modalContainer = document.getElementById('modal-container');
const btnClose = document.getElementById('btnclose');
const modal = document.getElementById('modal');
const btnFetch = document.getElementById('btn-fetch');
const random = document.getElementById('img-random');
const cat_alimentos = document.getElementById('cat_alimentos');
const cat_juguetes = document.getElementById('cat_juguetes');
const cat_accesorios = document.getElementById('cat_accesorios');
const cat_todos = document.getElementById('cat_todos');
const btn_form = document.getElementById('btn_form');
const form_usuario =document.getElementById('Form_usuario');
const contenedor_form = document.getElementById('contenedor_form');
const btn_cerrarForm = document.getElementById('btn_cerrarForm');
const btnSubmit = document.getElementById('btn-submit');
const div_form =document.getElementById('div_form');



let stockproductos = [
  {
    id: 1,
    tipo: "Alimento",
    nombre: "Bolsa chica",
    img: "/imagenes/productos/comida/comidaPerro.png",
    kilos: 1,
    precio: 120,
  },
  {
    id: 2,
    tipo: "Alimento",
    nombre: "Bolsa mediana",
    img: "imagenes/productos/comida/comidaPerro.png",
    kilos: 5,
    precio: 500,
  },
  {
    id: 3,
    tipo: "Alimento",
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
    tipo: "Alimento",
    nombre: "Bolsa Grande",
    img: "imagenes/productos/comida/comidaGato.png",
    precio: 180,
  },
  {
    id: 8,
    tipo: "Alimento",
    nombre: "Bolsa Mediana",
    img: "imagenes/productos/comida/comidaGato.png",
    precio: 120,
  },
  {
    id: 9,
    tipo: "Alimento",
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
    tipo: "Alimento",
    nombre: "Bolsa Grande",
    img: "imagenes/productos/comida/comidaAve.png",
    precio: 100,
  },
  {
    id: 14,
    tipo: "Alimento",
    nombre: "Bolsa Mediana",
    img: "imagenes/productos/comida/comidaAve.png",
    precio: 90,
  },
  {
    id: 15,
    tipo: "Alimento",
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
    id: 18,
    tipo: "Juguete",
    nombre: "Sonajero",
    img: "imagenes/productos/juguetes/pajaros/sonajero.png",
    precio: 110,
  },
  {
    id: 19,
    tipo: "Accesorio",
    nombre: "Collar",
    img: "imagenes/productos/accesorios/gatos/collar.png",
    precio: 450,
  },
  {
    id: 20,
    tipo: "Accesorio",
    nombre: "Plato para gatos",
    img: "imagenes/productos/accesorios/gatos/plato.png",
    precio: 240,
  },
  {
    id: 21,
    tipo: "Accesorio",
    nombre: "Plato",
    img: "imagenes/productos/accesorios/perros/plato.png",
    precio: 230,
  },
  {
    id: 22,
    tipo: "Accesorio",
    nombre: "Cama chica",
    img: "imagenes/productos/accesorios/perros/cama.png",
    precio: 600,
  },
  {
    id: 23,
    tipo: "Accesorio",
    nombre: "Cama Grande",
    img: "imagenes/productos/accesorios/perros/cama_grande.png",
    precio: 950,
  },
  {
    id: 24,
    tipo: "Accesorio",
    nombre: "Arnes",
    img: "imagenes/productos/accesorios/perros/arne.png",
    precio: 550,
  },
];

const CategoriaAlimentos = () => {
  const alimentos = stockproductos.filter(function (producto) {
    return producto.tipo == "Alimento";
  });

  contenedorProductos.innerHTML = "";
  alimentos.forEach((producto) => {
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
};

cat_alimentos.addEventListener("click", () => {
  CategoriaAlimentos();
});

const CategoriaJuguetes = () => {
  const juguetes = stockproductos.filter(function (producto) {
    return producto.tipo == "Juguete";
  });

  contenedorProductos.innerHTML = "";
  juguetes.forEach((producto) => {
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
};

cat_juguetes.addEventListener("click", () => {
  CategoriaJuguetes();
});

const CategoriaAccesorios = () => {
  const accesorios = stockproductos.filter(function (producto) {
    return producto.tipo == "Accesorio";
  });

  contenedorProductos.innerHTML = "";
  accesorios.forEach((producto) => {
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
};

cat_accesorios.addEventListener("click", () => {
  CategoriaAccesorios();
});

const CategoriaTodosLosProductos = () => {
  contenedorProductos.innerHTML = "";
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
};

cat_todos.addEventListener("click", () => {
  CategoriaTodosLosProductos();
});

const agregarAlCarrito = (prodID) => {
  const item = stockproductos.find((prod) => prod.id === prodID);
  carrito.push(item);
 
  
  
  actualizarCarrito();
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
  let total = 0;


  modal.innerHTML = "";
  carrito.forEach((prod) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <img src=${prod.img} alt ="">
    <p>${prod.nombre}</p>
    <p>Precio: $${prod.precio}</p>
    <button onclick ="eliminarDelCarrito(${prod.id})" ><img src="imagenes/iconos/remo.png" alt=""></button>
 `;
    
    modal.appendChild(div);
  });

 
  const Finalizar_compra = () => {
    
  const boton = document.getElementById(`btn_finacompra`);
  boton.addEventListener("click", () => {
    modal.innerHTML = "";
    carrito= [];
    Swal.fire({
      title: 'Compra Finalizada!',
      imageUrl: 'imagenes/gracias.png',
      imageWidth: 400,
      imageHeight: 250,
      imageAlt: 'Custom image',
      confirmButtonText: 'Cerrar'
    })
  });

  }

  carrito.forEach((prod) => {
    total += parseInt(prod.precio);
  });
  console.log(total);
  const fin_compra = document.createElement("div");
  fin_compra.classList.add("total_compra");
  fin_compra.innerHTML = `
  <div class="Finalizar">
  <p>Total de tu carrito: $${total}</p>
  <button id="btn_finacompra" class="btn_finacompra">Comprar</button>
  </div>
`;
  modal.appendChild(fin_compra);

  Finalizar_compra()

};

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();
form_usuario.classList.remove("form_show");
const infousuario= []
for(const input of div_form.children){
  const obj={}
   obj['tipo'] = input.name
   obj['valor'] = input.value
  infousuario.push(obj)
 
}
localStorage.setItem('infousuario',JSON.stringify(infousuario))

const info= JSON.parse(localStorage.getItem('infousuario'))
let nombre=''
let apellido= ''
info.forEach(dato => {
  if (dato.tipo=== 'name'){
    nombre=dato.valor
  }
  if(dato.tipo==='lastname'){
    apellido= dato.valor
  }

});
console.log(info)

Swal.fire(`Bienvenid@ ${nombre} a PetShop`)
});

btnCarrito.addEventListener("click", (event) => {
  event.preventDefault();
  modalContainer.classList.add("modal_show");
});

btn_form.addEventListener("click", (event) => {
  event.preventDefault();
  form_usuario.classList.add("form_show");
  
 
 
 
});


btn_cerrarForm.addEventListener("click", (event) => {
  event.preventDefault();
  form_usuario.classList.remove("form_show");
});


btnClose.addEventListener("click", () => {
  modalContainer.classList.remove("modal_show");
});

btnFetch.onclick = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((json) => {
      const animales = json.message;
      console.log(animales);
      random.innerHTML = `
    <img src=${animales} alt ="">
    `;
    });
};
