//funciones de ayuda
function desaparecer(id) {
    const valor = id;
    switch (valor) {
        case cuadradosec:
            const cuadrado = document.getElementById('cuadradosec');
            cuadrado.style.display = "none";
            break;
        case triangulosec:
            const triangulo = document.getElementById("triangulosec");
            triangulo.style.display = "none";
            break;
        case circulosec:
            const circulo = document.getElementById("circulosec");
            circulo.style.display = "none"; 
            break;
        case isoscelessec: 
            const isosceles = document.getElementById("isoscelessec");   
            isosceles.style.display = "none"; 
            break; 
        case descuentoSec: 
            const descuento = document.getElementById("descuentoSec");   
            descuento.style.display = "none"; 
            break;  
        case promedioSec: 
            const promedio = document.getElementById("promedioSec");   
            promedio.style.display = "none"; 
            break;        
    }             
}

function aparecer(id) {
    const valor = id;
    switch (valor) {
        case cuadradosec:
            const cuadrado = document.getElementById('cuadradosec');
            cuadrado.style.display = "flex";
            break;
        case triangulosec:
            const triangulo = document.getElementById("triangulosec");
            triangulo.style.display = "flex";
            break;
        case circulosec:
            const circulo = document.getElementById("circulosec");
            circulo.style.display = "flex"; 
            break;
        case isoscelessec: 
            const isosceles = document.getElementById("isoscelessec");   
            isosceles.style.display = "flex"; 
            break;   
        case descuentoSec: 
            const descuento = document.getElementById("descuentoSec");   
            descuento.style.display = "flex"; 
            break;
        case promedioSec: 
            const promedio = document.getElementById("promedioSec");   
            promedio.style.display = "flex"; 
            break;            
    }             
}

function mostrar(id) {
    const valor = id;
    switch (valor) {
        case cuadradosec:
            aparecer(cuadradosec);
            desaparecer(triangulosec);
            desaparecer(circulosec);
            desaparecer(isoscelessec);
            break;
        case triangulosec:
            aparecer(triangulosec);
            desaparecer(cuadradosec);
            desaparecer(circulosec);
            desaparecer(isoscelessec);
            break; 
        case circulosec:
            aparecer(circulosec);
            desaparecer(cuadradosec);
            desaparecer(triangulosec);
            desaparecer(isoscelessec);
            break;
        case isoscelessec:
            aparecer(isoscelessec);
            desaparecer(cuadradosec);
            desaparecer(triangulosec);
            desaparecer(circulosec);
            break 
        case ocultarTodo:
            desaparecer(isoscelessec);
            desaparecer(cuadradosec);
            desaparecer(triangulosec);
            desaparecer(circulosec);
            break
        case descuentoSec:
            aparecer(descuentoSec);
            break 
        case ocultarTodoDescuento:
            desaparecer(descuentoSec);
            break
        case promedioSec:
            aparecer(promedioSec);
            break   
        case ocultarTodoProm:
            desaparecer(promedioSec);
            break                                  
        }
}

//calculo medidas cuadrado
function perimetroCuadrado(lado) {
    return lado*4 + "cm";
}

function areaCuadrado(lado) {
    return lado * lado + "cm";
}
//calculo medidas triangulo
function perimetroTriangulo(lado1, lado2, base) {

        return parseInt(lado1) + parseInt(lado2) +  parseInt(base) + "cm";    

}

function areaTriangulo(base,altura) {
    return (base * altura) / 2 + "cm"; 
}
//calculo medidas triangulo isosceles
function perimetroTisosceles(lado1, lado2, base) {
    if (lado1 == lado2) {
        return parseInt(lado1) + parseInt(lado2) +  parseInt(base) + "cm";
    }
    else
    {
        return "su triangulo no es Isosceles";
    }
   
}
function alturaTisosceles(base,lado1,lado2) {
    if (lado1 == lado2) {
        return Math.sqrt((parseInt(lado1) * parseInt(lado2)) - ((parseInt(base)*parseInt(base))/4)) ;
    }
    else
    {
        return "su triangulo no es Isosceles";
    }
    
}
function areaTisosceles(lado1,lado2,base,altura) {
    if (lado1 == lado2) {
        return (parseInt(base) * parseFloat(altura)) / 2 ;
    }
    else
    {
        return "su triangulo no es Isosceles";
    }
   
}

//calculo medidas circulo

