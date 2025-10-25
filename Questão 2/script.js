function SomarValores(){
    let valor1 = Number(document.getElementById("valor1").value);
    let valor2 = Number(document.getElementById("valor2").value);
    let resultado = document.getElementById("resultado");

    let soma = valor1 + valor2;
    resultado.innerHTML = "Resultado = " + soma; 
 
}