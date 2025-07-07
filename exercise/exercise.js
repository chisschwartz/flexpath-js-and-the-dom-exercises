/*
Exercise 1: Accessing Elements with getElementById

Description: 

Select the element with the ID 'main-title' and change its text content 
to "Welcome to the DOM Manipulation Page".
*/

document.getElementById("main-title").innerHTML =
"Welcome to the DOM Manipulation Page"

console.log("Making a change!");

/*
Exercise 2: Accessing Elements with querySelector

Description: 

Use querySelector to select the first <p> element with the 
class 'intro-text' and change its color to blue.
*/

const introText = document.querySelector(".intro-text");

introText.style.color = 'blue'

/*
Exercise 3: Accessing Multiple Elements with querySelectorAll

Description: 

Use querySelectorAll to select all elements with the class 'article-text' and 
set their font size to 18px.
*/

const articleText = document.querySelectorAll(".article-text");

for (i = 0; i < articleText.length; i++) {
	articleText[i].style.fontSize = "18px"
}

/*
Exercise 4: Navigating the DOM Tree

Description: 

Select the element with ID 'introduction' and access its parent node. 
Log the parent node's tag name to the console.
*/

const parentName = document.getElementById("introduction").parentNode.nodeName;

console.log(parentName);

/*
Exercise 5: Accessing Child Nodes

Description: 

Select the <ul> with ID 'item-list' and log the number of 
its child elements to the console.
*/

const childrenNodes = document.getElementById("item-list").childNodes.length;

console.log(childrenNodes);

/*
Exercise 6: Updating Inner HTML

Description: 

Change the inner HTML of the element with ID 'introduction' to 
include a new paragraph saying "This content has been updated!".
*/

const para = document.createElement("p");
const node = document.createTextNode("This content has been updated!");
para.appendChild(node);

const element = document.getElementById("introduction");
element.appendChild(para);

/*
Exercise 7: Changing Attributes with setAttribute

Description: 

Assume there's an image with ID 'main-image' in your HTML. 
Change its src attribute to point "image2.png".
*/

const image = document.getElementById("main-image");
image.setAttribute("src", "image2.png");


/*
Exercise 8: Adding an Event Listener

Description: 

Add an event listener to the button with ID 'alert-button' that 
shows an alert with the message "Button Clicked!" when clicked.
*/

// const alertButton = document.getElementById("alert-button");
// alertButton.addEventListener("click", 
// function(){ alert("Button Clicked!"); });

/*
Exercise 9: Removing an Event Listener

Description: 

Remove the code from Exercise 8.

In this file, add an event listener to the button with ID 'alert-button' that 
shows an alert when clicked. 

Then, remove the event listener so that clicking the button no longer 
shows the alert after 5 seconds.
*/

const alertButton = document.getElementById("alert-button");

function buttonAlert(){ alert("Button Clicked!");};

alertButton.addEventListener("click", buttonAlert);

const timeOut = setTimeout(removeEvent, 5000);

function removeEvent() {
	alertButton.removeEventListener("click", buttonAlert);
}

/*
Exercise 10: Handling Keyboard Events

Description: 

Add an event listener to the document that logs the 
key and code of any key pressed by the user.
*/

var keys = "";

document.addEventListener("keydown", function(event) {
	const keyLogger = event.key;
	const keyCode = event.code;

	console.log(keys += (keyLogger + " " + keyCode + " "));
});

/*
Exercise 11: Event Propagation

Description: 

Add click event listeners to the <section> with ID 'interactive' and to 
the <button> with ID 'color-button'.

In each event handler, log a message indicating which element was clicked. 

Observe event bubbling.
*/

const interactiveBubble = document.getElementById("interactive");
const colorButton = document.getElementById("color-button");

interactiveBubble.addEventListener("click", function(event) {
	let clickedElement = event.target;
	console.log(clickedElement.innerHTML + " Clicked");
});

// colorButton.addEventListener("click", function(event) {
// 	console.log("Color Button Clicked")
// });

/*
Exercise 12: Stopping Event Propagation

Description: 

Modify the previous exercise to prevent the click event on 
the button from bubbling up to the section.
*/

colorButton.addEventListener("click", function(event) {
	console.log("Color Button Clicked")
	event.stopPropagation();
});

/*
Exercise 13: Using console.log for Debugging

Description: 

Inside the event listener for the color-button, 
log the current background color of the button before changing 
it to light green.
*/

colorButton.addEventListener("click", function() {
	console.log("current background color is:", colorButton.style.backgroundColor);
	colorButton.style.backgroundColor = "lightgreen";
});

/*
Exercise 14: Creating and Appending New Elements

Description: 

Create a new <li> element with the text "Item 4" and append it to 
the <ul> with ID 'item-list'.
*/

