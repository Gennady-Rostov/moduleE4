const obj = {
    name: 'Alina',
    version: 23
};

fn(obj);

function fn(n) {
    for (let key in n) {
        console.log(key + ' = ' + n[key]);
    }
}