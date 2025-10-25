function CalcularIMC(){
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);
    let resultado = document.getElementById("resultado");
    let classificacao = document.getElementById("classificacao");

    let calculo = peso / (altura * altura);
    resultado.innerHTML = "Seu IMC é: " + calculo.toFixed(2); 

    if (calculo < 18.5){
        classificacao.innerHTML = "Você está Abaixo do Peso";
    } else if(calculo>=18.5 && calculo<=24.9){
        classificacao.innerHTML = "Você está com Peso Normal";
    } else if(calculo>=25.0 && calculo<=29.9){
        classificacao.innerHTML = "Você está com Sobrepeso";
    } else if(calculo>=30.0 && calculo<=34.9){
        classificacao.innerHTML = "Você está com Obesidade Grau 1";
    } else if(calculo>=35.0 && calculo<=39.9){
        classificacao.innerHTML = "Você está com Obesidade Grau 2";
    } else{
        classificacao.innerHTML = "Você está com Obesidade Grau 3";
    }

}