function diametroCirculo(radio) {
    return radio * 2 + "cm";
}
const PI = Math.PI;

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return parseInt(diametro) * PI + "cm";
}

function areaCirculo(radio) {
    return (radio * radio) * PI + "cm^2"
}

// calculo interaccion cuadrado
function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value =  input.value;
    const errorCuadrado = document.getElementById("errorCuadrado");
    const resultadoCuadrado = document.getElementById("resultadoCuadrado");
    if (value == 0 || value < 1) {
        errorCuadrado.innerText = "Dato invalido";
        resultadoCuadrado.innerText = " ";
    }
    else{
        const area = areaCuadrado(value);
        input.value = " ";
        errorCuadrado.innerText = " ";
        resultadoCuadrado.innerText = "Su area es: " + area;
    }
    
}

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value =  input.value;
    const errorCuadrado = document.getElementById("errorCuadrado");
    const resultadoCuadrado = document.getElementById("resultadoCuadrado");
    if (value == 0 || value < 1) {
        errorCuadrado.innerText = "Dato invalido";
        resultadoCuadrado.innerText = " ";
    }
    else{
        const perimetro = perimetroCuadrado(value);
        input.value = " ";
        errorCuadrado.innerText = " ";
        resultadoCuadrado.innerText = "Su area es: " + perimetro;
    }
}
//calculos interaccion triangulo
function calcularPerimetroTriangulo() {
    
    const input1 = document.getElementById("inputTriangulo1");
    const value1 =  input1.value;
    const input2 = document.getElementById("inputTriangulo2");
    const value2 =  input2.value;
    const inputb = document.getElementById("baseTriangulo");
    const valueb =  inputb.value;
    const errorTriangulo1 = document.getElementById("errorTriangulo1");
    const errorTriangulo2 = document.getElementById("errorTriangulo2");
    const errorTriangulo4 = document.getElementById("errorTriangulo4");
    const resultadoTriangulo = document.getElementById("resultadoTriangulo");
    if (value1 > 0 & value2 > 0 & valueb > 0)
    {
        const perimetro = perimetroTriangulo(value1,value2,valueb);
        errorTriangulo1.innerText = " ";
        errorTriangulo2.innerText = " ";
        errorTriangulo4.innerText = " ";
        resultadoTriangulo.innerText = "el perimetro de su triangulo es: " + perimetro;
    }
    if (value1 < 1 ) {
        errorTriangulo1.innerText = "Dato invalido";
        errorTriangulo2.innerText = " ";
        errorTriangulo4.innerText = " ";
        resultadoTriangulo.innerText = " ";
    }  
    if (value2 < 1 ) {
        errorTriangulo1.innerText = " ";
        errorTriangulo2.innerText = "Dato invalido";
        errorTriangulo4.innerText = " ";
        resultadoTriangulo.innerText = " ";
    }
    if (valueb < 1 ) {
        errorTriangulo1.innerText = " ";
        errorTriangulo2.innerText = " ";
        errorTriangulo4.innerText = "Dato invalido";
        resultadoTriangulo.innerText = " ";
    }
    if (value1 < 1 & value2 < 1 & valueb < 1)
    {
        errorTriangulo1.innerText = "Dato invalido";
        errorTriangulo2.innerText = "Dato invalido";
        errorTriangulo4.innerText = "Dato invalido";
        resultadoTriangulo.innerText = " "
    }
    
}
function calcularAreaTriangulo() {
    
    const inputb = document.getElementById("baseTriangulo");
    const valueb =  inputb.value;
    const inputa = document.getElementById("alturaTriangulo");
    const valuea =  inputa.value;
    const errorTriangulo3 = document.getElementById("errorTriangulo3");
    const errorTriangulo4 = document.getElementById("errorTriangulo4");
    const resultadoTriangulo = document.getElementById("resultadoTriangulo");
    if (valueb > 0 & valuea > 0)
    {
        const area = areaTriangulo(valueb,valuea);
        errorTriangulo3.innerText = " ";
        errorTriangulo4.innerText = " ";
        resultadoTriangulo.innerText = "el perimetro de su triangulo es: " + area;
    }
    if (valuea < 1 ) {
        errorTriangulo3.innerText = "Dato Invalido";
        errorTriangulo4.innerText = " ";
        resultadoTriangulo.innerText = " ";
    }  
    if (valueb < 1 ) {
        errorTriangulo3.innerText = " ";
        errorTriangulo4.innerText = "Dato invalido";
        resultadoTriangulo.innerText = " ";
    }
    if (valueb < 0 & valuea < 0)
    {
        errorTriangulo4.innerText = "Dato invalido";
        resultadoTriangulo.innerText = " "
    }
    
}
//calculo interaccion circulo
function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value =  input.value;
    const errorCirculo = document.getElementById("errorCirculo");
    const resultadoCirculo = document.getElementById("resultadoCirculo");
    if (value == 0 || value < 1) {
        errorCirculo.innerText = "Dato invalido";
        resultadoCirculo.innerText = " ";
    }
    else{
        const area = areaCirculo(value);
        input.value = " ";
        errorCirculo.innerText = " ";
        resultadoCirculo.innerText = "Su area es: " + area;
    }
}


