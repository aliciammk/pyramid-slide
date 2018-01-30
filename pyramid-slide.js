

var heightElem = document.getElementById("height");
var formElem = document.getElementById("draw-form");

// set a handler function for the form's submission event
formElem.onchange = function(event) {

    console.log(heightElem.value)

    event.preventDefault();


    displayHeight(heightElem.value);
    

    // figure out the height the user typed
    heightStr = heightElem.value;


    // convert the string to an int
    height = parseInt(heightStr);



    // draw pyramid with the specified height
    drawPyramid(height);
}

// display the height of the pyramid next to the slider
function displayHeight(height) {
    heightElem.className = "displayHeight";
    document.getElementById('displayHeight').value=height;
}



/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
function drawPyramid(height) {

    // first, clear the old content
    document.getElementById("pyramid").innerHTML = "";



    
    // var formElem = document.getElementById("draw-form");

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            // determines what symbol the user chose
            var formSymbol = document.getElementById("symbol");
            rowStr += formSymbol.value;
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
