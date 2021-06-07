const popcat = document.querySelector("#popcat");
const btn = document.querySelector("#btn");
const closeImgUrl = "./images/close.png";
const openImgUrl = "./images/open.png";
const openSound = new Audio("./sound/sound-open.mp3");
const closeSound = new Audio("./sound/sound-close.mp3");

// Button Event Handling for mouse clicks
btn.addEventListener("mousedown", openMouth);
btn.addEventListener("mouseup", closeMouth);

// Button Event Handling for touch screens
btn.addEventListener("touchstart", function(e){
    e.preventDefault(); 
    openMouth();
});

btn.addEventListener("touchend", function(e){
    e.preventDefault();
    closeMouth();
});




function openMouth() {
    popcat.src = openImgUrl;
    openSound.play();
}

function closeMouth() {
    popcat.src = closeImgUrl;
    closeSound.play();
}