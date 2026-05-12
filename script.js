// MOBILE MENU
function toggleMenu(){
  const nav = document.getElementById("navLinks");

  if(nav.style.display === "flex"){
    nav.style.display = "none";
  }else{
    nav.style.display = "flex";
  }
}

// IMAGE SLIDER
let slideIndex = 0;
showSlides();

function showSlides(){

  let slides = document.getElementsByClassName("slides");

  for(let i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }

  slideIndex++;

  if(slideIndex > slides.length){
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 3500);
}

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function(e){

    e.preventDefault();

    document.querySelector(this.getAttribute("href"))
    .scrollIntoView({
      behavior:"smooth"
    });
  });
});