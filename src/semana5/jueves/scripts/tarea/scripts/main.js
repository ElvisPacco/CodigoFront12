

function ejercicioDos(){
    let notas = [];

    notas[0] = parseInt(prompt("Ingresa la Nota 1"));
    notas[1] = parseInt(prompt("Ingresa la Nota 2"));
    notas[2] = parseInt(prompt("Ingresa la Nota 3"));
    notas[3] = Number(prompt("Ingresa la Nota 4"));

    let suma = notas[0] + notas[1] + notas[2] + notas[3];
    let promedio = suma / notas.length;
    console.log("El promedio es: " + promedio);
}

function ejercicioCinco(){
    const PI = Math.PI;
    let radio = prompt("Ingresar el radio del círculo")
    let area = PI * radio ** 2
    console.info("El área del cículo es: " + area);
}


function ejercicioSeis(){
    let horasTrabajadas = Number(prompt("Indique las horas de trabajo por Día"));
    let sueldoxHora = Number(prompt("Indique el salario por Hora"));
    sueldo = 5 * horasTrabajadas * sueldoxHora;
    console.log("El sueldo semanal de un trabajador es: " + sueldo);
}

function ejercicioSiete(){
    let medidaMetros = Number(prompt("Indique la cantidad de metros de tela"));

    function convertMetrosToPulgadas(metros){
        let medidaPulgadas = metros / 0.0254;
        let medidaPulgadasDecimal;

        if(!((medidaPulgadas * 100) % 1 == 0)){
            medidaPulgadasDecimal = (parseInt(medidaPulgadas * 100) + 1)/100;
            console.log("Formateado: " + (medidaPulgadas * 100) % 1 + " -> " + medidaPulgadas);
        }
        else{
            medidaPulgadasDecimal = medidaPulgadas;
            console.log("Todo bien");
        }
        return medidaPulgadasDecimal;
    }
    console.log("Se requieren " + convertMetrosToPulgadas(medidaMetros) + " pulgadas de tela.");
}

function ejercicioOcho(){    
    let dineroPeruano = Number(prompt("Ingresa el dinero en SOLES"));

    function convertSolesToDolares(soles){
        const US_PEN = 3.86;
        let dineroDolares = Math.round(100 * dineroPeruano / US_PEN) / 100;
        return dineroDolares;
    } 

    console.log("PEN: " + dineroPeruano + " -> US: " + convertSolesToDolares(dineroPeruano) + " dólares");
}

function ejercicioNueve(){
    let anioNacimiento = Number(prompt("Indique su año de nacimiento"));

    function calcularEdad(anionacimiento){
        const anioActual = new Date().getFullYear();
        console.log("Momento actual = " + new Date())
        return anioActual - anioNacimiento;
    }
    console.log("Edad actual = " + calcularEdad(anioNacimiento));
}

function ejercicioDiez(){
    let nombre = [];
    let edad = [];
    nombre[0] = prompt("Persona 1: Indicar su nombre");
    edad[0] = prompt("Persona 1: Indicar su edad");
    nombre[1] = prompt("Persona 2: Indicar su nombre");
    edad[1] = prompt("Persona 2: Indicar su edad");
    nombre[2] = prompt("Persona 3: Indicar su nombre");
    edad[2] = prompt("Persona 3: Indicar su edad");

    let oldest = discoverPersonOldest(nombre, edad);
    console.log("La persona mayor es: " + oldest[1] + " -> Edad: " + oldest[0]);

    function discoverPersonOldest(nombres, edades){
        if(edades[0] > edades[1] && edades[0] > edades[2]){
            return [edades[0], nombre[0]];
        }
        else if(edades[1] > edades[0] && edades[1] > edades[2]){
            return [edades[1], nombre[1]];
        }
        else if(edades[2] > edades[0] && edades[2] > edades[1]){
            return [edades[2], nombre[2]];
        }
    }

}

function ejercicioOnce(){
    let antiguedad = Number(prompt("Indique sus años de antiguedad"));
    console.log("Usted recibirá " + calcularBono(antiguedad) + " soles");

    function calcularBono(anios){
        let bono;
        if(anios < 5 ){
            bono = anios * 100;
        }
        else{
            bono = 1000;
        }
        return bono;
    }
}

function ejercicioDoce(){
    let aniosTrabajo = Number(prompt("Indique la cantida de años que lleva trabajando"));
    for (let i = 0; i < aniosTrabajo; i++) {
        console.log("Año " + (i + 1) + ": " + calcularSalario(aniosTrabajo)[i]);
    }

    function calcularSalario(anios){
        let salario = [1500];
        for (let j = 1; j < anios; j++){
            salario[j] = salario[j-1] + salario[j-1] / 20;
        }
        return salario;
    }
}

function ejercicioTrece(){
    let notas = [];
    let cantidad = Number(prompt("Indique la cantidad de notas"));

    for (let i = 0; i < cantidad; i++){
        notas[i] = Number(prompt("Indique la nota " + i + ":"));
    }
    console.log("Aprobados: " + determinarEstadoNota(notas).aprobados);
    console.log("Desaprobados: " + determinarEstadoNota(notas).desaprobados);

    function determinarEstadoNota(notas){
        let aprobados = 0;
        let desaprobados = 0;
        for (let j = 0; j < notas.length; j++) {
            if(notas[j] < 11){
                desaprobados++;
            }
            else{
                aprobados++;
            }        
        }
        return {'aprobados': aprobados, 'desaprobados': desaprobados};
    }
}

function ejercicioCatorce(){

    let focos = asignarColores();
    let colores = contarColores(focos);

    console.log("Focos verdes: " + colores.verde);
    console.log("Focos rojos: " + colores.rojo);    
    console.log("Focos blancos: " + colores.blanco);

    function contarColores(colores){
        let colorFoco = {
            'verde': 0,
            'rojo': 0,
            'blanco': 0
        }
        for(let i = 0; i < colores.length; i++){
            if(colores[i] == "Verde"){
                colorFoco.verde++;
            }
            else if(colores[i] == "Rojo"){
                colorFoco.rojo++;
            }
            else if(colores[i] == "Blanco"){
                colorFoco.blanco++;
            }
        }
        return colorFoco;
    }

    function asignarColores(){
        let colores = [];
        for (let i = 0; i < 100; i++){ 
            let randomThree = parseInt(Math.random() * 3) + 1;
            switch (randomThree){
                case 1:{
                    colores[i] = "Verde";
                    break;
                }
                case 2:{
                    colores[i] = "Rojo";
                    break;
                }
                case 3:{
                    colores[i] = "Blanco";
                    break;
                }
            }
        }
        return colores;
    }   
}


//ejercicioDos();
//ejercicioCinco();
//ejercicioSeis();
//ejercicioSiete();
//ejercicioOcho();
//ejercicioNueve();
//ejercicioDiez();
//ejercicioOnce();
//ejercicioDoce();
//ejercicioTrece();
ejercicioCatorce();
