// // //oop object oriented programming


// // const kitten ={
// //     name: "Michael",
// //     isCute: true,
// //     gender: "female",

// // };

// // const kittenTwo={
// //     name: "frodo",
// //     color: "spotted"

// // };
// // kittenTwo.__proto__ = kitten;
// // console.log(kittenTwo);
// // console.log(kitten.isCute)
// // console.log(kittenTwo.name)

// // //make two objects one object needs to inherit the other object

// // const carOne ={
// //     make: "Subaru",
// //     model: "Forester",
// //     color: "black",
// //     year: 2019,
// // };

// // const carTwo ={

// // };
// // carTwo.__proto__ = carOne;
// // console.log(carTwo);


// // //constructor functions

// // function User(name){
// //     //create this variable; sets this equal to this user
// //     this.name = name;
// // //return this
// // }





// // let lizz = new User("Lizz");
// // let pete = new User("pete")


// // console.log(lizz.name)
// // console.log(pete.name)

// // function tvShows( name,stars, genre){
// //     this.name = name;
// //     this.stars = stars;
// //     this.genre = genre;

// // }

// // let tgp= new tvShows("the Good Place", "Kristen Bell", "Comedy")


// // function broadwayStar(name, show, role){
// //     this.name = name;
// //     this.show = show;
// //     this.role = role;

// //     this.intro = function(){
// //         console.log( "Hi my name is " + this.name)
// //     }

// // }

// // let idina = new broadwayStar("Idina Menzel", "Wicked", "Elphaba");
// // let kristin = new broadwayStar("Kristin Chenowith","Wicked", "Galinda with a Ga" );
// // let ben = new broadwayStar("Ben Platt", "Dear Evan Hansen", "Evan Hansen")
// // // console.log(idina)
// // // console.log(idina.name);
// // // console.log(kristin)
// // // console.log(ben)

// // idina.intro();
// // kristin.intro();
// // ben.intro();



// // //Class

// // class Car {
// //     constructor(color, make, model, year){
// //         this.color = color;
// //         this.make = make;
// //         this.model = model;
// //         this.year =year;
// //     }
// //     drive(){
// //         console.log("vroom");

// //     }
// //     intro(){
// //         console.log( "This car is a "+ this.make + " " + this.model)
// //     }
// // }


// // let tesla = new Car("red", "Tesla", "Model S", 2020 )
// // console.log(tesla)
// // tesla.drive();
// // tesla.intro();
// //https://api.github.com/users/Lizzwest
// class GithubProfile{
//     constructor(username,name,url){
//         this.username=username;
//         this.name = name;
//         this.url = url
//     }
//     intro(){
//         console.log(`My name is ${this.name}. My username is ${this.username} and here is my url ${this.url}`)
//     }
// }
// fetch("https://api.github.com/users/Lizzwest")
//     .then(response => {
//         return response.json();
//     })
//         .then(data =>{
//             console.log(data);
//             let gitUrl = data.url;
//             console.log(gitUrl)
//             let gitUsername= data.login;
//             let gitName = data.name;
//             console.log(gitUsername)
//             console.log(gitName)

//             let lizz = new GithubProfile(gitUsername, gitName, gitUrl)

//             console.log(lizz)

//             lizz.intro();
//         })


//         //promises

//         let isMomHappy = false;

// // Promise
// let willIGetNewPhone = new Promise(
//     function (resolve, reject) {
//         if (isMomHappy) {
//             let phone = {
//                 brand: 'Samsung',
//                 color: 'black'
//             };
//             resolve(phone); // fulfilled
//         } else {
//             let reason = new Error('mom is not happy');
//             reject(reason); // reject
//         }

//     }
// );

// //console.log(willIGetNewPhone);
// willIGetNewPhone.then(result=>{
//     console.log(result)
// })
    

async function printUsers() {
    const lizzEndpoint = 'https://api.github.com/users/Lizzwest';
    const romeEndpoint = "https://api.github.com/users/romebell";
    let lizz = await fetch(lizzEndpoint).then(res => {
  
    return res.json();
    });

  let rome = await fetch(romeEndpoint).then(response => response.json());
  console.log(rome);
  console.log(lizz)
}
printUsers();

//   fetch(endpoint)
//   .then(res =>{
//       return res.json
//   })


async function printFacebook(){
    let facebookEndpoint = "https://api.github.com/users/facebook";
    let me = await fetch(facebookEndpoint).then(res =>{

        return res.json();
    });
    console.log(me);
}
printFacebook();