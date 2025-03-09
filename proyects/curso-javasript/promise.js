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

prometemeAmistad()
    .then( respuesta => {
        console.log(respuesta);
    })
    .catch( error =>{
        console.error(error);
    })
    .finally( () => {
        console.log("Fin de la promesa")
    });

//sigo con el codigo
