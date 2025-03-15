//function prometeUnSaludo() {
//    return Promise.resolve("ola");
//    // esto normalmente no te tira la promesa con los datos asi nomas
//    //usamos el constructor para hacer el codigo asicrono
//}
//
//function prometeNoSaludarteTeTiraLaDirty() {
//    return Promise.reject("ora tu hijo de tu madre");
//}
//
//function prometeSaludoPeroNoCumple() {
//    return new Promise( () => {
//
//    });
//}

function prometemeAmistad() {
    return new Promise ( (resolve, reject) => {
        if (Math.random() < 0.8){
            resolve("soy tu compa");
        } else {
            reject(new Error("nombre mijo no vales ñonga"));
        }
    });
}

function agregarEmojis(mensaje){
    return new Promise ((resolve, reject) => {
        resolve( `${mensaje} 🗣🗣🗣`)
    })
}

prometemeAmistad()
    .then(respuesta => agregarEmojis(respuesta) )
    .then(mensaje => {
        console.log(mensaje);
        return Promise.resolve(true)
    })
    .then(ok => console.log(ok ? "todobien" : "todomal"))
    .catch( error => console.error(error))
    .finally( () => console.log("Fin de la promesa"));
