/* find the element id = game in our html file */
const game = document.getElementById("game");
/*grab score display by id from html file */
const scoreDisplay = document.getElementById("score");

/*we are going to use this, to make a fetch request
for the specific difficulty to the specific level */
//replace the const film equal 11 with an array of objects
/*const film = 11;*/
// we have an array of 4 objects and we are going to loop over 4 to create 4 columns
const genres = [
  {
    name: "Film",
    id: 11,
  },
  {
    name: "Books",
    id: 10,
  },
  {
    name: "Music",
    id: 12,
  }, 
  {
    name: "Video Games",
    id: 15,
  },
];
/*this is the array of levels */
const levels = ["easy", "medium", "hard"];

function addGenre(genre) {
  //we are going to create elements in js
  const column = document.createElement("div"); //it is a js method allow us to create element in javascript
  // we are going to use the classList method to add a class
  column.classList.add("genre-column");
  // we can see how it look by
  column.innerHTML = genre.name;
  // we grabbing the game and we are going to use append the column we created
  // append method to put column inside game
  game.append(column);
  // we are you using forEach method to grab each levels that we mentioned above
  levels.forEach((level) => {
    //for each level in levels array i m going to fetch the api but i dont want difficulty easy
    // as I will replace it with the level
    // so we are looping at easy we fetch and the easy will be replaced by level
    // at the second time it would be replace by string medium
    // at the third time it would be replaced by string hard

    //let create a card
    // we use a const as a blocked scope
    const card = document.createElement("div");
    card.classList.add("card");
    // we going to use append to insert this card to our column
    // we are grabbing the card and we are going to do this three times
    //as we using forEach and we are looping
    column.append(card);

    //if the level equals easy we want the viewer to see that getting the correct answer gets this number
    if (level === "easy") {
      card.innerHTML = 100;
    }
    if (level === "medium") {
      card.innerHTML = 200;
    }
    if (level === "hard") {
      card.innerHTML = 300;
    }

    fetch(
      `https://opentdb.com/api.php?amount=1&category=11&difficulty=${genre.id}&type=boolean`
    )
      // so fetching the API, we need to get the response
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // we are going to console log to see what is coming back to us
        // we are going to use a method called setAttribute that allow us add data attributes
        // or whatever attributes we want to add
        // we are getting in our data question and we are grabbing the first result
        // which is 0, and if I want something specific I will use the different "key"
        card.setAttribute("data-questions", data.result[0].question);
        // if we see in our console, we will see that in our dive card there is also
        // a data question that we added there
        card.setAttribute("data-answer", data.result[0].correct_answer);
        // we can grab the innerHtml card by the method getInnerHTML method
        // by getting all the information the element has assign it to the data value
        card.setAttribute("data-value", card.getInnerHTML());
      });
    // add an event listener to click any of the cards
    card.addEventListener("click", flipCard);
  });
}

//pulling the function
/*addGenre(genres[0]);*/

// gor each genre i m gone to pass it through into the add genre function
genres.forEach(genre => addGenre(genre))


function flipCard() {
  console.log("clicked");
  //display the answer when we clicked on a card
  const textDisplay = document.createElement('div')
  //we create a trueButton too
  const trueButton = document.createElement('button')
  // we create also a falseButton
  const falseButton = document.createElement('button')
  trueButton.innerHTML = 'True'
  falseButton.innerHTML = 'False'
  textDisplay.innerHTML =  this.getAttribute('data-question')
  // click any of the cards
  this.append(textDisplay,trueButton,falseButton)

  Array.from(document.querySelectorAll('.card'))

}
