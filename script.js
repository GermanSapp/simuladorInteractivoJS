

// declaracion de las variables con los precios de los mates y el precio total
let precioPoli=500; 
let precioPerita=400;
let precioPompa=300;
let precioTotal=0; 
//acumuladores de precios por cada mate
acu1=0;
acu2=0;
acu3=0;





function descuentoCupon (){  //funcion para aplicar descuento en caso que el usuario tenga el codigo de descuento
    descuento = precioTotal * 0.8;
    alert ("con el codigo te queda el precio total en: " + descuento);
}

alert("Hola!! que tipo de Mate te gustaria llevarte?");

do {
   
    op1 = parseInt(prompt("Najibe.Di  Elige los que quieras:\n1. Mate POLIÉDRICO \n2. Mate PERITA \n3. Mate POMPA \n0. Salir")); 
    // aca elijo el mate o los mates que quiera, hasta apretar el cero para salir del bucle e ir a pagar
    

 switch (op1) {
    
    case 0:
    break;

    case 1:
        alert ("Elegiste Mate POLIÉDRICO = $500");
         acu1+=precioPoli;       
    break;
    case 2:
        alert ("Elegiste Mate PERITA = $400");
         acu2+=precioPerita;       
    break;

    case 3:
        alert ("Elegiste Mate POMPA = $300");
         acu3+=precioPompa;       
    break;

    default: 
    alert("Opcion incorrecta vuelve a intentar");
    break;
 }

 

}while (op1 != 0);

precioTotal=acu1+acu2+acu3;    //utilizando los acumuladores puedo agregar la cantidad de mates que quiera de cualquiera de los 2 tipos
alert("El precio total es: $" + precioTotal);


//  aplico el condicional en caso que tenga codigo de descuento
opDesc = parseInt(prompt("Tenes codigo de descuento? \n1. SI TENGO \n2. NO TENGO"));

if(precioTotal>0){
    if(opDesc == 1){
        codigo = parseInt(prompt("Ingresa el codigo"));  // EL CODIGO ES 250995
        if(codigo == 250995){
            descuentoCupon ();
        }
    } else{
        alert("El precio total es: $" + precioTotal);
    }
}




alert ("fin programa");

