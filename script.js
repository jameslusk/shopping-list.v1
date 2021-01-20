var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}

function removeParent(evt) {
	evt.target.parentNode.remove();
} 

function underlineParent(event) {
	event.target.parentNode.classList.toggle("done");
}

// Accepts user input and adds it to <ul>
function createListElement() {
    var li = document.createElement("li");
    input.value = input.value.charAt(0).toUpperCase() + input.value.slice(1).toLowerCase();

// Add checkbox element to list
    var checkBox = cb = document.createElement( "input" );
    cb.type = "checkbox";
    cb.id = "c1";
    cb.value = name;
    cb.checked = false;
//Append the checkbox to the li
    li.appendChild(cb);
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
// Button Element to remove list item
    var button = document.createElement("button");
    button.appendChild(document.createTextNode("Delete"));
    li.appendChild(button);
    button.onclick = removeParent;

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