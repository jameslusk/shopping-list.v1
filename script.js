var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

// Accepts user input and adds it to <ul>
function createListElement() {
    var li = document.createElement("li");
    input.value = input.value.charAt(0).toUpperCase() + input.value.slice(1).toLowerCase();
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

// Accepts user input with mouse click
function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

// Accepts user input with keypress "Enter"
function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick); 

input.addEventListener("keypress", addListAfterKeypress);