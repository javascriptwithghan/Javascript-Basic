// const obj = {
//     fname:'ghan',
//     age: 20,
//     location: 'Noida'
// };


const objDeep = {
    fname:'ghan',
    age: 20,
    location: 'Noida',
    address: {
        city:'US'
    }
};

// const newObj = { ...obj };  // Shalow copy 
// const newObj = Object.assign({}, obj);  // Shalow copy 
const newObj = JSON.parse(JSON.stringify(objDeep)); // deep copy
newObj.address.city = "UK12";
console.log(objDeep);
console.log(newObj);