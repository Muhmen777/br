var i = 0; //Difine the variable

//Difine the array with pictures
var images = ["Billede0.jpg",
    "Billede1.jpg",
    "Billede2.jpg",
    "Billede3.jpg",
    "Billede4.jpg",
    "Billede5.jpg",
];

//function which run the slides and use of GetElement by ID.
function slides() {
    document.getElementById("slider").src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
}
setInterval(slides, 5000) //Time between the slides.

var i = 0;
var readmore = document.getElementById("readmore");
var btn = document.getElementById("Read");

function Read() {
    if (i == 0) {
        readmore.style.display = "block";
        btn.innerHTML = "Read less"
        i = 1;
    } else {
        readmore.style.display = "none";
        btn.innerHTML = "Read more"
        i = 0;
    }
}