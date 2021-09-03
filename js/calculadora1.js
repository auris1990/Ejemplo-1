function operaciones(opcion) {

    var numero1 = parseFloat(document.getElementById("txt numero1").value);
    var numero2 = parseFloat(document.getElementById("txt numero2").value);
     
    var resultado = 0 ;
    
    switch (opcion) {
        case"S":
            resultado = numero1 + numero2;
            break;

        case"R":
            resultado = numero1 - numero2;
            break;

        case"M":
            resultado = numero1 * numero2;
            break;

        case"D":
            resultado = numero1 / numero2;
            break;
            
                  
    }

 document.getElementById("txt resultado").value = resultado;

}
