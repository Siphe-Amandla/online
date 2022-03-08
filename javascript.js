// Side Navigation JS Code
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
let navBar = document.querySelector(".navbar");

menuBtn.onclick = function() {
	menuBtn.style.opacity = "0";
	menuBtn.style.pointerEvents = "none";
	navBar.classList.add("active"); 
}

cancelBtn.onclick = function() {
	menuBtn.style.opacity = "1";
	menuBtn.style.pointerEvents = "auto";
	navBar.classList.remove("active");
}

// Scroll to top button
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const moveTopButton = document.querySelector(".move-top");
  if (scrollHeight > 30) {
    moveTopButton.style.opacity = 1;
    moveTopButton.style.top = "85vh";
    moveTopButton.style.right = "30px";
  } else {
    moveTopButton.style.opacity = 0;
    moveTopButton.style.top = "50vh";
    moveTopButton.style.right = "20vw";
  }
});