const newNode = document.createElement("li")
const textNode = document.createTextNode("Item 4")

newNode.appendChild(textNode);

document.getElementById("item-list").appendChild(newNode);

/*
Exercise 15: Removing Elements from the DOM

Description: 

Remove the first <li> element from the <ul> with ID 'item-list'.
*/

const removedElement = document.getElementById("item-list");

removedElement.removeChild(removedElement.firstElementChild);

/*
Exercise 16: Using classList.add

Description: 

Add a class 'highlight' to all <p> elements inside the 
section with ID 'content'.
*/

const content = document.getElementById("content");
const paragraphs = content.querySelectorAll("p");

paragraphs.forEach(function (p) {
	p.classList.add("highlight");
});

/*
Exercise 17: Using classList.toggle

Description: 

Add a click event listener to the button with ID 'color-button' that 
toggles the class 'active' on itself.
*/

colorButton.addEventListener("click", function() {
	colorButton.classList.toggle("active");
});

/*
Exercise 18: Preventing Default Behavior

Description: 

Add a submit event listener to the form with ID 'input-form' that 
prevents the form from submitting and logs the input value to the console.
*/

const submitButton = document.getElementById("input-form");

submitButton.addEventListener("submit", function(event) {
	event.preventDefault();
	console.log("Submit button clicked");
});

/*
Exercise 19: Simple Drag and Drop

Description: 

Make the element with ID 'drag-source' draggable and implement 
drag and drop functionality to move it to the element with ID 'drop-target'.
*/

const dragSource = document.getElementById("drag-source");
const dropTarget = document.getElementById("drop-target");

dragSource.addEventListener("dragstart", function(event) {
	event.dataTransfer.setData("text/plain", event.target.id);
});

dropTarget.addEventListener("dragover", function(event) {
	event.preventDefault();
});

dropTarget.addEventListener("drop", function (event) {
	event.preventDefault();
	const data = event.dataTransfer.getData("text/plain");
	const dragElement = document.getElementById(data);
	dropTarget.appendChild(dragElement);
});

/*
Exercise 20: Using dataTransfer in Drag and Drop

Description: 

Use event.dataTransfer to pass custom data during the drag and drop operation 
in the previous exercise. 

For example, pass a message and log it when the drop occurs.
*/

dragSource.addEventListener("dragstart", function(event) {
	event.dataTransfer.setData("text/plain", "custom data");
});

dropTarget.addEventListener("drop", function (event) {
	event.preventDefault();
	const data = event.dataTransfer.getData("text/plain");
	console.log("Dropped data:", data);
	dropTarget.appendChild(dragSource);
});


/*
Exercise 21: Cloning Nodes

Description: 

Clone the element with ID 'main-title' and 
append the clone to the <footer> element.
*/

const mainTitle = document.getElementById("main-title");

const clonedTitle = mainTitle.cloneNode(true);
const footer = document.querySelector("footer");
footer.appendChild(clonedTitle);

/*
Exercise 22: Modifying Styles with JavaScript

Description: 

Change the background color of the <body> when the 
user moves the mouse over the <header> element.
*/

const header = document.querySelector("header");

header.addEventListener("mouseover", function() {
	document.body.style.backgroundColor = "red";
});

header.addEventListener("mouseout", function() {
	document.body.style.backgroundColor = "";
});

/*
Exercise 23: Debouncing Function Calls

Description: 

Implement a debounced resize event handler that logs the 
new window size after the user stops resizing the browser window for 
500 milliseconds.
*/

let resizeTimeout;

window.addEventListener("resize", function() {
	clearTimeout(resizeTimeout);
	resizeTimeout = setTimeout(function() {
		console.log("Window size:", window.innerWidth, "x", window.innerHeight);
	}, 500);
});

/*
Exercise 24: Optimizing DOM Manipulations

Description: 

Add 100 new list items to ID 'item-list' efficiently by 
using a DocumentFragment. You can create one by using:

`document.createDocumentFragment()`
*/

const itemList = document.getElementById("item-list")

const fragment = document.createDocumentFragment();

for (i = 4; i <= 103; i++) {
	const list = document.createElement("li");
	list.textContent = "Item " + i;
	fragment.appendChild(list);
}

itemList.appendChild(fragment);


/*
Exercise 25: Using Event Delegation

Description: 

Instead of adding event listeners to each <li> in 'item-list', 
add a single event listener to 'item-list' that logs the 
text of the clicked list item.
*/

itemList.addEventListener("click", function(event) {
	if (event.target && event.target.nodeName === "LI") {
		console.log("List item clicked:", event.target.textContent);
	}
});