
function startMarker() {

  //$input.on("", function() {

// Create an instance of mark.js and pass an argument containing
// the DOM object of the context (where to search for matches)'
var markInstance = new Mark(document.querySelectorAll(".context"));
// Cache DOM elements
var keywordInput = document.querySelector("input[name='keyword']");


function performMark() {

// Read the keyword
var keyword = keywordInput.value;



// Remove previous marked elements and mark
// the new keyword inside the context
markInstance.unmark({
  done: function(){
    markInstance.mark(keyword);
  }
});
};

// Listen to input and option changes

keywordInput.addEventListener("input", performMark);


}
