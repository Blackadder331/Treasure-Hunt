// water image array
const waterImages = [ `./images/water1.png`, `./images/water2.png`, `./images/water3.png`, `./images/water4.png`, `./images/water5.png`, `./images/water6.png`, `./images/water7.png`, `./images/water8.png`, `./images/water9.png`];




// create a function that returns a random water image
function getRandomWaterImage() {
    // generate a random index between 0 and 4
    var randomIndex = Math.floor(Math.random() * 5);
    // return the image at that index
    return waterImages[randomIndex];
  }
  
  // get all the cells
  var cells = document.getElementsByTagName("td");
  
  // loop through the cells
  for (var i = 0; i < cells.length; i++) {
    
    // add a click event listener to each cell
    cells[i].addEventListener("click", function() {
      
      // check if the cell has already been clicked
      if (this.classList.contains("clicked")) {
        // do nothing
        return;
      }
      
      // mark the cell as clicked
      this.classList.add("clicked");
      
      // check if the cell has treasure
      if (this.classList.contains("treasure")) {
        // show overlay element
        document.getElementById("overlay").style.display = "block";
      } else {
        // set the background image of the cell to a random water image
        this.style.backgroundImage = "url(" + getRandomWaterImage() + ")";
      }
      
      // check if all cells have been clicked
      var allClicked = true;
      for (var j = 0; j < cells.length; j++) {
        if (!cells[j].classList.contains("clicked")) {
          // there is still an unclicked cell
          allClicked = false;
          break;
        }
      }
      
      // if all cells have been clicked
      if (allClicked) {
        // show overlay element with game over message
        document.getElementById("overlay").style.display = "block";
        document.getElementById("message").innerHTML = "Game over!";
      }
      
    });
    
  }
  
  // randomly assign one cell to have treasure
  var randomIndex = Math.floor(Math.random() * cells.length);
  cells[randomIndex].classList.add("treasure");
  
  // get the overlay element
  var overlay = document.getElementById("overlay");
  
  // add a click event listener to the overlay element
  overlay.addEventListener("click", function() {
    // hide overlay element
    overlay.style.display = "none";
  });