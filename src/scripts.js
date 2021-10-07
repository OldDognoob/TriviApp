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

}