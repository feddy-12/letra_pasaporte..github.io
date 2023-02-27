 
    //funcion que calcula la letra del pasaporte y para eso tendremos que validar el numero
    const letras=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
    var numero;
    function calcularLetra(){
        numero=document.getElementById('numero').value;
        if(numero<0 || numero>99999999){
            alert("Este valor no es válido para la operación en cuestión!!!");
            return 
    }else{
        var resto=numero % 23;
        var letra=letras [resto];
        letra=letra.toUpperCase();
        var pasaporte=numero+letra;
        document.getElementById("letra").value=pasaporte;
        
    }
 
        
}
//creamos la funcion que nos permitira seguir introduciendo valores mientras el numero no sea -1
  