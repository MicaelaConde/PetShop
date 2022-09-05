let perro = []
let gato = []
let aves= []

const perroAlimentoChico = {
    nombre:"Bolsa Chica",
    kilo: 1,
    precio: 80
}
perro.push(perroAlimentoChico)

const perroAlientoMediano= {
    nombre:"Bolsa Mediana",
    kilo: 5,
    precio: 250
}
perro.push(perroAlientoMediano)

const perroAlimentoGrande= {
    nombre:"Bolsa Grande",
    kilo: 10,
    precio:450
}
perro.push(perroAlimentoGrande)

const perroJuguete1 ={
    nombre: "Pelota",
    precio:150
}
perro.push(perroJuguete1)

const perroJuguete2 ={
    nombre: "Cuerda",
    precio: 200
}
perro.push(perroJuguete2)

const perroJuguete3 ={
    nombre: "Hueso",
    precio: 220
}
perro.push(perroJuguete3)

const gatoAlimentoChico= {
    nombre:"Bolsa chica",
    kilo: 1,
    precio:50
}
gato.push(gatoAlimentoChico)

const gatoAlimentoMediano ={
    nombre:"Bolsa mediana",
    kilo: 3,
    precio:120
}
gato.push(gatoAlimentoMediano)

const gatoAlimentoGrande={
    nombre:"Bolsa grande",
    kilo:5,
    precio: 200
}
gato.push(gatoAlimentoGrande)

const gatoJuguete1={
    nombre: "Raton",
    precio:150
}
gato.push(gatoJuguete1)

const gatoJuguete2 ={
    nombre: "Cuerda",
    precio: 180
}
gato.push(gatoJuguete2)


const aveAlimentoChico={
    nombre:"Bolsa chica",
    kilo: 250,
    precio: 30
}
aves.push(aveAlimentoChico)

const aveAlimentoMediano ={
    nombre:"Bolsa mediana",
    kilo: 500,
    precio:50
}
aves.push(aveAlimentoMediano)

const aveAlimentoGrande ={
    nombre: "Bolsa grande",
    kilo:1,
    precio:901
}
aves.push(aveAlimentoGrande)

const aveJuguete1={
    nombre:"Colgante",
    precio: 150
}
aves.push(aveJuguete1)

const aveJuguete2 ={
    nombre:"Pajaro de Tela"
    precio:300
}
aves.push(aveJuguete2)


alert("Bienvenido a PetShop")
let respuesta= (prompt("Elija una opcion\n1- Perros\n2- Gatos\n 3- Aves "))

