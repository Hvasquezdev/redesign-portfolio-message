const loadImage = (id) => {
  let element = document.getElementById(id);
  let imageToLoad;
  if (element.dataset.image) {
    imageToLoad = element.dataset.image;
  } else if (typeof element.currentSrc === 'undefined') {
    imageToLoad = element.src;
  } else {
    imageToLoad = element.currentSrc;
  }
  if (imageToLoad) {
    let img = new Image();
    img.src = imageToLoad;
    img.onload = () => element.classList.add('is-loaded');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadImage('wallpaper');

  setTimeout(() => { // add pulse class on the arrow-down icon
    document.getElementById('aDown').className += ' pulse-down';
  }, 2000);

  const arrowButton = document.getElementById('aDown');
  arrowButton.addEventListener('click', () => window.scrollTo({ // add event on the arrow-down icon that move the page down with smooth effect
    top: 400,
    behavior: 'smooth',
  }));
});