function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value =  input.value;
    const errorCirculo = document.getElementById("errorCirculo");
    const resultadoCirculo = document.getElementById("resultadoCirculo");
    if (value == 0 || value < 1) {
        errorCirculo.innerText = "Dato invalido";
        resultadoCirculo.innerText = " ";
    }
    else{
        const perimetro = perimetroCirculo(value);
        input.value = " ";
        errorCirculo.innerText = " ";
        resultadoCirculo.innerText = "Su area es: " + perimetro;
    }
}
//triangulo interaccion isosceles
function calcularPerimetroTisosceles() {
    const input1 = document.getElementById("inputIsoscelesl");
    const value1 =  input1.value;
    const input2 = document.getElementById("inputIsosceles2");
    const value2 =  input2.value;
    const inputb = document.getElementById("inputIsoscelesb");
    const valueb =  inputb.value;
    const errorTrianguloIs1 = document.getElementById("errorTrianguloIs1");
    const errorTrianguloIs2 = document.getElementById("errorTrianguloIs2");
    const errorTrianguloIsb = document.getElementById("errorTrianguloIsb");
    const resultadoTrianguloIs = document.getElementById("resultadoTrianguloIs");

    if (value1 > 0 & value2 > 0 & valueb > 0) {
        const perimetro = perimetroTisosceles(value1,value2,valueb);
        errorTrianguloIs1.innerText = " ";
        errorTrianguloIs2.innerText = " ";
        errorTrianguloIsb.innerText = " ";
        resultadoTrianguloIs.innerText = "El perimetro de su triangulo Isosceles es: " + perimetro;
    }
    if (value1 < 1) {
        errorTrianguloIs1.innerText = "Dato invalido";
        errorTrianguloIs2.innerText = " ";
        errorTrianguloIsb.innerText = " ";
        resultadoTrianguloIs.innerText = " ";
    }
    if (value2 < 1) {
        errorTrianguloIs1.innerText = " ";
        errorTrianguloIs2.innerText = "Dato invalido";
        errorTrianguloIsb.innerText = " ";
        resultadoTrianguloIs.innerText = " ";
    }
    if (valueb < 1) {
        errorTrianguloIs1.innerText = " ";
        errorTrianguloIs2.innerText = " ";
        errorTrianguloIsb.innerText = "Dato invalido";
        resultadoTrianguloIs.innerText = " ";
    }
    if (value1 < 1 & value2 < 1 & valueb < 1) {
        errorTrianguloIs1.innerText = "Dato invalido";
        errorTrianguloIs2.innerText = "Dato invalido";
        errorTrianguloIsb.innerText = "Dato invalido";
        resultadoTrianguloIs.innerText = " ";
    }
}
function calcularAlturaTisosceles() {
    const input1 = document.getElementById("inputIsoscelesl");
    const value1 =  input1.value;
    const input2 = document.getElementById("inputIsosceles2");
    const value2 =  input2.value;
    const inputb = document.getElementById("inputIsoscelesb");
    const valueb =  inputb.value;
    const errorTrianguloIs1 = document.getElementById("errorTrianguloIs1");
    const errorTrianguloIs2 = document.getElementById("errorTrianguloIs2");
    const errorTrianguloIsb = document.getElementById("errorTrianguloIsb");
    const resultadoTrianguloIs = document.getElementById("resultadoTrianguloIs");

    if (value1 > 0 & value2 > 0 & valueb > 0) {
        const altura = alturaTisosceles(valueb,value1,value2);
        errorTrianguloIs1.innerText = " ";
        errorTrianguloIs2.innerText = " ";
        errorTrianguloIsb.innerText = " ";
        resultadoTrianguloIs.innerText = "La altura de su triangulo Isosceles es: " + altura + "cm";
    }
    if (value1 < 1) {
        errorTrianguloIs1.innerText = "Dato invalido";
        errorTrianguloIs2.innerText = " ";
        errorTrianguloIsb.innerText = " ";
        resultadoTrianguloIs.innerText = " ";
    }
    if (value2 < 1) {
        errorTrianguloIs1.innerText = " ";
        errorTrianguloIs2.innerText = "Dato invalido";
        errorTrianguloIsb.innerText = " ";
        resultadoTrianguloIs.innerText = " ";
    }
    if (valueb < 1) {
        errorTrianguloIs1.innerText = " ";
        errorTrianguloIs2.innerText = " ";
        errorTrianguloIsb.innerText = "Dato invalido";
        resultadoTrianguloIs.innerText = " ";
    }
    if (value1 < 1 & value2 < 1 & valueb < 1) {
        errorTrianguloIs1.innerText = "Dato invalido";
        errorTrianguloIs2.innerText = "Dato invalido";
        errorTrianguloIsb.innerText = "Dato invalido";
        resultadoTrianguloIs.innerText = " ";
    }
}

