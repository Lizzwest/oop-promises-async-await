# OOP, Promises, Async/Await
 
This is my repo for OOP, Promises, Async/Await on Thursday, July 23rd, 2020


# This is a summary of everything we have gone over thus far.

## Fetch Calls

What is a fetch call and how do we use it?

### Fetch allows you to make a request through an API for information. It will return a response packaged as an object. Using the .json method, your results will be returned in json format. Let's see it in action. *The example below is purely for information. It does not have a path to follow.*

```javascript
   fetch(APIURLRequested)
    .then(function(response){
        console.log(response)
        return response.json()
    })
    .then(function(jsonResponse){
        let element= jsonResponse.results
        
    })
```

You can also add a catch(); (function) to advise you of any errors you encounter and print them to your console.


## HTML Forms

Using an HTML form tag allows users to input information into fields and then have them sent to a server to process the information. Each element on an HTML form requires a label and an  input. Within the input you need to include the *type* of info being taken in, the *name* you have given to this field and an ID to give you the ability to manipulate each field individually. You can also make fields required by adding *required* to the input field. You can do text, email ( must include an @), and age ( and many others) as well as use input fields such as a checkbox.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Example HTML Form</title>
</head>
<body>
    <form action="otherHTMLfile" method="get">
        <div>
            <label for="name">Name</label>//The label appears next to the input field.
            <input type="text" name= "name" id = "name" > //The inout field specifies what is being input (text in this case), the name that matches its label (name) and the ID to manipulate it. 
        </div>
            
    <script src ="./app.js"></script>
</body>
</html>>


```

## Constructor Functions

Constructor functions are a fancy way of saying functions with the *new* keyword that start with a capital letter. 


```javascript
 ///this function example takes in three parameters. Ill be using name, band and song.
 function Musician( name, inABand, song){
     //the this keyword refers to the function output. in this case, this is referring to Lady Gaga and her attributes.
     this.name = name;
     this.inABand = inABand;
     this.song = song;

 }

 let ladyGaGa= new Musician("Lady Gaga", false, "Born This Way")//this result, when passed through the function, will return an object with the values I put here.
```


## Class

A class is used alongside a constructor to deifne an object. The constructor function is called automatically when a class is initiated. 


```javascript
//this class defines a general cat
class Cat {
  constructor(breed) { //the constructor function calls for *this* cat's breed to be output, when called into the function.
    this.catBreed = breed;
  }
}
newCat = new Cat("Siamese"); //this value will pass through the function and output thi.catBreed set to Siamese.
```

## Promises, Promises

A promise, in javascript, is essentially a way of saying new deal. You have the Promise, but it has not been fulfilled till the function has resolved. Promises have three possible states. Pending, (waiting for a resolution) fulfilled, ( resolved and approved) and rejected (resolved, but not approved).


```javascript
 Promise
let willSheSayYes = new Promise(
    function (resolve, reject){//the two options for the outcome of the promise 
        if (isSheSmiling) {//*if* she says yes, give me her answer and ring.
            let herAnswer = {
                answer: 'Yes!',
                ring: 'princess cut'
            };
            resolve(herAnswer); // fulfilled, she said yes
        } else {
            let reason = new Error("I am in love with someone else");// with a rejection comes the reason behind it
            reject(reason); // rejected, thats got to sting
        }

    }
);
```

## Async/await


Last but not least, we have Async/await. Async is a keyword that can be placed in front of a function.  This guarantees the function returns a promise. Adding in await tells JavaScript to wait until the promise is resolved and results have been returned to proceed. Here is an example.

```javascript
async function seeSomePokemon() {
    const charmanderEnd = "https://pokeapi.co/api/v2/pokemon/charmander";
    const bulbasaurEnd = "https://pokeapi.co/api/v2/pokemon/bulbasaur";
    
    //we are telling the charmander call to wait for the fetch of info to resolve before proceeding with charmander output
   let charmander = await fetch(bulbasaurEnd).then(res => res.json());
   //this returns our results in a json format
    
    let bulbasaur = await fetch(bulbasaurEnd).then(response => response.json());

}
seeSomePokemon();
```



