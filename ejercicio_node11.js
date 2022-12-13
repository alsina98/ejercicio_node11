/* Primero instalar el paquete `npm i winston` */

function msg() {
    let numero = "2";
    if (typeof numero === "number"){
        return numero * 2;
    }throw new Error("El tipo debe ser un numero")
}

try {
    console.log(msg());
    console.log("Todo correcto");
}catch(e){
    console.log(e);
}
