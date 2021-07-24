    function pago() {
        let totalPago = document.getElementById("exampleInputEmail1");
        let valueTotalPago = totalPago.value;
        return valueTotalPago;
    }

    function descuento () {
        let input = document.getElementById("exampleInputDescuento");
        let valueTotalDescuento = input.value;
        return valueTotalDescuento;
    }


    
    
    let total = (100 - +descuento()) / +descuento() * +pago()/ 100;



function carlos(){
    tex = document.getElementById("resoult");
    tex.innerText = "Tu valor a pagar es: $" + +total;
}




