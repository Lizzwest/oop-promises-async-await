//oop object oriented programming


const kitten ={
    name: "Michael",
    isCute: true,
    gender: "female",

};

const kittenTwo={
    name: "frodo",
    color: "spotted"

};
kittenTwo.__proto__ = kitten;
console.log(kittenTwo);
console.log(kitten.isCute)
console.log(kittenTwo.name)

//make two objects one object needs to inherit the other object

const carOne ={
    make: "Subaru",
    model: "Forester",
    color: "black",
    year: 2019,
};

const carTwo ={

};
carTwo.__proto__ = carOne;
console.log(carTwo);


//constructor functions
