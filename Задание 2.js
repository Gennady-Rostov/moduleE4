const obj = {
    name: 'Alina',
    age: 23
};

console.log(isProperty(obj, 'age'));

function isProperty(object, property) {
    if (object.hasOwnProperty(property)) {
        return true;
    } else {
        return false;
    }
}
