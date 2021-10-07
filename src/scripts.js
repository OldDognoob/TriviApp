/* find the element id = game in our html file */
const game = document.getElementById('game')
/*grab score display by id from html file */
const scoreDisplay = document.getElementById('score')

/*we are going to use this, to make a fetch request
for the specific difficulty to the specific level */
const film = 11
/*this is the array of levels */
const levels = ['easy', 'medium', 'hard']

function addGenre(){
    //we are going to create elements in js
    const column = document.createElement('div') //it is a js method allow us to create element in javascript
    // we are going to use the classList method to add a class
    column.classList.add('genre-column')
    // we can see how it look by 
    column.innerHTML = 'hello there genre here talking to you all'
    // we grabbing the game and we are going to use append the column we created
    // append method to put column inside game
    game.append(column)
    // we are you using forEach method to grab each levels that we mentioned above
    levels.forEach(level=>{
        //for each level in levels array i m going to fetch the api but i dont want difficulty easy
        // as I will replace it with the level
        // so we are looping at easy we fetch and the easy will be replaced by level
        // at the second time it would be replace by string medium
        // at the third time it would be replaced by string hard
        fetch(`https://opentdb.com/api.php?amount=1&category=11&difficulty=${level}&type=boolean`)
        // so fetching the API, we need to get the response
                .then(response => response.json())
                .then(data => console.log(data)) // we are going to console log to see what is coming back to us
    })

}

//pulling the function
addGenre()