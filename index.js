// function for the bar_menu

window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

// function for the mobile_menu

function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

// function for managing the link's attribute

let links = document.querySelectorAll(".new_Window");
links.forEach(function(link){
    link.setAttribute("target", "_blank");
});

// code for changing the title tag value based on the menu click or mouse scrolling

function changeTitle(text){
document.title = text;
}

// contact Form

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// SHARE BUTTOMS

const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");

function init() {
  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI("A useful link: ");

  facebookBtn.setAttribute(
    "href",
    `https://www.facebook.com/sharer.php?u=${postUrl}`
  );
  twitterBtn.setAttribute(
    "href",
    `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
  );

}
init();