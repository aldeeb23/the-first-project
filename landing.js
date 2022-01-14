/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const theseSections = Array.from(document.querySelectorAll("section"));
const menu = document.getElementById("navbar__list");
let listnomber=theseSections.length;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function listCreation(){
    for(section of theseSections) {
theName =section.getAttribute("data-nav");
theLink =section.getAttribute("id");
// lisItem = document.createElement("li");
// lisItem.innerHTML = `<a class ="menu__link" href= #${theLink}> ${theName}</a>`;
// menu.appendChild(lisItem);    
const item=`<li><a class ="menu__link" href= #${theLink}> ${theName}</a></li>`
  menu.insertAdjacentHTML("beforeend",item);
}
}

function shape (now){
  let positionierung = now.getBoundClientRect();
  return(positionierung.top>=0);
}

function act(){
    for(section of theseSections ){
     if(shape(section))  {
         if(!section.classlist.contains("you-active-class")){
            section.classlist.add("your-active-class");
         }
         else{
             section.classlist.remove("your-active-class");

         }
     } 
    }
}

listCreation();
document.addEventListener("scroll", act);


// var sectionPos = section.offsetTop;
//     window.scroll({
//       top: sectionPos,
//       behavior: "smooth",
//     });






/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active