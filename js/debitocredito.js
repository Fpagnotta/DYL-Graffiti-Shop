
        $(".conCredito").on("click",pagoConCredito)
            function pagoConCredito (){
                $(".finalizarCompra").append(`<div class="dropdown">
                                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            ELIJE LAS CUOTAS</button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item unaCuota" >1 CUOTA DE:$${precioAPagar}</a></li>
                                                <li><a class="dropdown-item dosCuotas" >2 CUOTAS DE:$${precioAPagar/2}</a></li>
                                                <li><a class="dropdown-item tresCuotas" >3 CUOTAS DE:$${precioAPagar/3}</a></li>
                                            </ul></div>`)
    
                    $(".unaCuota").on("click",enUnaCuota)
                        function enUnaCuota (){
                            $(".finalizarCompra").append("<h3>Eligiste 1 cuota de :$"+precioAPagar+"</h3>")
                        }
                    $(".dosCuotas").on("click",enDosCuotas)
                        function enDosCuotas (){
                            $(".finalizarCompra").append("<h3>Eligiste 2 cuotas de:$"+precioAPagar/2+"</h3>")
                        }
                    $(".tresCuotas").on("click",enTresCuotas)
                        function enTresCuotas (){
                        $(".finalizarCompra").append("<h3>Eligiste 3 cuotas de:$"+precioAPagar/3+"</h3>")
                        }
                    $(".finalizarCompra").append(`<button class="btn btn-success listo2">FINALIZAR COMPRA</button>`)
                    $(".listo2").click(function postear2 (){
                        $.get(URLGET, function (precio , estado) {
                            if(estado === "success"){
                                precioDolar =  precioDolar = precio[0].casa.compra;
                            }}   
                    )})

            }
