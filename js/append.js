//  1. Where to add
const placesList = document.getElementById("places-list");
//  2. What to be added
const li = document.createElement("li");
li.innerText = "pahartoli bon";
//  3. Add the child
placesList.appendChild(li);

// 1. Where to add
const mainContainer = document.getElementById("main-container");
//  2. What to be added
const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "My food List";
section.appendChild(h1);
const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = "biriyani";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.innerText = "borhani";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.innerText = "salad";
ul.appendChild(li3);
section.appendChild(ul)

mainContainer.appendChild(section);


// set inner HTML directly