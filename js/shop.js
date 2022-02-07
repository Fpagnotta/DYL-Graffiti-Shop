function comienzoDeCompra () {
    $(".generarPedido").append(`<button class="btn btn-primary finDeCompra">GENERAR PEDIDO</button>`)
    $(".finDeCompra").on("click",totalAPagar)
}


// constructores de tipo de productos //

class AerosolSixpack{
    constructor(marca,tipo,cantidad,costo,id,img){
        this.marca=marca;
        this.tipo=tipo;
        this.cantidad=cantidad;
        this.costo=costo;
        this.id=id
        this.img=img
    }
    
    
}
class Caps{
    constructor(marca,tipo,cantidad,costo,id,img){
        this.marca=marca;
        this.tipo=tipo;
        this.cantidad=cantidad;
        this.costo=costo 
        this.id=id
        this.img=img
    }
}
class Marker{
    constructor(marca,tipo,trazo,costo,id,img){
        this.marca=marca;
        this.tipo=tipo;
        this.trazo=trazo;
        this.costo=costo;
        this.id=id
        this.img=img
    }
}

// Creacion de productos segun constructor : //

const loopSatinado = new AerosolSixpack ("LOOP","Satinado","6 Aerosoles",2500,1,"../images/shop/sixpackloop.jpg");
const tersuave = new AerosolSixpack("TERSUAVE","Satinado","6 Aerosoles",1500,2,"../images/shop/sixpacktersuave.jpg");
const mtn94 = new AerosolSixpack("MTN 94","Mate","6 Aerosoles",3000,3,"../images/shop/sixpack94.jpg");
const mtnHardcore = new AerosolSixpack("MTN Hardcore","Satinado","6 Aerosoles",3000,4,"../images/shop/sixpackhc.jpg");

const capUniver = new Caps ("LINDAL - Universal","fino","50 Caps",1000,11,"../images/shop/baldecapsuni.jpg");
const capNyfat = new Caps ("LINDAL - NY Fat","ancho","50 Caps",1000,12,"../images/shop/nyfatbalde.jpeg");
const capHard = new Caps ("LINDAL - Hardcore","medio","50 Caps",1500,13,"../images/shop/harcore cap.jpg");
const capHardFat = new Caps ("LINDAL - Hardcore Fat","Super ancho","50 Caps",1500,14,"../images/shop/hardcorefatcap.jpg");

const markerMolotow = new Marker ("MOLOTOW - Marker","Valvula","Medio",600,21,"../images/shop/marker molotow.jpg");
const markerOnTheRun = new Marker ("MOLOTOW - Marker","Valvula","Medio",500,22,"../images/shop/marker ontherun.png");
const markerLoop = new Marker ("LOOP - Marker","Valvula","Medio",500,23,"../images/shop/markerloop.jpg");
const squeezer = new Marker ("GROG - Marker","Squeezer","Fino",300,24,"../images/shop/squeerzer.jpg");

// Creacion de galerias filtrados por tipo de productos + push de objetos creados //

let aerosolesEnVenta = [];
aerosolesEnVenta.push(loopSatinado,tersuave,mtn94,mtnHardcore);
let capsEnVenta=[];
capsEnVenta.push(capUniver,capNyfat,capHard,capHardFat);
let markersEnVenta=[];
markersEnVenta.push(markerMolotow,markerOnTheRun,markerLoop,squeezer);

// Variable : "chango" (donde se cargan ID's de productos seleccionados) + variable ProductosSeleccionados ( muestra al usuario lo que selecciono) + variable con suma del costo al momento //

let chango = []
let precioAPagar = 0
let productosSeleccionados = []



for (const producto1 of aerosolesEnVenta){
    $(".Aerosoles").append(`<div class="col-lg-2">
                            <h3>Marca:${producto1.marca}</h3>
                            <p>Esmalte:${producto1.tipo}</p>
                            <p>Cantidad:${producto1.cantidad}</p>
                            <p>Precio:$${producto1.costo}</p>
                            </div>
                            <div class="col-lg-2"><img width="200" height="200" src="${producto1.img}"></img></div>
                            <div class="col-lg-2"><button class="btn btn-success" id="btnComprar${producto1.id}">COMPRAR</button></div>`);
    $(`#btnComprar${producto1.id}`).on("click",sumarAlChango1)
    function sumarAlChango1(){
        alert("Agregaste al chango:"+producto1.marca+","+"6 Aerosoles");
        chango.push(producto1.id);
        productosSeleccionados.push (producto1.marca,producto1.cantidad);
        precioAPagar=precioAPagar+producto1.costo;
    }   
                
}

