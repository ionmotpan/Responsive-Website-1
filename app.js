// ******* Select Element *********
const spinerContainer = document.querySelector('.spinner-container');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const sidebar = document.querySelector('.sidebar');
const links = document.querySelectorAll('.menu-link');
const time = document.getElementById('time');
const scrollBtn = document.querySelector('.scroll-btn');
// *********** Events *********
window.addEventListener('load', () => {
  spinerContainer.classList.add('hide-spinner');
  time.innerText = new Date().getFullYear();
  hiddenSidebar();
});
hamburgerMenu.addEventListener('click', () => {
  sidebar.classList.toggle('change-sidebar');
  hamburgerMenu.classList.toggle('change');
});
window.addEventListener('scroll', displayScroll);

// ***** function *******
function displayScroll() {
  let position = window.pageYOffset;
  if(position > 600) {
    scrollBtn.classList.add('show-scroll-btn');
  }else {
     scrollBtn.classList.remove('show-scroll-btn');
  }
}
function hiddenSidebar() {
  links.forEach(link => {
  link.addEventListener('click', () => {
    console.log("hello");
    if(hamburgerMenu.classList.contains('change')) {
    hamburgerMenu.classList.remove('change');
    sidebar.classList.remove('change-sidebar');
  }
  })
});
}