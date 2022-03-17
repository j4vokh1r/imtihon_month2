const hamburger = document.querySelector('.hamburger_button');
const menu = document.querySelector('.mobile_menu');
const closeBtn = document.querySelector('.close_button');

hamburger.addEventListener('click', () => {
  menu.classList.add('mobile_menu--on');
})

closeBtn.addEventListener('click', () => {
  menu.classList.remove('mobile_menu--on');
})