const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({id: 1, company: "Seat", model: "Leon"});
        // reject(new Error('Se ha producido un error al leer la DB'));
    }, 4000)
});

promesa
    .then(result => console.log(result))
    .catch(err => console.log(err.message))
