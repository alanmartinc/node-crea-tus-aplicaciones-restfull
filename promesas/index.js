// PROMESAS
const promesa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({id: 1, company: 'Seat', model: 'Leon'});
        // reject(new Error('Se ha producido un error al leer la DB'));
    }, 2000)
});

promesa1
    .then(result => console.log(result))
    .catch(err => console.log(err.message))

// PROMESAS ANIDADAS
function getCar(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Obtenido coche 23 de nuestra base de datos');
            resolve({id: 23, company: 'BMW', model: 'X3'});
        }, 1000)
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
const promesa2 = getCar(23);
promesa.then(coche => console.log(coche));

promesa2
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


// PROMESAS EN PARALELO
const promesa3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Leyendo datos de FB');
        resolve({friends: 100, likes: 200});
    }, 5000);
});

const promesa4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Leyendo datos de TW');
        resolve({friends: 300, likes: 900});
    }, 5000);
});

Promise.all([promesa3, promesa4])
    .then(result => console.log(result))
    .catch(err => console.log(err.message))
