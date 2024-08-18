document.addEventListener('DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('expanded');
        });
    });
});
const primal_container = document.getElementById('primal_container')
const blur_overlay = document.getElementById('blur_overlay')

const jobItems = document.querySelectorAll('.grid_item');
const bigItems = document.querySelectorAll('.big_item_on');


jobItems.forEach(job => {
    job.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the event from bubbling up to the document
        const bigItem = document.querySelector(`#${job.id}_big`);
        bigItem.classList.remove('big_item_off'); // Ensure the big item is shown
        blur_overlay.style.display='block'
    });
});

const closeButtons = document.querySelectorAll('.close_bt');
closeButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.target.closest('.big_item_on').classList.toggle('big_item_off')
        blur_overlay.style.display='none'
    });
});

document.addEventListener('click', function(event) {
    bigItems.forEach(bigItem => {
        if (!bigItem.classList.contains('big_item_off') && !bigItem.contains(event.target)) {
            bigItem.classList.add('big_item_off')
            blur_overlay.style.display='none'
        }
    });
});




import { data_movie } from "./data.js"
import { data_tvshow } from "./data.js"
import  { data_book } from "./data.js"
import { data_videogame } from "./data.js"


console.log(data_movie)

const movieContainer = document.getElementById('movie_container')
const tvshowContainer = document.getElementById('tvshow_container')
const bookContainer = document.getElementById('book_container')
const videoContainer = document.getElementById('video_container')

data_movie.forEach(function(movie) {
  movieContainer.innerHTML += `
    <div class="item_note">
      <img src="${movie.img}" alt="${movie.title}">
      <h3>${movie.title}</h3>
    </div>`
})

data_tvshow.forEach(function(movie) {
  tvshowContainer.innerHTML += `
    <div class="item_note">
      <img src="${movie.img}" alt="${movie.title}">
      <h3>${movie.title}</h3>
    </div>`
})

data_book.forEach(function(movie) {
    bookContainer.innerHTML += `
    <div class="item_note">
      <img src="${movie.img}" alt="${movie.title}">
      <h3>${movie.title}</h3>
    </div>`
})

data_videogame.forEach(function(movie) {
  videoContainer.innerHTML += `
    <div class="item_note">
      <img src="${movie.img}" alt="${movie.title}">
      <h3>${movie.title}</h3>
    </div>`
})

