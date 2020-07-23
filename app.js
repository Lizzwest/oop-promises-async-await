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

function User(name){
    //create this variable; sets this equal to this user
    this.name = name;
//return this
}





let lizz = new User("Lizz");
let pete = new User("pete")


console.log(lizz.name)
console.log(pete.name)

function tvShows( name,stars, genre){
    this.name = name;
    this.stars = stars;
    this.genre = genre;

}

let tgp= new tvShows("the Good Place", "Kristen Bell", "Comedy")


function broadwayStar(name, show, role){
    this.name = name;
    this.show = show;
    this.role = role;

}

let idina = new broadwayStar("Idina Menzel", "Wicked", "Elphaba");
let kristin = new broadwayStar("Kristin Chenowith","Wicked", "Galinda with a Ga" );
let ben = new broadwayStar("Ben Platt", "Dear Evan Hansen", "Evan Hansen")
console.log(idina)
console.log(idina.name);
console.log(kristen)
console.log(ben)




