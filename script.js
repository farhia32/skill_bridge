console.log("JavaScript is connected!");

alert("Welcome to SkillBridge!")
const hero = document.querySelector(".hero");
console.log(hero);

const categories = document.querySelector(".categories");
console.log(categories);

const featured = document.querySelector(".featured");
console.log(featured);

const whyskillbridge = document.querySelector(".why-skillbridge");
console.log( whyskillbridge);

const heading = document.querySelector(".section-heading h2");

heading.textContent = "Explore Opportunities on SkillBridge";


const categorycards = document.querySelectorAll(".category");

categorycards.forEach(function(category) {
category.addEventListener("click", function() {

const categoryName = category.querySelector("h3").textContent;

if (categoryName === "Scholarships") {
    window.location.href = "opportunities.html";
 }

else if (categoryName === "Internships") {
  window.location.href = "opportunities.html";
 }

 else if (categoryName === "Online Courses") {
   window.location.href = "learning.html";
}

else if (categoryName === "Career Development") {
    window.location.href = "opportunities.html";
}

    });
});


console.log("Opportunities JavaScript is connected!");

const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");
const searchMessage = document.querySelector("#search-message");

const opportunityCards = document.querySelectorAll(".opportunity-card2");
const opportunitySections = document.querySelectorAll(".opportunity-list");

const categoryCards = document.querySelectorAll(".category-card");

function searchOpportunities() {

const searchText = searchInput.value.toLowerCase().trim();

let firstMatch = null;
let totalMatches = 0;

opportunityCards.forEach(function(card) {

const title = card.querySelector("h3").textContent.toLowerCase();
const description = card.querySelector("p").textContent.toLowerCase();

if (title.includes(searchText) || description.includes(searchText)) { card.style.display = ""; totalMatches++;
if (firstMatch === null) { firstMatch = card;}
} else { card.style.display = "none"; }
});

opportunitySections.forEach(function(section) {
const cards = section.querySelectorAll(".opportunity-card2");
let visibleCards = 0;
 cards.forEach(function(card) {
    if (card.style.display !== "none") {visibleCards++;}
 });
if (visibleCards === 0) { section.style.display = "none";
} else { section.style.display = ""; }
});
if (totalMatches > 0 && searchText !== "") {
searchMessage.textContent = totalMatches + " opportunities found.";
 firstMatch.scrollIntoView({ behavior: "smooth", block: "center" });
 } else if (searchText === "") {
searchMessage.textContent = "Please enter an opportunity to search.";
} else {searchMessage.textContent = "No opportunities found. Try another search.";}
}

searchButton.addEventListener("click", searchOpportunities);
searchInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") { searchOpportunities(); }

});

categoryCards.forEach(function(category, index) {
category.addEventListener("click", function() {

 if (opportunitySections[index]) { opportunitySections[index].scrollIntoView({behavior: "smooth"});

 }

 });

});


const exploreButtons = document.querySelectorAll(".course-content a");
exploreButtons.forEach((button) => {
button.addEventListener("click", (event) => {
const courseName = button.parentElement.querySelector("h3").textContent;
 localStorage.setItem("selectedCourse", courseName);

 });

});


const platformButtons = document.querySelectorAll(".platform-card a");
platformButtons.forEach((button) => {
    button.addEventListener("click", () => {
    const platformName = button.parentElement.querySelector("h3").textContent;
    console.log("Visiting learning platform: " + platformName);

 });

});

const learningHeading = document.querySelector(".learning-hero-content h1");

if (learningHeading) {console.log("Welcome to the SkillBridge Learning Hub!");

}

const ctaButton = document.querySelector(".cta a");
if (ctaButton) { ctaButton.addEventListener("click", () => { console.log("Exploring more opportunities!");
});

}


const categorySelect = document.querySelector("#category-select");

const courseSelect = document.querySelector("#course-select");

const courseFilter = document.querySelector("#course-filter");

const courseCards = document.querySelectorAll(".learning-course-card");


if (categorySelect) {categorySelect.addEventListener("change", () => { const selectedCategory = categorySelect.value;

if (selectedCategory === "Courses") { courseFilter.style.display = "block"; }

else {courseFilter.style.display = "none";}

courseSelect.value = "all";

courseCards.forEach((course) => { const courseCategory = course.dataset.category;

if ( selectedCategory === "all" || selectedCategory === "Courses" || selectedCategory === courseCategory) {

course.style.display = ""; } 

else { course.style.display = "none"; }

});

});

}

if (courseSelect) { courseSelect.addEventListener("change", () => {

const selectedCourse = courseSelect.value;

courseCards.forEach((course) => {

const courseName = course.dataset.course;

if ( selectedCourse === "all" || selectedCourse === courseName ) { course.style.display = ""; } 
            
else { course.style.display = "none"; }

 });

});

}


const searchinput = document.querySelector("#opportunity-search");

const categoryFilter = document.querySelector("#category-filter");

const locationFilter = document.querySelector("#location-filter");

const searchbutton = document.querySelector("#search-button");

const clearButton = document.querySelector("#clear-button");

const resultsCount = document.querySelector("#results-count");

const opportunities = document.querySelectorAll(".opportunity-item");

const opportunityContainer = document.querySelector(".opportunity-details");


const noResults = document.createElement("div");

noResults.classList.add("no-results");

noResults.textContent = "No opportunities found. Try another search.";


function filterOpportunities() {

 const searchValue = searchInput.value.toLowerCase().trim();

 const selectedCategory = categoryFilter.value;

const selectedLocation = locationFilter.value;

 let visibleCount = 0;

 opportunities.forEach((opportunity) => {

 const opportunityText = opportunity.textContent.toLowerCase();

 const opportunityCategory = opportunity.dataset.category;

 const opportunityLocation = opportunity.dataset.location;

const matchesSearch = opportunityText.includes(searchValue);

 const matchesCategory =  selectedCategory === "all" || selectedCategory === opportunityCategory;

 const matchesLocation = selectedLocation === "all" || selectedLocation === opportunityLocation;

if (matchesSearch && matchesCategory && matchesLocation) {
 opportunity.style.display = "";
 visibleCount++; 
} 
else { opportunity.style.display = "none"; }

    });


    resultsCount.textContent = 
        `Showing ${visibleCount} of ${opportunities.length} opportunities`;

    if (visibleCount === 0) { opportunityContainer.appendChild(noResults); }
     else { noResults.remove(); }

}

searchButton.addEventListener("click", filterOpportunities);

searchInput.addEventListener("input", filterOpportunities);

categoryFilter.addEventListener("change", filterOpportunities);

locationFilter.addEventListener("change", filterOpportunities);

clearButton.addEventListener("click", () => {

    searchInput.value = "";

    categoryFilter.value = "all";

    locationFilter.value = "all";

    filterOpportunities();

});

filterOpportunities();