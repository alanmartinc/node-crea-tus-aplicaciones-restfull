// PROMESAS
/*
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({id: 1, company: 'Seat', model: 'Leon'});
        // reject(new Error('Se ha producido un error al leer la DB'));
    }, 4000)
});

promesa
    .then(result => console.log(result))
    .catch(err => console.log(err.message))
*/

// PROMESAS ANIDADAS
function getCar(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Obtenido coche 23 de nuestra base de datos');
            resolve({id: 23, company: 'BMW', model: 'X3'});
        }, 3000)
    });
}

function getModel(model) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Obtenido modelo X3 de BMW');
            resolve({speed: 200, seat: 5, size: '4*5'});
        }, 3000)
    });
}

/*
const promesa = getCar(23);
promesa.then(coche => console.log(coche));

promesa
    .then(coche => getModel(coche.model))
    .then(model => console.log(model))
    .catch(err => console.log(err.message))
*/

// ASYNC Y AWAIT
async function showModel() {
    try {
        const car = await getCar(23);
        const model = await getModel(car.model);
        console.log(model);
    } catch (err) {
        console.log(err);
    }
}

showModel();
