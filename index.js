// JavaScript in action
// Variable declarations are made at the top of the file, ex: initializing URLs to a variable, connecting to HTML elements, etc. 

// Make an array of our favorite things
let favoriteThings = ["Tiny, the best pupper.", "Having tea nearly all the time.", "Gaming with my friends."];

// Print that array to the console
console.log(favoriteThings);
// Print the first item to the console
console.log(favoriteThings[0])

// Let's now add that array to the HTML page via DOM manipulation
// Arrays have an awesome methods that can make this possible like the .forEach() or .map(), we're going to see the .map() method: 
// JS can create HTML elements with the .createElement() method, the elements can be given attributes we're already familiar with!

favoriteThings.map(thing => {
    // For each favorite thing, we make a new li tag
    let listItem = document.createElement('li');

    // We then set the value of the array item to be the li text
    listItem.innerText = thing;

    // We can even give class/id names to the created element
    listItem.className = "listItemContents";

    // We can use the .appendChild() method to add this li to the ul in our HTML with a .getElementById() method
    document.getElementById("unorderedList").appendChild(listItem);
})

// Can we do this with other things? Yup.
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

// Fetch
// JavaScript can send network requests to ask for and receive information/data from servers to load in
// It make requests to any API (Application Programming Interface) that returns JSON(JavaScript Object Notation)  data
// We will fetch a random cat photo from the the Cat API: https://api.thecatapi.com/v1/images/search or if you are a dog person we have the Dog API: https://random.dog/woof.json 

// Use the fetch keyword and pass a URL as the argument, fetch is promised-based which means we have to resolve the the promise with .then() methods(one to return our response from the API & JSONify it and another to pass/use the JSON object)
/*
BASIC fetch structure:
fetch(url)
    .then(code to process the data)
    .then(code to use the data)
*/

fetch("https://api.thecatapi.com/v1/images/search")
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonFromCatAPI) {
        console.log(jsonFromCatAPI);
        displayCatPhoto(jsonFromCatAPI);
    })

// Getting from the console to the visible HTML:
// We can make a function to display our data similarly to the array example above!
function displayCatPhoto(catData) {
    // Use a console log to check our function is getting passed the data
    console.log(catData);

    // Use a console.log to access the URL
    console.log(catData[0].url);

    // We know we want to use an img tag to hold the image, let's use the createElement method
    let catImgTag = document.createElement('img');

    // Assign attributes of src, alt, id, height, & width
    catImgTag.src = catData[0].url;
    catImgTag.alt = "This is a photo of a cat from the Cat API";
    catImgTag.class = "img-fluid";
    catImgTag.style = "height: 60vh; width: 45vw";

    // Append the img tag to the parent element div
    document.getElementById("photoDiv").appendChild(catImgTag);
}


/* 
Resources on fetch/JSON:
- https://javascript.info/fetch
- https://www.javascripttutorial.net/javascript-fetch-api/ 
- https://www.w3schools.com/js/js_json_intro.asp 
*/