for (const producto2 of capsEnVenta){
    $(".Caps").append(`<div class="col-lg-2" >
                       <h3>Marca:${producto2.marca}</h3>
                       <p>Trazo:${producto2.tipo}</p>
                       <p>Cantidad:${producto2.cantidad}</p>
                       <p>Precio:$${producto2.costo}</p>
                       </div>
                       <div class="imagenProducto col-lg-2"><img width="200" height="200" src="${producto2.img}"></img></div>
                       <div class="col-lg-2"><button class="btn btn-success" id="btnComprar${producto2.id}">COMPRAR</button></div>`);
    $(`#btnComprar${producto2.id}`).on("click",sumarAlChango2)
    function sumarAlChango2(){
        alert("Agregaste al chango:"+producto2.cantidad+","+producto2.marca);
        chango.push(producto2.id);
        productosSeleccionados.push (producto2.cantidad,producto2.marca);
        precioAPagar=precioAPagar+producto2.costo;
    }  
}
for (const producto3 of markersEnVenta){
    $(".Markers").append(`<div class="detallesProductos col-lg-2">
                          <h3>Marca:${producto3.marca}</h3>
                          <p>Tipo:${producto3.tipo}</p>
                          <p>Trazo:${producto3.trazo}</p>
                          <p>Precio:$${producto3.costo}
                          </div>
                          <div class="imagenProducto col-lg-2"><img width="200" height="200" src="${producto3.img}"></img></div>
                          <div class="col-lg-2"><button class="btn btn-success" id="btnComprar${producto3.id}">COMPRAR</button></div>`);
    $(`#btnComprar${producto3.id}`).on("click",sumarAlChango3)
    function sumarAlChango3(){
        alert("Agregaste al chango:"+producto3.marca+","+producto3.tipo);
        chango.push(producto3.id);
        productosSeleccionados.push (producto3.marca,producto3.tipo);
        precioAPagar=precioAPagar+producto3.costo;
        } 
}   


comienzoDeCompra ()


