const quoteText = document.getElementById("quote-text");
const authorName = document.getElementById("author");
const quoteBtn = document.getElementById("new-quote");




// Random quote
function randomQuote() {
 

  // Fetching random quote and parsing it into a JavaScript object
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
    //updating containers
      quoteText.innerText = result.content;
      authorName.innerText = result.author;
      updateBackgroundColor();
    quoteBtn.innerText = "New Quote";
     // 
    
    });
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change the theme color
function changeThemeColor() {
    var newColor = getRandomColor();
    document.documentElement.style.setProperty("--theme-color", newColor);

    // Update the background color of the container
    var container = document.querySelector(".container");
    container.style.backgroundColor = newColor;
}


quoteBtn.addEventListener("click", randomQuote);

document.getElementById("change-theme").addEventListener("click", changeThemeColor);