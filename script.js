
const form = document.querySelector(".contact-form");

if(form){

form.addEventListener("submit", function(event){

    const inputs = form.querySelectorAll("input, textarea");
    let valid = true;
const stars = document.querySelectorAll(".star-rating i");

stars.forEach((star,index)=>{

    star.addEventListener("click", ()=>{

        stars.forEach((s,i)=>{

            if(i <= index){
                s.style.color = "gold";
            }else{
                s.style.color = "#ccc";
            }

        });

    });

});
const searchIcon = document.querySelector(".search-bar i");

searchIcon.addEventListener("click", function(){

    const search = document.querySelector(".search-bar input");

    alert("You searched for: " + search.value);

});
const basketButtons = document.querySelectorAll(".basket-btn");

basketButtons.forEach(button=>{

    button.addEventListener("click", function(){

        alert("Item added to basket!");

    });

});
const newsletter = document.querySelector(".newsletter form");

newsletter.addEventListener("submit", function(event){

    event.preventDefault();

    alert("Thank you for subscribing!");

});

    inputs.forEach(function(input){
        if(input.value.trim() === ""){
            valid = false;
        }
    });

    if(!valid){
        event.preventDefault();
        alert("Please complete all fields.");
    }
});

}

function submitReview(){

    document.getElementById("reviewText").value = "";

    document.getElementById("reviewMessage").innerHTML =
    "✓ Thank you! Your review has been submitted.";

    document.getElementById("reviewMessage").style.color = "green";

    let stars = document.querySelectorAll(".star-rating i");

    stars.forEach(function(star){
        star.style.color = "#d4af37";
    });

}
function openProfile(){
    document.getElementById("profilePopup").style.display = "flex";
}

function closeProfile(){
    document.getElementById("profilePopup").style.display = "none";
}

function saveProfile(){

    alert("Your profile has been saved!");

    document.getElementById("profilePopup").style.display = "none";

}
const searchBar = document.getElementById("searchBar");

if (searchBar) {
    searchBar.addEventListener("input", function () {

        const search = this.value.toLowerCase().trim();

        const products = document.querySelectorAll(".product-card");

        products.forEach(function(product) {

            const name = product.getAttribute("data-name").toLowerCase();

            if (name.includes(search)) {
                product.style.display = "";
            } else {
                product.style.display = "none";
            }

        });

    });
}
function sendMessage(){

    document.getElementById("contactForm").reset();

    document.getElementById("sentMessage").innerHTML =
    "✓ Your message has been sent successfully!";

}
function openAbout(){

    document.getElementById("aboutPopup").style.display = "flex";

}

function closeAbout(){

    document.getElementById("aboutPopup").style.display = "none";

}