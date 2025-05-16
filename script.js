calcular=(numero)=>{
    const respuesta = (numero * 10**6)/10**-6;
    return respuesta;
}

const numero=823;
const resultado = calcular(numero);
console.log(`El resultado es: ${resultado.toExponential(2)}`)

calorias=(numero2)=>{
    const respuesta =(numero2 * 6.2415 * 10**18)/0.238;
    return respuesta;
}

const numero2 = 45383;
const resultado2 = calorias(numero2);
console.log(`El resultado del problema2: ${resultado2.toExponential(2)} Ev`);

dinas=(numero3)=>{
    const respuesta =(numero3 * 10**18)/10**-4;
    return respuesta;
}

const numero3 = 625;
const resultado3 = dinas(numero3);
console.log(`El resultado del problema3: ${resultado3.toExponential(2)} dina x S/Gm^2`);

KelvinAFahrenheit=(numero4)=>{
    const respuesta =(numero4 * 10**4)/10**6
    return respuesta;
}

const numero4 = 4500;
const resultado4 = KelvinAFahrenheit(numero4);
console.log(`El resultado del problema4: ${resultado4.toExponential(2)}`);

Petayardas=(numero5)=>{
    const respuesta =(numero5 *9.843 * 10**24)/10**4
    return respuesta;
}

const numero5 = 293;
const resultado5 = Petayardas(numero5);
console.log(`El resultado del problema5: ${resultado5.toExponential(2)} KgF x Pyd/h^2`);