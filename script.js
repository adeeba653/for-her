const readme = document.querySelector('.clickme');
const letter = document.querySelector('.wrapper')
const container = document.querySelector('.container');
readme.addEventListener('click', () => {
    letter.classList.add("hide")
    const gallery = document.querySelector('#gallery');
    gallery.classList.remove('gallery-hidden');
    gallery.classList.add('gallery')
});




const row = document.querySelector('.row')
const full_letter = document.querySelector(".full")
const gotogallery = document.querySelector('.gotogallery')
gotogallery.addEventListener('click', ()=>{
    row.classList.add('show')
    full_letter.classList.add("hide")
    const text = document.querySelector(".text")
    text.style.display='block'
})
row.addEventListener('click', function(event) {
  // Get the ID from the event target
  if(!event.target.id) return;
 
  const clickedId = event.target.id;
  // Do something with the ID
  console.log(clickedId);

  const thumbnails = [...document.querySelectorAll('.thumbnail')];
  const displayThumbnail = thumbnails.filter(t=>t.id===clickedId)[0];
  const displayImg = document.createElement('img');

  console.log(displayThumbnail.id);
  displayImg.classList.add('display-img')
  displayImg.classList.add('current_child')
  displayImg.src = displayThumbnail.src;
  const display = document.querySelector(".display");
  const oldChild = document.querySelector('.current_child');
  display.replaceChild(displayImg, oldChild);

});