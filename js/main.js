const hamburger = document.querySelector('.hamburger_button');
const menu = document.querySelector('.mobile_menu');
const closeBtn = document.querySelector('.close_button');

hamburger.addEventListener('click', () => {
  menu.classList.add('mobile_menu--on');
})

closeBtn.addEventListener('click', () => {
  menu.classList.remove('mobile_menu--on');
})


const barcelona__btn = document.querySelector('.barcelona__btn');
const mobile_quetion = document.querySelector('.mobile_quetion');
const curtain = document.querySelector('.curtain');
const main = document.querySelector('.main');

barcelona__btn.addEventListener('click', () => {
  mobile_quetion.classList.add('mobile_quetion--on');
  curtain.classList.add('curtain--on');
})

curtain.addEventListener('click', () => {
  mobile_quetion.classList.remove('mobile_quetion--on');
  curtain.classList.remove('curtain--on');
})