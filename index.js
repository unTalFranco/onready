var numeral = require('numeral');

function auto(marca, modelo, puertas, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.puertas = puertas;
    this.precio = precio;
};

function moto(marca, modelo, cilindrada, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.cilindrada = cilindrada;
    this.precio = precio;
};

var vehiculos = [
    new auto("Peugeot", "206", 4, 200000),
    new moto("Honda", "Titan", "125c", 60000),
    new auto("Peugeot", "208", 5, 250000),
    new moto("Yamaha", "YBR", "160c", 80500.50)
];

function ordenarPorPrecio() {
    vehiculos.sort(((a, b) => b.precio - a.precio))
    console.log("=============================")
    console.log("Vehículo más caro: " + vehiculos[0].marca + " " + vehiculos[0].modelo)
    console.log("Vehículo más barato: " + vehiculos[vehiculos.length - 1].marca + " " + vehiculos[vehiculos.length - 1].modelo)
};

function buscarCaracter(caracter) {
    vehiculos.forEach(element => {
        if (element.modelo.indexOf(caracter) != -1) {
            console.log("Vehículo que contiene en el modelo la letra ‘Y’:" + " " + element.marca + " " + element.modelo + " " + numeral(element.precio).format('$0,0.00'))
        }
    });
};

function mostrarDescendente() {
    console.log("\n=============================\n" + "Vehículos ordenados por precio de mayor a menor:")
    vehiculos.forEach(element => {
        console.log(element.marca + " " + element.modelo)
    });
};

function imprimir() {
    var datos = ""
    vehiculos.forEach(item => {
        var txt = ""
        txt = txt.concat("Marca: " + item.marca + " // Modelo: " + item.modelo + " // ")
        // Si tiene puertas , mostrar.
        if (item.puertas) {
            txt = txt.concat("Puertas: " + item.puertas + " // ")
        }
        // Si tiene cilindrada , mostrar. 
        if (item.cilindrada) {
            txt = txt.concat("Cilindrada:" + item.cilindrada + " // ")
        }
        txt = txt.concat("Precio: " + numeral(item.precio).format('$0,0.00'))
        datos = datos.concat(txt + "\n")
    })
    console.log(datos.slice(0, -2));
    ordenarPorPrecio();
    buscarCaracter("Y");
    mostrarDescendente();
};

imprimir()

