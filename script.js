const cliente1= {
    nombre: "Felipe",
    apellido: "Alvarez",
    mesa:"5",
    menu:{
        plato:"milanesa con pure",
        bebida:"coca cola"
    }
}

const cliente2={
    nombre: "Melina",
    apellido: "Casablancas",
    mesa:"7",
    menu:{
        plato:"Ravioles con salsa blanca",
        bebida:"7up"
    }
}

const cliente3={...cliente1}

cliente3.nombre="Lucas"
cliente3.apellido="Buonofiglio"
cliente3.menu="Milanesa napolitana y papas españolas"

const cliente4=null

console.log(cliente1)
console.log(cliente2)
console.log(cliente3)
console.log(cliente4 ||"Cliente 4 no reservó")