function calcularAreaTisosceles() {
    const input1 = document.getElementById("inputIsoscelesl");
    const value1 =  input1.value;
    const input2 = document.getElementById("inputIsosceles2");
    const value2 =  input2.value;
    const inputb = document.getElementById("inputIsoscelesb");
    const valueb =  inputb.value;
    const errorTrianguloIs1 = document.getElementById("errorTrianguloIs1");
    const errorTrianguloIs2 = document.getElementById("errorTrianguloIs2");
    const errorTrianguloIsb = document.getElementById("errorTrianguloIsb");
    const resultadoTrianguloIs = document.getElementById("resultadoTrianguloIs");

    if (value1 > 0 & value2 > 0 & valueb > 0) {
        const altura =  alturaTisosceles(valueb,value1,value2);
        const area = areaTisosceles(value1,value2,valueb,altura);
        errorTrianguloIs1.innerText = " ";
        errorTrianguloIs2.innerText = " ";
        errorTrianguloIsb.innerText = " ";
        resultadoTrianguloIs.innerText = "La altura de su triangulo Isosceles es: " + area + "cm";
    }
    if (value1 < 1) {
        errorTrianguloIs1.innerText = "Dato invalido";
        errorTrianguloIs2.innerText = " ";
        errorTrianguloIsb.innerText = " ";
        resultadoTrianguloIs.innerText = " ";
    }
    if (value2 < 1) {
        errorTrianguloIs1.innerText = " ";
        errorTrianguloIs2.innerText = "Dato invalido";
        errorTrianguloIsb.innerText = " ";
        resultadoTrianguloIs.innerText = " ";
    }
    if (valueb < 1) {
        errorTrianguloIs1.innerText = " ";
        errorTrianguloIs2.innerText = " ";
        errorTrianguloIsb.innerText = "Dato invalido";
        resultadoTrianguloIs.innerText = " ";
    }
    if (value1 < 1 & value2 < 1 & valueb < 1) {
        errorTrianguloIs1.innerText = "Dato invalido";
        errorTrianguloIs2.innerText = "Dato invalido";
        errorTrianguloIsb.innerText = "Dato invalido";
        resultadoTrianguloIs.innerText = " ";
    }
}
//calculo descuentos
function descuentoProducto(precio,descuento) {
    const porcentajePrecioDescuento = 100 - descuento;
    const precioDescuento = (precio * porcentajePrecioDescuento) / 100;
    return precioDescuento;
}

function calculardescuentos() {
    const inputP = document.getElementById("inputPrecio");
    const value1 =  inputP.value;
    const inputD = document.getElementById("inputDescuento");
    const value2 =  inputD.value;
    const presutado = document.getElementById("resultadoDescuento");
    const errorPrecio = document.getElementById("errorPrecio");
    if (value1 == 0 || value2 == 0) {
        return alert("llene todos los campos porfavor");
    }
    if (value1 > 0 && value2 > 0 ) {
        const descuento = descuentoProducto(value1,value2);
        presutado.innerText = "Q" + value1 + " menos el " + value2 + "% de descuento es de Q" + descuento;
        inputD.value = " ";
        inputP.value = " ";
        errorPrecio.innerText = " ";
        errorDescuento.innerText = " ";
    }
    if (value1 < 1) {
        errorPrecio.innerText = "ingrese un monto valido";
        errorDescuento.innerText = " ";
        presutado.innerText = " ";
    }
    if (value2 < 1) {
        errorDescuento.innerText = "ingrese un monto valido";
        errorPrecio.innerText = " ";
        presutado.innerText = " ";
    }
    if (value1 < 1 && value2 < 1) {
        errorPrecio.innerText = "ingrese un monto valido";
        errorDescuento.innerText = "ingrese un monto valido";
        presutado.innerText = " ";
    }
}


