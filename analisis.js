const resultadoTabla = document.getElementById("resultadoTabla");
const tabla = document.getElementById("tabla");
const buttonMedTabla = document.getElementById("buttonMedTabla");
const buttonMed10Tabla = document.getElementById("buttonMed10Tabla");
const buttonOcTabla = document.getElementById("buttonOcTabla");


// funciones ayuda
function esPar(mitad) {
    if (mitad % 2 === 0) {
        return true
    } else {
        return false;
    }  
}

function tablaOculta() {
    tabla.style.display = "none";
    buttonMedTabla.style.display = "none";
    buttonMed10Tabla.style.display = "none";
    buttonOcTabla.style.display = "none";
    resultadoTabla.innerText = " ";
 }

 function enviar(){
    tabla.style.display = "Table";
    buttonMedTabla.style.display = "inline-block";
    buttonMed10Tabla.style.display = "inline-block";
    buttonOcTabla.style.display = "inline-block";
    for (let i = 0; i < colombia.length; i++) {
        const salario = colombia[i].salary;
        const persona = colombia[i].name;
        document.getElementById("tabla").innerHTML += "<td>" + salario + "</td>" + "<td>" + persona + "</td>";
    }
    colombia.length = 0;
}

// lista de Salarios general
const salariosCom = colombia.map(function(personita){
    return personita.salary;
})
const salariosOrdenados = salariosCom.sort((a,b) => a-b);


// lista de salarios Top10
const salariosCom10 = colombia.map(function(personita){
    return personita.salary;

})
const salariosOrdenadosCom10 = salariosCom10.sort((a,b) => a-b);

const empieza = (salariosOrdenadosCom10.length * 90) / 100;
const captar = salariosOrdenadosCom10.length - empieza;
const salarios10 = salariosOrdenadosCom10.splice(empieza,captar);

// calculo de mediana salarios

function calcularMedianaSalarios(salarios) {
    let mediana;
    let mitad = parseInt(salarios.length / 2);   
    if (esPar(salarios.length)) {
        mediana = (salarios[mitad] + salarios[mitad - 1]) / 2;
        resultadoTabla.innerText = "la mediana de su tabla es : " + mediana;
    }
    else{
        mediana = salarios[mitad];
        resultadoTabla.innerText = "la mediana de su tabla es : " + mediana;
    }
}



