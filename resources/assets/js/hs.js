
var storage = JSON.parse(localStorage.getItem("highscores")); 
var container = document.getElementById("hs-container");
var clearHighScores = document.querySelector("#reload-hs");
// Used to show the user that if storage is equal to nothing then show emptry function 
//If storage is not null then Show High Scores
if (storage === null) {
    empty()
} else {
    showHighScores()
}
// Make an  Empty Function to show when No high Scores Are Presented in console.log
function empty() {
    //make contanier empty
    container.innerHTML = "";
    // create new h1 
    var highscore = document.createElement("h3");
    //the text 
    highscore.textContent = "Start Quiz to Display HighScores";
    //Link H1 to hs- container 
    container.append(highscore);
}

function showHighScores() {
    //make contanier empty
    container.innerHTML = "";
    //create a list
    var userHighscore = document.createElement("ul");
    //link to container
    container.append(userHighscore);

// make a for loop 
    for (var i = 0; i < storage.length; i++) {
        var listItem = document.createElement("li")
        listItem.textContent = "name: " + storage[i].initials + " score: " + storage[i].score;
        container.append(listItem);
    }
}
//refresh Hs when it is clicked
clearHighScores.addEventListener("click", function() {
    localStorage.setItem("highscores", null);
    empty();
});
