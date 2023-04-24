// funcion calcular que se utiliza para llamar los numeros del html y hacer su correspondiente operacion
function calculadora(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var operacion = document.getElementById("operacion").value;
    var calcular;
    // en este caso decidi usar el switch para elegir que operacion se desea hacer 
    switch(operacion){
        case "suma":
            calcular= num1+num2;
            break;
        case "resta":
            calcular= num1-num2;
            break;
        case "multiplicacion":
            calcular= num1*num2;
            break;
        case "division":
            calcular= num1/num2;
            break;
        case "mod%":
            calcular= num1%num2;
            break;
    }
    // el if usado para validar que haya variables en los campos
    if (isNaN(num1) || isNaN(num2)){
        document.getElementById("resultado").innerHTML="Ingrese los numeros a calcular";
    }else{
    document.getElementById("resultado").innerHTML="El resultado es: "+calcular;}
}