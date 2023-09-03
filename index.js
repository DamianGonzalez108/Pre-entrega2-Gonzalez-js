const productos = [
]
let trueOrFalse = true

class Producto {
    constructor(nombre,precio,codigo){
        this.nombre = nombre
        this.precio = precio
        this.codigo = codigo
    }
    ivaPorcentaje(){
        return this.precio *0.21
    }
}

function initProgram(){
        while(trueOrFalse){
            let compra = parseInt(prompt("Que es lo que necesita? \n 1. añadir un producto \n 2. ver todos los productos  \n 3. buscar un producto \n 4. comprar un producto \n 5. salir "))
            
            switch(compra){
            
                case 1 :anadirProducto()
                    break
                case 2 :verProductos()
                    break
                case 3 :buscarUnProducto()
                    break
                case 4 :comprarUnProducto()
                    break
                case 5 : trueOrFalse = false
                    break
                default :
                    break
            }
        }}

function anadirProducto(){
    while(trueOrFalse){
        const nombre = prompt("Ingresa el nombre del producto")
        const precio = parseInt(prompt("Ingresa el precio del producto"))
        const codigo = parseInt(prompt("Ingresa el codigo del producto"))
        if(nombre == "" || precio == "" || codigo == "" ){
            alert("Ingrese todos los datos requeridos")
        }
        else{
            const producto = new Producto(nombre,precio,codigo)
            productos.push(producto)
            initProgram()
        }
    }
}
function verProductos(){
    let listaProductos = ""
 productos.forEach((elemento) => {
    listaProductos += elemento.nombre + "\n"
 })
 alert(listaProductos)
}
function buscarUnProducto(){
    const nombreProducto = prompt("Ingrese el nombre del producto que desea buscar") 
    const productoEncontrado = productos.map((stok) => stok.nombre).indexOf(nombreProducto)
    if(productoEncontrado == -1){
        alert("No hay de este producto en stok")
    }
    else {
        alert(`Nombre: ${productos[productoEncontrado].nombre} \n Precio: ${productos[productoEncontrado].precio} \n Codigo: ${productos[productoEncontrado].codigo}`)
    
initProgram()}
    alert(productoEncontrado)
}
function comprarUnProducto(){
    const nombreProducto = prompt("Ingrese el nombre del producto que desea comprar") 
    const productoEncontrado = productos.map((stok) => stok.nombre).indexOf(nombreProducto)
    if(productoEncontrado == -1){
        alert("No hay de este producto en stok")
    }
    else {
        alert(`Compraste ${productos[productoEncontrado].nombre} \n GRACIAS POR SU COMPRA`)
        productos.splice(productoEncontrado,1)
        initProgram()
    }
}



initProgram()