function totalAPagar (){
    $(".generarPedido").empty ()
    $(".finalizarCompra").empty ()
    $(".finalizarCompra").append(`<div class="seleccionados">
                                  <h4>Los productos seleccionados son:${productosSeleccionados}<br><h4>
                                  <h4>El total a pagar es:$${precioAPagar}</h4>
                                  <h3>Necesitas la cotizacion en dolar?<button class="dolarButton btn btn-primary">CLICK AQUI</button><h3>
                                  <div class="prueba"></div>
                                  <p>Click en el boton de abajo para procesar el pedido!<p>
                                  </div>
                                  <div class="botonesDecidir">
                                    <button class="finalizarPedido btn btn-primary">FINALIZAR PEDIDO</button><button class="btn btn-primary reHacer">RE HACER PEDIDO</button>
                                  </div>`
                                )
    $(".reHacer").on ("click",todoDeNuevo)
        function todoDeNuevo (){
            chango.length = [""]
            productosSeleccionados.length = [""]
            precioAPagar=0
            $("finalizarCompra").empty ()
            $(".seleccionados").empty ()
            comienzoDeCompra ()
            $(".botonesDecidir").empty ()
            $(".formularioDePedido").empty ()
        }
    let URLGET = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";
        $(".dolarButton").click(() => {
            $.get(URLGET, function (precio , estado) {
                if(estado === "success"){
                    let precioDolar = precio[0].casa.compra;
                    console.log(precioDolar)
                    console.log(precioAPagar)
                    let cotizacion= parseFloat(precioDolar)
                    let finDeCotizacion = precioAPagar / cotizacion
                    $(".prueba").append(`<h4>el precio en dolar es:uS$${finDeCotizacion}</h4>`);
                }
            });
    
        });
    $(".finalizarPedido").on("click",finDePedido)
        function finDePedido (){
            alert ("Completa el formulario para procesar el pedido")
            $(".formularioDePedido").empty ()
            $(".finalizarCompra").append(`<div class="formularioDePedido">
                                            <form  class="form-group"    action="" enctype="" method="GET">
                                                <fieldset>
                                                    <h3>Completa los datos para el retiro de la compra<//h3>
                                                    <label for="nombre">Tu firma/nombre:</label>
                                                    <input class="form-control" type="text" name="texto" placeholder="Cual es tu firma/nombre?" id="nombre"><br>
                                                    <label for="email">Ingresa tu email:</label>
                                                    <input class="form-control " type="email" name="mail" placeholder="Cual es tu email?" id="email"><br>
                                                    <label for="nombre">Donde enviamos tu pedido?</label>
                                                    <input class="form-control" type="text" name="texto" placeholder="Donde quiere recibir el pedido?"><br>
                                                </fieldset>
                                            </form>
                                                <h4>Como vas a abonar?</h4>
                                                <p>Podes abonar en Debito o Credito en 3 cuotas sin interes!</p>
                                                <button class="conDebito btn btn-primary">DEBITO</button>
                                                <button class="conCredito btn btn-primary">CREDITO</button> 
                                            </div>`
            )
                                 
    $(".conDebito").on("click",pagoConDebito)
        function pagoConDebito (){
            $(".pedidoListo").empty ()
            alert("Tu pedido ha sido enviado")
            console.log ( "Pedido enviado!ID's de productos seleccionados:"+chango)
            $(".formularioDePedido").append(`<div class="pedidoListo">
                                                <h4>Nos comunicaremos con vos via email/cel para la entrega del pedido!</h4>
                                                <p>Muchas gracias por contar con nosotros!<p>
                                            </div>`
            )
                    }
    $(".conCredito").on("click",pagoConCredito)
        function pagoConCredito (){
            $(".pedidoListo").empty ()
            alert("Elije las cuotas")
            $(".formularioDePedido").append(`<div class="pedidoListo">
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected>Elije las cuotas</option>
                                                    <option value="1" class="unaCuota">1 cuota de :$${precioAPagar}</option>
                                                    <option value="2" class="dosCuota">2 cuotas de:$${precioAPagar/2}</option>
                                                    <option value="3" class="tresCuota">3 cuotas de:$${precioAPagar/3}</option>
                                                </select>
                                                <div class="respuestaFinal"></div>
                                            </div>`
            )
            $(".unaCuota").on("click",enUnaCuota)
                function enUnaCuota (){
                    alert("Tu pedido ha sido enviado")
                    console.log ( "Pedido enviado!ID's de productos seleccionados:"+chango)
                    $(".respuestaFinal").empty ()
                    $(".respuestaFinal").append(
                    "<h3>Eligiste 1 cuota de :$"+precioAPagar+"</h3><p>Nos comunicaremos con vos via email/cel para la entrega del pedido!</p>")
                }
                $(".dosCuota").on("click",enDosCuotas)
                    function enDosCuotas (){
                    console.log ( "Pedido enviado!ID's de productos seleccionados:"+chango)
                    alert("Tu pedido ha sido enviado")
                    $(".respuestaFinal").empty ()
                    $(".respuestaFinal").append("<h3>Eligiste 2 cuotas de:$"+precioAPagar/2+"</h3><p>Nos comunicaremos con vos via email/cel para la entrega del pedido!</p>")
                    }
                $(".tresCuota").on("click",enTresCuotas)
                    function enTresCuotas (){
                    console.log ( "Pedido enviado!ID's de productos seleccionados:"+chango)
                    alert("Tu pedido ha sido enviado")
                    $(".respuestaFinal").empty () 
                    $(".respuestaFinal").append("<h3>Eligiste 3 cuotas de:$"+precioAPagar/3+"</h3><p>Nos comunicaremos con vos via email/cel para la entrega del pedido!</p>")
                }

        }

    }

}






        