//proceso para agregar datos a utilizar calculo de promedio mediana y moda

let lista = [];

const inputnumeroDatos = document.getElementById("numeroDatos");
const resultadoPromedio = document.getElementById("resultadoPromedio");
const errorPromedio = document.getElementById("errorpromedio");
const buttonPromedio = document.getElementById("buttonPromedio");
const buttonMediana = document.getElementById("buttonMediana");
const buttonModa = document.getElementById("buttonModa");

function ingreso() {

    const numeroDatos = inputnumeroDatos.value;

    //elimina input de datos
        const elemento = document.getElementById("aggInputs");
        while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
        };
    //elimina resultados    
        inputnumeroDatos.innerText = " ";
        resultadoPromedio.innerText = "  ";
        errorPromedio.innerText = " ";
    //aparece boton calculo
        buttonPromedio.style.display = "inline-block" ;
        buttonMediana.style.display = "inline-block" ;
        buttonModa.style.display = "inline-block" ;

    if (numeroDatos == 0 || numeroDatos == " " || numeroDatos < 2 ) {
        errorPromedio.innerText = "ingrese datos validos";
        buttonPromedio.style.display = "none" ;
        buttonMediana.style.display = "none" ;
        buttonModa.style.display = "none" ;
    }
    else {
       
        lista.length = 0;

        for(let i = 1; i < (parseInt(numeroDatos) + 1); i++ ) {
        
            var direccion = '<input id="' + i + '"type="number" placeholder="ingrese cantidad">';
            let input = document.getElementById("aggInputs");
            input.insertAdjacentHTML('beforeend', direccion);
            inputnumeroDatos.innerText = " ";   
            resultadoPromedio.innerText = "  ";
        }      
    }
   
    }

function datosUsuario () {
    
    const numeroDatos = inputnumeroDatos.value;

    let valorNumeroDatos =  parseInt(numeroDatos);

    //agrega los datos a la lista
    
    for (let i = 1; i < (valorNumeroDatos + 1); i++){
        let id = i;
        let dato = document.getElementById(id);
        let valueDato = parseInt(dato.value);
            lista.push(valueDato);      
        }
   
}

// calculo de promedios
function calcularPromedio() { 
    
    datosUsuario();
    
    let suma = 0;
    
    for (let  i = 0; i < lista.length; i++) {
    
         suma = suma + lista[i];  
    }
    const promedioLista = suma / lista.length;
    
    lista.length = 0;
    resultadoPromedio.innerText = "la suma de sus datos es: "  + suma + " y " + "Su promedio equivale a: " + promedioLista;
}

// calculo de Mediana


function esPar(mitad) {
    if (mitad % 2 === 0) {
        return true
    } else {
        return false;
    }  
}

function calcularMediana() {
    let mediana;
    datosUsuario();
    lista.sort((a,b) => a-b);
    let mitad = parseInt(lista.length / 2);   
    if (esPar(lista.length)) {
        mediana = (lista[mitad] + lista[mitad - 1]) / 2;
        lista.length = 0;
        resultadoPromedio.innerText = "la mediana de sus datos es: " + mediana;
    }
    else{
        mediana = lista[mitad];
        lista.length = 0;
        resultadoPromedio.innerText = "la mediana de sus datos es: " + mediana;
    }
}
// calculos de Moda

const cuentaLista = {};
 
function calcularModa() {
    datosUsuario();
    lista.sort((a,b) => a-b);
    lista.map(function(elemento) {
        if (cuentaLista[elemento]) {
            cuentaLista[elemento] += 1;
        }
        else
        {
            cuentaLista[elemento] = 1;
        }    
    })
    const listaRepetida = Object.entries(cuentaLista).sort(function(a,b) {
        return  a[1] - b[1];
    });
    
    const moda = listaRepetida[listaRepetida.length - 1];
    resultadoPromedio.innerText = "la Moda de sus datos es: " + moda.toString();
}