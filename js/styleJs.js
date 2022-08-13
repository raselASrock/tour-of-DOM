const sections = document.querySelectorAll("section");
// console.log(sections);
for( const section of sections ){
    section.style.border = "2px solid red";
    section.style.marginBottom = "5px";
    section.style.borderRadius = "5px";
    section.style.paddingLeft = "7px";
    section.style.backgroundColor = "lightgray";
    // console.log(section);
    
}

// const placesContainer = document.getElementById("places-container");
// placesContainer.style.backgroundColor = "yellow"

const placesContainer = document.getElementById("places-container");
placesContainer.classList.add("yellow-bg");